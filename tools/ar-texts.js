// Arabic texts of the landing: the English string exactly as it appears in /index.html (HTML source, so "&amp;")
// -> the Arabic replacement. tools/build-ar.js turns /index.html into /ar/index.html with these and writes the
// review sheet tools/landing-ar-texts.md for a native speaker. Edit Arabic wording HERE, then run
//   node tools/build-ar.js
// `src` = where the wording comes from: an app key (Biddex-frontend I18N.ar) or "new" (written for the landing,
// not in the app — check these first). Terms follow docs/PROJECT_CONTEXT.md §6.2.
module.exports = [
  // ---- page metadata ----
  { en: 'Biddex — Verified B2B procurement for Bahrain', ar: 'Biddex — مشتريات موثّقة بين الشركات في البحرين', src: 'new (title, og:title, twitter:title)' },
  { en: "Biddex is Bahrain's B2B procurement marketplace. Every company is checked by hand by the Biddex team against its trade license or CR certificate before its first quote.", ar: 'Biddex منصة مشتريات بين الشركات في البحرين. يراجع فريق Biddex كل شركة يدويًا مقابل رخصتها التجارية أو شهادة السجل التجاري قبل أول عرض لها.', src: 'new; wording of the check from lpStep2Body / hint_verification' },
  { en: 'Send one request. Compare priced quotes from verified suppliers in Bahrain. Every company is checked by hand before its first quote.', ar: 'أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين في البحرين. تُراجَع كل شركة يدويًا قبل أول عرض لها.', src: 'new (og:description)' },
  { en: 'Biddex — send one request, compare priced quotes from verified suppliers', ar: 'Biddex — أرسل طلبًا واحدًا وقارن عروض الأسعار من موردين موثّقين', src: 'new (og:image alt text)' },
  { en: 'Send one request. Compare priced quotes from verified suppliers in Bahrain.', ar: 'أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين في البحرين.', src: 'new (twitter:description)' },

  // ---- header ----
  { en: 'BAHRAIN B2B PROCUREMENT', ar: 'مشتريات الشركات في البحرين', src: 'logoTagline' },
  { en: '<a href="#flow">How it works</a>', ar: '<a href="#flow">كيف تسير الصفقة</a>', src: 'new' },
  { en: '<a href="#verification">Verification</a>', ar: '<a href="#verification">التوثيق</a>', src: 'verifyTitle (glossary: التوثيق)' },
  { en: '<a href="#categories">Categories</a>', ar: '<a href="#categories">الفئات</a>', src: 'rfqCategory' },
  { en: 'Log in</a>', ar: 'تسجيل الدخول</a>', src: 'logIn' },
  { en: 'Get started</a>', ar: 'ابدأ الآن</a>', src: 'new' },
  { en: 'aria-label="Chat on WhatsApp"', ar: 'aria-label="تحدّث معنا عبر واتساب"', src: 'new' },

  // ---- hero ----
  { en: 'Live now in Restaurants &amp; Cafés', ar: 'متاح الآن في المطاعم والمقاهي', src: 'CATEGORY_AR' },
  { en: 'Send one request. Compare priced quotes from verified suppliers.', ar: 'أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين.', src: 'new' },
  { en: 'Post what you need, and suppliers across Bahrain send back priced quotes — you compare and award the one you want. ', ar: 'انشر ما تحتاجه، فيرسل لك موردون من أنحاء البحرين عروض أسعارهم — تقارنها وتُرسي العرض الذي تريده. ', src: 'heroSubtitle (انشر…، رسِّ أفضل عرض)' },
  { en: 'Every supplier is checked by hand by the Biddex team against its trade license or CR certificate before it can quote.', ar: 'يراجع فريق Biddex كل مورّد يدويًا مقابل رخصته التجارية أو شهادة السجل التجاري قبل أن يتمكن من تقديم عرض.', src: 'verifySubtitle / lpStep2Body' },
  { en: 'Post a request as a buyer', ar: 'انشر طلبًا كمشترٍ', src: 'new (مشترٍ = roleBuyer)' },
  { en: 'Get verified as a supplier', ar: 'وثّق شركتك كمورّد', src: 'verifyBannerGet (وثّق شركتك)' },
  { en: 'Register with your CR number; the Biddex team verifies your documents before your first quote or RFQ.', ar: 'سجّل برقم سجلك التجاري (CR)؛ يراجع فريق Biddex مستنداتك قبل أول عرض أو طلب تسعير لك.', src: 'pfCr, lpStep2Body' },

  // ---- how a deal moves ----
  { en: '<h2>How a deal moves</h2>', ar: '<h2>كيف تسير الصفقة</h2>', src: 'new' },
  { en: 'One thread from first request to final payment — every stage is recorded in Biddex. Payments go directly between the companies and are confirmed on the platform.', ar: 'مسار واحد من أول طلب حتى الدفعة الأخيرة — تُسجَّل كل مرحلة في Biddex. تنتقل المدفوعات مباشرةً بين الشركتين ويتم تأكيدها على المنصة.', src: 'lpoSubtitle (مسار واحد…), paymentDisclaimer' },
  { en: '<h3>RFQ</h3>', ar: '<h3>طلب التسعير (RFQ)</h3>', src: 'glossary' },
  { en: 'Buyer posts a request with quantities and specs. A budget is optional.', ar: 'ينشر المشتري طلبًا بالكميات والمواصفات. الميزانية اختيارية.', src: 'new' },
  { en: '<h3>Quotes</h3>', ar: '<h3>العروض</h3>', src: 'cmpTitle' },
  { en: 'Verified suppliers submit priced quotes.', ar: 'يقدّم الموردون الموثّقون عروضًا مسعّرة.', src: 'new' },
  { en: '<h3>LPO</h3>', ar: '<h3>أمر الشراء (LPO)</h3>', src: 'glossary' },
  { en: 'Buyer awards one quote; a local purchase order is issued.', ar: 'يُرسي المشتري عرضًا واحدًا فيصدر أمر شراء محلي.', src: 'new (ترسية = award)' },
  { en: '<h3>Order</h3>', ar: '<h3>الطلبية</h3>', src: 'glossary' },
  { en: 'Supplier confirms and prepares the order against the LPO.', ar: 'يؤكد المورّد الطلبية ويجهّزها وفق أمر الشراء.', src: 'new' },
  { en: '<h3>Delivery</h3>', ar: '<h3>التوصيل</h3>', src: 'cardDelivery' },
  { en: 'Fulfilment is tracked against the agreed terms.', ar: 'يُتابَع التنفيذ وفق الشروط المتفق عليها.', src: 'new' },
  { en: '<h3>Invoice</h3>', ar: '<h3>الفاتورة</h3>', src: 'cardInvoice' },
  { en: 'The invoice is created when the supplier accepts the LPO; it becomes payable once the buyer confirms receipt.', ar: 'تُنشأ الفاتورة عندما يقبل المورّد أمر الشراء، وتصبح قابلة للدفع بعد أن يؤكد المشتري الاستلام.', src: 'new' },
  { en: '<h3>Payment</h3>', ar: '<h3>الدفع</h3>', src: 'stage5 family' },
  { en: 'After receipt, the buyer pays the supplier directly and records it; the supplier confirms the payment.', ar: 'بعد الاستلام يدفع المشتري للمورّد مباشرةً ويسجّل الدفعة، ثم يؤكدها المورّد.', src: 'new; payConfirmReceived' },

  // ---- inside the app (mockups) ----
  { en: '<h2>What it looks like inside</h2>', ar: '<h2>كيف تبدو المنصة من الداخل</h2>', src: 'new' },
  { en: 'A simplified look at three screens in the app. Company names and numbers below are illustrative examples, not real listings.', ar: 'نظرة مبسّطة على ثلاث شاشات في التطبيق. أسماء الشركات والأرقام أدناه أمثلة توضيحية وليست بيانات حقيقية.', src: 'new' },
  { en: '<span class="mock-title">New RFQ</span>', ar: '<span class="mock-title">طلب تسعير جديد</span>', src: 'createRfq' },
  { en: '<label>TITLE</label>', ar: '<label>العنوان</label>', src: 'new' },
  { en: 'Chicken breast, 200 kg / week', ar: 'صدور دجاج، 200 كجم أسبوعيًا', src: 'new (illustrative; كجم = UNIT_AR)' },
  { en: '<label>QUANTITY</label><div class="val">200 kg</div>', ar: '<label>الكمية</label><div class="val">200 كجم</div>', src: 'rfqQuantity, UNIT_AR' },
  { en: '<label>BUDGET (BHD)<i>OPTIONAL</i></label>', ar: '<label>الميزانية (د.ب)<i>اختياري</i></label>', src: 'oppBudget, obOptional' },
  { en: '<label>DEADLINE</label><div class="val">In 3 days</div>', ar: '<label>الموعد النهائي</label><div class="val">خلال 3 أيام</div>', src: 'new' },
  { en: '<span class="mock-btn">Publish RFQ</span>', ar: '<span class="mock-btn">نشر طلب التسعير</span>', src: 'rfqModalPost' },
  { en: '<span class="mock-title">Compare bids</span>', ar: '<span class="mock-title">مقارنة العروض</span>', src: 'btnCompare' },
  { en: '<span>SUPPLIER</span><span>PRICE</span><span>DELIVERY</span><span>TERMS</span>', ar: '<span>المورّد</span><span>السعر</span><span>التوصيل</span><span>الشروط</span>', src: 'rowSupplier, catMobPrice, cardDelivery, rowTerms' },
  { en: '<span class="co">Supplier A</span><span class="price">465.000</span><span>2 days</span><span>30 days</span>', ar: '<span class="co">المورّد أ</span><span class="price">465.000</span><span>يومان</span><span>30 يومًا</span>', src: 'new' },
  { en: '<span class="co">Supplier B</span><span class="price">480.000</span><span>1 day</span><span>15 days</span>', ar: '<span class="co">المورّد ب</span><span class="price">480.000</span><span>يوم واحد</span><span>15 يومًا</span>', src: 'new' },
  { en: '<span class="co">Supplier C</span><span class="price">510.000</span><span>3 days</span><span>45 days</span>', ar: '<span class="co">المورّد ج</span><span class="price">510.000</span><span>3 أيام</span><span>45 يومًا</span>', src: 'new' },
  { en: 'Lowest price highlighted', ar: 'الأقل سعرًا مُميَّز', src: 'new' },
  { en: '<span class="mock-title">Purchase order</span>', ar: '<span class="mock-title">أمر شراء</span>', src: 'lpoPurchaseOrder' },
  { en: '<span class="mock-status">ACCEPTED</span>', ar: '<span class="mock-status">مقبول</span>', src: 'lsAccepted' },
  { en: '<label>SUPPLIER</label><div class="val">Supplier A</div>', ar: '<label>المورّد</label><div class="val">المورّد أ</div>', src: 'rowSupplier' },
  { en: '<label>AMOUNT</label><div class="val">465.000 BHD</div>', ar: '<label>المبلغ</label><div class="val">465.000 د.ب</div>', src: 'rowAmount, BHD = د.ب' },
  { en: '<label>PAYMENT TERMS</label><div class="val">30 days after receipt</div>', ar: '<label>شروط الدفع</label><div class="val">30 يومًا بعد الاستلام</div>', src: 'rowPaymentTerms' },

  // ---- verification ----
  { en: '<h2>Verification is the product</h2>', ar: '<h2>التوثيق هو المنتج</h2>', src: 'verifyTitle (identical)' },
  { en: "A marketplace is only as useful as the trust it can vouch for. Biddex doesn't take a company's word for it — every account is reviewed by our team before it can post an RFQ or submit a quote.", ar: 'قيمة السوق بقدر الثقة التي يستطيع أن يضمنها. لا تكتفي Biddex بكلام الشركة عن نفسها — يراجع فريقنا كل حساب قبل أن يتمكن من نشر طلب تسعير أو تقديم عرض.', src: 'new; verifySubtitle for the last part' },
  { en: '<h3>Documents submitted</h3>', ar: '<h3>إرسال المستندات</h3>', src: 'lpStep1Title (أرسل مستنداتك)' },
  { en: 'The company uploads its trade license or commercial registration (CR) certificate.', ar: 'ترفع الشركة رخصتها التجارية أو شهادة السجل التجاري (CR).', src: 'lpStep1Body' },
  { en: '<h3>Reviewed by the Biddex team</h3>', ar: '<h3>مراجعة فريق Biddex</h3>', src: 'lpStep2Title (identical)' },
  { en: 'Our team checks the document by hand before the company can post an RFQ or submit a quote.', ar: 'يراجع فريقنا المستند يدويًا قبل أن تتمكن الشركة من نشر طلب تسعير أو تقديم عرض.', src: 'lpStep2Body' },
  { en: '<h3>Re-checked on changes</h3>', ar: '<h3>إعادة المراجعة عند التغيير</h3>', src: 'lpStep3Title + lpStep3Badge' },
  { en: 'If a verified company changes its name or CR number, it goes back to review before it can trade again.', ar: 'إذا غيّرت شركة موثّقة اسمها أو رقم سجلها التجاري، تعود إلى المراجعة قبل أن تتمكن من التعامل مجددًا.', src: 'lpStep3Body / reverifyConfirm' },

  // ---- categories ----
  { en: "<h2>Built for Bahrain's buying categories</h2>", ar: '<h2>مصمَّمة لفئات الشراء في البحرين</h2>', src: 'new' },
  { en: 'Biddex is launching one category at a time.', ar: 'تُطلق Biddex فئة واحدة في كل مرة.', src: 'new' },
  { en: '<span class="cat-status live mono">LIVE</span>', ar: '<span class="cat-status live mono">نشط</span>', src: 'stLive' },
  { en: 'COMING SOON', ar: 'قريبًا', src: 'rfqComingSoon' },
  { en: '<h3>Restaurants &amp; Cafés</h3>', ar: '<h3>المطاعم والمقاهي</h3>', src: 'CATEGORY_AR' },
  { en: '<h3>Beauty &amp; Salons</h3>', ar: '<h3>التجميل والصالونات</h3>', src: 'CATEGORY_AR' },
  { en: '<h3>Construction</h3>', ar: '<h3>المقاولات والبناء</h3>', src: 'CATEGORY_AR' },
  { en: '<h3>Generators &amp; Machinery</h3>', ar: '<h3>المولدات والآلات</h3>', src: 'CATEGORY_AR' },
  { en: '<h3>Rental Cars</h3>', ar: '<h3>تأجير السيارات</h3>', src: 'CATEGORY_AR' },
  { en: '<h3>Office &amp; Facilities</h3>', ar: '<h3>المكاتب والمرافق</h3>', src: 'CATEGORY_AR' },

  // ---- what restaurants order ----
  { en: '<h2>What restaurants and cafés order through Biddex</h2>', ar: '<h2>ما تطلبه المطاعم والمقاهي عبر Biddex</h2>', src: 'new' },
  { en: 'The categories suppliers are quoting on today, inside Restaurants &amp; Cafés.', ar: 'الفئات التي يقدّم الموردون عروضهم عليها اليوم ضمن المطاعم والمقاهي.', src: 'new' },
  { en: '<span>Meat &amp; Poultry</span>', ar: '<span>اللحوم والدواجن</span>', src: 'new (not in the app)' },
  { en: '<span>Dairy</span>', ar: '<span>الألبان</span>', src: 'new (not in the app)' },
  { en: '<span>Fruits &amp; Vegetables</span>', ar: '<span>الفواكه والخضروات</span>', src: 'new (not in the app)' },
  { en: '<span>Dry Goods</span>', ar: '<span>المواد الجافة</span>', src: 'new (not in the app)' },
  { en: '<span>Beverages</span>', ar: '<span>المشروبات</span>', src: 'new (not in the app)' },
  { en: '<span>Packaging</span>', ar: '<span>مواد التغليف</span>', src: 'new (not in the app)' },
  { en: '<span>Chemicals &amp; Cleaning</span>', ar: '<span>المواد الكيميائية ومواد التنظيف</span>', src: 'new (not in the app)' },

  // ---- join ----
  { en: '<h2>Two sides, one verified network</h2>', ar: '<h2>طرفان، شبكة موثّقة واحدة</h2>', src: 'heroTitle (شبكة موثّقة واحدة)' },
  { en: 'FOR BUYERS', ar: 'للمشترين', src: 'new' },
  { en: '<h3>Post once, hear from suppliers who can actually deliver</h3>', ar: '<h3>انشر مرة واحدة، وتلقَّ ردودًا من موردين قادرين فعلًا على التوريد</h3>', src: 'new' },
  { en: 'Publish the RFQ — a budget is optional — and compare quotes from suppliers our team has already verified.', ar: 'انشر طلب التسعير — الميزانية اختيارية — وقارن العروض من موردين تحقّق منهم فريقنا بالفعل.', src: 'new; heroSubtitle (تحقّق منهم فريق Biddex)' },
  { en: 'Create a buyer account', ar: 'إنشاء حساب مشترٍ', src: 'createAccount, roleBuyer' },
  { en: 'FOR SUPPLIERS', ar: 'للموردين', src: 'new' },
  { en: '<h3>Ready-made requests from restaurants — no cold calls</h3>', ar: '<h3>طلبات جاهزة من المطاعم — دون اتصالات تسويقية</h3>', src: 'new' },
  { en: 'Get verified once, then quote on open RFQs from buyers who already need what you sell. Free during launch — no fees to join or start quoting.', ar: 'وثّق شركتك مرة واحدة، ثم قدّم عروضك على طلبات التسعير المفتوحة من مشترين يحتاجون فعلًا ما تبيعه. مجاني خلال الإطلاق — لا رسوم للانضمام أو لبدء تقديم العروض.', src: 'new; dashSubSupplier' },
  { en: 'Create a supplier account', ar: 'إنشاء حساب مورّد', src: 'createAccount, roleSupplier' },

  // ---- footer ----
  { en: '<a href="/terms.html">Terms of Service</a>', ar: '<a href="/terms.html">شروط الخدمة (بالإنجليزية)</a>', src: 'termsLink; the page itself is English only' },
  { en: '<a href="/privacy.html">Privacy Policy</a>', ar: '<a href="/privacy.html">سياسة الخصوصية (بالإنجليزية)</a>', src: 'privacyLink; the page itself is English only' },
  { en: '&middot; WhatsApp', ar: '&middot; واتساب', src: 'new' },
  { en: '© 2026 Biddex. All rights reserved.', ar: 'جميع الحقوق محفوظة لـ Biddex © 2026', src: 'new' },
];
