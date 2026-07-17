import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Inner-page hero band. Dark by design so the floating header reads
 * correctly on every route.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/45 to-night/75" />
        </>
      ) : (
        <div className="pattern-star-light absolute inset-0 opacity-[0.05]" aria-hidden />
      )}
      <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-20 sm:px-8">
        <Reveal>
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="max-w-3xl font-display text-4xl leading-[1.08] font-medium text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {lead}
            </p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
