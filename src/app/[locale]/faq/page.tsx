import type { Metadata } from "next";
import { isLocale, getDict, t, type Locale } from "@/i18n";
import { faqs } from "@/data/faqs";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDict(isLocale(locale) ? locale : "en");
  return { title: dict.nav.faq };
}

export default async function FaqPage({
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
        eyebrow={dict.faqPage.eyebrow}
        title={dict.faqPage.title}
        lead={dict.faqPage.lead}
      />
      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Reveal>
          <Accordion
            items={faqs.map((f) => ({ q: t(f.q, locale), a: t(f.a, locale) }))}
          />
        </Reveal>
        <Reveal className="mt-16 rounded-[1.5rem] border border-sand bg-white p-10 text-center shadow-soft">
          <h2 className="font-display text-2xl text-ink">{dict.faqPage.still}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`/${locale}/contact`}>{dict.faqPage.contact}</Button>
            <Button href="https://wa.me/905551234567" variant="outline">
              {dict.footer.links.whatsapp}
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
