# Biddex landing — Arabic texts for review

Generated from `tools/ar-texts.js` (edit the Arabic there, then run `node tools/build-ar.js`). The page is `/ar/` (right-to-left, no JavaScript).

## Please check first

- Rows whose *Source* says **new** were written for the landing and are not in the app: check these first. Rows with an app key reuse the app's Arabic word for word (or nearly), so the landing and the app say the same thing.
- **Brand name:** always written in Latin, "Biddex", also inside Arabic text — the same in the app, the e-mails and this page.
- **Terms:** طلب التسعير (RFQ), عرض / العروض (bid, quote), ترسية / يُرسي (award), أمر شراء (LPO), طلبية (order), فاتورة (invoice), مشترٍ / مورّد (buyer / supplier), التوثيق (verification), المطاعم والمقاهي (Restaurants & Cafés) — see docs/PROJECT_CONTEXT.md §6.2.
- **Numbers:** Latin digits, as in the app. Currency د.ب. Day counts use the correct number forms (يوم واحد، يومان، 3 أيام، 15 يومًا).
- **Not translated on purpose:** the ring text around the check mark in the first screen ("VERIFIED BY BIDDEX • CR / TRADE LICENSE CHECKED", it is a graphic on a circular path where Arabic letters would not connect), the phone number, and the Terms / Privacy pages (English only; the footer links say "(بالإنجليزية)").
- **Switch in the header:** "EN | ع" — two ordinary links.

## Texts

| # | English | العربية | Source |
|---|---|---|---|
| 1 | Biddex — Verified B2B procurement for Bahrain | Biddex — مشتريات موثّقة بين الشركات في البحرين | new (title, og:title, twitter:title) |
| 2 | Biddex is Bahrain's B2B procurement marketplace. Every company is checked by hand by the Biddex team against its trade license or CR certificate before its first quote. | Biddex منصة مشتريات بين الشركات في البحرين. يراجع فريق Biddex كل شركة يدويًا مقابل رخصتها التجارية أو شهادة السجل التجاري قبل أول عرض لها. | new; wording of the check from lpStep2Body / hint_verification |
| 3 | Send one request. Compare priced quotes from verified suppliers in Bahrain. Every company is checked by hand before its first quote. | أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين في البحرين. تُراجَع كل شركة يدويًا قبل أول عرض لها. | new (og:description) |
| 4 | Biddex — send one request, compare priced quotes from verified suppliers | Biddex — أرسل طلبًا واحدًا وقارن عروض الأسعار من موردين موثّقين | new (og:image alt text) |
| 5 | Send one request. Compare priced quotes from verified suppliers in Bahrain. | أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين في البحرين. | new (twitter:description) |
| 6 | BAHRAIN B2B PROCUREMENT | مشتريات الشركات في البحرين | logoTagline |
| 7 | How it works | كيف تسير الصفقة | new |
| 8 | Verification | التوثيق | verifyTitle (glossary: التوثيق) |
| 9 | Categories | الفئات | rfqCategory |
| 10 | Log in | تسجيل الدخول | logIn |
| 11 | Get started | ابدأ الآن | new |
| 12 | aria-label="Chat on WhatsApp" | aria-label="تحدّث معنا عبر واتساب" | new |
| 13 | Live now in Restaurants & Cafés | متاح الآن في المطاعم والمقاهي | CATEGORY_AR |
| 14 | Send one request. Compare priced quotes from verified suppliers. | أرسل طلبًا واحدًا. قارن عروض الأسعار من موردين موثّقين. | new |
| 15 | Post what you need, and suppliers across Bahrain send back priced quotes — you compare and award the one you want. | انشر ما تحتاجه، فيرسل لك موردون من أنحاء البحرين عروض أسعارهم — تقارنها وتُرسي العرض الذي تريده. | heroSubtitle (انشر…، رسِّ أفضل عرض) |
| 16 | Every supplier is checked by hand by the Biddex team against its trade license or CR certificate before it can quote. | يراجع فريق Biddex كل مورّد يدويًا مقابل رخصته التجارية أو شهادة السجل التجاري قبل أن يتمكن من تقديم عرض. | verifySubtitle / lpStep2Body |
| 17 | Post a request as a buyer | انشر طلبًا كمشترٍ | new (مشترٍ = roleBuyer) |
| 18 | Get verified as a supplier | وثّق شركتك كمورّد | verifyBannerGet (وثّق شركتك) |
| 19 | Register with your CR number; the Biddex team verifies your documents before your first quote or RFQ. | سجّل برقم سجلك التجاري (CR)؛ يراجع فريق Biddex مستنداتك قبل أول عرض أو طلب تسعير لك. | pfCr, lpStep2Body |
| 20 | How a deal moves | كيف تسير الصفقة | new |
| 21 | One thread from first request to final payment — every stage is recorded in Biddex. Payments go directly between the companies and are confirmed on the platform. | مسار واحد من أول طلب حتى الدفعة الأخيرة — تُسجَّل كل مرحلة في Biddex. تنتقل المدفوعات مباشرةً بين الشركتين ويتم تأكيدها على المنصة. | lpoSubtitle (مسار واحد…), paymentDisclaimer |
| 22 | RFQ | طلب التسعير (RFQ) | glossary |
| 23 | Buyer posts a request with quantities and specs. A budget is optional. | ينشر المشتري طلبًا بالكميات والمواصفات. الميزانية اختيارية. | new |
| 24 | Quotes | العروض | cmpTitle |
| 25 | Verified suppliers submit priced quotes. | يقدّم الموردون الموثّقون عروضًا مسعّرة. | new |
| 26 | LPO | أمر الشراء (LPO) | glossary |
| 27 | Buyer awards one quote; a local purchase order is issued. | يُرسي المشتري عرضًا واحدًا فيصدر أمر شراء محلي. | new (ترسية = award) |
| 28 | Order | الطلبية | glossary |
| 29 | Supplier confirms and prepares the order against the LPO. | يؤكد المورّد الطلبية ويجهّزها وفق أمر الشراء. | new |
| 30 | Delivery | التوصيل | cardDelivery |
| 31 | Fulfilment is tracked against the agreed terms. | يُتابَع التنفيذ وفق الشروط المتفق عليها. | new |
| 32 | Invoice | الفاتورة | cardInvoice |
| 33 | The invoice is created when the supplier accepts the LPO; it becomes payable once the buyer confirms receipt. | تُنشأ الفاتورة عندما يقبل المورّد أمر الشراء، وتصبح قابلة للدفع بعد أن يؤكد المشتري الاستلام. | new |
| 34 | Payment | الدفع | stage5 family |
| 35 | After receipt, the buyer pays the supplier directly and records it; the supplier confirms the payment. | بعد الاستلام يدفع المشتري للمورّد مباشرةً ويسجّل الدفعة، ثم يؤكدها المورّد. | new; payConfirmReceived |
| 36 | What it looks like inside | كيف تبدو المنصة من الداخل | new |
| 37 | A simplified look at three screens in the app. Company names and numbers below are illustrative examples, not real listings. | نظرة مبسّطة على ثلاث شاشات في التطبيق. أسماء الشركات والأرقام أدناه أمثلة توضيحية وليست بيانات حقيقية. | new |
| 38 | New RFQ | طلب تسعير جديد | createRfq |
| 39 | TITLE | العنوان | new |
| 40 | Chicken breast, 200 kg / week | صدور دجاج، 200 كجم أسبوعيًا | new (illustrative; كجم = UNIT_AR) |
| 41 | QUANTITY200 kg | الكمية200 كجم | rfqQuantity, UNIT_AR |
| 42 | BUDGET (BHD)OPTIONAL | الميزانية (د.ب)اختياري | oppBudget, obOptional |
| 43 | DEADLINEIn 3 days | الموعد النهائيخلال 3 أيام | new |
| 44 | Publish RFQ | نشر طلب التسعير | rfqModalPost |
| 45 | Compare bids | مقارنة العروض | btnCompare |
| 46 | SUPPLIERPRICEDELIVERYTERMS | المورّدالسعرالتوصيلالشروط | rowSupplier, catMobPrice, cardDelivery, rowTerms |
| 47 | Supplier A465.0002 days30 days | المورّد أ465.000يومان30 يومًا | new |
| 48 | Supplier B480.0001 day15 days | المورّد ب480.000يوم واحد15 يومًا | new |
| 49 | Supplier C510.0003 days45 days | المورّد ج510.0003 أيام45 يومًا | new |
| 50 | Lowest price highlighted | الأقل سعرًا مُميَّز | new |
| 51 | Purchase order | أمر شراء | lpoPurchaseOrder |
| 52 | ACCEPTED | مقبول | lsAccepted |
| 53 | SUPPLIERSupplier A | المورّدالمورّد أ | rowSupplier |
| 54 | AMOUNT465.000 BHD | المبلغ465.000 د.ب | rowAmount, BHD = د.ب |
| 55 | PAYMENT TERMS30 days after receipt | شروط الدفع30 يومًا بعد الاستلام | rowPaymentTerms |
| 56 | Verification is the product | التوثيق هو المنتج | verifyTitle (identical) |
| 57 | A marketplace is only as useful as the trust it can vouch for. Biddex doesn't take a company's word for it — every account is reviewed by our team before it can post an RFQ or submit a quote. | قيمة السوق بقدر الثقة التي يستطيع أن يضمنها. لا تكتفي Biddex بكلام الشركة عن نفسها — يراجع فريقنا كل حساب قبل أن يتمكن من نشر طلب تسعير أو تقديم عرض. | new; verifySubtitle for the last part |
| 58 | Documents submitted | إرسال المستندات | lpStep1Title (أرسل مستنداتك) |
| 59 | The company uploads its trade license or commercial registration (CR) certificate. | ترفع الشركة رخصتها التجارية أو شهادة السجل التجاري (CR). | lpStep1Body |
| 60 | Reviewed by the Biddex team | مراجعة فريق Biddex | lpStep2Title (identical) |
| 61 | Our team checks the document by hand before the company can post an RFQ or submit a quote. | يراجع فريقنا المستند يدويًا قبل أن تتمكن الشركة من نشر طلب تسعير أو تقديم عرض. | lpStep2Body |
| 62 | Re-checked on changes | إعادة المراجعة عند التغيير | lpStep3Title + lpStep3Badge |
| 63 | If a verified company changes its name or CR number, it goes back to review before it can trade again. | إذا غيّرت شركة موثّقة اسمها أو رقم سجلها التجاري، تعود إلى المراجعة قبل أن تتمكن من التعامل مجددًا. | lpStep3Body / reverifyConfirm |
| 64 | Built for Bahrain's buying categories | مصمَّمة لفئات الشراء في البحرين | new |
| 65 | Biddex is launching one category at a time. | تُطلق Biddex فئة واحدة في كل مرة. | new |
| 66 | LIVE | نشط | stLive |
| 67 | COMING SOON | قريبًا | rfqComingSoon |
| 68 | Restaurants & Cafés | المطاعم والمقاهي | CATEGORY_AR |
| 69 | Beauty & Salons | التجميل والصالونات | CATEGORY_AR |
| 70 | Construction | المقاولات والبناء | CATEGORY_AR |
| 71 | Generators & Machinery | المولدات والآلات | CATEGORY_AR |
| 72 | Rental Cars | تأجير السيارات | CATEGORY_AR |
| 73 | Office & Facilities | المكاتب والمرافق | CATEGORY_AR |
| 74 | What restaurants and cafés order through Biddex | ما تطلبه المطاعم والمقاهي عبر Biddex | new |
| 75 | The categories suppliers are quoting on today, inside Restaurants & Cafés. | الفئات التي يقدّم الموردون عروضهم عليها اليوم ضمن المطاعم والمقاهي. | new |
| 76 | Meat & Poultry | اللحوم والدواجن | new (not in the app) |
| 77 | Dairy | الألبان | new (not in the app) |
| 78 | Fruits & Vegetables | الفواكه والخضروات | new (not in the app) |
| 79 | Dry Goods | المواد الجافة | new (not in the app) |
| 80 | Beverages | المشروبات | new (not in the app) |
| 81 | Packaging | مواد التغليف | new (not in the app) |
| 82 | Chemicals & Cleaning | المواد الكيميائية ومواد التنظيف | new (not in the app) |
| 83 | Two sides, one verified network | طرفان، شبكة موثّقة واحدة | heroTitle (شبكة موثّقة واحدة) |
| 84 | FOR BUYERS | للمشترين | new |
| 85 | Post once, hear from suppliers who can actually deliver | انشر مرة واحدة، وتلقَّ ردودًا من موردين قادرين فعلًا على التوريد | new |
| 86 | Publish the RFQ — a budget is optional — and compare quotes from suppliers our team has already verified. | انشر طلب التسعير — الميزانية اختيارية — وقارن العروض من موردين تحقّق منهم فريقنا بالفعل. | new; heroSubtitle (تحقّق منهم فريق Biddex) |
| 87 | Create a buyer account | إنشاء حساب مشترٍ | createAccount, roleBuyer |
| 88 | FOR SUPPLIERS | للموردين | new |
| 89 | Ready-made requests from restaurants — no cold calls | طلبات جاهزة من المطاعم — دون اتصالات تسويقية | new |
| 90 | Get verified once, then quote on open RFQs from buyers who already need what you sell. Free during launch — no fees to join or start quoting. | وثّق شركتك مرة واحدة، ثم قدّم عروضك على طلبات التسعير المفتوحة من مشترين يحتاجون فعلًا ما تبيعه. مجاني خلال الإطلاق — لا رسوم للانضمام أو لبدء تقديم العروض. | new; dashSubSupplier |
| 91 | Create a supplier account | إنشاء حساب مورّد | createAccount, roleSupplier |
| 92 | Terms of Service | شروط الخدمة (بالإنجليزية) | termsLink; the page itself is English only |
| 93 | Privacy Policy | سياسة الخصوصية (بالإنجليزية) | privacyLink; the page itself is English only |
| 94 | · WhatsApp | · واتساب | new |
| 95 | © 2026 Biddex. All rights reserved. | جميع الحقوق محفوظة لـ Biddex © 2026 | new |
