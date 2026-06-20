import * as React from "react";

/**
 * SectionHeading v2 — clean headers, no "SECTION 01" meta-labels (Phase 3 directive).
 * Eyebrow (mono, gold) + display headline + optional lede.
 */
type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  variant?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
  className = "",
  variant = "dark",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = variant === "light" ? "text-pmt-cream" : "text-pmt-purple-900";
  const ledeColor = variant === "light" ? "text-pmt-cream/80" : "text-pmt-ink-soft";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-3">
          {eyebrow}
        </p>
      )}
      <Tag
        className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tightest"
        style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
      >
        <span className={titleColor}>{title}</span>
      </Tag>
      {lede && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${ledeColor}`}>
          {lede}
        </p>
      )}
    </div>
  );
}
