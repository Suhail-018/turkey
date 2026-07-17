import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { t, getDict, type Locale } from "@/i18n";
import type { Article } from "@/data/types";

export function ArticleCard({
  article,
  locale,
  featured = false,
}: {
  article: Article;
  locale: Locale;
  featured?: boolean;
}) {
  const dict = getDict(locale);

  if (featured) {
    return (
      <Link
        href={`/${locale}/heritage/${article.slug}`}
        className="group grid overflow-hidden rounded-[1.5rem] bg-white shadow-card transition-all duration-500 hover:shadow-lift lg:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
          <Image
            src={article.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:p-12">
          <p className="eyebrow mb-3 text-[11px]">{t(article.category, locale)}</p>
          <h3 className="font-display text-2xl leading-snug text-ink transition-colors group-hover:text-brand sm:text-3xl">
            {t(article.title, locale)}
          </h3>
          <p className="mt-4 line-clamp-3 leading-relaxed text-ink/65">
            {t(article.excerpt, locale)}
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs font-semibold text-ink/45">
              {article.readMinutes} {dict.common.minRead}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
              {dict.articles.readArticle}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${locale}/heritage/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={article.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow mb-2 text-[10px]">{t(article.category, locale)}</p>
        <h3 className="font-display text-lg leading-snug text-ink transition-colors group-hover:text-brand">
          {t(article.title, locale)}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink/60">
          {t(article.excerpt, locale)}
        </p>
        <p className="mt-4 text-xs font-semibold text-ink/45">
          {article.readMinutes} {dict.common.minRead}
        </p>
      </div>
    </Link>
  );
}
