import type { Guide, Review } from "./types";

export const guides: Guide[] = [
  {
    slug: "yusuf-karahan",
    name: { en: "Dr. Yusuf Karahan", ar: "د. يوسف قرهان" },
    initials: "YK",
    role: { en: "Head of Research · Islamic history", ar: "رئيس البحث العلمي · التاريخ الإسلامي" },
    bio: {
      en: "Doctorate in early Islamic history from Marmara University; spent six years cataloguing Companion-era sites along the Theodosian walls. Reads the classical sources aloud, in place, on every Sahaba journey.",
      ar: "دكتوراه في التاريخ الإسلامي المبكر من جامعة مرمرة؛ أمضى ست سنوات في توثيق مواقع عصر الصحابة على امتداد الأسوار. يقرأ المصادر الكلاسيكية بصوت عالٍ، في مكانها، في كل رحلة صحابة.",
    },
    languages: ["العربية", "English", "Türkçe"],
    expertise: { en: "Sahaba history · sīrah · ziyarah etiquette", ar: "تاريخ الصحابة · السيرة · أدب الزيارة" },
    years: 14,
    favoriteSite: { en: "Eyüp Sultan at dawn", ar: "أيوب سلطان فجرًا" },
  },
  {
    slug: "amina-demir",
    name: { en: "Amina Demir", ar: "أمينة دمير" },
    initials: "AD",
    role: { en: "Senior guide · Ottoman history", ar: "مرشدة أولى · التاريخ العثماني" },
    bio: {
      en: "Trained in Ottoman Turkish and archival studies; formerly a researcher at the Süleymaniye Library. Known for reading sultans' endowment deeds at the sites they funded — and for making dynastic history feel like family history.",
      ar: "متخصصة في التركية العثمانية والدراسات الأرشيفية؛ باحثة سابقة في مكتبة السليمانية. معروفة بقراءة وقفيات السلاطين في المواقع التي موّلتها — وبجعل تاريخ السلالة يُحسّ كتاريخ عائلة.",
    },
    languages: ["Türkçe", "English", "العربية"],
    expertise: { en: "Ottoman dynasty · waqf archives · Topkapı", ar: "السلالة العثمانية · وثائق الأوقاف · توبكابي" },
    years: 11,
    favoriteSite: { en: "Süleymaniye at 'Asr", ar: "السليمانية وقت العصر" },
  },
  {
    slug: "kerem-aydin",
    name: { en: "Kerem Aydın", ar: "كرم آيدن" },
    initials: "KA",
    role: { en: "Architectural historian", ar: "مؤرخ معماري" },
    bio: {
      en: "Architect by training, historian by devotion. Wrote his thesis on Sinan's acoustic engineering and has walked every Sinan building still standing in Türkiye. Carries a sketchbook and leaves each guest with a drawing.",
      ar: "معماري بالتكوين ومؤرخ بالشغف. كتب أطروحته عن هندسة سنان الصوتية وزار كل مبانيه القائمة في تركيا. يحمل دفتر رسم ويترك لكل ضيف رسمة.",
    },
    languages: ["Türkçe", "English"],
    expertise: { en: "Sinan · mosque architecture · calligraphy", ar: "سنان · عمارة المساجد · الخط" },
    years: 9,
    favoriteSite: { en: "Selimiye's central dome", ar: "قبة السليمية الكبرى" },
  },
  {
    slug: "maryam-osman",
    name: { en: "Maryam Osman", ar: "مريم عثمان" },
    initials: "MO",
    role: { en: "Family journeys lead", ar: "مسؤولة الرحلات العائلية" },
    bio: {
      en: "Former history teacher who designs our family itineraries — treasure-hunt worksheets, story stops, and pacing that respects small legs and short attention spans without diluting the history.",
      ar: "معلمة تاريخ سابقة تصمم برامجنا العائلية — أوراق بحث عن الكنز ومحطات قصص وإيقاع يراعي الأرجل الصغيرة دون تمييع التاريخ.",
    },
    languages: ["English", "العربية", "Türkçe"],
    expertise: { en: "Family & educational journeys", ar: "الرحلات العائلية والتعليمية" },
    years: 8,
    favoriteSite: { en: "Rumeli Fortress ramparts", ar: "أسوار قلعة روملي" },
  },
];

export const reviews: Review[] = [
  {
    name: { en: "Fatima Al-Zahrani", ar: "فاطمة الزهراني" },
    country: { en: "Saudi Arabia", ar: "السعودية" },
    tourSlug: "footsteps-of-the-companions",
    quote: {
      en: "I have performed Umrah many times, but standing at the grave of Abu Ayyub — the man who hosted the Prophet ﷺ — while the guide read his story from the sources… I wept. This is not tourism. It is something else entirely.",
      ar: "اعتمرت مرات كثيرة، لكن الوقوف عند قبر أبي أيوب — الرجل الذي استضاف النبي ﷺ — بينما يقرأ المرشد سيرته من المصادر… بكيت. هذه ليست سياحة. هذا شيء آخر تمامًا.",
    },
    highlight: { en: "The sīrah reading at Eyüp Sultan", ar: "قراءة السيرة عند أيوب سلطان" },
    rating: 5,
  },
  {
    name: { en: "Ibrahim & Aisha Khan", ar: "إبراهيم وعائشة خان" },
    country: { en: "United Kingdom", ar: "المملكة المتحدة" },
    tourSlug: "cappadocia-faith-in-the-rock",
    quote: {
      en: "Our children (9 and 12) still talk about the underground city and the caravanserai 'free hotel rule'. Maryam turned every stop into a story. The first holiday where nobody asked for the iPad.",
      ar: "ما زال طفلانا (9 و12) يتحدثان عن المدينة تحت الأرض وقاعدة «الفندق المجاني» في الخان. حوّلت مريم كل محطة إلى قصة. أول عطلة لا يطلب فيها أحد الآيباد.",
    },
    highlight: { en: "Derinkuyu with the kids", ar: "درينكويو مع الأطفال" },
    rating: 5,
  },
  {
    name: { en: "Ahmed Benali", ar: "أحمد بن علي" },
    country: { en: "Morocco", ar: "المغرب" },
    tourSlug: "tombs-of-the-sultans",
    quote: {
      en: "Amina read Süleyman's own waqf deed in front of the soup kitchen it founded — which still feeds people today. Four centuries of continuity in one moment. Extraordinary depth.",
      ar: "قرأت أمينة وقفية سليمان القانوني أمام التكية التي أسستها — وما زالت تطعم الناس اليوم. أربعة قرون من الاستمرار في لحظة واحدة. عمقٌ استثنائي.",
    },
    highlight: { en: "The living waqf at Süleymaniye", ar: "الوقف الحي في السليمانية" },
    rating: 5,
  },
  {
    name: { en: "Sarah Mitchell", ar: "سارة ميتشل" },
    country: { en: "United States", ar: "الولايات المتحدة" },
    tourSlug: "constantinople-to-istanbul",
    quote: {
      en: "I'm a history teacher and a new Muslim. This was the first tour I've taken where every claim came with a source — and where the guide said 'historians disagree here' instead of inventing certainty. Rare honesty.",
      ar: "أنا معلمة تاريخ ومسلمة جديدة. هذه أول جولة أشارك فيها يُذكر فيها المصدر مع كل معلومة — ويقول فيها المرشد «يختلف المؤرخون هنا» بدل اختراع اليقين. صدقٌ نادر.",
    },
    highlight: { en: "The Sacred Trusts chamber", ar: "جناح الأمانات المقدسة" },
    rating: 5,
  },
  {
    name: { en: "Omar Farouk", ar: "عمر فاروق" },
    country: { en: "Malaysia", ar: "ماليزيا" },
    tourSlug: "konya-city-of-rumi",
    quote: {
      en: "The pre-sema talk changed everything. I would have watched a show; instead I understood a tradition. Reading the Masnavi's first page beside Rumi's tomb is a memory I will keep for life.",
      ar: "الحديث التمهيدي قبل السماع غيّر كل شيء. كنت سأشاهد عرضًا؛ فإذا بي أفهم تقليدًا. قراءة أول صفحة من المثنوي بجوار ضريح الرومي ذكرى سأحملها العمر كله.",
    },
    highlight: { en: "The sema, understood", ar: "السماع مفهومًا" },
    rating: 5,
  },
  {
    name: { en: "Leila Haddad", ar: "ليلى حداد" },
    country: { en: "Jordan", ar: "الأردن" },
    tourSlug: "bosphorus-heritage-cruise",
    quote: {
      en: "We booked the cruise for our parents who tire quickly. Sunset adhan from both shores while anchored mid-strait — my mother said it was the most beautiful hour of the whole trip.",
      ar: "حجزنا الرحلة البحرية لوالدينا اللذين يتعبان سريعًا. أذان المغرب من الضفتين ونحن راسون وسط المضيق — قالت أمي إنها أجمل ساعة في الرحلة كلها.",
    },
    highlight: { en: "Maghrib between two continents", ar: "المغرب بين قارتين" },
    rating: 5,
  },
];
