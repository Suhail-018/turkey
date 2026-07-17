import type { Metadata } from "next";
import { isLocale, getDict, type Locale } from "@/i18n";
import { articles } from "@/data/articles";
import { img } from "@/data/images";
import { PageHero } from "@/components/layout/PageHero";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.heritage };
}

export default async function HeritagePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);

  return (
    <>
      <PageHero
        eyebrow={dict.heritagePage.eyebrow}
        title={dict.heritagePage.title}
        lead={dict.heritagePage.lead}
        image={img.hagiaInterior}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <ArticleCard article={articles[0]} locale={locale} featured />
        </Reveal>
        <Stagger className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {articles.slice(1).map((a) => (
            <StaggerItem key={a.slug} className="h-full">
              <ArticleCard article={a} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
