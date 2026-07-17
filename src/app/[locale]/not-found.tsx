import Link from "next/link";
import { StarGlyph } from "@/components/decor/Ornament";

export default function NotFound() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center bg-forest px-5 text-center text-ivory">
      <StarGlyph className="size-10 text-gold" />
      <h1 className="mt-6 font-display text-4xl sm:text-5xl">
        This page has wandered off the map
      </h1>
      <p className="mt-4 max-w-md text-ivory/70">
        The path you followed does not exist — but the journeys do.
      </p>
      <Link
        href="/en"
        className="mt-8 rounded-full bg-gold px-8 py-3.5 font-semibold text-night transition-all hover:-translate-y-0.5 hover:shadow-lift"
      >
        Return home
      </Link>
    </section>
  );
}
