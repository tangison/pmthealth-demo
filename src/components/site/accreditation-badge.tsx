import * as React from "react";

/**
 * AccreditationBadge v2 — pill-shaped, purple-bordered.
 * Used above the fold on the homepage and as a structural element on the
 * Accreditation page. No fake seals — uses the real HPCNA + NQA logos
 * pulled from the crawl where available.
 */
type AccreditationBadgeProps = {
  shortName: string;
  fullName: string;
  detail?: string;
  logoSrc?: string;
  variant?: "default" | "filled" | "light";
  className?: string;
};

export function AccreditationBadge({
  shortName,
  fullName,
  detail,
  logoSrc,
  variant = "default",
  className = "",
}: AccreditationBadgeProps) {
  const base =
    "btn-physics inline-flex items-center gap-2.5 rounded-full border px-4 py-2 transition-colors";
  const styles =
    variant === "filled"
      ? "border-pmt-gold/40 bg-pmt-gold/15 text-pmt-gold"
      : variant === "light"
      ? "border-pmt-cream/30 bg-pmt-cream/10 text-pmt-cream"
      : "border-pmt-purple-900/30 bg-white text-pmt-purple-900";

  return (
    <span className={`${base} ${styles} ${className}`}>
      {logoSrc ? (
         
        <img
          src={logoSrc}
          alt=""
          className="h-5 w-auto object-contain"
        />
      ) : (
        <span className="font-mono text-[10px] font-medium uppercase tracking-wider">
          {shortName}
        </span>
      )}
      <span
        className="h-3 w-px bg-current opacity-30"
        aria-hidden="true"
      />
      <span className="text-xs leading-tight">
        <span className="sr-only">{shortName}: </span>
        {fullName}
        {detail && (
          <span className="block font-mono text-[10px] opacity-70 mt-0.5">
            {detail}
          </span>
        )}
      </span>
    </span>
  );
}
