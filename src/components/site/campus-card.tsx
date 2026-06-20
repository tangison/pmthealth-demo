import * as React from "react";
import Link from "next/link";

/**
 * CampusCard v2 — purple-themed, card-physics hover.
 * Single component, three contexts. Address + map optional — only
 * Windhoek has a published street address.
 */
type CampusCardProps = {
  city: string;
  phone: string;
  landline?: string;
  address?: string;
  mapHref?: string;
  index?: number;
  imageSrc?: string;
};

export function CampusCard({
  city,
  phone,
  landline,
  address,
  mapHref,
  index,
  imageSrc,
}: CampusCardProps) {
  return (
    <article className="card-physics group relative flex flex-col bg-white border border-pmt-purple-900/10 rounded-2xl overflow-hidden hover:border-pmt-purple-500/40">
      {/* Optional image header */}
      {imageSrc && (
        <div className="img-zoom aspect-[4/3] bg-pmt-purple-900 overflow-hidden">
          { }
          <img
            src={imageSrc}
            alt={`${city} campus`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-3 mb-4">
          {typeof index === "number" && (
            <span className="font-mono text-xs text-pmt-gold">
              {String(index).padStart(2, "0")}
            </span>
          )}
          <h3 className="font-display text-2xl sm:text-3xl text-pmt-purple-900 leading-none tracking-tight">
            {city}
          </h3>
        </div>

        {address && (
          <p className="text-sm text-pmt-ink-soft mb-3 leading-relaxed">
            {address}
          </p>
        )}
        {!address && (
          <p className="text-sm text-pmt-ink-soft/70 italic mb-3 leading-relaxed">
            Street address available on request — call the campus directly.
          </p>
        )}

        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 font-mono text-sm text-pmt-purple-700 group-hover:text-pmt-gold transition-colors mt-auto"
        >
          <span aria-hidden="true" className="text-pmt-gold">▸</span>
          {phone}
        </a>
        {landline && (
          <a
            href={`tel:${landline.replace(/\s/g, "")}`}
            className="ml-6 inline-flex items-center gap-2 font-mono text-xs text-pmt-ink-soft/70 hover:text-pmt-gold transition-colors"
          >
            {landline}
          </a>
        )}

        {mapHref && (
          <Link
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-pmt-gold hover:underline underline-offset-4"
          >
            View on map
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}
