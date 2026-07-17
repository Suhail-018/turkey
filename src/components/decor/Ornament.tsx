import { cn } from "@/lib/utils";

/** Eight-point star — the brand's signature glyph. */
export function StarGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-4", className)}
      aria-hidden
      fill="none"
    >
      <rect
        x="6.2"
        y="6.2"
        width="11.6"
        height="11.6"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="6.2"
        y="6.2"
        width="11.6"
        height="11.6"
        stroke="currentColor"
        strokeWidth="1.2"
        transform="rotate(45 12 12)"
      />
    </svg>
  );
}

/** Gold hairline rule with a centred star — the section ornament. */
export function OrnamentRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("ornament-rule mx-auto w-40 text-gold", className)}
      aria-hidden
    >
      <StarGlyph className="size-3.5 shrink-0" />
    </div>
  );
}

/** Monogram medallion used for guides & scholars instead of stock portraits. */
export function Medallion({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pattern-star-light relative grid size-24 place-items-center rounded-full bg-forest text-ivory shadow-card",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-1.5 rounded-full border border-gold/40" />
      <span className="font-display text-2xl tracking-wide">{initials}</span>
    </div>
  );
}
