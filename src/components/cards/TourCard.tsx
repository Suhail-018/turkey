import Link from "next/link";
import Image from "next/image";
import { Clock, Users, ArrowRight } from "lucide-react";
import { t, getDict, type Locale } from "@/i18n";
import type { Tour } from "@/data/types";
import { tourCategories } from "@/data/tours";
import { Stars } from "@/components/ui/Stars";

export function TourCard({ tour, locale }: { tour: Tour; locale: Locale }) {
  const dict = getDict(locale);
  const category = tourCategories.find((c) => c.id === tour.category);

  return (
    <Link
      href={`/${locale}/tours/${tour.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={t(tour.title, locale)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
        {category && (
          <span className="absolute start-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-xs font-bold text-forest backdrop-blur-sm">
            {t(category.label, locale)}
          </span>
        )}
        <div className="absolute bottom-4 start-4 flex items-center gap-2 text-ivory">
          <Stars rating={tour.rating} />
          <span className="text-xs font-semibold">
            {tour.rating.toFixed(2)} · {tour.reviewCount} {dict.tourCard.reviews}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-snug text-ink transition-colors group-hover:text-brand">
          {t(tour.title, locale)}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60">
          {t(tour.tagline, locale)}
        </p>

        <div className="mt-4 flex items-center gap-4 text-xs font-medium text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5 text-olive" aria-hidden />
            {t(tour.duration, locale)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Users className="size-3.5 text-olive" aria-hidden />
            {dict.tourDetail.upTo} {tour.groupSize}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-sand pt-4">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-ink/45 uppercase">
              {dict.tourCard.from}
            </p>
            <p className="text-xl font-bold text-forest">
              ${tour.price}
              <span className="ms-1 text-xs font-medium text-ink/45">
                {dict.tourCard.perPerson}
              </span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
            {dict.tourCard.view}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
