"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Compass, Clock, Users, Search } from "lucide-react";
import { getDict, t, type Locale } from "@/i18n";
import { tourCategories } from "@/data/tours";
import { destinations } from "@/data/destinations";
import { Reveal } from "@/components/motion/Reveal";

export function HeroSearch({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const router = useRouter();
  const [city, setCity] = useState("");
  const [theme, setTheme] = useState("");
  const [duration, setDuration] = useState("");
  const [guests, setGuests] = useState(2);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (theme) params.set("theme", theme);
    if (duration) params.set("duration", duration);
    if (guests) params.set("guests", String(guests));
    router.push(`/${locale}/tours?${params.toString()}`);
  };

  const fieldClass =
    "w-full bg-transparent text-sm font-semibold text-ink focus:outline-none";
  const cellClass =
    "flex items-center gap-3 border-sand px-5 py-4 sm:border-e last:sm:border-e-0";

  const popular: { label: string; theme: string }[] = [
    { label: t(tourCategories[1].label, locale), theme: "sahaba" },
    { label: t(tourCategories[2].label, locale), theme: "ottoman" },
    { label: t(tourCategories[3].label, locale), theme: "mosques" },
  ];

  return (
    <section id="search" className="relative z-10 -mt-2 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal y={20}>
          <form
            onSubmit={submit}
            className="rounded-[1.5rem] border border-sand bg-white shadow-lift"
            aria-label={dict.search.title}
          >
            <p className="border-b border-sand px-6 pt-5 pb-4 font-display text-lg text-ink">
              {dict.search.title}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto_auto]">
              <label className={cellClass}>
                <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
                <span className="flex-1">
                  <span className="block text-[10px] font-bold tracking-wider text-ink/45 uppercase">
                    {dict.search.destination}
                  </span>
                  <select
                    className={fieldClass}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">{dict.search.anyDestination}</option>
                    {destinations.map((d) => (
                      <option key={d.slug} value={d.slug}>
                        {t(d.name, locale)}
                      </option>
                    ))}
                  </select>
                </span>
              </label>

              <label className={cellClass}>
                <Compass className="size-4 shrink-0 text-gold" aria-hidden />
                <span className="flex-1">
                  <span className="block text-[10px] font-bold tracking-wider text-ink/45 uppercase">
                    {dict.search.type}
                  </span>
                  <select
                    className={fieldClass}
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  >
                    <option value="">{dict.search.anyType}</option>
                    {tourCategories
                      .filter((c) => c.id !== "all")
                      .map((c) => (
                        <option key={c.id} value={c.id}>
                          {t(c.label, locale)}
                        </option>
                      ))}
                  </select>
                </span>
              </label>

              <label className={cellClass}>
                <Clock className="size-4 shrink-0 text-gold" aria-hidden />
                <span className="flex-1">
                  <span className="block text-[10px] font-bold tracking-wider text-ink/45 uppercase">
                    {dict.search.duration}
                  </span>
                  <select
                    className={fieldClass}
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    <option value="">{dict.search.anyDuration}</option>
                    <option value="half">{dict.search.halfDay}</option>
                    <option value="full">{dict.search.fullDay}</option>
                    <option value="multi">{dict.search.multiDay}</option>
                  </select>
                </span>
              </label>

              <label className={cellClass}>
                <Users className="size-4 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block text-[10px] font-bold tracking-wider text-ink/45 uppercase">
                    {dict.search.guests}
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={16}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className={`${fieldClass} w-16`}
                  />
                </span>
              </label>

              <div className="flex items-center px-5 py-4">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-lift"
                >
                  <Search className="size-4" aria-hidden />
                  {dict.search.button}
                </button>
              </div>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.15} className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-ink/50">{dict.search.popular}</span>
          {popular.map((item) => (
            <Link
              key={item.theme}
              href={`/${locale}/tours?theme=${item.theme}`}
              className="rounded-full border border-sand bg-white px-4 py-1.5 font-medium text-ink/70 transition-colors hover:border-brand hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
