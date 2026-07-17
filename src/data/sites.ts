import type { HeritageSite } from "./types";

/**
 * Points on the illustrated Istanbul heritage map.
 * Coordinates are percentages of the map canvas (x from left, y from top),
 * arranged to echo the city's real geography: Golden Horn diagonal,
 * old city south-west of it, Galata north, Üsküdar east across the Bosphorus.
 */
export const heritageSites: HeritageSite[] = [
  {
    id: "eyup-sultan",
    type: "shrine",
    name: { en: "Eyüp Sultan Mosque", ar: "جامع أيوب سلطان" },
    district: { en: "Eyüp", ar: "أيوب" },
    blurb: {
      en: "Tomb of Abu Ayyub al-Ansari, host of the Prophet ﷺ — the spiritual anchor of the city.",
      ar: "ضريح أبي أيوب الأنصاري، مضيف النبي ﷺ — المرسى الروحي للمدينة.",
    },
    x: 14,
    y: 22,
    tourSlugs: ["footsteps-of-the-companions"],
  },
  {
    id: "fatih-mosque",
    type: "mosque",
    name: { en: "Fatih Mosque", ar: "جامع الفاتح" },
    district: { en: "Fatih", ar: "الفاتح" },
    blurb: {
      en: "Burial place of Mehmed the Conqueror, built on the city's fourth hill.",
      ar: "مثوى محمد الفاتح، مبني على التلة الرابعة للمدينة.",
    },
    x: 30,
    y: 46,
    tourSlugs: ["tombs-of-the-sultans"],
  },
  {
    id: "suleymaniye",
    type: "mosque",
    name: { en: "Süleymaniye Mosque", ar: "جامع السليمانية" },
    district: { en: "Süleymaniye", ar: "السليمانية" },
    blurb: {
      en: "Sinan's Istanbul masterpiece, crowning the third hill with the tombs of Süleyman and Hürrem.",
      ar: "تحفة سنان في إسطنبول تتوج التلة الثالثة، وفيها تربتا سليمان وخُرّم.",
    },
    x: 44,
    y: 40,
    tourSlugs: ["tombs-of-the-sultans", "sinan-and-the-imperial-mosques"],
  },
  {
    id: "underground-mosque",
    type: "shrine",
    name: { en: "Underground Mosque", ar: "المسجد تحت الأرض" },
    district: { en: "Karaköy", ar: "كاراكوي" },
    blurb: {
      en: "Low vaulted chambers by the old harbour holding maqams of the first sieges.",
      ar: "قاعات معقودة منخفضة عند الميناء القديم تضم مقامات من الحصارات الأولى.",
    },
    x: 60,
    y: 30,
    tourSlugs: ["footsteps-of-the-companions"],
  },
  {
    id: "grand-bazaar",
    type: "market",
    name: { en: "Grand Bazaar", ar: "البازار الكبير" },
    district: { en: "Beyazıt", ar: "بايزيد" },
    blurb: {
      en: "Four thousand shops under Ottoman vaults — the Silk Road's western terminus.",
      ar: "أربعة آلاف دكان تحت العقود العثمانية — المحطة الغربية لطريق الحرير.",
    },
    x: 50,
    y: 55,
    tourSlugs: ["constantinople-to-istanbul"],
  },
  {
    id: "topkapi",
    type: "palace",
    name: { en: "Topkapı Palace", ar: "قصر توبكابي" },
    district: { en: "Sarayburnu", ar: "رأس السراي" },
    blurb: {
      en: "Seat of the sultans and home of the Sacred Trusts, where recitation has never paused.",
      ar: "مقر السلاطين وموطن الأمانات المقدسة حيث لم تتوقف التلاوة قط.",
    },
    x: 72,
    y: 48,
    tourSlugs: ["constantinople-to-istanbul", "tombs-of-the-sultans"],
  },
  {
    id: "hagia-sophia",
    type: "mosque",
    name: { en: "Hagia Sophia", ar: "آيا صوفيا" },
    district: { en: "Sultanahmet", ar: "السلطان أحمد" },
    blurb: {
      en: "Fourteen centuries under one dome — cathedral, mosque, and the city's oldest witness.",
      ar: "أربعة عشر قرنًا تحت قبة واحدة — كاتدرائية فجامع وأقدم شهود المدينة.",
    },
    x: 66,
    y: 60,
    tourSlugs: ["constantinople-to-istanbul", "tombs-of-the-sultans"],
  },
  {
    id: "blue-mosque",
    type: "mosque",
    name: { en: "Blue Mosque", ar: "الجامع الأزرق" },
    district: { en: "Sultanahmet", ar: "السلطان أحمد" },
    blurb: {
      en: "Twenty thousand Iznik tiles and six minarets facing Hagia Sophia across the square.",
      ar: "عشرون ألف بلاطة إزنيقية وست مآذن تقابل آيا صوفيا عبر الميدان.",
    },
    x: 62,
    y: 72,
    tourSlugs: ["tombs-of-the-sultans", "sinan-and-the-imperial-mosques"],
  },
  {
    id: "hudayi",
    type: "shrine",
    name: { en: "Aziz Mahmud Hüdayi", ar: "عزيز محمود هدائي" },
    district: { en: "Üsküdar", ar: "أوسكودار" },
    blurb: {
      en: "The judge who became a saint — his foundation still feeds visitors daily.",
      ar: "القاضي الذي صار وليًا — وقفه ما زال يطعم زواره يوميًا.",
    },
    x: 88,
    y: 58,
    tourSlugs: ["saints-of-istanbul"],
  },
];
