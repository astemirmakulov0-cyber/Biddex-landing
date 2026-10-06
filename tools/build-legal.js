// Generates the Terms of Service and the Privacy Policy pages, English and Arabic, from tools/legal-content.js:
//   Biddex-landing:  terms.html  privacy.html  ar/terms.html  ar/privacy.html
//   Biddex-frontend: the same four files (written when the repository sits next to this one: ../Biddex-frontend)
// Run from the repo root:  node tools/build-legal.js          (writes the files)
//                          node tools/build-legal.js --check  (writes nothing; exits 1 if a file is out of date or a text rule fails)
// No dependencies. The date on the pages is EFFECTIVE_DATE in legal-content.js: set it to the publication day first.
const fs = require('fs');
const path = require('path');
const content = require('./legal-content.js');

const css = fs.readFileSync(path.join(__dirname, 'legal-style.css'), 'utf8').replace(/\r\n/g, '\n').replace(/\s+$/, '');
const CHECK = process.argv.includes('--check');
const problems = [];

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
function dateText(lang) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(content.EFFECTIVE_DATE);
  if (!m) { problems.push('EFFECTIVE_DATE must be YYYY-MM-DD'); return ''; }
  return `${Number(m[3])} ${MONTHS[lang][Number(m[2]) - 1]} ${m[1]}`; // Latin digits, as in the app
}

const rtlCss = `
  /* ---------- right-to-left (Arabic pages) ---------- */
  html[dir=rtl] body { font-family: 'Readex Pro', system-ui, sans-serif; }
  html[dir=rtl] h1, html[dir=rtl] h2 { letter-spacing: 0; }
  html[dir=rtl] ul { padding-left: 0; padding-right: 22px; }
  html[dir=rtl] th, html[dir=rtl] td { text-align: right; }
  html[dir=rtl] .top .langs { margin-left: 0; margin-right: auto; }`;
const navCss = `
  /* ---------- top bar and footer links ---------- */
  .top { display: flex; align-items: baseline; gap: 16px; margin: 0 0 8px; }
  .top .kicker { margin: 0; text-decoration: none; }
  .top .langs { margin-left: auto; font-family: 'Readex Pro', system-ui, sans-serif; font-size: 13px; display: flex; gap: 12px; }
  .top .langs a[aria-current] { font-weight: 700; text-decoration: none; color: var(--ink); }
  .other { margin-top: 12px; font-family: 'Readex Pro', system-ui, sans-serif; font-size: 14px; }
  .nowrap { white-space: nowrap; }
  td, th { overflow-wrap: break-word; }
  .tablewrap { overflow-x: auto; margin: 0 0 16px; }
  .tablewrap table { margin: 0; }
  @media (max-width: 640px) { .tablewrap table { min-width: 480px; font-size: 13px; } th, td { padding: 8px 6px; } }`;

const TARGETS = [
  { name: 'Biddex-landing', dir: path.join(__dirname, '..'), selfBase: 'https://biddex.online' },
  { name: 'Biddex-frontend', dir: path.join(__dirname, '..', '..', 'Biddex-frontend'), selfBase: 'https://app.biddex.online' },
];
const CANONICAL_BASE = 'https://biddex.online'; // the app's copies point at the landing's pages

const fill = (text, lang) => text
  .replace(/\{\{email\}\}/g, `<a href="mailto:${content.contact.email}">${content.contact.email}</a>`)
  .replace(/\{\{whatsapp\}\}/g, `<a class="nowrap" href="${content.contact.whatsappUrl}"${lang === 'ar' ? ' dir="ltr"' : ''}>${content.contact.whatsapp}</a>`)
  .replace(/\{\{settings\}\}/g, `<a href="https://app.biddex.online/?lang=${lang}#/settings">${lang === 'ar' ? 'الإعدادات' : 'Settings'}</a>`);

function renderBlock(b, lang) {
  const [kind, a, c] = b;
  if (kind === 'h2') return `  <h2>${fill(a, lang)}</h2>`;
  if (kind === 'p') return `  <p>${fill(a, lang)}</p>`;
  if (kind === 'ul') return `  <ul>\n${a.map((x) => `    <li>${fill(x, lang)}</li>`).join('\n')}\n  </ul>`;
  if (kind === 'table') return `  <div class="tablewrap"><table>\n    <tr>${a.map((h) => `<th>${fill(h, lang)}</th>`).join('')}</tr>\n${c.map((r) => `    <tr>${r.map((x) => `<td>${fill(x, lang)}</td>`).join('')}</tr>`).join('\n')}\n  </table></div>`;
  problems.push('unknown block kind: ' + kind);
  return '';
}

function page(docKey, lang, target) {
  const doc = content[docKey][lang];
  const other = docKey === 'privacy' ? 'terms' : 'privacy';
  const file = (k, l) => (l === 'ar' ? `/ar/${k}.html` : `/${k}.html`);
  const url = (base, k, l) => base + file(k, l);
  const otherDoc = content[other][lang];
  const titleTag = `${doc.title} — Biddex`;
  const html = `<!DOCTYPE html>
<html lang="${lang}"${lang === 'ar' ? ' dir="rtl"' : ''}>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${titleTag}</title>
<link rel="canonical" href="${url(CANONICAL_BASE, docKey, lang)}">
<link rel="alternate" hreflang="en" href="${url(target.selfBase, docKey, 'en')}">
<link rel="alternate" hreflang="ar" href="${url(target.selfBase, docKey, 'ar')}">
<link rel="alternate" hreflang="x-default" href="${url(target.selfBase, docKey, 'en')}">
<meta name="theme-color" content="#FAF7F2" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#141311" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png?v=2">
<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png?v=2">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Readex+Pro:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
${css}
${navCss}${lang === 'ar' ? rtlCss : ''}
</style>
</head>
<body>
<div class="wrap">
  <div class="top">
    <a class="kicker" href="/">Biddex</a>
    <nav class="langs" aria-label="${lang === 'ar' ? 'اللغة' : 'Language'}"><a href="${file(docKey, 'en')}" hreflang="en" lang="en"${lang === 'en' ? ' aria-current="page"' : ''}>EN</a><a href="${file(docKey, 'ar')}" hreflang="ar" lang="ar"${lang === 'ar' ? ' aria-current="page"' : ''}>ع</a></nav>
  </div>
  <h1>${doc.title}</h1>
  <p class="updated">${doc.updated} ${dateText(lang)}</p>

${doc.blocks.map((b) => renderBlock(b, lang)).join('\n\n')}

  <p class="contact">${fill(doc.contact, lang)}</p>
  <p class="other"><a href="${file(other, lang)}">${otherDoc.title}</a></p>
</div>
</body>
</html>
`;
  return html;
}

// text rules: nothing unfinished may be published, and the two languages must have the same shape
function validate() {
  for (const k of ['privacy', 'terms']) {
    const en = content[k].en, ar = content[k].ar;
    const shape = (d) => d.blocks.map((b) => (b[0] === 'ul' ? 'ul' + b[1].length : b[0] === 'table' ? 'table' + b[2].length + 'x' + b[1].length : b[0])).join(',');
    if (shape(en) !== shape(ar)) problems.push(`${k}: English and Arabic differ in structure\n  en: ${shape(en)}\n  ar: ${shape(ar)}`);
    const all = JSON.stringify([en, ar]);
    for (const bad of [/\[date\]/i, /\.example/i, /TODO/, /FIXME/, /lorem/i, /XXX/]) if (bad.test(all)) problems.push(`${k}: unfinished text matches ${bad}`);
    const opens = (all.match(/\{\{/g) || []).length;
    const known = (all.match(/\{\{(email|whatsapp|settings)\}\}/g) || []).length;
    if (opens !== known) problems.push(`${k}: unknown {{placeholder}}`);
    if (!/support@biddex\.online/.test(JSON.stringify(content.contact)) || !en.contact.includes('{{email}}') || !ar.contact.includes('{{email}}')) problems.push(`${k}: contact line missing`);
    if (!/[؀-ۿ]/.test(ar.title)) problems.push(`${k}: Arabic title is not Arabic`);
  }
  // what the privacy policy must say (processors, regions, retention, the real buttons) — see PROJECT_CONTEXT
  const pe = JSON.stringify(content.privacy.en), pa = JSON.stringify(content.privacy.ar);
  for (const x of ['Neon', 'Railway', 'Resend', 'Sentry', 'Ohio', 'Virginia', 'California', 'Tokyo', 'European Union', '30 more days', 'Download my data', 'Delete account', 'English version prevails']) if (!pe.includes(x)) problems.push('privacy (en) must mention: ' + x);
  for (const x of ['Neon', 'Railway', 'Resend', 'Sentry', 'أوهايو', 'فرجينيا', 'كاليفورنيا', 'طوكيو', 'الاتحاد الأوروبي', '30 يومًا', 'تنزيل بياناتي', 'حذف الحساب', 'النسخة الإنجليزية']) if (!pa.includes(x)) problems.push('privacy (ar) must mention: ' + x);
  {
  }
}

validate();
let stale = 0, written = 0;
for (const target of TARGETS) {
  if (!fs.existsSync(target.dir)) { console.log(`skip ${target.name}: ${target.dir} not found`); continue; }
  for (const docKey of ['privacy', 'terms']) {
    for (const lang of ['en', 'ar']) {
      const out = path.join(target.dir, lang === 'ar' ? 'ar' : '', `${docKey}.html`);
      const html = page(docKey, lang, target);
      if (/\{\{|\[date\]|biddex\.example/.test(html)) problems.push(`${target.name}/${path.relative(target.dir, out)}: unfinished text in the page`);
      const current = fs.existsSync(out) ? fs.readFileSync(out, 'utf8').replace(/\r\n/g, '\n') : null;
      if (CHECK) { if (current !== html) { stale++; console.log(`STALE ${target.name}/${path.relative(target.dir, out)}`); } continue; }
      if (problems.length) continue;
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html);
      written++;
      console.log(`wrote ${target.name}/${path.relative(target.dir, out).replace(/\\/g, '/')}`);
    }
  }
}
if (problems.length) { console.error('\nPROBLEMS:\n- ' + problems.join('\n- ')); process.exit(1); }
if (CHECK && stale) { console.error(`${stale} file(s) out of date: run node tools/build-legal.js`); process.exit(1); }
console.log(CHECK ? 'legal pages are up to date' : `done, ${written} files`);
