/**
 * Verified image registry. Every URL here was checked live (HTTP 200 and
 * visually reviewed) before being assigned to a subject.
 */

const unsplash = (id: string, extra = "") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=1600${extra}`;

// Wikimedia's thumbnail service only serves bucketed widths (…960, 1280…)
const commons = (path: string, file: string, width = 1280) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${file}/${width}px-${file}`;

export const img = {
  /* — Unsplash: cinematic establishing shots — */
  heroDusk: unsplash("1527838832700-5059252407fa"), // Blue Mosque at rose dusk, portrait
  blueMosqueDay: unsplash("1541432901042-2d8bd64b4a9b"), // Blue Mosque, golden afternoon
  galataBirds: unsplash("1524231757912-21f4fe3a7200"), // Galata skyline, birds at golden hour
  bosphorus: unsplash("1589561454226-796a8aa89b05"), // Süleymaniye skyline from the water
  cappadocia: unsplash("1641128324972-af3212f0f6bd"), // balloons over the valleys at dawn
  kaputas: unsplash("1593238739364-18cfde30e522"), // turquoise coast
  mosqueSunrise: unsplash("1519817650390-64a93db51149"), // grand mosque in morning mist, aerial
  mosqueCourtyard: unsplash("1590076215667-875d4ef2d7de"), // white marble courtyard, visitors
  mosqueTwilight: unsplash("1512632578888-169bbbc64f33"), // illuminated mosque mirrored at twilight
  kaaba: unsplash("1580418827493-f2b22c0a76cb"), // Makkah — spiritual preparation essay

  /** Hero: Blue Mosque dusk, cropped cinematic wide */
  heroWide:
    "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&crop=entropy&q=80&w=2400&h=1400",

  /* — Wikimedia Commons: site-specific heritage photography — */
  eyupSultan: commons("8/8b", "Eyup_Sultan_Mosque_Exterior.JPG"), // Eyüp Sultan at dusk, birds
  hagiaInterior: commons(
    "d/d7",
    "Interior_of_Hagia_Sophia_%288%29_-_Istanbul_%282022%29.jpg"
  ), // golden vaulted interior
  iznikPanel: commons(
    "b/b8",
    "Courtyard_of_the_S%C3%BCleymaniye_Mosque_in_Istanbul%2C_Turkey_004.jpg"
  ), // Iznik tile calligraphy panel
  mevlana: commons("2/20", "Mevlana_Museum%2C_Konya_07.jpg"), // Mevlana Museum interior
  grandBazaar: commons("a/ab", "Grand_Bazaar%2C_Istanbul_2.jpg"),
  topkapiCeiling: commons(
    "c/c5",
    "Istanbul_asv2020-02_img19_Topkap%C4%B1_Palace.jpg"
  ), // ornate painted dome
  selimiye: commons("2/2f", "Selimiye_Mosque_in_Edirne_01.jpg"),
  yesilTurbe: commons("2/23", "Ye%C5%9Fil_T%C3%BCrbe_03.jpg"), // muqarnas portal, Bursa
  suleymaniyeHorn: commons(
    "0/0a",
    "S%C3%BCleymaniye_Mosque_from_the_Golden_Horn.jpg"
  ),
  gallipoli: commons("0/0b", "%C3%87anakkale_%C5%9Eehitleri_An%C4%B1t%C4%B1.jpg"),
  dervishes: commons("c/ca", "Dervishes_Avanos.JPG"),
} as const;

export type ImageKey = keyof typeof img;
