import * as React from "react";
import Link from "next/link";

/**
 * CampusCard — used on Campuses page, Homepage snapshot strip, and Admissions.
 * Single component, three contexts. Address and map are optional — only
 * Windhoek has a published street address.
 */
type CampusCardProps = {
  city: string;
  phone: string;
  address?: string;
  mapHref?: string;
  index?: number;
  variant?: "default" | "compact";
};

export function CampusCard({
  city,
  phone,
  address,
  mapHref,
  index,
  variant = "default",
}: CampusCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className="group relative flex flex-col bg-card border border-border p-5 sm:p-6 transition-colors hover:border-forest-teal/40"
    >
      {/* Top row — campus index + city */}
      <div className="flex items-baseline justify-between gap-3 mb-4">
        {typeof index === "number" && (
          <span className="font-mono text-xs text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
        )}
        <h3 className="font-display text-2xl sm:text-3xl text-forest-teal leading-none">
          {city}
        </h3>
      </div>

      {/* Address (if known) */}
      {address && (
        <p className="text-sm text-charcoal-soft mb-3 leading-relaxed">
          {address}
        </p>
      )}
      {!address && (
        <p className="text-sm text-muted-foreground italic mb-3 leading-relaxed">
          Street address available on request — call the campus directly.
        </p>
      )}

      {/* Phone */}
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="inline-flex items-center gap-2 font-mono text-sm text-forest-teal group-hover:text-warm-ochre transition-colors mt-auto"
      >
        <span aria-hidden="true" className="text-warm-ochre">
          ▸
        </span>
        {phone}
      </a>

      {/* Map link — Windhoek only */}
      {mapHref && !isCompact && (
        <Link
          href={mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-warm-ochre hover:underline underline-offset-4"
        >
          View on map
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
