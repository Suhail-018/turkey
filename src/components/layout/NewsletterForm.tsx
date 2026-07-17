"use client";

import { useState } from "react";
import { getDict, type Locale } from "@/i18n";

export function NewsletterForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        className="rounded-2xl border border-gold/30 bg-gold/10 px-6 py-5 text-gold-soft"
        role="status"
      >
        {dict.newsletter.success}
      </p>
    );
  }

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          {dict.newsletter.placeholder}
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder={dict.newsletter.placeholder}
          className="h-13 flex-1 rounded-full border border-white/15 bg-white/5 px-6 text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          className="h-13 rounded-full bg-gold px-8 font-semibold text-night transition-all hover:-translate-y-0.5 hover:shadow-lift"
        >
          {dict.newsletter.button}
        </button>
      </div>
      <p className="mt-3 text-xs text-ivory/40">{dict.newsletter.privacy}</p>
    </form>
  );
}
