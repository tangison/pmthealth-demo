import * as React from "react";

/**
 * SectionHeading — consistent section openers across the site.
 * Eyebrow (mono, ochre) + display headline + optional lede.
 */
type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
          {eyebrow}
        </p>
      )}
      <Tag
        className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-teal leading-[1.05] tracking-tightest"
        style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
      >
        {title}
      </Tag>
      {lede && (
        <p className="mt-4 text-base sm:text-lg text-charcoal-soft leading-relaxed max-w-2xl">
          {lede}
        </p>
      )}
    </div>
  );
}
