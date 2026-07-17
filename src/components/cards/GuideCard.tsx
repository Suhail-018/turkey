import { Languages, BookOpen, MapPin } from "lucide-react";
import { t, getDict, type Locale } from "@/i18n";
import type { Guide } from "@/data/types";
import { Medallion } from "@/components/decor/Ornament";

export function GuideCard({ guide, locale }: { guide: Guide; locale: Locale }) {
  const dict = getDict(locale);

  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-sand bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-center gap-5">
        <Medallion initials={guide.initials} className="size-20 shrink-0" />
        <div>
          <h3 className="font-display text-xl text-ink">
            {t(guide.name, locale)}
          </h3>
          <p className="mt-1 text-sm font-medium text-brand">
            {t(guide.role, locale)}
          </p>
          <p className="mt-0.5 text-xs text-ink/50">
            {guide.years} {dict.guides.years}
          </p>
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-ink/70">
        {t(guide.bio, locale)}
      </p>

      <dl className="mt-6 space-y-2.5 border-t border-sand pt-5 text-sm">
        <div className="flex items-start gap-2.5">
          <dt className="sr-only">{dict.guides.languages}</dt>
          <Languages className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <dd className="text-ink/70">{guide.languages.join(" · ")}</dd>
        </div>
        <div className="flex items-start gap-2.5">
          <dt className="sr-only">{dict.guides.expertise}</dt>
          <BookOpen className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <dd className="text-ink/70">{t(guide.expertise, locale)}</dd>
        </div>
        <div className="flex items-start gap-2.5">
          <dt className="sr-only">{dict.guides.favorite}</dt>
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <dd className="text-ink/70">{t(guide.favoriteSite, locale)}</dd>
        </div>
      </dl>
    </article>
  );
}
