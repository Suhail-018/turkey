import type { Metadata } from "next";
import { isLocale, getDict, type Locale } from "@/i18n";
import { destinations } from "@/data/destinations";
import { img } from "@/data/images";
import { PageHero } from "@/components/layout/PageHero";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.destinations };
}

export default async function DestinationsPage({
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
        eyebrow={dict.destinationsPage.eyebrow}
        title={dict.destinationsPage.title}
        lead={dict.destinationsPage.lead}
        image={img.bosphorus}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
          {destinations.map((d) => (
            <StaggerItem key={d.slug}>
              <DestinationCard destination={d} locale={locale} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
