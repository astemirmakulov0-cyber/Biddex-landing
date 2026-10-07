// The texts of the Terms of Service and the Privacy Policy, English and Arabic: the single source for the four
// pages in each of the two repositories (landing: /terms.html /privacy.html /ar/terms.html /ar/privacy.html; the app has
// the same files). Pages are generated: node tools/build-legal.js. Do not edit the generated HTML.
//
// Everything stated here is checked against the code (docs/PROJECT_CONTEXT.md and the backend). When the code changes
// what is collected, kept, deleted or who processes it, change the text here in the same commit set.
//
// Blocks: ['p', text] | ['ul', [text, ...]] | ['table', [headers], [[cells], ...]] | ['h2', text]. Inline HTML (a, strong) is allowed.
// {{email}}, {{whatsapp}} (a link), {{settings}} (link to the app's Settings) are filled in by the builder.

// The day the pages are published (the day this version is pushed). Change it here, run the builder, commit.
const EFFECTIVE_DATE = '2026-10-07';

const privacy = {
  en: {
    title: 'Privacy Policy',
    updated: 'Effective from',
    blocks: [
      ['p', 'This policy explains what personal data Biddex collects, who processes it, where it goes, how long it is kept and how you can access or delete it. It is written in line with Bahrain’s Personal Data Protection Law (PDPL, Law No. 30 of 2018). It describes what the service actually does today.'],

      ['h2', '1. Who we are'],
      ['p', 'Biddex is a B2B procurement marketplace for Bahrain. It is operated by <strong>Astemir Makulov</strong>, an individual in the Kingdom of Bahrain (no company has been registered yet). In this policy “Biddex”, “we” and “us” mean the operator. Contact for anything in this policy: {{email}} or WhatsApp {{whatsapp}}.'],
      ['p', 'This policy applies to people who register a company account, act as a contact of a registered company, receive an invitation link from us, or visit our websites (buyers, suppliers and their staff).'],

      ['h2', '2. Data we collect'],
      ['table', ['Category', 'What it includes'], [
        ['Account', 'E-mail address; password (stored only as a hash, never readable); role (buyer or supplier); whether the e-mail is verified; when you accepted the Terms and this policy.'],
        ['Company', 'Company name, type, commercial registration (CR) number, country, address, phone; verification status and the notes of our review; your e-mail notification choices.'],
        ['Verification documents', 'The files you upload to prove the company (for example a trade licence or CR certificate). Only the Biddex team can open them.'],
        ['Catalog and stock', 'For suppliers: product names, prices, units and photos. For buyers: the buyer’s own stock list (never shown to anyone else).'],
        ['Deals', 'Requests for quotation (title, description, quantity, budget, optional photo), quotes (prices, notes, attachments), purchase orders, orders, delivery details, documents added to an order, invoices, payments you report (amount, method, reference), chat messages on an order, reviews of suppliers, and bid-credit (wallet) transactions.'],
        ['Notifications', 'The in-app notifications and e-mails we send you about your account and your deals.'],
        ['Phone and WhatsApp consent', 'For suppliers we invite: the phone number recorded by the Biddex team and a record of the consent (when, how, and any withdrawal). We use it only to send you invitation links.'],
        ['Technical data', 'Your IP address and the details of each request are handled by our servers to run and protect the service (for example to limit repeated requests). Our request log keeps the method, the address requested (secret tokens masked), the result and the time. We do not record login times, use analytics or advertising tools, or set cookies; your browser’s local storage keeps your session, theme and language.'],
      ]],

      ['h2', '3. Why we use your data, and on what basis'],
      ['ul', [
        'to create and run your account and company profile;',
        'to run the request, quote, purchase order, order, delivery, invoice and payment workflow between companies;',
        'to verify companies and to prevent fraud and abuse;',
        'to send you notifications about your account and deals;',
        'to contact a supplier on WhatsApp, only after its consent;',
        'to keep the platform secure and working;',
        'to meet legal obligations in Bahrain.',
      ]],
      ['p', 'The basis is your consent, given when you register and recorded with the date; the need to provide the service you asked for; and our legitimate interest in operating and securing the platform. We do not sell personal data and we do not use it for advertising.'],

      ['h2', '4. Who sees your data on the platform'],
      ['ul', [
        'A buyer’s identity is hidden from suppliers until the buyer awards that supplier’s quote. Suppliers never see each other’s quotes.',
        'A buyer sees the company name, price and terms of every supplier that quotes on its request. After an award the two companies see each other’s company name and the data of their order (delivery, documents, chat, invoice, payments).',
        'A supplier’s catalog is visible to buyers once the supplier is verified.',
        'Buyers may see a supplier’s quality figures (number of orders, share without claims, average stars, on-time share) once enough orders are counted. The comment of a review is visible only to the reviewed supplier, to its author and to the Biddex team.',
        'The Biddex team can see accounts, verification documents, deals and order chats, in order to verify companies, support users and resolve disputes.',
      ]],

      ['h2', '5. Service providers that process data for us'],
      ['p', 'We use the following providers. They process data on our behalf under their own standard terms (see section 6).'],
      ['table', ['Provider', 'What it does for us', 'Data involved', 'Where'], [
        ['Neon', 'Database', 'All account, company and deal data, notification texts', 'USA — AWS US East 2 (Ohio)'],
        ['Railway', 'Application server; private file storage; scheduled backups of the files and of the database', 'Everything the server handles; uploaded files (verification documents, order documents, quote attachments, product and request photos); a daily copy of the Biddex database; request logs', 'USA — servers and main file storage: US East (Virginia); backup copies of the files and of the database: US West (California)'],
        ['Resend', 'Sending e-mail', 'Recipient e-mail address and the text of the e-mail (for example request titles, amounts, the start of a chat message, verification and password-reset links)', 'Japan — Tokyo (ap-northeast-1)'],
        ['Sentry', 'Error monitoring', 'Technical details of errors; a report can include parts of the request that failed (for example a company name or a text you entered)', 'European Union'],
        ['GitHub Pages', 'Hosting the websites biddex.online and app.biddex.online', 'Your IP address and browser details when you open a page', 'Global network of GitHub'],
        ['Google Fonts', 'Fonts used by our pages', 'Your IP address and browser details when a page loads', 'Google’s global network'],
        ['jsDelivr', 'Delivers the interface library of the app (and, only when you import an Excel catalog, a spreadsheet library)', 'Your IP address and browser details when the app loads', 'Global content-delivery network'],
        ['WhatsApp', 'Only when the Biddex team sends an invitation link to a supplier that agreed to it: the team opens a WhatsApp chat by hand', 'The supplier’s phone number and the message', 'Under WhatsApp’s own terms'],
      ]],

      ['h2', '6. Transfers outside Bahrain'],
      ['p', 'None of these providers stores your data in Bahrain. Your data is processed in the United States (Neon, Railway and the file backup), in Japan (Resend) and in the European Union (Sentry); the website, font and library providers serve pages from their global networks. We cannot offer the service without these transfers.'],
      ['p', 'By registering and accepting this policy you consent to these transfers. We have not signed separate data-processing agreements with these providers: they process data under their own standard terms and security commitments. You can ask us about this at any time and you can withdraw your consent by deleting your account (section 8); we will then no longer process your data except as section 9 describes.'],

      ['h2', '7. How we protect data'],
      ['ul', [
        'passwords are stored as hashes only, and an account is protected against repeated login attempts;',
        'every request is checked for the signed-in company: you can open only your own data and the data of your own deals;',
        'verification documents and order files are private and are opened only through short-lived links, after the system has checked that you are allowed to see them;',
        'connections to our websites and servers are encrypted (HTTPS).',
      ]],
      ['p', 'No system is completely secure.'],

      ['h2', '8. Your rights and how to use them'],
      ['p', 'Under the PDPL you may have rights over your personal data. In the app (sign in, then open {{settings}}) you can do the following yourself:'],
      ['ul', [
        '<strong>Access.</strong> Settings → Privacy &amp; data → “Download my data” gives you a file with your profile, company, uploaded-file list (names, types, dates), requests, quotes, purchase orders, orders, invoices and payments, notifications, stock, phone and consent records, invitation links and reviews.',
        '<strong>Correction.</strong> In Settings you can edit your company name, CR number, country, address and phone (changing the name or CR number sends a verified company back to review). To correct anything else, including your e-mail address, contact us.',
        '<strong>Deletion.</strong> Settings → Privacy &amp; data → “Delete account” (you confirm with your password and company name). It erases your personal data as described in section 9. It is refused while the company has open orders, a dispute, an unpaid invoice or a payment waiting for confirmation, and any remaining bid credits are lost. A purchase order that the supplier has not accepted yet is cancelled automatically and the other company is told.',
        '<strong>Deactivation.</strong> Ask us ({{email}}). A deactivated account cannot sign in; this alone does not delete data. It is normally refused while there are open orders.',
        '<strong>E-mail choices.</strong> In Settings you can switch off e-mails about new requests and e-mails about other notifications. E-mails needed for your account (verification, password reset, account notices) are always sent.',
        '<strong>WhatsApp consent.</strong> A supplier can withdraw it on the invitation page or by telling us.',
        '<strong>Anything else</strong>, including objecting to a use of your data or asking a question about it: contact us. We will reply as soon as we can.',
      ]],

      ['h2', '9. How long we keep data'],
      ['ul', [
        '<strong>Active account:</strong> as long as the account exists.',
        '<strong>After you delete your account:</strong> we erase your name, your e-mail address (replaced by a technical address), phone, address, our verification notes, the verification documents and catalog photos (deleted from file storage), your notifications, your stock list, your phone and consent records, the text of reviews you wrote or answered, and your invitation links stop working.',
        '<strong>What stays after deletion:</strong> the company name, CR number and country, and the records shared with the other company — purchase orders, orders, delivery details, invoices, payments, chat messages, documents added to an order, and review ratings (without your comments). They stay for as long as the other company needs them and the law requires; there is no automatic clean-up yet.',
        '<strong>Deactivated accounts</strong> keep their data until deletion is requested.',
        '<strong>Backups:</strong> a second copy of uploaded files and a daily copy of the Biddex database are kept in separate private storage (US West, California). A file that changes or is deleted stays in the backup for 30 more days; each database copy is kept for 30 days. We do not encrypt these copies separately. Data you erase can therefore remain in these copies for up to 30 days.',
        '<strong>The providers’ own database backups and logs:</strong> kept according to the settings of the providers (Neon, Railway, Sentry).',
        '<strong>Log of administrator actions:</strong> when a Biddex administrator acts on an account or an order (for example verifies or suspends a company, adds credits, resolves a dispute, opens a verification document), we record who did it, what, to which company and when. The log contains no passwords, access links or phone numbers. It is kept for as long as necessary for security, resolving disputes and meeting legal requirements, and it is not changed or deleted when a company deletes its account.',
        '<strong>Short-lived data:</strong> an e-mail verification link works for 24 hours, a password-reset link for one hour, an invitation link for at most 14 days.',
      ]],

      ['h2', '10. Changes to this policy'],
      ['p', 'We may update this policy. The date at the top shows when the current version took effect. If we start to use your data in a materially different way, we will say so here and, where we can, in the app.'],

      ['h2', '11. Language'],
      ['p', 'This policy is published in English and Arabic. If they differ, the English version prevails.'],
    ],
    contact: 'Questions about this policy or your data: {{email}} · WhatsApp {{whatsapp}}',
  },

  ar: {
    title: 'سياسة الخصوصية',
    updated: 'سارية اعتبارًا من',
    blocks: [
      ['p', 'توضّح هذه السياسة ما هي البيانات الشخصية التي يجمعها Biddex، ومن يعالجها، وإلى أين تنتقل، ومدة الاحتفاظ بها، وكيف يمكنك الاطلاع عليها أو حذفها. وهي مكتوبة وفق قانون حماية البيانات الشخصية في مملكة البحرين (القانون رقم 30 لسنة 2018). وتصف ما تفعله الخدمة فعليًا اليوم.'],

      ['h2', '1. من نحن'],
      ['p', 'Biddex سوق للمشتريات بين الشركات في البحرين، يديره <strong>Astemir Makulov</strong>، وهو فرد في مملكة البحرين (لم تُسجَّل شركة بعد). المقصود بـ«Biddex» و«نحن» في هذه السياسة هو المشغّل. للتواصل بشأن أي أمر في هذه السياسة: {{email}} أو واتساب {{whatsapp}}.'],
      ['p', 'تنطبق هذه السياسة على من يسجّل حساب شركة، أو يكون جهة اتصال لشركة مسجّلة، أو يتلقى منا رابط دعوة، أو يزور موقعينا (المشترون والموردون وموظفوهم).'],

      ['h2', '2. البيانات التي نجمعها'],
      ['table', ['الفئة', 'ما تشمله'], [
        ['الحساب', 'البريد الإلكتروني؛ كلمة المرور (تُحفظ على هيئة قيمة مشفّرة فقط ولا يمكن قراءتها)؛ الدور (مشترٍ أو مورّد)؛ هل تم توثيق البريد؛ وقت موافقتك على الشروط وهذه السياسة.'],
        ['الشركة', 'اسم الشركة ونوعها ورقم السجل التجاري (CR) والدولة والعنوان والهاتف؛ حالة التوثيق وملاحظات مراجعتنا؛ خياراتك للإشعارات عبر البريد.'],
        ['مستندات التوثيق', 'الملفات التي ترفعها لإثبات الشركة (مثل الرخصة التجارية أو شهادة السجل التجاري). لا يستطيع فتحها إلا فريق Biddex.'],
        ['الكتالوج والمخزون', 'للموردين: أسماء المنتجات وأسعارها ووحداتها وصورها. للمشترين: قائمة المخزون الخاصة بالمشتري (لا تظهر لأي جهة أخرى).'],
        ['الصفقات', 'طلبات التسعير (العنوان والوصف والكمية والميزانية وصورة اختيارية)، والعروض (الأسعار والملاحظات والمرفقات)، وأوامر الشراء، والطلبيات، وتفاصيل التسليم، والمستندات المضافة إلى الطلبية، والفواتير، والمدفوعات التي تبلّغ عنها (المبلغ والطريقة والمرجع)، ورسائل المحادثة على الطلبية، وتقييمات الموردين، ومعاملات رصيد العروض (المحفظة).'],
        ['الإشعارات', 'الإشعارات داخل التطبيق ورسائل البريد التي نرسلها إليك عن حسابك وصفقاتك.'],
        ['الهاتف وموافقة واتساب', 'للموردين الذين ندعوهم: رقم الهاتف الذي سجّله فريق Biddex وسجلّ الموافقة (متى وكيف وأي سحب لها). نستخدمه فقط لإرسال روابط الدعوة إليك.'],
        ['البيانات التقنية', 'يعالج خادمنا عنوان IP وتفاصيل كل طلب لتشغيل الخدمة وحمايتها (مثل الحدّ من الطلبات المتكررة). يحتفظ سجلّ الطلبات بالأسلوب والعنوان المطلوب (مع إخفاء الرموز السرية) والنتيجة والوقت. لا نسجّل أوقات الدخول، ولا نستخدم أدوات التحليل أو الإعلانات، ولا نضع ملفات تعريف الارتباط (كوكيز)؛ ويحفظ متصفحك في التخزين المحلي جلستك والمظهر واللغة.'],
      ]],

      ['h2', '3. لماذا نستخدم بياناتك وعلى أي أساس'],
      ['ul', [
        'لإنشاء حسابك وملف شركتك وتشغيلهما؛',
        'لتشغيل مسار طلب التسعير والعرض وأمر الشراء والطلبية والتسليم والفاتورة والدفع بين الشركات؛',
        'للتحقق من الشركات ومنع الاحتيال وإساءة الاستخدام؛',
        'لإرسال إشعارات عن حسابك وصفقاتك؛',
        'للتواصل مع مورّد عبر واتساب، وذلك بعد موافقته فقط؛',
        'للحفاظ على أمان المنصة وعملها؛',
        'للوفاء بالالتزامات القانونية في البحرين.',
      ]],
      ['p', 'الأساس هو موافقتك التي تعطيها عند التسجيل وتُسجَّل مع تاريخها؛ وحاجتنا إلى تقديم الخدمة التي طلبتها؛ ومصلحتنا المشروعة في تشغيل المنصة وحمايتها. لا نبيع البيانات الشخصية ولا نستخدمها للإعلان.'],

      ['h2', '4. من يرى بياناتك على المنصة'],
      ['ul', [
        'تبقى هوية المشتري مخفية عن الموردين إلى أن يرسّي المشتري عرض ذلك المورّد. ولا يرى الموردون عروض بعضهم بعضًا.',
        'يرى المشتري اسم الشركة والسعر والشروط لكل مورّد يقدّم عرضًا على طلبه. وبعد الترسية تتبادل الشركتان رؤية اسم الشركة وبيانات الطلبية (التسليم والمستندات والمحادثة والفاتورة والمدفوعات).',
        'يظهر كتالوج المورّد للمشترين بمجرد توثيق المورّد.',
        'قد يرى المشترون مؤشرات جودة المورّد (عدد الطلبيات ونسبة الخالية من المطالبات ومتوسط النجوم ونسبة الالتزام بالموعد) بعد احتساب عدد كافٍ من الطلبيات. أما تعليق التقييم فلا يراه إلا المورّد الذي قُيّم وكاتبه وفريق Biddex.',
        'يستطيع فريق Biddex الاطلاع على الحسابات ومستندات التوثيق والصفقات ومحادثات الطلبيات، وذلك للتحقق من الشركات ودعم المستخدمين وحل النزاعات.',
      ]],

      ['h2', '5. مزوّدو الخدمة الذين يعالجون البيانات لحسابنا'],
      ['p', 'نستعين بالمزوّدين التالين. وهم يعالجون البيانات نيابةً عنا وفق شروطهم المعيارية (انظر القسم 6).'],
      ['table', ['المزوّد', 'ما يقدّمه لنا', 'البيانات المعنية', 'المكان'], [
        ['Neon', 'قاعدة البيانات', 'جميع بيانات الحسابات والشركات والصفقات ونصوص الإشعارات', 'الولايات المتحدة — AWS US East 2 (أوهايو)'],
        ['Railway', 'خادم التطبيق؛ تخزين الملفات الخاص؛ نسخ احتياطي مجدول للملفات ولقاعدة البيانات', 'كل ما يعالجه الخادم؛ الملفات المرفوعة (مستندات التوثيق ومستندات الطلبيات ومرفقات العروض وصور المنتجات والطلبات)؛ نسخة يومية من قاعدة بيانات Biddex؛ سجلات الطلبات', 'الولايات المتحدة — الخوادم والتخزين الرئيسي: US East (فرجينيا)؛ النسخ الاحتياطية للملفات ولقاعدة البيانات: US West (كاليفورنيا)'],
        ['Resend', 'إرسال البريد الإلكتروني', 'عنوان بريد المستلم ونص الرسالة (مثل عناوين الطلبات والمبالغ وبداية رسالة محادثة وروابط التوثيق وإعادة تعيين كلمة المرور)', 'اليابان — طوكيو (ap-northeast-1)'],
        ['Sentry', 'مراقبة الأخطاء', 'تفاصيل تقنية عن الأخطاء؛ وقد يتضمن التقرير أجزاءً من الطلب الذي فشل (مثل اسم شركة أو نص أدخلته)', 'الاتحاد الأوروبي'],
        ['GitHub Pages', 'استضافة الموقعين biddex.online وapp.biddex.online', 'عنوان IP وتفاصيل المتصفح عند فتح صفحة', 'شبكة GitHub العالمية'],
        ['Google Fonts', 'الخطوط التي تستخدمها صفحاتنا', 'عنوان IP وتفاصيل المتصفح عند تحميل صفحة', 'شبكة Google العالمية'],
        ['jsDelivr', 'يوصل مكتبة واجهة التطبيق (ومكتبة جداول البيانات فقط عند استيراد كتالوج من Excel)', 'عنوان IP وتفاصيل المتصفح عند تحميل التطبيق', 'شبكة توصيل محتوى عالمية'],
        ['واتساب', 'فقط حين يرسل فريق Biddex رابط دعوة إلى مورّد وافق على ذلك: يفتح الفريق محادثة واتساب يدويًا', 'رقم هاتف المورّد والرسالة', 'وفق شروط واتساب نفسها'],
      ]],

      ['h2', '6. النقل خارج البحرين'],
      ['p', 'لا يخزّن أي من هؤلاء المزوّدين بياناتك في البحرين. تُعالج بياناتك في الولايات المتحدة (Neon وRailway والنسخة الاحتياطية للملفات) وفي اليابان (Resend) وفي الاتحاد الأوروبي (Sentry)؛ أما مزوّدو الاستضافة والخطوط والمكتبات فيقدّمون الصفحات من شبكاتهم العالمية. لا يمكننا تقديم الخدمة دون هذا النقل.'],
      ['p', 'بتسجيلك وموافقتك على هذه السياسة فإنك توافق على هذا النقل. لم نوقّع اتفاقيات منفصلة لمعالجة البيانات مع هؤلاء المزوّدين: فهم يعالجون البيانات وفق شروطهم المعيارية والتزاماتهم الأمنية. يمكنك أن تسألنا عن ذلك في أي وقت، ويمكنك سحب موافقتك بحذف حسابك (القسم 8)؛ وعندها لن نعالج بياناتك إلا بالقدر الذي يصفه القسم 9.'],

      ['h2', '7. كيف نحمي البيانات'],
      ['ul', [
        'تُحفظ كلمات المرور على هيئة قيم مشفّرة فقط، ويُحمى الحساب من تكرار محاولات الدخول؛',
        'يُتحقق في كل طلب من الشركة المسجّلة دخولها: لا يمكنك فتح إلا بياناتك وبيانات صفقاتك؛',
        'مستندات التوثيق وملفات الطلبيات خاصة، ولا تُفتح إلا عبر روابط قصيرة الأجل بعد أن يتحقق النظام من أن لك حق الاطلاع عليها؛',
        'الاتصال بموقعينا وخوادمنا مشفّر (HTTPS).',
      ]],
      ['p', 'لا يوجد نظام آمن تمامًا.'],

      ['h2', '8. حقوقك وكيف تستخدمها'],
      ['p', 'قد تكون لك حقوق على بياناتك الشخصية بموجب القانون. في التطبيق (سجّل الدخول ثم افتح {{settings}}) يمكنك القيام بما يلي بنفسك:'],
      ['ul', [
        '<strong>الاطلاع.</strong> الإعدادات ← الخصوصية والبيانات ← «تنزيل بياناتي» يعطيك ملفًا يضم ملفك الشخصي وشركتك وقائمة الملفات المرفوعة (الأسماء والأنواع والتواريخ) والطلبات والعروض وأوامر الشراء والطلبيات والفواتير والمدفوعات والإشعارات والمخزون وسجلات الهاتف والموافقة وروابط الدعوة والتقييمات.',
        '<strong>التصحيح.</strong> في الإعدادات يمكنك تعديل اسم الشركة ورقم السجل التجاري والدولة والعنوان والهاتف (تغيير الاسم أو رقم السجل يعيد الشركة الموثّقة إلى المراجعة). ولتصحيح أي شيء آخر، ومنه بريدك الإلكتروني، تواصل معنا.',
        '<strong>الحذف.</strong> الإعدادات ← الخصوصية والبيانات ← «حذف الحساب» (تؤكد بكلمة المرور واسم الشركة). يمحو بياناتك الشخصية على النحو المبيّن في القسم 9. ويُرفض ما دامت لدى الشركة طلبيات مفتوحة أو نزاع أو فاتورة غير مدفوعة أو دفعة بانتظار التأكيد، ويضيع أي رصيد عروض متبقٍ. أما أمر الشراء الذي لم يقبله المورّد بعد فيُلغى تلقائيًا وتُخطَر الشركة الأخرى.',
        '<strong>التعطيل.</strong> اطلبه منا ({{email}}). الحساب المعطّل لا يستطيع تسجيل الدخول؛ وهذا وحده لا يحذف البيانات. ويُرفض عادةً ما دامت هناك طلبيات مفتوحة.',
        '<strong>خيارات البريد.</strong> في الإعدادات يمكنك إيقاف رسائل البريد عن الطلبات الجديدة ورسائل البريد عن الإشعارات الأخرى. أما الرسائل اللازمة لحسابك (التوثيق وإعادة تعيين كلمة المرور وإشعارات الحساب) فتُرسل دائمًا.',
        '<strong>موافقة واتساب.</strong> يستطيع المورّد سحبها في صفحة الدعوة أو بإبلاغنا.',
        '<strong>أي أمر آخر</strong>، ومنه الاعتراض على استخدام بياناتك أو طرح سؤال عنه: تواصل معنا. وسنرد في أقرب وقت ممكن.',
      ]],

      ['h2', '9. مدة الاحتفاظ بالبيانات'],
      ['ul', [
        '<strong>الحساب النشط:</strong> ما دام الحساب قائمًا.',
        '<strong>بعد حذف حسابك:</strong> نمحو اسمك وبريدك الإلكتروني (يُستبدل بعنوان تقني) وهاتفك وعنوانك وملاحظات التوثيق لدينا، وكذلك مستندات التوثيق وصور الكتالوج (تُحذف من تخزين الملفات)، وإشعاراتك وقائمة مخزونك وسجلات هاتفك وموافقتك ونص التقييمات التي كتبتها أو أجبت عنها، وتتوقف روابط الدعوة الخاصة بك عن العمل.',
        '<strong>ما يبقى بعد الحذف:</strong> اسم الشركة ورقم السجل التجاري والدولة، والسجلات المشتركة مع الشركة الأخرى — أوامر الشراء والطلبيات وتفاصيل التسليم والفواتير والمدفوعات ورسائل المحادثة والمستندات المضافة إلى الطلبية ودرجات التقييم (دون تعليقاتك). تبقى ما دامت الشركة الأخرى بحاجة إليها وما دام القانون يقتضي ذلك؛ ولا يوجد حتى الآن تنظيف تلقائي.',
        '<strong>الحسابات المعطّلة</strong> تحتفظ ببياناتها إلى أن يُطلب الحذف.',
        '<strong>النسخ الاحتياطية:</strong> تُحفظ نسخة ثانية من الملفات المرفوعة ونسخة يومية من قاعدة بيانات Biddex في تخزين خاص منفصل (US West، كاليفورنيا). والملف الذي يتغير أو يُحذف يبقى في النسخة الاحتياطية 30 يومًا إضافيًا؛ وتُحفظ كل نسخة من قاعدة البيانات 30 يومًا. ولا نشفّر هذه النسخ بشكل منفصل. لذلك قد تبقى البيانات التي تمحوها في هذه النسخ حتى 30 يومًا.',
        '<strong>النسخ الاحتياطية الخاصة بالمزوّدين لقاعدة البيانات والسجلات:</strong> تُحفظ وفق إعدادات المزوّدين (Neon وRailway وSentry).',
        '<strong>سجل إجراءات المسؤولين:</strong> عندما يتخذ مسؤول في Biddex إجراءً على حساب أو طلبية (مثل توثيق شركة أو تعليقها أو إضافة رصيد أو فض نزاع أو فتح مستند توثيق) نسجّل من فعل ذلك وماذا فعل وأي شركة يخصّ ومتى. لا يتضمن السجل كلمات مرور ولا روابط وصول ولا أرقام هاتف. يُحفظ السجل للمدة اللازمة للأمن وتسوية النزاعات والوفاء بمتطلبات القانون، ولا يُعدَّل ولا يُحذف عندما تحذف شركة حسابها.',
        '<strong>بيانات قصيرة الأجل:</strong> يعمل رابط توثيق البريد 24 ساعة، ورابط إعادة تعيين كلمة المرور ساعة واحدة، ورابط الدعوة 14 يومًا على الأكثر.',
      ]],

      ['h2', '10. تغييرات هذه السياسة'],
      ['p', 'قد نحدّث هذه السياسة. ويبيّن التاريخ في أعلاها متى بدأ سريان النسخة الحالية. وإذا بدأنا باستخدام بياناتك على نحو مختلف جوهريًا فسنذكر ذلك هنا، وفي التطبيق حيثما أمكن.'],

      ['h2', '11. اللغة'],
      ['p', 'تُنشر هذه السياسة بالإنجليزية والعربية. وعند وجود اختلاف بينهما تسود النسخة الإنجليزية.'],
    ],
    contact: 'أسئلة عن هذه السياسة أو عن بياناتك: {{email}} · واتساب {{whatsapp}}',
  },
};

const terms = {
  en: {
    title: 'Terms of Service',
    updated: 'Effective from',
    blocks: [
      ['h2', '1. Who we are'],
      ['p', 'Biddex is an online B2B procurement marketplace for Bahrain. It is operated by <strong>Astemir Makulov</strong>, an individual in the Kingdom of Bahrain (no company has been registered yet). “Biddex”, “we” and “us” mean the operator. Contact: {{email}} or WhatsApp {{whatsapp}}.'],

      ['h2', '2. Acceptance of these terms'],
      ['p', 'By creating an account or using Biddex you agree to these Terms of Service and to our Privacy Policy. If you register on behalf of a company, you confirm that you are authorised to bind that company to these terms.'],

      ['h2', '3. Accounts and eligibility'],
      ['p', 'You must give accurate information when you register a company account, including a valid company name and, where applicable, a commercial registration (CR) number. You are responsible for keeping your login credentials confidential and for everything done under your account.'],

      ['h2', '4. Buyers and suppliers'],
      ['p', 'Registered companies can post requests for quotation (RFQs) as buyers and submit quotes as suppliers. A buyer compares quotes, awards one, and a purchase order (LPO) is issued; when the supplier accepts it, an order follows, with delivery, receipt, invoice and payment recorded on Biddex.'],
      ['p', 'Biddex is a marketplace and communication platform. It does not buy or sell the goods or services exchanged between users and is not a party to the agreement formed between a buyer and a supplier.'],

      ['h2', '5. Payments'],
      ['p', 'Money moves directly between the buyer and the supplier. Biddex does not hold, receive or transfer your money; it only records payments. The buyer reports a payment and the supplier confirms or rejects it. An invoice can be paid only after the buyer has confirmed that it received the goods, and is due after the payment term agreed in the quote.'],

      ['h2', '6. Fees'],
      ['p', 'At launch, submitting quotes is free. If a fee is introduced (a percentage of the request’s budget, taken from the supplier’s bid credits), it will be shown in the product before you take the action it applies to.'],

      ['h2', '7. Verification and who sees what'],
      ['p', 'Biddex may ask for supporting documents (such as a CR certificate) to verify a company before enabling features. Only verified companies can post requests and submit quotes. A buyer’s identity stays hidden from suppliers until it awards a quote; after that the two companies see each other’s details for that order. The Privacy Policy explains this in full.'],

      ['h2', '8. Reviews'],
      ['p', 'After a buyer confirms receipt it can rate the supplier. Ratings and the quality figures built from them are informational and carry no penalty or charge by themselves. Comments must be truthful and respectful; the Biddex team may hide a comment that breaks these terms.'],

      ['h2', '9. Invitation links and contact by WhatsApp'],
      ['p', 'The Biddex team may send a verified supplier a private link to quote on one request without signing in. The link is personal: do not forward it. Biddex contacts a supplier by phone or WhatsApp only after the supplier’s consent, which can be withdrawn at any time.'],

      ['h2', '10. Acceptable use'],
      ['p', 'You agree not to:'],
      ['ul', [
        'post false, misleading or fraudulent requests, quotes, reviews or company information;',
        'use the platform to avoid agreed fees;',
        'try to gain unauthorised access to other accounts or to our systems;',
        'use the platform for any unlawful purpose.',
      ]],

      ['h2', '11. Suspension, deactivation and deletion'],
      ['p', 'We may suspend or deactivate an account that breaks these terms. A suspended company can still sign in and finish the orders already in progress, but cannot post requests, submit quotes or edit its catalog; a purchase order that has not been accepted yet is cancelled. An admin can suspend a company even while orders are in progress; those orders then carry on.'],
      ['p', 'You can delete your account yourself in the app (Settings → Privacy &amp; data → “Delete account”), or ask us ({{email}}) to deactivate it. Both are refused while the company has open orders; a purchase order that has not been accepted yet is cancelled. What happens to your data is described in the Privacy Policy.'],

      ['h2', '12. Disclaimers'],
      ['p', 'Biddex is provided “as is”. We do not guarantee the accuracy of information posted by other users, the successful completion of any transaction, or that the platform will be uninterrupted or error-free.'],

      ['h2', '13. Limitation of liability'],
      ['p', 'To the maximum extent permitted by Bahraini law, Biddex is not liable for indirect, incidental or consequential damages arising from your use of the platform, or for disputes between buyers and suppliers.'],

      ['h2', '14. Governing law'],
      ['p', 'These terms are governed by the laws of the Kingdom of Bahrain.'],

      ['h2', '15. Changes to these terms'],
      ['p', 'We may update these terms. The date at the top shows when the current version took effect. If you keep using Biddex after a change, you accept the new version.'],

      ['h2', '16. Language'],
      ['p', 'These terms are published in English and Arabic. If they differ, the English version prevails.'],
    ],
    contact: 'Questions about these terms: {{email}} · WhatsApp {{whatsapp}}',
  },

  ar: {
    title: 'شروط الخدمة',
    updated: 'سارية اعتبارًا من',
    blocks: [
      ['h2', '1. من نحن'],
      ['p', 'Biddex سوق إلكتروني للمشتريات بين الشركات في البحرين، يديره <strong>Astemir Makulov</strong>، وهو فرد في مملكة البحرين (لم تُسجَّل شركة بعد). المقصود بـ«Biddex» و«نحن» هو المشغّل. للتواصل: {{email}} أو واتساب {{whatsapp}}.'],

      ['h2', '2. قبول هذه الشروط'],
      ['p', 'بإنشاء حساب أو باستخدام Biddex فإنك توافق على شروط الخدمة هذه وعلى سياسة الخصوصية. وإذا سجّلت نيابةً عن شركة فإنك تؤكد أنك مخوَّل بإلزام تلك الشركة بهذه الشروط.'],

      ['h2', '3. الحسابات والأهلية'],
      ['p', 'يجب أن تقدّم معلومات صحيحة عند تسجيل حساب شركة، ومنها اسم شركة صحيح ورقم السجل التجاري (CR) حيثما ينطبق. وأنت مسؤول عن سرية بيانات دخولك وعن كل ما يتم عبر حسابك.'],

      ['h2', '4. المشترون والموردون'],
      ['p', 'يمكن للشركات المسجّلة نشر طلبات التسعير بصفتها مشترية وتقديم العروض بصفتها موردة. يقارن المشتري العروض ويرسّي أحدها فيصدر أمر شراء (LPO)؛ وحين يقبله المورّد تنشأ طلبية، ويُسجَّل على Biddex التسليم والاستلام والفاتورة والدفع.'],
      ['p', 'Biddex سوق ومنصة تواصل. وهو لا يشتري ولا يبيع السلع أو الخدمات المتبادلة بين المستخدمين، وليس طرفًا في الاتفاق المبرم بين المشتري والمورّد.'],

      ['h2', '5. المدفوعات'],
      ['p', 'تنتقل الأموال مباشرة بين المشتري والمورّد. ولا يحتفظ Biddex بأموالك ولا يتسلمها ولا يحوّلها؛ وإنما يسجّل المدفوعات فقط. يبلّغ المشتري عن الدفعة ويؤكدها المورّد أو يرفضها. ولا يمكن دفع الفاتورة إلا بعد أن يؤكد المشتري استلام البضاعة، وتستحق بعد مهلة الدفع المتفق عليها في العرض.'],

      ['h2', '6. الرسوم'],
      ['p', 'عند الإطلاق يكون تقديم العروض مجانيًا. وإذا فُرض رسم (نسبة من ميزانية الطلب تُخصم من رصيد عروض المورّد) فسيظهر في المنتج قبل أن تنفّذ الإجراء الذي ينطبق عليه.'],

      ['h2', '7. التوثيق ومن يرى ماذا'],
      ['p', 'قد يطلب Biddex مستندات داعمة (مثل شهادة السجل التجاري) للتحقق من الشركة قبل تفعيل بعض الخصائص. ولا يستطيع نشر الطلبات وتقديم العروض إلا الشركات الموثّقة. تبقى هوية المشتري مخفية عن الموردين إلى أن يرسّي عرضًا؛ وبعد ذلك تتبادل الشركتان رؤية بياناتهما الخاصة بتلك الطلبية. وتشرح سياسة الخصوصية ذلك بالتفصيل.'],

      ['h2', '8. التقييمات'],
      ['p', 'بعد أن يؤكد المشتري الاستلام يمكنه تقييم المورّد. والتقييمات ومؤشرات الجودة المبنية عليها للإحاطة فقط ولا تترتب عليها بحد ذاتها عقوبة أو رسم. ويجب أن تكون التعليقات صادقة ومحترمة؛ ولفريق Biddex إخفاء أي تعليق يخالف هذه الشروط.'],

      ['h2', '9. روابط الدعوة والتواصل عبر واتساب'],
      ['p', 'قد يرسل فريق Biddex إلى مورّد موثّق رابطًا خاصًا لتقديم عرض على طلب واحد دون تسجيل الدخول. الرابط شخصي: لا تعيد إرساله. ولا يتواصل Biddex مع المورّد عبر الهاتف أو واتساب إلا بعد موافقته، ويمكنه سحب الموافقة في أي وقت.'],

      ['h2', '10. الاستخدام المقبول'],
      ['p', 'توافق على ألا:'],
      ['ul', [
        'تنشر طلبات أو عروضًا أو تقييمات أو معلومات عن الشركة تكون كاذبة أو مضللة أو احتيالية؛',
        'تستخدم المنصة لتجنب الرسوم المتفق عليها؛',
        'تحاول الوصول غير المصرح به إلى حسابات أخرى أو إلى أنظمتنا؛',
        'تستخدم المنصة لأي غرض غير قانوني.',
      ]],

      ['h2', '11. التعليق والتعطيل والحذف'],
      ['p', 'يجوز لنا تعليق أو تعطيل حساب يخالف هذه الشروط. الشركة الموقوفة تستطيع تسجيل الدخول وإنهاء الطلبيات الجارية، لكنها لا تستطيع نشر الطلبات أو تقديم العروض أو تعديل كتالوجها؛ ويُلغى أمر الشراء الذي لم يُقبل بعد. ويمكن للمشرف تعليق شركة حتى أثناء وجود طلبيات جارية؛ وتستمر تلك الطلبيات عندها.'],
      ['p', 'يمكنك حذف حسابك بنفسك في التطبيق (الإعدادات ← الخصوصية والبيانات ← «حذف الحساب»)، أو أن تطلب منا ({{email}}) تعطيله. ويُرفض الأمران ما دامت لدى الشركة طلبيات مفتوحة؛ ويُلغى أمر الشراء الذي لم يُقبل بعد. وتصف سياسة الخصوصية ما يحدث لبياناتك.'],

      ['h2', '12. إخلاء المسؤولية'],
      ['p', 'يُقدَّم Biddex «كما هو». ولا نضمن دقة المعلومات التي ينشرها المستخدمون الآخرون، ولا نجاح إتمام أي معاملة، ولا أن تعمل المنصة دون انقطاع أو أخطاء.'],

      ['h2', '13. حدود المسؤولية'],
      ['p', 'إلى أقصى حد يسمح به القانون البحريني، لا يتحمل Biddex المسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية الناشئة عن استخدامك للمنصة، ولا عن النزاعات بين المشترين والموردين.'],

      ['h2', '14. القانون الواجب التطبيق'],
      ['p', 'تخضع هذه الشروط لقوانين مملكة البحرين.'],

      ['h2', '15. تغيير هذه الشروط'],
      ['p', 'قد نحدّث هذه الشروط. ويبيّن التاريخ في أعلاها متى بدأ سريان النسخة الحالية. وإذا واصلت استخدام Biddex بعد التغيير فإنك تقبل النسخة الجديدة.'],

      ['h2', '16. اللغة'],
      ['p', 'تُنشر هذه الشروط بالإنجليزية والعربية. وعند وجود اختلاف بينهما تسود النسخة الإنجليزية.'],
    ],
    contact: 'أسئلة عن هذه الشروط: {{email}} · واتساب {{whatsapp}}',
  },
};

module.exports = { EFFECTIVE_DATE, privacy, terms, contact: { email: 'support@biddex.online', whatsapp: '+973 3332 7347', whatsappUrl: 'https://wa.me/97333327347' } };
