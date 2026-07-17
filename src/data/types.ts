import type { Localized } from "@/i18n";

export type TourCategory =
  | "sahaba"
  | "ottoman"
  | "mosques"
  | "scholars"
  | "historic"
  | "family"
  | "educational";

export type CitySlug =
  | "istanbul"
  | "bursa"
  | "konya"
  | "edirne"
  | "cappadocia"
  | "gallipoli";

export interface ItineraryStop {
  time: string;
  title: Localized;
  description: Localized;
}

export interface TourFaq {
  q: Localized;
  a: Localized;
}

export interface Tour {
  slug: string;
  category: TourCategory;
  city: CitySlug;
  featured?: boolean;
  title: Localized;
  tagline: Localized;
  story: Localized[];
  duration: Localized;
  durationDays: number; // 0.5 = half day
  groupSize: number;
  languages: string[];
  price: number; // USD per adult
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  highlights: Localized[];
  sites: Localized[];
  itinerary: ItineraryStop[];
  included: Localized[];
  notIncluded: Localized[];
  scholarNote: { quote: Localized; scholar: Localized; role: Localized };
  faqs: TourFaq[];
}

export interface Destination {
  slug: CitySlug;
  name: Localized;
  epithet: Localized;
  summary: Localized;
  significance: Localized;
  spiritual: Localized;
  why: Localized;
  experience: Localized;
  siteCount: number;
  bestSeason: Localized;
  stay: Localized;
  image: string;
}

export interface Guide {
  slug: string;
  name: Localized;
  initials: string;
  role: Localized;
  bio: Localized;
  languages: string[];
  expertise: Localized;
  years: number;
  favoriteSite: Localized;
}

export interface Review {
  name: Localized;
  country: Localized;
  tourSlug: string;
  quote: Localized;
  highlight: Localized;
  rating: number;
}

export interface Article {
  slug: string;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  readMinutes: number;
  date: string;
  image: string;
  body: Localized[];
  relatedTourSlug: string;
}

export interface TimelineEra {
  year: Localized;
  title: Localized;
  text: Localized;
  tourSlug?: string;
}

export interface HeritageSite {
  id: string;
  type: "mosque" | "shrine" | "palace" | "market";
  name: Localized;
  district: Localized;
  blurb: Localized;
  /** Position on the illustrated map, in percent. */
  x: number;
  y: number;
  tourSlugs: string[];
}

export interface Faq {
  q: Localized;
  a: Localized;
}
