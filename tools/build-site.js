// Builds the folder that GitHub Pages publishes (default: _site/): only the files of the site, from an explicit list.
// Run: node tools/build-site.js [outDir]      (no dependencies)
// Everything else in the repository (tools/ with the sources of the generated pages, test/, .github/, the *-source.svg of the
// icons) stays out. The generated pages (privacy, terms, ar/*) are published as they are committed; nothing is generated here.
// A file that is added to the site must be added here too; a missing file or a link to an unpublished file fails the build.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const SITE = 'https://biddex.online';
const FILES = [
  'index.html', 'privacy.html', 'terms.html', 'og-image.png',
  'CNAME', // kept in the artifact; with the Actions source Pages takes the domain from Settings → Pages
];
const DIRS = [ // [directory, extension]
  ['ar', '.html'],
  ['icons', '.png'],
];

function list() {
  const out = FILES.slice();
  for (const [dir, ext] of DIRS) {
    const names = fs.existsSync(path.join(root, dir)) ? fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith(ext)).sort() : [];
    for (const n of names) out.push(dir + '/' + n);
  }
  return out;
}

// Targets of a page that must be published: static src/href/content attributes with a local path or an absolute address on
// this site (canonical, hreflang, og:image, links between the pages). Links built inside scripts and other hosts are skipped.
function localRefs(html) {
  const refs = [];
  for (const m of html.matchAll(/\b(?:src|href|content)="([^"]*)"/g)) {
    let v = m[1];
    if (v.startsWith(SITE + '/') || v === SITE) v = v.slice(SITE.length) || '/';
    else if (/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(v)) continue;
    if (!/^[A-Za-z0-9._\/~%-]+(\?[A-Za-z0-9._=&%-]*)?(#.*)?$/.test(v) || !/(\/|\.[a-z0-9]+)(?:[?#]|$)/i.test(v)) continue; // a path, not a word of text
    const p = v.replace(/[?#].*$/, '');
    if (p === '' || p === './') continue;
    refs.push(p);
  }
  return refs;
}

function missingRefs(files, readFile) {
  const set = new Set(files);
  const missing = [];
  const resolve = (from, ref) => {
    let t = ref.startsWith('/') ? ref.slice(1) : path.posix.normalize(path.posix.join(path.posix.dirname(from), ref));
    if (t === '' || t.endsWith('/')) t += 'index.html';
    return t;
  };
  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    for (const r of localRefs(readFile(f))) { const t = resolve(f, r); if (!set.has(t)) missing.push(`${f} -> ${r}`); }
  }
  return missing;
}

function build(outDir) {
  const files = list();
  const absent = files.filter((f) => !fs.existsSync(path.join(root, f)));
  if (absent.length) throw new Error('missing from the repository: ' + absent.join(', '));
  const missing = missingRefs(files, (f) => fs.readFileSync(path.join(root, f), 'utf8'));
  if (missing.length) throw new Error('links to files that are not published: ' + missing.join('; '));
  fs.rmSync(outDir, { recursive: true, force: true });
  for (const f of files) {
    fs.mkdirSync(path.dirname(path.join(outDir, f)), { recursive: true });
    fs.copyFileSync(path.join(root, f), path.join(outDir, f));
  }
  return files;
}

module.exports = { build, list, localRefs, missingRefs };

if (require.main === module) {
  const out = path.resolve(process.argv[2] || path.join(root, '_site'));
  try {
    const files = build(out);
    console.log(`Built ${files.length} files into ${out}`);
  } catch (e) { console.error('ERROR: ' + e.message); process.exit(1); }
}
