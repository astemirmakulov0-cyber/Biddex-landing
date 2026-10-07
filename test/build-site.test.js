// Run: node test/build-site.test.js   (no dependencies)
// The folder that GitHub Pages publishes (tools/build-site.js): only the files of the site, CNAME included, nothing of the
// sources of the generated pages (tools/legal-content.js, tools/build-legal.js ...), and every local or biddex.online link of
// the pages (icons, og:image, canonical, hreflang, links between the pages) leads to a file that is published.
const fs = require('fs');
const os = require('os');
const path = require('path');
const site = require('../tools/build-site.js');
let pass = 0, fail = 0;
const check = (name, ok, extra) => { ok ? pass++ : fail++; console.log((ok ? 'PASS ' : 'FAIL ') + name + (extra ? '  ' + extra : '')); };

const root = path.join(__dirname, '..');
const out = fs.mkdtempSync(path.join(os.tmpdir(), 'biddex-landing-site-'));
let files = [];
try { files = site.build(out); check('the site builds', true, files.length + ' files'); } catch (e) {
  check('the site builds', false, e.message);
  console.log(`\n${pass} passed, ${fail} failed`); // nothing else can be checked without the artifact
  process.exit(1);
}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)).map((f) => e.name + '/' + f) : [e.name]));
const built = walk(out).sort();

check('the artifact is exactly the list of the site files', JSON.stringify(built) === JSON.stringify(files.slice().sort()));
check('CNAME is in the artifact, equals the one of the repository and is biddex.online', fs.existsSync(path.join(out, 'CNAME')) && fs.readFileSync(path.join(out, 'CNAME'), 'utf8') === fs.readFileSync(path.join(root, 'CNAME'), 'utf8') && fs.readFileSync(path.join(out, 'CNAME'), 'utf8').trim() === 'biddex.online');
const leaked = built.filter((f) => /^(tools|test|\.github|node_modules|_site)\//.test(f) || /(^|\/)(README|\.git|\.env|legal-content|build-legal|build-ar|ar-texts|landing-ar-texts|legal-style)/i.test(f) || /\.(js|css|svg|md|log|pem|key|env)$/.test(f));
check('no service files in the artifact (tools/, test/, .github/, legal-content.js, build-*.js, icon sources, secrets)', leaked.length === 0, leaked.join(' '));
check('every page, the share image and the icons are there', ['index.html', 'privacy.html', 'terms.html', 'ar/index.html', 'ar/privacy.html', 'ar/terms.html', 'og-image.png', 'icons/icon-192.png', 'icons/apple-touch-icon.png'].every((f) => built.includes(f)));

// links, checked against the built folder itself
const miss = site.missingRefs(built, (f) => fs.readFileSync(path.join(out, f), 'utf8'));
check('every local and biddex.online link of every page leads to a published file', miss.length === 0, miss.join('; '));
const refs = new Set(); for (const f of built.filter((x) => x.endsWith('.html'))) site.localRefs(fs.readFileSync(path.join(out, f), 'utf8')).forEach((r) => refs.add(r));
check('the link check sees the share image, the icons and the pages (it is not checking nothing)', ['/og-image.png', '/icons/icon-192.png', '/icons/apple-touch-icon.png', '/privacy.html', '/terms.html', '/ar/', '/ar/privacy.html', '/ar/terms.html'].every((r) => refs.has(r) || refs.has(r.slice(1))), [...refs].join(' '));
check('the pages load no local script, stylesheet or manifest (only Google Fonts from outside), so nothing else has to be published', built.filter((f) => f.endsWith('.html')).every((f) => {
  const tags = fs.readFileSync(path.join(out, f), 'utf8').match(/<script\b[^>]*\bsrc=[^>]*>|<link\b[^>]*rel="(?:stylesheet|manifest)"[^>]*>/gi) || [];
  return tags.every((t) => /(?:src|href)="https:\/\/fonts\.googleapis\.com\//.test(t));
}));

// the checks themselves must be able to fail
check('a link to a missing file is detected', site.missingRefs(['a.html'], () => '<img src="nope.png?v=1">').length === 1);
check('a root-absolute link is resolved from the site root', site.missingRefs(['ar/a.html', 'icons/x.png'], () => '<link href="/icons/x.png?v=2">').length === 0);
check('an absolute biddex.online address is resolved to a file, "/ar/" to ar/index.html', site.missingRefs(['a.html', 'ar/index.html'], () => '<link rel="alternate" href="https://biddex.online/ar/">').length === 0);
check('a missing share image behind an absolute address is detected', site.missingRefs(['a.html'], () => '<meta property="og:image" content="https://biddex.online/og-image.png?v=2">').length === 1);
check('other hosts and plain texts are not mistaken for files', site.localRefs('<a href="https://app.biddex.online/?lang=en#/login">x</a><meta name="x" content="summer"><a href="mailto:a@b.c">m</a>').length === 0);

fs.rmSync(out, { recursive: true, force: true });
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
