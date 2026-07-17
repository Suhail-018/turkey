import { en, type Dict } from "./en";
import { ar } from "./ar";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const dictionaries: Record<Locale, Dict> = { en, ar };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

export function dirOf(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Bilingual content value carried by data files. */
export type Localized = { en: string; ar: string };

/** Resolve a bilingual value for the active locale. */
export function t(value: Localized, locale: Locale): string {
  return value[locale] || value.en;
}

export type { Dict };
