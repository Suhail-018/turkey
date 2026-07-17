import { t, getDict, type Locale } from "@/i18n";
import type { Review } from "@/data/types";
import { getTour } from "@/data/tours";
import { Stars } from "@/components/ui/Stars";
import { StarGlyph } from "@/components/decor/Ornament";

export function ReviewCard({
  review,
  locale,
  tone = "dark",
}: {
  review: Review;
  locale: Locale;
  tone?: "dark" | "light";
}) {
  const dict = getDict(locale);
  const tour = getTour(review.tourSlug);
  const light = tone === "light";

  return (
    <figure
      className={`flex h-full flex-col rounded-[1.25rem] p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${
        light ? "border border-white/10 bg-white/5" : "border border-sand bg-white"
      }`}
    >
      <Stars rating={review.rating} />
      <blockquote
        className={`mt-4 flex-1 font-display text-lg leading-relaxed ${
          light ? "text-ivory/90" : "text-ink/85"
        }`}
      >
        &ldquo;{t(review.quote, locale)}&rdquo;
      </blockquote>
      <figcaption
        className={`mt-6 border-t pt-5 ${light ? "border-white/10" : "border-sand"}`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`grid size-10 place-items-center rounded-full ${
              light ? "bg-gold/15 text-gold-soft" : "bg-brand/10 text-brand"
            }`}
            aria-hidden
          >
            <StarGlyph className="size-4" />
          </span>
          <div>
            <p className={`text-sm font-bold ${light ? "text-ivory" : "text-ink"}`}>
              {t(review.name, locale)}
            </p>
            <p className={`text-xs ${light ? "text-ivory/50" : "text-ink/50"}`}>
              {t(review.country, locale)}
              {tour ? <> · {t(tour.title, locale)}</> : null}
            </p>
          </div>
        </div>
        <p
          className={`mt-3 text-xs font-medium ${
            light ? "text-gold-soft/80" : "text-olive"
          }`}
        >
          {dict.stories.highlight}: {t(review.highlight, locale)}
        </p>
      </figcaption>
    </figure>
  );
}
