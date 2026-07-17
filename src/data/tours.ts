import { img } from "./images";
import type { Tour, TourCategory } from "./types";
import type { Localized } from "@/i18n";

export const tourCategories: { id: TourCategory | "all"; label: Localized }[] = [
  { id: "all", label: { en: "All themes", ar: "كل المواضيع" } },
  { id: "sahaba", label: { en: "Sahaba", ar: "الصحابة" } },
  { id: "ottoman", label: { en: "Ottoman heritage", ar: "التراث العثماني" } },
  { id: "mosques", label: { en: "Great mosques", ar: "المساجد العظيمة" } },
  { id: "scholars", label: { en: "Scholars & saints", ar: "العلماء والأولياء" } },
  { id: "historic", label: { en: "Historic cities", ar: "المدن التاريخية" } },
  { id: "family", label: { en: "Family", ar: "عائلية" } },
  { id: "educational", label: { en: "Educational", ar: "تعليمية" } },
];

export const tours: Tour[] = [
  {
    slug: "footsteps-of-the-companions",
    category: "sahaba",
    city: "istanbul",
    featured: true,
    title: {
      en: "In the Footsteps of the Companions",
      ar: "على خطى الصحابة",
    },
    tagline: {
      en: "A day with the Sahaba who reached the walls of Constantinople",
      ar: "يوم مع الصحابة الذين بلغوا أسوار القسطنطينية",
    },
    story: [
      {
        en: "In the year 674, an elderly man rode toward the walls of Constantinople knowing he would not return. Abu Ayyub al-Ansari — the Companion who had hosted the Prophet ﷺ in Madinah — asked to be buried at the furthest point the army reached. For eight centuries his grave waited outside the walls, until the city finally opened and a mosque rose over his resting place.",
        ar: "في عام 674م، سار شيخ كبير نحو أسوار القسطنطينية وهو يعلم أنه لن يعود. أبو أيوب الأنصاري — الصحابي الذي استضاف النبي ﷺ في المدينة — أوصى أن يُدفن عند أبعد نقطة يبلغها الجيش. ثمانية قرون ظل قبره خارج الأسوار، حتى فُتحت المدينة وارتفع المسجد فوق مرقده.",
      },
      {
        en: "This journey walks that story where it happened: the mosque and tomb of Abu Ayyub, the graves of the Companions by the underground mosque, the sea walls they besieged, and the quiet lanes of Balat and Ayvansaray above the Golden Horn. Your guide reads the sources as you stand in the places they describe.",
        ar: "تمشي هذه الرحلة في القصة حيث وقعت: مسجد وضريح أبي أيوب، وقبور الصحابة عند المسجد تحت الأرض، والأسوار البحرية التي حاصروها، وأزقة بلاط وأيفانساراي الهادئة فوق القرن الذهبي. مرشدك يقرأ المصادر وأنت واقف في الأماكن التي تصفها.",
      },
    ],
    duration: { en: "Full day · 8 hours", ar: "يوم كامل · 8 ساعات" },
    durationDays: 1,
    groupSize: 12,
    languages: ["English", "العربية", "Türkçe"],
    price: 95,
    rating: 4.98,
    reviewCount: 214,
    image: img.eyupSultan,
    gallery: [img.eyupSultan, img.galataBirds, img.suleymaniyeHorn, img.hagiaInterior],
    highlights: [
      { en: "Tomb of Abu Ayyub al-Ansari", ar: "ضريح أبي أيوب الأنصاري" },
      { en: "Companions' graves at the underground mosque", ar: "قبور الصحابة عند المسجد تحت الأرض" },
      { en: "Theodosian land walls at Edirnekapı", ar: "أسوار المدينة عند أدرنة قابي" },
      { en: "Golden Horn from Pierre Loti hill", ar: "القرن الذهبي من تلة بيير لوتي" },
    ],
    sites: [
      { en: "Eyüp Sultan Mosque & Tomb", ar: "جامع وضريح أيوب سلطان" },
      { en: "Underground Mosque (Yeraltı Camii)", ar: "المسجد تحت الأرض" },
      { en: "Balat & Ayvansaray", ar: "بلاط وأيفانساراي" },
      { en: "Edirnekapı & the city walls", ar: "أدرنة قابي وأسوار المدينة" },
    ],
    itinerary: [
      {
        time: "09:30",
        title: { en: "Hotel pickup", ar: "الاستقبال من الفندق" },
        description: {
          en: "We collect you from central Istanbul hotels and drive along the Golden Horn as the guide sets the scene: why the Companions came, and what the city was in the seventh century.",
          ar: "نستقبلك من فنادق وسط إسطنبول ونسير بمحاذاة القرن الذهبي بينما يمهّد المرشد للقصة: لماذا جاء الصحابة، وماذا كانت المدينة في القرن السابع.",
        },
      },
      {
        time: "10:00",
        title: {
          en: "Eyüp Sultan Mosque & the tomb of Abu Ayyub",
          ar: "جامع أيوب سلطان وضريح أبي أيوب الأنصاري",
        },
        description: {
          en: "Unhurried time at the mosque and türbe, with the sīrah of Abu Ayyub read at his graveside — his house in Madinah, his hadith, and his final campaign.",
          ar: "وقت هادئ في الجامع والتربة، مع قراءة سيرة أبي أيوب عند قبره — داره في المدينة، وحديثه، وغزوته الأخيرة.",
        },
      },
      {
        time: "11:30",
        title: {
          en: "The Underground Mosque & the Companions' graves",
          ar: "المسجد تحت الأرض وقبور الصحابة",
        },
        description: {
          en: "Beneath the old harbour fortifications lie the maqams of Companions who fell in the first sieges. A short, powerful visit — and the story of how they were found.",
          ar: "تحت تحصينات الميناء القديم تقع مقامات صحابة سقطوا في الحصارات الأولى. زيارة قصيرة مؤثرة — وقصة اكتشافها.",
        },
      },
      {
        time: "12:30",
        title: { en: "Dhuhr & lunch in Balat", ar: "الظهر والغداء في بلاط" },
        description: {
          en: "Prayer at a neighbourhood mosque, then a traditional lokanta lunch in the lanes of Balat and Ayakapı (included).",
          ar: "الصلاة في مسجد الحي، ثم غداء تقليدي في أزقة بلاط وآياقابي (مشمول).",
        },
      },
      {
        time: "14:30",
        title: {
          en: "Edirnekapı and the Theodosian walls",
          ar: "أدرنة قابي والأسوار",
        },
        description: {
          en: "Walk the land walls the armies faced for eight centuries, ending where the standard-bearers entered in 1453 — the bridge between the Companions' longing and the Ottoman fulfilment.",
          ar: "نمشي عند الأسوار التي واجهتها الجيوش ثمانية قرون، وننتهي حيث دخل حاملو الرايات عام 1453 — الجسر بين شوق الصحابة والفتح العثماني.",
        },
      },
      {
        time: "17:00",
        title: { en: "Return to your hotel", ar: "العودة إلى الفندق" },
        description: {
          en: "Drive back along the walls with a reading list in hand for everything you stood beside today.",
          ar: "نعود بمحاذاة الأسوار وبين يديك قائمة قراءة لكل ما وقفت عنده اليوم.",
        },
      },
    ],
    included: [
      { en: "Scholar-trained guide (EN/AR/TR)", ar: "مرشد متخصص (إنجليزي/عربي/تركي)" },
      { en: "Hotel pickup & private transport", ar: "النقل من الفندق ومواصلات خاصة" },
      { en: "Traditional lunch & tea", ar: "غداء تقليدي وشاي" },
      { en: "All entry donations", ar: "جميع تبرعات الدخول" },
      { en: "Printed reading companion", ar: "دليل قراءة مطبوع" },
    ],
    notIncluded: [
      { en: "Personal purchases", ar: "المشتريات الشخصية" },
      { en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" },
    ],
    scholarNote: {
      quote: {
        en: "We do not visit Eyüp Sultan to see a building. We visit a man who saw the Prophet ﷺ — and we lower our voices accordingly.",
        ar: "لا نزور أيوب سلطان لنرى بناءً، بل نزور رجلًا رأى النبي ﷺ — ونخفض أصواتنا لذلك.",
      },
      scholar: { en: "Dr. Yusuf Karahan", ar: "د. يوسف قرهان" },
      role: { en: "Head of Research, Miras", ar: "رئيس البحث العلمي، ميراث" },
    },
    faqs: [
      {
        q: { en: "Is the tour suitable for elderly travelers?", ar: "هل الرحلة مناسبة لكبار السن؟" },
        a: {
          en: "Yes. The pace is deliberately gentle, walking distances are short, and the vehicle stays close at every stop. Tell us in the booking notes and we adapt further.",
          ar: "نعم. الإيقاع هادئ عمدًا، ومسافات المشي قصيرة، والمركبة قريبة في كل محطة. أخبرنا في ملاحظات الحجز وسنكيّف البرنامج أكثر.",
        },
      },
      {
        q: { en: "Are prayer times part of the schedule?", ar: "هل أوقات الصلاة ضمن البرنامج؟" },
        a: {
          en: "Always. The day is built around Dhuhr and 'Asr in congregation, never squeezed between stops.",
          ar: "دائمًا. اليوم مرتب حول صلاتي الظهر والعصر جماعةً، ولا تُضغط بين المحطات.",
        },
      },
      {
        q: { en: "Can women join comfortably?", ar: "هل تناسب الرحلة النساء؟" },
        a: {
          en: "Yes — families and women travel with us daily. Prayer spaces for women are arranged at every mosque we visit.",
          ar: "نعم — العائلات والنساء معنا يوميًا. أماكن صلاة النساء مرتبة في كل مسجد نزوره.",
        },
      },
    ],
  },

  {
    slug: "tombs-of-the-sultans",
    category: "ottoman",
    city: "istanbul",
    featured: true,
    title: { en: "Tombs of the Sultans", ar: "أضرحة السلاطين العثمانيين" },
    tagline: {
      en: "Mehmed the Conqueror, Süleyman, and the empire they built",
      ar: "محمد الفاتح وسليمان القانوني والإمبراطورية التي بنوها",
    },
    story: [
      {
        en: "Every Ottoman sultan sleeps beneath a dome he raised in life. To stand at the türbe of Mehmed II is to stand before the twenty-one-year-old who ended an empire of a thousand years; at Süleyman's, before the lawgiver whose word ran from Budapest to Basra.",
        ar: "كل سلطان عثماني يرقد تحت قبة رفعها في حياته. أن تقف عند تربة محمد الفاتح فأنت أمام ابن الحادية والعشرين الذي أنهى إمبراطورية عمرها ألف عام؛ وعند تربة سليمان، أمام القانوني الذي نفذت كلمته من بودابست إلى البصرة.",
      },
      {
        en: "This journey moves through the imperial mosque complexes — Fatih, Süleymaniye, Sultanahmet — reading each sultan's life at his graveside and each mosque as a page of the empire's story: its schools, kitchens, and calligraphy.",
        ar: "تتنقل هذه الرحلة بين المجمعات الإمبراطورية — الفاتح والسليمانية والسلطان أحمد — تقرأ سيرة كل سلطان عند قبره، وكل مسجد صفحةً من قصة الدولة: مدارسها ومطابخها وخطوطها.",
      },
    ],
    duration: { en: "Full day · 8 hours", ar: "يوم كامل · 8 ساعات" },
    durationDays: 1,
    groupSize: 12,
    languages: ["English", "العربية", "Türkçe"],
    price: 85,
    rating: 4.96,
    reviewCount: 187,
    image: img.suleymaniyeHorn,
    gallery: [img.suleymaniyeHorn, img.blueMosqueDay, img.iznikPanel, img.bosphorus],
    highlights: [
      { en: "Türbe of Mehmed the Conqueror", ar: "تربة محمد الفاتح" },
      { en: "Süleymaniye — Sinan's masterpiece", ar: "السليمانية — تحفة سنان" },
      { en: "The Blue Mosque and Sultan Ahmed I", ar: "الجامع الأزرق والسلطان أحمد الأول" },
      { en: "Iznik tilework and imperial calligraphy", ar: "خزف إزنيق والخط الإمبراطوري" },
    ],
    sites: [
      { en: "Fatih Mosque & türbe", ar: "جامع الفاتح وتربته" },
      { en: "Süleymaniye Mosque complex", ar: "مجمع جامع السليمانية" },
      { en: "Blue Mosque (Sultanahmet)", ar: "الجامع الأزرق" },
      { en: "Hagia Sophia (exterior visit)", ar: "آيا صوفيا (من الخارج)" },
    ],
    itinerary: [
      {
        time: "09:00",
        title: { en: "Fatih Mosque & the Conqueror's tomb", ar: "جامع الفاتح وتربة الفاتح" },
        description: {
          en: "Begin where the conquest is buried. The hadith of the conquest, the young sultan's education, and the complex that fed a city.",
          ar: "نبدأ حيث دُفن الفتح: حديث الفتح، وتعليم السلطان الشاب، والمجمع الذي أطعم مدينة.",
        },
      },
      {
        time: "11:00",
        title: { en: "Süleymaniye with the master's eyes", ar: "السليمانية بعين المعمار" },
        description: {
          en: "Sinan's acoustics, the ostrich-egg chandeliers, and the tombs of Süleyman and Hürrem. Dhuhr in the great hall.",
          ar: "صوتيات سنان، وقناديل بيض النعام، وتربتا سليمان وخُرّم. صلاة الظهر في الحرم الكبير.",
        },
      },
      {
        time: "13:00",
        title: { en: "Lunch above the Golden Horn", ar: "الغداء فوق القرن الذهبي" },
        description: {
          en: "A terrace lokanta beside the mosque, looking down on the water the empire ruled.",
          ar: "مطعم تقليدي بجوار الجامع يطل على المياه التي حكمتها الدولة.",
        },
      },
      {
        time: "14:30",
        title: { en: "Sultanahmet — the Blue Mosque", ar: "السلطان أحمد — الجامع الأزرق" },
        description: {
          en: "Twenty thousand Iznik tiles and the story of the young sultan who built opposite Hagia Sophia. 'Asr prayer, then the hippodrome.",
          ar: "عشرون ألف بلاطة إزنيقية وقصة السلطان الشاب الذي بنى قبالة آيا صوفيا. صلاة العصر ثم ميدان السباق.",
        },
      },
      {
        time: "17:00",
        title: { en: "Return", ar: "العودة" },
        description: {
          en: "Back to your hotel with the dynasty's family tree in hand.",
          ar: "العودة إلى الفندق وبين يديك شجرة نسب السلالة.",
        },
      },
    ],
    included: [
      { en: "Scholar-trained guide (EN/AR/TR)", ar: "مرشد متخصص (إنجليزي/عربي/تركي)" },
      { en: "Hotel pickup & private transport", ar: "النقل من الفندق ومواصلات خاصة" },
      { en: "Terrace lunch & tea", ar: "غداء وشاي" },
      { en: "Printed dynasty companion", ar: "دليل السلالة مطبوعًا" },
    ],
    notIncluded: [
      { en: "Hagia Sophia interior ticket (optional add-on)", ar: "تذكرة دخول آيا صوفيا (إضافة اختيارية)" },
      { en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" },
    ],
    scholarNote: {
      quote: {
        en: "The sultans built mosques the way other kings built thrones. Read the buildings and you have read the empire.",
        ar: "بنى السلاطين المساجد كما بنى غيرهم العروش. اقرأ العمارة تقرأ الدولة.",
      },
      scholar: { en: "Amina Demir", ar: "أمينة دمير" },
      role: { en: "Senior guide, Ottoman history", ar: "مرشدة أولى، التاريخ العثماني" },
    },
    faqs: [
      {
        q: { en: "Do we enter Hagia Sophia?", ar: "هل ندخل آيا صوفيا؟" },
        a: {
          en: "The standard route visits the exterior and square in depth; interior entry can be added when booking and we handle the tickets.",
          ar: "المسار الأساسي يشمل الخارج والميدان بعمق؛ ويمكن إضافة الدخول عند الحجز ونتولى التذاكر.",
        },
      },
      {
        q: { en: "How much walking is involved?", ar: "كم مقدار المشي؟" },
        a: {
          en: "Around four kilometres across the day, on mostly flat ground, with seated breaks at each complex.",
          ar: "نحو أربعة كيلومترات على مدار اليوم، على أرض مستوية غالبًا، مع استراحات جلوس في كل مجمع.",
        },
      },
    ],
  },

  {
    slug: "saints-of-istanbul",
    category: "scholars",
    city: "istanbul",
    featured: true,
    title: { en: "The Saints of Istanbul", ar: "أولياء إسطنبول الصالحون" },
    tagline: {
      en: "Yahya Efendi, Aziz Mahmud Hüdayi, and the city's quiet teachers",
      ar: "يحيى أفندي وعزيز محمود هدائي ومعلمو المدينة الهادئون",
    },
    story: [
      {
        en: "Beyond the imperial domes, Istanbul keeps a quieter geography: the tombs of its teachers. Yahya Efendi, foster-brother of Süleyman, above the Bosphorus. Aziz Mahmud Hüdayi, the judge who became a saint, across the water in Üsküdar. Mehmed Emin Tokadi, resting in a courtyard the guidebooks miss.",
        ar: "خلف القباب الإمبراطورية تحفظ إسطنبول جغرافيا أهدأ: مراقد معلميها. يحيى أفندي، أخو سليمان في الرضاعة، فوق البوسفور. وعزيز محمود هدائي، القاضي الذي صار وليًا، عبر الماء في أوسكودار. ومحمد أمين توقادي، في فناء تغفل عنه الأدلة السياحية.",
      },
      {
        en: "This is a day of biographies and Bosphorus crossings — three districts, three lives, and the adab of visiting the righteous, taught gently along the way.",
        ar: "يوم من السِيَر وعبور البوسفور — ثلاث مناطق، وثلاث سير، وأدب زيارة الصالحين يُعلَّم بلطف في الطريق.",
      },
    ],
    duration: { en: "Full day · 7 hours", ar: "يوم كامل · 7 ساعات" },
    durationDays: 1,
    groupSize: 10,
    languages: ["English", "العربية", "Türkçe"],
    price: 80,
    rating: 4.97,
    reviewCount: 142,
    image: img.mosqueTwilight,
    gallery: [img.mosqueTwilight, img.bosphorus, img.galataBirds],
    highlights: [
      { en: "Yahya Efendi lodge above the Bosphorus", ar: "زاوية يحيى أفندي فوق البوسفور" },
      { en: "Aziz Mahmud Hüdayi complex, Üsküdar", ar: "مجمع عزيز محمود هدائي في أوسكودار" },
      { en: "Tomb of Mehmed Emin Tokadi", ar: "مقام محمد أمين توقادي" },
      { en: "Ferry crossing between two continents", ar: "عبّارة بين قارتين" },
    ],
    sites: [
      { en: "Beşiktaş — Yahya Efendi", ar: "بشكتاش — يحيى أفندي" },
      { en: "Üsküdar — Aziz Mahmud Hüdayi", ar: "أوسكودار — عزيز محمود هدائي" },
      { en: "Fatih — Mehmed Emin Tokadi", ar: "الفاتح — محمد أمين توقادي" },
    ],
    itinerary: [
      {
        time: "09:30",
        title: { en: "Yahya Efendi, Beşiktaş", ar: "يحيى أفندي، بشكتاش" },
        description: {
          en: "A garden lodge above the strait: the scholar who counselled a sultan and asked for nothing.",
          ar: "زاوية بين الحدائق فوق المضيق: العالم الذي نصح سلطانًا ولم يسأل شيئًا.",
        },
      },
      {
        time: "11:30",
        title: { en: "Ferry to Üsküdar", ar: "العبّارة إلى أوسكودار" },
        description: {
          en: "Cross to Asia with tea on deck, gulls following the wake.",
          ar: "نعبر إلى آسيا وكوب شاي على السطح والنوارس خلف العبّارة.",
        },
      },
      {
        time: "12:15",
        title: { en: "Aziz Mahmud Hüdayi complex", ar: "مجمع عزيز محمود هدائي" },
        description: {
          en: "Dhuhr and lunch at the complex that still feeds visitors daily, and the story of the judge who left the bench for the path.",
          ar: "الظهر والغداء في المجمع الذي ما زال يطعم زوّاره يوميًا، وقصة القاضي الذي ترك المنصب للطريق.",
        },
      },
      {
        time: "15:00",
        title: { en: "Return to Fatih — Tokadi", ar: "العودة إلى الفاتح — توقادي" },
        description: {
          en: "The hidden courtyard of Mehmed Emin Tokadi and the chains of knowledge that passed through this city.",
          ar: "الفناء الخفي لمحمد أمين توقادي وسلاسل العلم التي مرّت بهذه المدينة.",
        },
      },
      {
        time: "16:30",
        title: { en: "Return to your hotel", ar: "العودة إلى الفندق" },
        description: {
          en: "Quiet drive back with the day's biographies in print.",
          ar: "عودة هادئة وبين يديك سير اليوم مطبوعة.",
        },
      },
    ],
    included: [
      { en: "Scholar-trained guide", ar: "مرشد متخصص" },
      { en: "Transport & ferry tickets", ar: "المواصلات وتذاكر العبّارة" },
      { en: "Lunch at the Hüdayi foundation", ar: "الغداء في وقف هدائي" },
      { en: "Biography booklet", ar: "كتيّب السِيَر" },
    ],
    notIncluded: [{ en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" }],
    scholarNote: {
      quote: {
        en: "Ziyarah has an etiquette: we greet, we recite, we ask Allah — never the buried. We teach this before every visit.",
        ar: "للزيارة أدب: نسلّم ونقرأ وندعو الله — لا المدفونين. نعلّم هذا قبل كل زيارة.",
      },
      scholar: { en: "Dr. Yusuf Karahan", ar: "د. يوسف قرهان" },
      role: { en: "Head of Research, Miras", ar: "رئيس البحث العلمي، ميراث" },
    },
    faqs: [
      {
        q: { en: "Is this tour only for Sufi-inclined travelers?", ar: "هل الرحلة لمحبي التصوف فقط؟" },
        a: {
          en: "No — it is a history and biography journey, taught from sources, with the etiquette of visiting explained in a balanced, scholarly way.",
          ar: "لا — إنها رحلة تاريخ وسِيَر تُدرّس من المصادر، مع شرح أدب الزيارة بطريقة علمية متوازنة.",
        },
      },
    ],
  },

  {
    slug: "sinan-and-the-imperial-mosques",
    category: "mosques",
    city: "istanbul",
    featured: true,
    title: { en: "Sinan & the Imperial Mosques", ar: "سنان والمساجد الإمبراطورية" },
    tagline: {
      en: "How a janissary engineer redefined sacred architecture",
      ar: "كيف أعاد مهندس إنكشاري تعريف العمارة المقدسة",
    },
    story: [
      {
        en: "Mimar Sinan built for fifty years and left the skyline you see today. This journey is an architecture masterclass on foot: domes and half-domes, the mathematics of the muqarnas, acoustics tuned with buried jars, and light managed like a material.",
        ar: "بنى المعمار سنان خمسين عامًا وترك الأفق الذي تراه اليوم. هذه الرحلة درس معماري سائر على الأقدام: القباب وأنصافها، ورياضيات المقرنصات، وصوتيات ضُبطت بجرار مدفونة، وضوء يُدار كأنه مادة بناء.",
      },
      {
        en: "From his apprentice work to his declared masterpiece, you learn to read a mosque the way its builder intended — then you will never see Istanbul the same way again.",
        ar: "من أعمال تلمذته إلى تحفته المعلنة، تتعلم قراءة المسجد كما أراد بانيه — وبعدها لن ترى إسطنبول كما كانت أبدًا.",
      },
    ],
    duration: { en: "Full day · 7 hours", ar: "يوم كامل · 7 ساعات" },
    durationDays: 1,
    groupSize: 12,
    languages: ["English", "العربية"],
    price: 75,
    rating: 4.95,
    reviewCount: 156,
    image: img.blueMosqueDay,
    gallery: [img.blueMosqueDay, img.iznikPanel, img.suleymaniyeHorn, img.heroDusk],
    highlights: [
      { en: "Süleymaniye — the journeyman's summit", ar: "السليمانية — قمة المعلم" },
      { en: "Rüstem Pasha's Iznik jewel-box", ar: "جوهرة رستم باشا الإزنيقية" },
      { en: "Şehzade — the apprentice work", ar: "شهزاده — عمل التلمذة" },
      { en: "Reading domes, muqarnas & calligraphy", ar: "قراءة القباب والمقرنصات والخط" },
    ],
    sites: [
      { en: "Şehzade Mosque", ar: "جامع شهزاده" },
      { en: "Süleymaniye Mosque", ar: "جامع السليمانية" },
      { en: "Rüstem Pasha Mosque", ar: "جامع رستم باشا" },
      { en: "Blue Mosque", ar: "الجامع الأزرق" },
    ],
    itinerary: [
      {
        time: "09:00",
        title: { en: "Şehzade — where Sinan began", ar: "شهزاده — حيث بدأ سنان" },
        description: {
          en: "The prince's mosque Sinan called 'my apprenticeship' — and why he judged himself so hard.",
          ar: "جامع الأمير الذي سماه سنان «عمل تلمذتي» — ولماذا حكم على نفسه بهذه القسوة.",
        },
      },
      {
        time: "11:00",
        title: { en: "Süleymaniye in depth", ar: "السليمانية بعمق" },
        description: {
          en: "Two hours inside the complex: structure, sound, soup kitchen, and the tomb of Sinan himself at the corner he chose.",
          ar: "ساعتان داخل المجمع: الإنشاء والصوت والتكية، وقبر سنان نفسه في الزاوية التي اختارها.",
        },
      },
      {
        time: "13:30",
        title: { en: "Lunch & Rüstem Pasha", ar: "الغداء ثم رستم باشا" },
        description: {
          en: "Lunch by the spice market, then the small mosque with the finest Iznik tiles ever fired.",
          ar: "الغداء قرب سوق التوابل، ثم الجامع الصغير صاحب أرقى خزف إزنيقي صُنع قط.",
        },
      },
      {
        time: "15:30",
        title: { en: "Blue Mosque — the students", ar: "الجامع الأزرق — التلاميذ" },
        description: {
          en: "Sinan's pupils built it after him. What they kept, what they changed, and 'Asr beneath the six minarets.",
          ar: "بناه تلاميذ سنان من بعده. ماذا حفظوا وماذا غيّروا، وصلاة العصر تحت المآذن الست.",
        },
      },
      {
        time: "16:30",
        title: { en: "Return", ar: "العودة" },
        description: {
          en: "Back to your hotel with an illustrated glossary of everything you learned to see.",
          ar: "العودة إلى الفندق ومعك معجم مصوّر لكل ما تعلمت رؤيته.",
        },
      },
    ],
    included: [
      { en: "Architecture-specialist guide", ar: "مرشد متخصص في العمارة" },
      { en: "Transport between mosques", ar: "التنقلات بين المساجد" },
      { en: "Lunch & tea", ar: "الغداء والشاي" },
      { en: "Illustrated architecture glossary", ar: "معجم معماري مصوّر" },
    ],
    notIncluded: [{ en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" }],
    scholarNote: {
      quote: {
        en: "Sinan hid his signature in geometry. Once you can read it, every dome in the city greets you by name.",
        ar: "أخفى سنان توقيعه في الهندسة. متى تعلمت قراءته، حيّتك كل قبة في المدينة باسمك.",
      },
      scholar: { en: "Kerem Aydın", ar: "كرم آيدن" },
      role: { en: "Architectural historian", ar: "مؤرخ معماري" },
    },
    faqs: [
      {
        q: { en: "I'm not an architect — will I follow?", ar: "لست معماريًا — هل سأفهم؟" },
        a: {
          en: "The tour assumes no background at all. Everything is taught by pointing at the building in front of you.",
          ar: "لا تفترض الرحلة أي خلفية. كل شيء يُشرح بالإشارة إلى المبنى أمامك.",
        },
      },
    ],
  },

  {
    slug: "constantinople-to-istanbul",
    category: "historic",
    city: "istanbul",
    title: { en: "Constantinople to Istanbul", ar: "من القسطنطينية إلى إسطنبول" },
    tagline: {
      en: "Hagia Sophia, Topkapı, and the layered heart of the old city",
      ar: "آيا صوفيا وتوبكابي وقلب المدينة القديمة متعدد الطبقات",
    },
    story: [
      {
        en: "One square kilometre of Sultanahmet holds a Roman hippodrome, a Byzantine cathedral, an Ottoman palace, and a covered market of four thousand shops. This journey excavates the layers in order — so the city stops being a collage and becomes a sequence.",
        ar: "كيلومتر مربع واحد في السلطان أحمد يضم ميدانًا رومانيًا وكاتدرائية بيزنطية وقصرًا عثمانيًا وسوقًا مسقوفًا بأربعة آلاف دكان. تنقّب هذه الرحلة في الطبقات بالترتيب — فتكفّ المدينة عن كونها لوحة ملصقات وتصير قصة متسلسلة.",
      },
      {
        en: "Hagia Sophia's fourteen centuries, the chambers of Topkapı where the Sacred Trusts are kept, the Basilica Cistern's forest of columns, and the Grand Bazaar as the Ottomans ran it — one unhurried, well-told day.",
        ar: "أربعة عشر قرنًا لآيا صوفيا، وأجنحة توبكابي حيث تُحفظ الأمانات المقدسة، وغابة أعمدة صهريج البازيليك، والبازار الكبير كما أداره العثمانيون — يوم واحد هادئ حسن الرواية.",
      },
    ],
    duration: { en: "Full day · 8 hours", ar: "يوم كامل · 8 ساعات" },
    durationDays: 1,
    groupSize: 12,
    languages: ["English", "العربية", "Türkçe"],
    price: 90,
    rating: 4.94,
    reviewCount: 231,
    image: img.hagiaInterior,
    gallery: [img.hagiaInterior, img.topkapiCeiling, img.grandBazaar, img.blueMosqueDay],
    highlights: [
      { en: "Hagia Sophia across three empires", ar: "آيا صوفيا عبر ثلاث إمبراطوريات" },
      { en: "Sacred Trusts at Topkapı Palace", ar: "الأمانات المقدسة في توبكابي" },
      { en: "Basilica Cistern", ar: "صهريج البازيليك" },
      { en: "Grand Bazaar with a historian", ar: "البازار الكبير مع مؤرخ" },
    ],
    sites: [
      { en: "Hagia Sophia", ar: "آيا صوفيا" },
      { en: "Topkapı Palace", ar: "قصر توبكابي" },
      { en: "Basilica Cistern", ar: "صهريج البازيليك" },
      { en: "Grand Bazaar", ar: "البازار الكبير" },
    ],
    itinerary: [
      {
        time: "09:00",
        title: { en: "Hagia Sophia", ar: "آيا صوفيا" },
        description: {
          en: "Justinian's dome, the Ottoman minbar, and the building's long conversation with itself.",
          ar: "قبة جستنيان، والمنبر العثماني، وحوار المبنى الطويل مع نفسه.",
        },
      },
      {
        time: "11:00",
        title: { en: "Topkapı & the Sacred Trusts", ar: "توبكابي والأمانات المقدسة" },
        description: {
          en: "Four courtyards of the house that ruled three continents, ending at the chamber of the Prophet's ﷺ relics, where the Qur'an has been recited without pause for five centuries.",
          ar: "أربعة أفنية للبيت الذي حكم ثلاث قارات، وننتهي عند جناح الآثار النبوية حيث يُتلى القرآن بلا انقطاع منذ خمسة قرون.",
        },
      },
      {
        time: "13:30",
        title: { en: "Lunch, then the Cistern", ar: "الغداء ثم الصهريج" },
        description: {
          en: "A cool descent into the sixth century — 336 columns holding up a lake.",
          ar: "نزول بارد إلى القرن السادس — 336 عمودًا تحمل بحيرة.",
        },
      },
      {
        time: "15:30",
        title: { en: "Grand Bazaar, read properly", ar: "البازار الكبير قراءةً صحيحة" },
        description: {
          en: "Hans, guilds, and the ethics of the Ottoman marketplace — then time to wander with a shopkeeper's map.",
          ar: "الخانات والطوائف الحرفية وأخلاق السوق العثماني — ثم وقت حر بخريطة أهل السوق.",
        },
      },
      {
        time: "17:00",
        title: { en: "Return", ar: "العودة" },
        description: {
          en: "Drive back through the old city walls.",
          ar: "العودة عبر أسوار المدينة القديمة.",
        },
      },
    ],
    included: [
      { en: "Licensed historian guide", ar: "مرشد مؤرخ مرخّص" },
      { en: "All entry tickets", ar: "جميع تذاكر الدخول" },
      { en: "Hotel pickup & transport", ar: "النقل من الفندق والمواصلات" },
      { en: "Lunch & tea", ar: "الغداء والشاي" },
    ],
    notIncluded: [
      { en: "Bazaar purchases", ar: "مشتريات البازار" },
      { en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" },
    ],
    scholarNote: {
      quote: {
        en: "Sultanahmet is a bookshelf where every empire left one volume. We simply read them in order.",
        ar: "السلطان أحمد رفّ كتب تركت عليه كل إمبراطورية مجلدًا. نحن فقط نقرؤها بالترتيب.",
      },
      scholar: { en: "Amina Demir", ar: "أمينة دمير" },
      role: { en: "Senior guide, Ottoman history", ar: "مرشدة أولى، التاريخ العثماني" },
    },
    faqs: [
      {
        q: { en: "Are tickets really all included?", ar: "هل التذاكر مشمولة فعلًا؟" },
        a: {
          en: "Yes — Hagia Sophia, Topkapı with the Sacred Trusts chamber, and the Basilica Cistern are all pre-booked by us.",
          ar: "نعم — آيا صوفيا وتوبكابي بجناح الأمانات وصهريج البازيليك جميعها محجوزة مسبقًا من قبلنا.",
        },
      },
    ],
  },

  {
    slug: "bursa-the-first-capital",
    category: "historic",
    city: "bursa",
    title: { en: "Bursa, the First Capital", ar: "بورصة، العاصمة الأولى" },
    tagline: {
      en: "Green mosques, silk roads, and the birthplace of the Ottomans",
      ar: "المساجد الخضراء وطرق الحرير ومهد العثمانيين",
    },
    story: [
      {
        en: "Before Istanbul, there was Bursa — the mountain city where the Ottomans learned to build. The Grand Mosque's twenty domes shelter a museum of calligraphy; the Green Tomb glows with the finest turquoise tilework in Anatolia; and the silk han still trades under Ottoman arches.",
        ar: "قبل إسطنبول كانت بورصة — مدينة الجبل التي تعلم فيها العثمانيون البناء. قباب الجامع الكبير العشرون تظلل متحفًا للخط العربي؛ والتربة الخضراء تتوهج بأرقى خزف فيروزي في الأناضول؛ وخان الحرير ما زال يتاجر تحت العقود العثمانية.",
      },
      {
        en: "A full-day crossing of the Sea of Marmara into the dynasty's first century: the tombs of Osman and Orhan, the Grand Mosque's 192 calligraphy panels, and thermal Bursa beneath Uludağ.",
        ar: "يوم كامل نعبر فيه بحر مرمرة إلى القرن الأول للسلالة: قبرا عثمان وأورخان، ولوحات الجامع الكبير الخطية المئة واثنتان وتسعون، وبورصة الحمّامات تحت جبل أولوداغ.",
      },
    ],
    duration: { en: "Full day · 12 hours", ar: "يوم كامل · 12 ساعة" },
    durationDays: 1,
    groupSize: 10,
    languages: ["English", "العربية"],
    price: 120,
    rating: 4.92,
    reviewCount: 98,
    image: img.yesilTurbe,
    gallery: [img.yesilTurbe, img.iznikPanel, img.mosqueSunrise],
    highlights: [
      { en: "Grand Mosque & its calligraphy museum", ar: "الجامع الكبير ومتحف خطوطه" },
      { en: "The Green Tomb of Mehmed I", ar: "التربة الخضراء لمحمد الأول" },
      { en: "Tombs of Osman & Orhan", ar: "قبرا عثمان وأورخان" },
      { en: "Silk bazaar in a 15th-century han", ar: "سوق الحرير في خان من القرن الخامس عشر" },
    ],
    sites: [
      { en: "Ulu Cami (Grand Mosque)", ar: "الجامع الكبير" },
      { en: "Green Mosque & Green Tomb", ar: "الجامع الأخضر والتربة الخضراء" },
      { en: "Tophane — Osman & Orhan", ar: "طوبهانة — عثمان وأورخان" },
      { en: "Koza Han silk market", ar: "خان القز للحرير" },
    ],
    itinerary: [
      {
        time: "07:00",
        title: { en: "Ferry across the Marmara", ar: "العبّارة عبر مرمرة" },
        description: {
          en: "Early crossing with breakfast on board and the dynasty's origin story told on the water.",
          ar: "عبور مبكر مع فطور على متن العبّارة وقصة نشأة السلالة تُروى على الماء.",
        },
      },
      {
        time: "10:00",
        title: { en: "Ulu Cami", ar: "الجامع الكبير" },
        description: {
          en: "Twenty domes, a fountain at the heart of the prayer hall, and walls that are a calligraphy exhibition five centuries old.",
          ar: "عشرون قبة، ونافورة في قلب المصلى، وجدران هي معرض خط عمره خمسة قرون.",
        },
      },
      {
        time: "12:00",
        title: { en: "Green Mosque & Green Tomb", ar: "الجامع الأخضر والتربة الخضراء" },
        description: {
          en: "Dhuhr, then the turquoise muqarnas portal that became the dynasty's signature.",
          ar: "الظهر، ثم بوابة المقرنصات الفيروزية التي صارت توقيع السلالة.",
        },
      },
      {
        time: "14:00",
        title: { en: "Iskender lunch & Koza Han", ar: "غداء إسكندر وخان القز" },
        description: {
          en: "Bursa's famous dish in its home city, then tea among the silk merchants.",
          ar: "طبق بورصة الشهير في مدينته، ثم شاي بين تجار الحرير.",
        },
      },
      {
        time: "16:00",
        title: { en: "Osman & Orhan at Tophane", ar: "عثمان وأورخان في طوبهانة" },
        description: {
          en: "The dynasty's founders overlooking the plain they set out from. 'Asr, then the ferry home.",
          ar: "مؤسسا السلالة يطلان على السهل الذي انطلقا منه. العصر ثم عبّارة العودة.",
        },
      },
    ],
    included: [
      { en: "Ferry tickets both ways", ar: "تذاكر العبّارة ذهابًا وإيابًا" },
      { en: "Scholar-trained guide", ar: "مرشد متخصص" },
      { en: "Breakfast & Iskender lunch", ar: "الفطور وغداء إسكندر" },
      { en: "All transport in Bursa", ar: "جميع التنقلات في بورصة" },
    ],
    notIncluded: [
      { en: "Uludağ cable car (optional, seasonal)", ar: "تلفريك أولوداغ (اختياري وموسمي)" },
      { en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" },
    ],
    scholarNote: {
      quote: {
        en: "Istanbul is the empire grown up. Bursa is its childhood home — and childhood homes explain everything.",
        ar: "إسطنبول هي الدولة وقد كبرت. وبورصة بيت طفولتها — وبيوت الطفولة تفسر كل شيء.",
      },
      scholar: { en: "Kerem Aydın", ar: "كرم آيدن" },
      role: { en: "Architectural historian", ar: "مؤرخ معماري" },
    },
    faqs: [
      {
        q: { en: "Is it a long day for children?", ar: "هل اليوم طويل على الأطفال؟" },
        a: {
          en: "It is a full day, but the ferry legs break it well. Children under 12 travel at half price and love the crossing.",
          ar: "اليوم كامل، لكن رحلتي العبّارة تقسمانه جيدًا. الأطفال دون 12 بنصف السعر ويحبون العبور.",
        },
      },
    ],
  },

  {
    slug: "konya-city-of-rumi",
    category: "educational",
    city: "konya",
    title: { en: "Konya, City of Rumi", ar: "قونية، مدينة الرومي" },
    tagline: {
      en: "The Mevlana, the Seljuks, and a night on the Anatolian plain",
      ar: "مولانا والسلاجقة وليلة في سهل الأناضول",
    },
    story: [
      {
        en: "Jalal al-Din Rumi fled the Mongols as a child and found refuge in Seljuk Konya — where he became Mevlana, 'our master', and where his mausoleum under the turquoise dome still receives millions who come to read him where he wrote.",
        ar: "فرّ جلال الدين الرومي من المغول طفلًا فوجد الملاذ في قونية السلجوقية — حيث صار «مولانا»، وحيث ما زال ضريحه تحت القبة الفيروزية يستقبل الملايين ممن يأتون ليقرؤوه حيث كتب.",
      },
      {
        en: "Two days by high-speed train: the Mevlana Museum and its manuscripts, the Seljuk madrasas with their carved portals, the oldest tiled mihrab in Anatolia — and an evening sema ceremony, explained beforehand so you watch it with understanding rather than curiosity.",
        ar: "يومان بالقطار السريع: متحف مولانا ومخطوطاته، ومدارس السلاجقة ببواباتها المنحوتة، وأقدم محراب مبلّط في الأناضول — وأمسية سماع تُشرح قبلها لتشاهدها بفهم لا بفضول.",
      },
    ],
    duration: { en: "2 days · 1 night", ar: "يومان · ليلة واحدة" },
    durationDays: 2,
    groupSize: 10,
    languages: ["English", "العربية"],
    price: 240,
    rating: 4.9,
    reviewCount: 76,
    image: img.mevlana,
    gallery: [img.mevlana, img.dervishes, img.cappadocia],
    highlights: [
      { en: "Mevlana Museum & the turquoise dome", ar: "متحف مولانا والقبة الفيروزية" },
      { en: "Seljuk madrasas & the Alaeddin Mosque", ar: "مدارس السلاجقة وجامع علاء الدين" },
      { en: "Evening sema, properly explained", ar: "سماع مسائي بشرح وافٍ" },
      { en: "High-speed rail across Anatolia", ar: "قطار سريع عبر الأناضول" },
    ],
    sites: [
      { en: "Mevlana Museum", ar: "متحف مولانا" },
      { en: "Alaeddin Mosque", ar: "جامع علاء الدين" },
      { en: "Karatay & İnce Minareli madrasas", ar: "مدرستا قره طاي وإنجه منارلي" },
    ],
    itinerary: [
      {
        time: "Day 1 · 08:00",
        title: { en: "Rail to Konya", ar: "القطار إلى قونية" },
        description: {
          en: "Four hours across the plain with a seminar on Rumi's life — Balkh to Konya, and the meeting with Shams.",
          ar: "أربع ساعات عبر السهل مع درس في سيرة الرومي — من بلخ إلى قونية، ولقاء شمس.",
        },
      },
      {
        time: "Day 1 · 14:00",
        title: { en: "Mevlana Museum", ar: "متحف مولانا" },
        description: {
          en: "The mausoleum, the earliest Masnavi manuscripts, and the dervish cells around the courtyard.",
          ar: "الضريح، وأقدم مخطوطات المثنوي، وحجرات الدراويش حول الفناء.",
        },
      },
      {
        time: "Day 1 · 20:00",
        title: { en: "Sema ceremony", ar: "حفل السماع" },
        description: {
          en: "A pre-ceremony talk on what the sema is — and is not — then the whirling itself.",
          ar: "حديث قبل الحفل عما هو السماع — وما ليس هو — ثم الدوران نفسه.",
        },
      },
      {
        time: "Day 2 · 09:30",
        title: { en: "Seljuk Konya on foot", ar: "قونية السلجوقية سيرًا" },
        description: {
          en: "Alaeddin hill, the carved portals of the madrasas, and the tile collections.",
          ar: "تلة علاء الدين، والبوابات المنحوتة للمدارس، ومجموعات الخزف.",
        },
      },
      {
        time: "Day 2 · 17:00",
        title: { en: "Return rail to Istanbul", ar: "قطار العودة إلى إسطنبول" },
        description: {
          en: "Back by evening with a bilingual Rumi anthology in your bag.",
          ar: "نعود مساءً وفي حقيبتك مختارات ثنائية اللغة من الرومي.",
        },
      },
    ],
    included: [
      { en: "High-speed rail both ways", ar: "القطار السريع ذهابًا وإيابًا" },
      { en: "4★ hotel night with breakfast", ar: "ليلة في فندق 4★ مع فطور" },
      { en: "All meals & sema tickets", ar: "جميع الوجبات وتذاكر السماع" },
      { en: "Scholar guide throughout", ar: "مرشد عالم طوال الرحلة" },
    ],
    notIncluded: [{ en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" }],
    scholarNote: {
      quote: {
        en: "People arrive quoting Rumi from the internet and leave having read him in Konya. The difference is the whole journey.",
        ar: "يصل الناس يقتبسون الرومي من الإنترنت، ويغادرون وقد قرؤوه في قونية. الفرق هو الرحلة كلها.",
      },
      scholar: { en: "Dr. Yusuf Karahan", ar: "د. يوسف قرهان" },
      role: { en: "Head of Research, Miras", ar: "رئيس البحث العلمي، ميراث" },
    },
    faqs: [
      {
        q: { en: "Is the sema a religious act or a performance?", ar: "هل السماع عبادة أم عرض؟" },
        a: {
          en: "Historically an act of dhikr of the Mevlevi order; today's public ceremonies are respectful presentations. Our pre-talk covers exactly this question honestly.",
          ar: "تاريخيًا هو ذكر عند الطريقة المولوية؛ والعروض العامة اليوم تقديم محترم له. حديثنا التمهيدي يتناول هذا السؤال بصدق.",
        },
      },
    ],
  },

  {
    slug: "cappadocia-faith-in-the-rock",
    category: "family",
    city: "cappadocia",
    title: { en: "Cappadocia: Faith in the Rock", ar: "كبادوكيا: الإيمان في الصخر" },
    tagline: {
      en: "Balloons at dawn, cave settlements, and Seljuk caravanserais",
      ar: "مناطيد الفجر ومدن الكهوف وخانات السلاجقة",
    },
    story: [
      {
        en: "Cappadocia's valleys hide underground cities eight floors deep and a thousand years of travelers' prayers. The Seljuks strung caravanserais across this plain a day's camel-ride apart — fortress-inns where merchants from three continents slept under one roof, fed free for three days by imperial decree.",
        ar: "تخفي وديان كبادوكيا مدنًا تحت الأرض بعمق ثمانية طوابق وألف عام من دعوات المسافرين. مدّ السلاجقة الخانات عبر هذا السهل على مسافة يوم بالجِمال — نُزُل محصّنة نام فيها تجار ثلاث قارات تحت سقف واحد، يُطعمون مجانًا ثلاثة أيام بمرسوم سلطاني.",
      },
      {
        en: "Two days for families: a dawn balloon over the valleys, the underground city of Derinkuyu, Sultanhanı caravanserai, and evenings in a cave hotel — history taught at a pace children genuinely enjoy.",
        ar: "يومان للعائلات: منطاد فجرًا فوق الوديان، ومدينة درينكويو تحت الأرض، وخان سلطان هاني، وأمسيات في فندق كهفي — تاريخ يُروى بإيقاع يستمتع به الأطفال حقًا.",
      },
    ],
    duration: { en: "2 days · 1 night", ar: "يومان · ليلة واحدة" },
    durationDays: 2,
    groupSize: 12,
    languages: ["English", "العربية"],
    price: 290,
    rating: 4.93,
    reviewCount: 112,
    image: img.cappadocia,
    gallery: [img.cappadocia, img.kaputas, img.mosqueSunrise],
    highlights: [
      { en: "Sunrise balloon over the valleys", ar: "منطاد الشروق فوق الوديان" },
      { en: "Derinkuyu underground city", ar: "مدينة درينكويو تحت الأرض" },
      { en: "Sultanhanı Seljuk caravanserai", ar: "خان سلطان هاني السلجوقي" },
      { en: "Cave hotel night", ar: "ليلة في فندق كهفي" },
    ],
    sites: [
      { en: "Göreme valleys", ar: "وديان غوريمه" },
      { en: "Derinkuyu", ar: "درينكويو" },
      { en: "Sultanhanı caravanserai", ar: "خان سلطان هاني" },
    ],
    itinerary: [
      {
        time: "Day 1 · 05:30",
        title: { en: "Balloon at first light", ar: "المنطاد مع أول الضوء" },
        description: {
          en: "One hour above the valleys as the sun rises over the plain (weather permitting; full refund otherwise).",
          ar: "ساعة فوق الوديان مع شروق الشمس (حسب الطقس؛ واسترداد كامل عند الإلغاء).",
        },
      },
      {
        time: "Day 1 · 10:00",
        title: { en: "Göreme & the valleys", ar: "غوريمه والوديان" },
        description: {
          en: "Walk the rock landscape and its carved settlements, with the region's story from Rome to the Seljuks.",
          ar: "مشي في المشهد الصخري ومساكنه المنحوتة، مع قصة الإقليم من روما إلى السلاجقة.",
        },
      },
      {
        time: "Day 2 · 09:00",
        title: { en: "Derinkuyu underground city", ar: "مدينة درينكويو" },
        description: {
          en: "Eight floors into the earth: ventilation shafts, rolling stone doors, and the communities that sheltered here.",
          ar: "ثمانية طوابق في باطن الأرض: أعمدة تهوية وأبواب حجرية دوّارة والمجتمعات التي احتمت هنا.",
        },
      },
      {
        time: "Day 2 · 13:00",
        title: { en: "Sultanhanı caravanserai", ar: "خان سلطان هاني" },
        description: {
          en: "The greatest of the Seljuk road-inns, and the waqf economics that fed every traveler free.",
          ar: "أعظم خانات الطريق السلجوقية، واقتصاد الوقف الذي أطعم كل مسافر مجانًا.",
        },
      },
      {
        time: "Day 2 · 18:00",
        title: { en: "Fly back to Istanbul", ar: "طيران العودة إلى إسطنبول" },
        description: {
          en: "Evening flight home, sketchbooks full.",
          ar: "رحلة مسائية والعودة ودفاتر الرسم ممتلئة.",
        },
      },
    ],
    included: [
      { en: "Domestic flights both ways", ar: "الطيران الداخلي ذهابًا وإيابًا" },
      { en: "Balloon flight & insurance", ar: "رحلة المنطاد والتأمين" },
      { en: "Cave hotel & all meals", ar: "الفندق الكهفي وجميع الوجبات" },
      { en: "Family-specialist guide", ar: "مرشد متخصص بالعائلات" },
    ],
    notIncluded: [{ en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" }],
    scholarNote: {
      quote: {
        en: "The caravanserai is Islamic civilisation in one building: security, hospitality, and trade — endowed forever.",
        ar: "الخان هو الحضارة الإسلامية في مبنى واحد: أمن وضيافة وتجارة — وقفًا مؤبدًا.",
      },
      scholar: { en: "Amina Demir", ar: "أمينة دمير" },
      role: { en: "Senior guide", ar: "مرشدة أولى" },
    },
    faqs: [
      {
        q: { en: "Is the balloon safe for children?", ar: "هل المنطاد آمن للأطفال؟" },
        a: {
          en: "Children from age 6 fly with licensed operators we have used for years; younger children enjoy the sunrise from the terrace with one of our team.",
          ar: "الأطفال من سن 6 يطيرون مع مشغلين مرخصين نتعامل معهم منذ سنوات؛ والأصغر يستمتعون بالشروق من الشرفة مع أحد فريقنا.",
        },
      },
    ],
  },

  {
    slug: "bosphorus-heritage-cruise",
    category: "family",
    city: "istanbul",
    title: { en: "Bosphorus Heritage Cruise", ar: "رحلة التراث في البوسفور" },
    tagline: {
      en: "The city's story told from the water, ending at sunset",
      ar: "قصة المدينة تُروى من الماء وتنتهي عند الغروب",
    },
    story: [
      {
        en: "Istanbul was designed to be seen from the water. The sultans commuted by caïque; the skyline of domes and minarets was composed for the deck of a boat. This half-day cruise reads the shoreline like a scroll — fortresses, waterfront mosques, and the wooden yalıs of the Ottoman elite.",
        ar: "صُممت إسطنبول لتُرى من الماء. كان السلاطين يتنقلون بالقوارب؛ وأفق القباب والمآذن أُلّف ليُشاهد من سطح مركب. تقرأ هذه الرحلة النصف يومية الساحل كما يُقرأ مخطوط — قلاع ومساجد على الماء ويالات العثمانيين الخشبية.",
      },
      {
        en: "A gentle option for families, first evenings, and tired feet — ending with the sunset call to prayer echoing between two continents.",
        ar: "خيار هادئ للعائلات والأمسيات الأولى والأقدام المتعبة — ينتهي مع أذان المغرب يتردد بين قارتين.",
      },
    ],
    duration: { en: "Half day · 4 hours", ar: "نصف يوم · 4 ساعات" },
    durationDays: 0.5,
    groupSize: 16,
    languages: ["English", "العربية", "Türkçe"],
    price: 55,
    rating: 4.9,
    reviewCount: 168,
    image: img.bosphorus,
    gallery: [img.bosphorus, img.galataBirds, img.mosqueTwilight],
    highlights: [
      { en: "Private boat, both shores", ar: "مركب خاص وضفّتان" },
      { en: "Rumeli Fortress from the water", ar: "قلعة روملي من الماء" },
      { en: "Ottoman yalıs & waterfront mosques", ar: "اليالات العثمانية ومساجد الواجهة" },
      { en: "Sunset adhan on deck", ar: "أذان المغرب على السطح" },
    ],
    sites: [
      { en: "Golden Horn", ar: "القرن الذهبي" },
      { en: "Rumeli Hisarı", ar: "قلعة روملي حصار" },
      { en: "Ortaköy & Üsküdar shores", ar: "ساحلا أورتاكوي وأوسكودار" },
    ],
    itinerary: [
      {
        time: "15:00",
        title: { en: "Board at Eminönü", ar: "الصعود من أمينونو" },
        description: {
          en: "Tea served as we slip past the New Mosque and under Galata Bridge.",
          ar: "يُقدَّم الشاي ونحن نمر بالجامع الجديد وتحت جسر غلطة.",
        },
      },
      {
        time: "16:00",
        title: { en: "The straits & Rumeli Fortress", ar: "المضيق وقلعة روملي" },
        description: {
          en: "The fortress Mehmed built in four months, and the chain the Byzantines stretched across the water.",
          ar: "القلعة التي بناها محمد الفاتح في أربعة أشهر، والسلسلة التي مدّها البيزنطيون عبر الماء.",
        },
      },
      {
        time: "18:00",
        title: { en: "Sunset between continents", ar: "الغروب بين القارتين" },
        description: {
          en: "Anchored mid-strait for the maghrib adhan from both shores, with Turkish coffee and dessert.",
          ar: "نرسو وسط المضيق لأذان المغرب من الضفتين، مع قهوة تركية وحلوى.",
        },
      },
      {
        time: "19:00",
        title: { en: "Return to Eminönü", ar: "العودة إلى أمينونو" },
        description: {
          en: "Dock as the city lights come on.",
          ar: "نرسو والمدينة تضيء أنوارها.",
        },
      },
    ],
    included: [
      { en: "Private boat charter", ar: "مركب خاص" },
      { en: "Guide narration (EN/AR/TR)", ar: "شرح المرشد (إنجليزي/عربي/تركي)" },
      { en: "Tea, coffee & dessert", ar: "الشاي والقهوة والحلوى" },
    ],
    notIncluded: [
      { en: "Hotel transfer (walkable meeting point)", ar: "النقل من الفندق (نقطة اللقاء قريبة سيرًا)" },
      { en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" },
    ],
    scholarNote: {
      quote: {
        en: "From the deck you finally understand why every conqueror wanted this city: it is a throne with water on three sides.",
        ar: "من سطح المركب تفهم أخيرًا لماذا أراد كل فاتح هذه المدينة: إنها عرش يحيط به الماء من ثلاث جهات.",
      },
      scholar: { en: "Kerem Aydın", ar: "كرم آيدن" },
      role: { en: "Architectural historian", ar: "مؤرخ معماري" },
    },
    faqs: [
      {
        q: { en: "Is the boat suitable for strollers and wheelchairs?", ar: "هل المركب مناسب للعربات والكراسي المتحركة؟" },
        a: {
          en: "Yes — boarding is by wide gangway and the main deck is step-free. Tell us in advance and the crew will assist.",
          ar: "نعم — الصعود عبر ممر عريض والسطح الرئيسي بلا درجات. أخبرنا مسبقًا وسيساعدك الطاقم.",
        },
      },
    ],
  },

  {
    slug: "edirne-city-of-the-frontier",
    category: "ottoman",
    city: "edirne",
    title: { en: "Edirne, City of the Frontier", ar: "أدرنة، مدينة الثغور" },
    tagline: {
      en: "Selimiye — the building Sinan called his masterpiece",
      ar: "السليمية — البناء الذي سماه سنان تحفته",
    },
    story: [
      {
        en: "For ninety years before the conquest of Constantinople, Edirne was the Ottoman capital — and it kept the empire's finest building. At eighty, Sinan raised the Selimiye's dome wider than Hagia Sophia's and wrote: 'In this mosque, with Allah's help, I showed my full strength.'",
        ar: "تسعين عامًا قبل فتح القسطنطينية كانت أدرنة عاصمة العثمانيين — وبقي فيها أجمل مبانيهم. في الثمانين من عمره رفع سنان قبة السليمية أوسع من قبة آيا صوفيا وكتب: «في هذا الجامع، بعون الله، أظهرت كامل قوتي».",
      },
      {
        en: "A day on the old military road to the Balkans: the Selimiye and its calligraphy, the Old Mosque's giant inscriptions, the medical museum of the Bayezid II complex — where music and running water treated the ill five centuries ago.",
        ar: "يوم على طريق البلقان العسكري القديم: السليمية وخطوطها، والكتابات العملاقة للجامع القديم، ومتحف الطب في مجمع بايزيد الثاني — حيث عولج المرضى بالموسيقى والماء الجاري قبل خمسة قرون.",
      },
    ],
    duration: { en: "Full day · 10 hours", ar: "يوم كامل · 10 ساعات" },
    durationDays: 1,
    groupSize: 10,
    languages: ["English", "العربية"],
    price: 105,
    rating: 4.91,
    reviewCount: 64,
    image: img.selimiye,
    gallery: [img.selimiye, img.iznikPanel, img.blueMosqueDay],
    highlights: [
      { en: "Selimiye Mosque — Sinan's masterpiece", ar: "جامع السليمية — تحفة سنان" },
      { en: "Bayezid II medical complex", ar: "مجمع بايزيد الثاني الطبي" },
      { en: "Old Mosque calligraphy", ar: "خطوط الجامع العتيق" },
      { en: "Meriç riverside lunch", ar: "غداء على نهر مريج" },
    ],
    sites: [
      { en: "Selimiye Mosque", ar: "جامع السليمية" },
      { en: "Old Mosque (Eski Cami)", ar: "الجامع العتيق" },
      { en: "Bayezid II Külliye", ar: "كلية بايزيد الثاني" },
    ],
    itinerary: [
      {
        time: "08:00",
        title: { en: "Drive to Edirne", ar: "الانطلاق إلى أدرنة" },
        description: {
          en: "Westward on the old campaign road, with the story of the frontier capital.",
          ar: "غربًا على طريق الحملات القديم، مع قصة عاصمة الثغور.",
        },
      },
      {
        time: "10:30",
        title: { en: "Selimiye in depth", ar: "السليمية بعمق" },
        description: {
          en: "Two hours under the widest Ottoman dome: structure, light, and the master's own words. Dhuhr in congregation.",
          ar: "ساعتان تحت أوسع قبة عثمانية: الإنشاء والضوء وكلمات المعلم نفسه. والظهر جماعةً.",
        },
      },
      {
        time: "13:00",
        title: { en: "Riverside lunch & Old Mosque", ar: "غداء على النهر والجامع العتيق" },
        description: {
          en: "Fried liver the Edirne way, then the giant calligraphy of Eski Cami.",
          ar: "الكبد المقلي على طريقة أدرنة، ثم الخطوط العملاقة للجامع العتيق.",
        },
      },
      {
        time: "15:00",
        title: { en: "Bayezid II medical museum", ar: "متحف الطب في مجمع بايزيد" },
        description: {
          en: "The hospital where sound, scent, and water were medicine — Ottoman healthcare at its most humane.",
          ar: "المستشفى حيث كان الصوت والعطر والماء دواءً — الطب العثماني في أرحم صوره.",
        },
      },
      {
        time: "18:00",
        title: { en: "Return to Istanbul", ar: "العودة إلى إسطنبول" },
        description: {
          en: "Back by evening.",
          ar: "نعود مساءً.",
        },
      },
    ],
    included: [
      { en: "Private transport both ways", ar: "مواصلات خاصة ذهابًا وإيابًا" },
      { en: "Scholar-trained guide", ar: "مرشد متخصص" },
      { en: "Riverside lunch", ar: "الغداء على النهر" },
      { en: "Museum tickets", ar: "تذاكر المتاحف" },
    ],
    notIncluded: [{ en: "Gratuities (optional)", ar: "الإكراميات (اختيارية)" }],
    scholarNote: {
      quote: {
        en: "Architects still argue about the Selimiye dome. Sinan settled the argument four centuries ago — in stone.",
        ar: "ما زال المعماريون يتجادلون حول قبة السليمية. حسم سنان الجدال قبل أربعة قرون — بالحجر.",
      },
      scholar: { en: "Kerem Aydın", ar: "كرم آيدن" },
      role: { en: "Architectural historian", ar: "مؤرخ معماري" },
    },
    faqs: [
      {
        q: { en: "How long is the drive?", ar: "كم تستغرق الطريق؟" },
        a: {
          en: "About 2.5 hours each way in a comfortable vehicle, with a rest stop. The guide teaches on the road, so the time works for you.",
          ar: "نحو ساعتين ونصف لكل اتجاه في مركبة مريحة مع استراحة. المرشد يحاضر في الطريق فيعمل الوقت لصالحك.",
        },
      },
    ],
  },
];

export const featuredTours = tours.filter((t) => t.featured);

export function getTour(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export function toursByCity(city: string): Tour[] {
  return tours.filter((t) => t.city === city);
}
