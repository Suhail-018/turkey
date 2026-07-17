import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { articles, getArticle } from "@/data/articles";
import { getTour } from "@/data/tours";
import { TourCard } from "@/components/cards/TourCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal } from "@/components/motion/Reveal";
import { OrnamentRule } from "@/components/decor/Ornament";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: t(article.title, locale),
    description: t(article.excerpt, locale),
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedTour = getTour(article.relatedTourSlug);
  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);
  const dateFmt = new Intl.DateTimeFormat(
    locale === "ar" ? "ar-EG" : "en-GB",
    { dateStyle: "long" }
  ).format(new Date(article.date));

  return (
    <article>
      {/* Editorial hero */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-night">
        <Image
          src={article.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-night/50" />
        <div className="relative mx-auto w-full max-w-4xl px-5 pt-44 pb-16 sm:px-8">
          <Reveal>
            <Link
              href={`/${locale}/heritage`}
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ivory/70 transition-colors hover:text-ivory"
            >
              <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden />
              {dict.articlePage.back}
            </Link>
            <p className="eyebrow mb-3">{t(article.category, locale)}</p>
            <h1 className="font-display text-4xl leading-[1.1] text-ivory text-balance sm:text-5xl">
              {t(article.title, locale)}
            </h1>
            <p className="mt-5 text-sm text-ivory/60">
              {dateFmt} · {article.readMinutes} {dict.common.minRead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-ink/80">
            {t(article.excerpt, locale)}
          </p>
          <OrnamentRule className="my-10" />
          <div className="prose-editorial">
            {article.body.map((paragraph, i) => (
              <p key={i}>{t(paragraph, locale)}</p>
            ))}
          </div>
        </Reveal>

        {relatedTour && (
          <Reveal className="mt-16">
            <p className="eyebrow mb-6">{dict.articlePage.journeys}</p>
            <TourCard tour={relatedTour} locale={locale} />
          </Reveal>
        )}
      </div>

      {/* Continue reading */}
      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10 flex items-center justify-between gap-4">
            <h2 className="font-display text-3xl text-ink">
              {dict.articlePage.related}
            </h2>
            <Link
              href={`/${locale}/heritage`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              {dict.common.viewAll}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </Link>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
