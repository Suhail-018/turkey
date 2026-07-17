import { img } from "./images";
import type { Destination } from "./types";

export const destinations: Destination[] = [
  {
    slug: "istanbul",
    name: { en: "Istanbul", ar: "إسطنبول" },
    epithet: { en: "The City of Two Continents", ar: "مدينة القارتين" },
    summary: {
      en: "Capital of three empires and seat of the Caliphate for 450 years — with Companions of the Prophet ﷺ resting inside its walls.",
      ar: "عاصمة ثلاث إمبراطوريات ومقر الخلافة 450 عامًا — وفي أسوارها يرقد صحابة النبي ﷺ.",
    },
    significance: {
      en: "No other city has been the capital of the Roman, Byzantine, and Ottoman worlds in turn. From 1517 to 1924 it was the seat of the Caliphate; its libraries, mosques, and archives made it the administrative and intellectual heart of the Muslim world for four centuries.",
      ar: "لا توجد مدينة أخرى كانت عاصمة للعوالم الرومانية والبيزنطية والعثمانية على التوالي. من 1517 إلى 1924 كانت مقر الخلافة؛ وجعلتها مكتباتها ومساجدها ودواوينها القلبَ الإداري والعلمي للعالم الإسلامي أربعة قرون.",
    },
    spiritual: {
      en: "The tomb of Abu Ayyub al-Ansari, host of the Prophet ﷺ in Madinah, anchors the district of Eyüp. Graves of other Companions stand by the sea walls, and the Sacred Trusts — including the mantle of the Prophet ﷺ — are kept at Topkapı, where the Qur'an has been recited beside them without interruption for five centuries.",
      ar: "ضريح أبي أيوب الأنصاري، مضيف النبي ﷺ في المدينة، يثبّت حي أيوب. وقبور صحابة آخرين قائمة عند الأسوار البحرية، والأمانات المقدسة — ومنها بردة النبي ﷺ — محفوظة في توبكابي حيث يُتلى القرآن بجوارها بلا انقطاع منذ خمسة قرون.",
    },
    why: {
      en: "Because the history you have read stands here at full scale: the walls the Companions besieged, the dome Justinian raised, the mosques Sinan perfected, and the bazaar that fed the Silk Road — all within one tram line.",
      ar: "لأن التاريخ الذي قرأته قائم هنا بحجمه الكامل: الأسوار التي حاصرها الصحابة، وقبة جستنيان، ومساجد سنان، والبازار الذي غذّى طريق الحرير — كلها على خط ترام واحد.",
    },
    experience: {
      en: "Dawn prayer under imperial domes, ferries between two continents, manuscripts and muqarnas, tea above the Golden Horn, and evenings when the adhan answers itself across the water.",
      ar: "صلاة الفجر تحت القباب الإمبراطورية، وعبّارات بين قارتين، ومخطوطات ومقرنصات، وشاي فوق القرن الذهبي، وأمسيات يجيب فيها الأذانُ الأذانَ عبر الماء.",
    },
    siteCount: 34,
    bestSeason: { en: "April–June, September–November", ar: "أبريل–يونيو، سبتمبر–نوفمبر" },
    stay: { en: "4–6 days", ar: "4–6 أيام" },
    image: img.heroDusk,
  },
  {
    slug: "bursa",
    name: { en: "Bursa", ar: "بورصة" },
    epithet: { en: "The First Capital", ar: "العاصمة الأولى" },
    summary: {
      en: "The mountain city where the Ottoman story began — green mosques, silk hans, and the tombs of the founders.",
      ar: "مدينة الجبل حيث بدأت القصة العثمانية — مساجد خضراء وخانات حرير وقبور المؤسسين.",
    },
    significance: {
      en: "Captured by Orhan Gazi in 1326, Bursa was the dynasty's first true capital and its architectural school. The Grand Mosque, the Green Complex, and the covered markets set patterns the empire would repeat for six centuries.",
      ar: "فتحها أورخان غازي عام 1326، فكانت أول عاصمة حقيقية للسلالة ومدرستها المعمارية. الجامع الكبير والمجمع الأخضر والأسواق المسقوفة أرست أنماطًا كررتها الدولة ستة قرون.",
    },
    spiritual: {
      en: "Osman and Orhan, founders of the dynasty, rest at Tophane overlooking the plain. The Grand Mosque's 192 calligraphy panels form one of the largest inscription collections in any mosque on earth, and the Emir Sultan complex remains a living place of visitation.",
      ar: "يرقد عثمان وأورخان، مؤسسا السلالة، في طوبهانة مطلَّين على السهل. ولوحات الجامع الكبير الـ192 من أكبر مجموعات الخط في مساجد الأرض، ومجمع أمير سلطان ما يزال مقصدًا حيًا للزيارة.",
    },
    why: {
      en: "To see the Ottomans before the empire — smaller domes, warmer stone, and a city still paced like a market town beneath a great mountain.",
      ar: "لترى العثمانيين قبل الإمبراطورية — قباب أصغر وحجر أدفأ ومدينة ما زالت تمشي بإيقاع سوقٍ تحت جبل عظيم.",
    },
    experience: {
      en: "Calligraphy by the square metre, Iskender kebab in its birthplace, silk merchants in a 15th-century han, and thermal springs the Romans knew.",
      ar: "خط عربي بالمتر المربع، وكباب إسكندر في موطنه، وتجار الحرير في خان من القرن الخامس عشر، وينابيع حارة عرفها الرومان.",
    },
    siteCount: 14,
    bestSeason: { en: "March–June, September–November", ar: "مارس–يونيو، سبتمبر–نوفمبر" },
    stay: { en: "1–2 days", ar: "يوم–يومان" },
    image: img.yesilTurbe,
  },
  {
    slug: "konya",
    name: { en: "Konya", ar: "قونية" },
    epithet: { en: "The City of Rumi", ar: "مدينة الرومي" },
    summary: {
      en: "Seljuk capital and resting place of Mevlana Jalal al-Din Rumi — Anatolia's oldest Islamic architecture and its most visited tomb.",
      ar: "عاصمة السلاجقة ومثوى مولانا جلال الدين الرومي — أقدم عمارة إسلامية في الأناضول وأكثر أضرحتها زيارة.",
    },
    significance: {
      en: "As capital of the Seljuk Sultanate of Rum, Konya received the scholars and craftsmen fleeing the Mongol invasions — among them Rumi's family from Balkh. Its madrasas, carved portals, and turquoise tilework are the oldest continuous Islamic architectural tradition in Anatolia.",
      ar: "بوصفها عاصمة سلاجقة الروم، استقبلت قونية العلماء والحرفيين الفارين من الغزو المغولي — ومنهم أسرة الرومي من بلخ. مدارسها وبواباتها المنحوتة وخزفها الفيروزي أقدمُ تقليد معماري إسلامي متصل في الأناضول.",
    },
    spiritual: {
      en: "The mausoleum of Mevlana under its fluted turquoise dome draws millions annually. The Masnavi was composed here; the sema was born here; and the city keeps a devotional quiet that surprises first-time visitors.",
      ar: "ضريح مولانا تحت قبته الفيروزية المضلعة يستقبل الملايين سنويًا. هنا أُلّف المثنوي، وهنا وُلد السماع، وتحفظ المدينة سكينةً تفاجئ زائرها الأول.",
    },
    why: {
      en: "To read Rumi where he wrote, and to see the Seljuk century that prepared the ground for everything Ottoman.",
      ar: "لتقرأ الرومي حيث كتب، ولترى قرن السلاجقة الذي مهّد الأرض لكل ما هو عثماني.",
    },
    experience: {
      en: "The earliest Masnavi manuscripts, carved stone portals, etli ekmek from a wood oven, and an evening sema explained by a scholar before it begins.",
      ar: "أقدم مخطوطات المثنوي، وبوابات حجرية منحوتة، وخبز باللحم من فرن الحطب، وسماعٌ مسائي يشرحه عالم قبل أن يبدأ.",
    },
    siteCount: 11,
    bestSeason: { en: "April–June, September–October, December", ar: "أبريل–يونيو، سبتمبر–أكتوبر، ديسمبر" },
    stay: { en: "1–2 days", ar: "يوم–يومان" },
    image: img.mevlana,
  },
  {
    slug: "edirne",
    name: { en: "Edirne", ar: "أدرنة" },
    epithet: { en: "The Frontier Capital", ar: "عاصمة الثغور" },
    summary: {
      en: "Ottoman capital before the conquest — and home of the Selimiye, the mosque Sinan called his masterpiece.",
      ar: "عاصمة العثمانيين قبل الفتح — وموطن السليمية، الجامع الذي سماه سنان تحفته.",
    },
    significance: {
      en: "For ninety years Edirne was the launch-point of the Ottoman advance into Europe. Its Selimiye Mosque, a UNESCO World Heritage Site, carries the widest classical Ottoman dome and is studied by architects worldwide.",
      ar: "تسعين عامًا كانت أدرنة نقطة انطلاق العثمانيين نحو أوروبا. جامعها السليمية، المدرج في التراث العالمي، يحمل أوسع قبة عثمانية كلاسيكية ويدرسه المعماريون في العالم كله.",
    },
    spiritual: {
      en: "The Bayezid II complex healed the ill with running water, scent, and music five centuries ago — a monument of Islamic medicine. The Old Mosque's monumental calligraphy remains a place of daily prayer.",
      ar: "مجمع بايزيد الثاني عالج المرضى بالماء الجاري والعطر والموسيقى قبل خمسة قرون — أثرٌ من آثار الطب الإسلامي. وخطوط الجامع العتيق العملاقة ما تزال بيت صلاة يومية.",
    },
    why: {
      en: "For one building above all — and for a border city that kept its Ottoman texture without the crowds.",
      ar: "من أجل مبنى واحد قبل كل شيء — ومدينة حدودية حفظت نسيجها العثماني بلا زحام.",
    },
    experience: {
      en: "Standing beneath Sinan's widest dome, the medical museum's healing rooms, riverside lunches on the Meriç, and giant calligraphy in the Old Mosque.",
      ar: "الوقوف تحت أوسع قباب سنان، وغرف الاستشفاء في متحف الطب، وغداء على نهر مريج، والخطوط العملاقة في الجامع العتيق.",
    },
    siteCount: 8,
    bestSeason: { en: "April–October", ar: "أبريل–أكتوبر" },
    stay: { en: "1 day", ar: "يوم واحد" },
    image: img.selimiye,
  },
  {
    slug: "cappadocia",
    name: { en: "Cappadocia", ar: "كبادوكيا" },
    epithet: { en: "The Carved Plateau", ar: "الهضبة المنحوتة" },
    summary: {
      en: "Underground cities, Seljuk caravanserais, and dawn balloons over a landscape carved by faith and volcanic ash.",
      ar: "مدن تحت الأرض وخانات سلجوقية ومناطيد فجرية فوق أرض نحتها الإيمان والرماد البركاني.",
    },
    significance: {
      en: "The plateau's soft rock hides settlements eight storeys deep, and across it the Seljuks strung the greatest chain of caravanserais on the Silk Road — fortress-inns endowed to feed every traveler free for three days.",
      ar: "يخفي صخر الهضبة الرخو مستوطنات بعمق ثمانية طوابق، وعبرها مدّ السلاجقة أعظم سلسلة خانات على طريق الحرير — نُزُلًا محصّنة أُوقفت لإطعام كل مسافر مجانًا ثلاثة أيام.",
    },
    spiritual: {
      en: "The caravanserai is Islamic civilisation compressed into one building: security, hospitality, and trade, endowed in perpetuity. Sultanhanı, the largest, still stands a day's camel-ride from its sisters.",
      ar: "الخان هو الحضارة الإسلامية مختصرة في مبنى واحد: أمن وضيافة وتجارة وقفًا مؤبدًا. وسلطان هاني، أكبرها، ما يزال قائمًا على مسيرة يوم بالجمال من أخواته.",
    },
    why: {
      en: "Because children fall in love with history here — and because the waqf economics of the Seljuk road deserve to be taught standing in a caravanserai courtyard.",
      ar: "لأن الأطفال يعشقون التاريخ هنا — ولأن اقتصاد الوقف السلجوقي يستحق أن يُدرَّس وقوفًا في فناء خان.",
    },
    experience: {
      en: "A balloon at first light, rolling stone doors underground, cave-hotel evenings, and the widest starfield in Anatolia.",
      ar: "منطاد مع أول الضوء، وأبواب حجرية دوارة تحت الأرض، وأمسيات في فندق كهفي، وأوسع سماء نجوم في الأناضول.",
    },
    siteCount: 9,
    bestSeason: { en: "April–June, September–October", ar: "أبريل–يونيو، سبتمبر–أكتوبر" },
    stay: { en: "2–3 days", ar: "2–3 أيام" },
    image: img.cappadocia,
  },
  {
    slug: "gallipoli",
    name: { en: "Gallipoli", ar: "جاليبولي" },
    epithet: { en: "The Peninsula of Sacrifice", ar: "شبه جزيرة التضحية" },
    summary: {
      en: "The 1915 battlefields and memorials of Çanakkale — where an empire's last defence became a nation's founding story.",
      ar: "ميادين معارك 1915 ونُصب جناق قلعة — حيث صار آخر دفاع لإمبراطورية قصةَ ميلاد أمة.",
    },
    significance: {
      en: "The Çanakkale campaign of 1915 halted the largest naval force yet assembled and shaped the end of the Ottoman era. Over half a million soldiers fell on both sides; the peninsula is now a memorial landscape of trenches, cemeteries, and the great Martyrs' Memorial.",
      ar: "أوقفت معركة جناق قلعة عام 1915 أكبر قوة بحرية حُشدت حتى ذلك الحين ورسمت نهاية العهد العثماني. سقط أكثر من نصف مليون جندي من الجانبين؛ واليوم شبه الجزيرة أرضُ ذكرى من الخنادق والمقابر ونصب الشهداء العظيم.",
    },
    spiritual: {
      en: "For Ottoman soldiers this was a defence of the Caliphate's heartland; letters from the trenches read like testaments of faith. The memorials honour a generation of huffaz, students, and farmers who did not return.",
      ar: "كان الدفاع هنا عند الجنود العثمانيين دفاعًا عن قلب دار الخلافة؛ ورسائل الخنادق تُقرأ كوصايا إيمان. النُصب تكرّم جيلًا من الحفاظ والطلاب والفلاحين لم يعودوا.",
    },
    why: {
      en: "To stand where the modern Middle East began, and to read the trench letters where they were written.",
      ar: "لتقف حيث بدأ الشرق الأوسط الحديث، ولتقرأ رسائل الخنادق حيث كُتبت.",
    },
    experience: {
      en: "The Martyrs' Memorial at sunset, trench lines above the straits, the naval museum at Çimenlik, and a crossing of the Dardanelles.",
      ar: "نصب الشهداء عند الغروب، وخطوط الخنادق فوق المضيق، والمتحف البحري في تشيمنليك، وعبور الدردنيل.",
    },
    siteCount: 7,
    bestSeason: { en: "April–October", ar: "أبريل–أكتوبر" },
    stay: { en: "1 day", ar: "يوم واحد" },
    image: img.gallipoli,
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
