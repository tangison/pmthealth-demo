"use client";

import * as React from "react";
import Image from "next/image";

/**
 * PlaceholderImage
 *
 * Renders a real image if it exists at the given src. If the image fails to
 * load (or is intentionally missing — common during demo phase before the
 * institution provides real photos), falls back to a branded teal/ochre
 * block with the alt text overlaid. Layout never breaks.
 *
 * Per brand brief: no fake stock photos, no AI-generated fake nurses.
 * The branded fallback IS the placeholder — never substitute stock imagery.
 */
type PlaceholderImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  /** Visual treatment of the fallback block. */
  fallbackVariant?: "teal" | "ochre" | "maroon";
  /** Optional caption shown in the fallback block. */
  fallbackCaption?: string;
  priority?: boolean;
  sizes?: string;
};

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackVariant = "teal",
  fallbackCaption,
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  const [errored, setErrored] = React.useState(false);

  const variantClasses: Record<string, string> = {
    teal: "placeholder-block",
    ochre:
      "bg-gradient-to-br from-warm-ochre to-warm-ochre-soft text-charcoal",
    maroon:
      "bg-gradient-to-br from-deep-maroon to-[#4a161f] text-warm-off-white",
  };

  if (errored) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-end justify-start ${variantClasses[fallbackVariant]} ${className}`}
        style={width && height ? { aspectRatio: `${width} / ${height}` } : undefined}
      >
        <div className="relative z-10 p-4 sm:p-5 text-xs font-mono uppercase tracking-wider opacity-80">
          {fallbackCaption ?? "Photo pending"}
        </div>
        {/* Subtle diagonal stripe pattern */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0, transparent 16px, rgba(250,247,242,0.08) 16px, rgba(250,247,242,0.08) 17px)",
          }}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setErrored(true)}
      // Fallback bg colour while image loads — prevents flash of broken layout
      style={{ backgroundColor: "#0F2E2A" }}
    />
  );
}
