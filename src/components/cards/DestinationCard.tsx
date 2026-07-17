import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { t, getDict, type Locale } from "@/i18n";
import type { Destination } from "@/data/types";

export function DestinationCard({
  destination,
  locale,
  large = false,
}: {
  destination: Destination;
  locale: Locale;
  large?: boolean;
}) {
  const dict = getDict(locale);

  return (
    <Link
      href={`/${locale}/destinations/${destination.slug}`}
      className={`group relative block overflow-hidden rounded-[1.5rem] shadow-card transition-all duration-500 hover:shadow-lift ${
        large ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[4/5]"
      }`}
    >
      <Image
        src={destination.image}
        alt={t(destination.name, locale)}
        fill
        sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
        <p className="eyebrow mb-1.5 text-[11px]">
          {t(destination.epithet, locale)}
        </p>
        <h3 className="font-display text-2xl">{t(destination.name, locale)}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ivory/75">
          {t(destination.summary, locale)}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs font-semibold text-gold-soft">
          <span>
            {destination.siteCount} {dict.destinationsSection.sites}
          </span>
          <span className="inline-flex items-center gap-1.5 text-ivory">
            {dict.destinationsSection.explore}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
