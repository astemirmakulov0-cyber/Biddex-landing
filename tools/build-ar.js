// Builds /ar/index.html from /index.html + tools/ar-texts.js, and the review sheet tools/landing-ar-texts.md.
// Run from the repo root:  node tools/build-ar.js
// The English page stays the single source of layout and CSS; only the texts in ar-texts.js, the language
// attributes, the metadata and a few right-to-left CSS rules differ. No dependencies, no build step for the site.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const texts = require('./ar-texts.js');

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8').replace(/\r\n/g, '\n');
const problems = [];

// 1. texts, longest English string first so a short one never cuts into a longer one
for (const t of [...texts].sort((a, b) => b.en.length - a.en.length)) {
  if (!html.includes(t.en)) { problems.push('English text not found in index.html: ' + t.en.slice(0, 70)); continue; }
  html = html.split(t.en).join(t.ar);
}

// 2. structure and metadata
const swap = (a, b) => { if (!html.includes(a)) problems.push('not found: ' + a.slice(0, 70)); html = html.split(a).join(b); };
swap('<html lang="en">', '<html lang="ar" dir="rtl">');
swap('<link rel="canonical" href="https://biddex.online/">', '<link rel="canonical" href="https://biddex.online/ar/">');
swap('<meta property="og:url" content="https://biddex.online/">', '<meta property="og:url" content="https://biddex.online/ar/">');
swap('<meta property="og:locale" content="en_US">', '<meta property="og:locale" content="ar_AR">');
swap('<meta property="og:locale:alternate" content="ar_AR">', '<meta property="og:locale:alternate" content="en_US">');
swap('<a href="/" hreflang="en" lang="en" aria-current="page">EN</a><a href="/ar/" hreflang="ar" lang="ar">ع</a>', '<a href="/" hreflang="en" lang="en">EN</a><a href="/ar/" hreflang="ar" lang="ar" aria-current="page">ع</a>');
swap('aria-label="Language"', 'aria-label="اللغة"');
swap('?lang=en#', '?lang=ar#');
// the page lives one level down: relative asset paths become absolute
swap('href="icons/', 'href="/icons/');
// phone numbers stay left-to-right inside right-to-left text
swap('+973 3332 7347', '<span dir="ltr">+973 3332 7347</span>');

// 3. right-to-left CSS
const rtlCss = `
  /* ---------- right-to-left (generated page: /ar/) ---------- */
  html[dir=rtl] h1, html[dir=rtl] h2, html[dir=rtl] h3, html[dir=rtl] .brand-word { letter-spacing:0; }
  html[dir=rtl] .eyebrow, html[dir=rtl] .brand-tag, html[dir=rtl] .cat-status, html[dir=rtl] .role-tag, html[dir=rtl] .flow-num,
  html[dir=rtl] .mock-title, html[dir=rtl] .mock-field label, html[dir=rtl] .mock-status, html[dir=rtl] .mock-tag, html[dir=rtl] .mock-row.head { letter-spacing:0; text-transform:none; }
  html[dir=rtl] .hero h1 { max-width:none; line-height:1.25; }
  html[dir=rtl] h2, html[dir=rtl] h3 { line-height:1.35; }
  html[dir=rtl] .flow-step { border-left:0; border-right:1px solid var(--bd); }
  html[dir=rtl] .flow-step:first-child { border-right:none; }
  html[dir=rtl] .mock-title { margin-left:0; margin-right:4px; }
  html[dir=rtl] .mock-field label i { margin-left:0; margin-right:6px; }
  html[dir=rtl] .wa-fab { right:auto; left:18px; }
  /* Arabic button labels are wider: on phones up to 370px the header buttons get tighter so the wordmark stays */
  @media (max-width:370px){ html[dir=rtl] .nav .btn { padding:9px 7px; font-size:12px; } html[dir=rtl] .nav-right { gap:5px; } }
  html[dir=rtl] .mock-field .val, html[dir=rtl] .mock-row .price { font-variant-numeric:tabular-nums; }
`;
swap('</style>', rtlCss + '</style>');

// 4. leftover Latin words in visible text (everything except the allowed names) -> report
const visible = html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<head>[\s\S]*?<\/head>/, '').replace(/<[^>]+>/g, ' ');
const allowed = new Set(['Biddex', 'RFQ', 'LPO', 'CR', 'WhatsApp', 'EN', 'BHD', 'LPO-', 'middot']);
const left = [...new Set((visible.match(/[A-Za-z][A-Za-z-]{2,}/g) || []).filter((w) => !allowed.has(w)))];
if (left.length) problems.push('Latin words left in visible text: ' + left.join(', '));

fs.mkdirSync(path.join(root, 'ar'), { recursive: true });
fs.writeFileSync(path.join(root, 'ar', 'index.html'), html);

// 5. review sheet
const esc = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/\|/g, '\\|').replace(/\s+/g, ' ').trim();
let md = `# Biddex landing — Arabic texts for review\n\n` +
  `Generated from \`tools/ar-texts.js\` (edit the Arabic there, then run \`node tools/build-ar.js\`). The page is \`/ar/\` (right-to-left, no JavaScript).\n\n` +
  `## Please check first\n\n` +
  `- Rows whose *Source* says **new** were written for the landing and are not in the app: check these first. Rows with an app key reuse the app's Arabic word for word (or nearly), so the landing and the app say the same thing.\n` +
  `- **Brand name:** always written in Latin, "Biddex", also inside Arabic text — the same in the app, the e-mails and this page.\n` +
  `- **Terms:** طلب التسعير (RFQ), عرض / العروض (bid, quote), ترسية / يُرسي (award), أمر شراء (LPO), طلبية (order), فاتورة (invoice), مشترٍ / مورّد (buyer / supplier), التوثيق (verification), المطاعم والمقاهي (Restaurants & Cafés) — see docs/PROJECT_CONTEXT.md §6.2.\n` +
  `- **Numbers:** Latin digits, as in the app. Currency د.ب. Day counts use the correct number forms (يوم واحد، يومان، 3 أيام، 15 يومًا).\n` +
  `- **Not translated on purpose:** the ring text around the check mark in the first screen ("VERIFIED BY BIDDEX • CR / TRADE LICENSE CHECKED", it is a graphic on a circular path where Arabic letters would not connect), the phone number, and the Terms / Privacy pages (English only; the footer links say "(بالإنجليزية)").\n` +
  `- **Switch in the header:** "EN | ع" — two ordinary links.\n\n` +
  `## Texts\n\n| # | English | العربية | Source |\n|---|---|---|---|\n`;
texts.forEach((t, i) => { md += `| ${i + 1} | ${esc(t.en)} | ${esc(t.ar)} | ${esc(t.src)} |\n`; });
fs.writeFileSync(path.join(__dirname, 'landing-ar-texts.md'), md);

console.log(`ar/index.html written (${texts.length} texts).`);
if (problems.length) { console.error('PROBLEMS:\n- ' + problems.join('\n- ')); process.exit(1); }
