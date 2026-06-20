"use client";

import * as React from "react";
import Image from "next/image";

/**
 * PlaceholderImage v2 — purple-themed fallback (no green anywhere).
 */
type PlaceholderImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackVariant?: "purple" | "gold" | "maroon";
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
  fallbackVariant = "purple",
  fallbackCaption,
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  const [errored, setErrored] = React.useState(false);

  const variantClasses: Record<string, string> = {
    purple: "bg-pmt-purple-900 text-pmt-cream",
    gold: "bg-pmt-gold text-pmt-ink",
    maroon: "bg-pmt-maroon text-pmt-cream",
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
      style={{ backgroundColor: "#2E1F52" }}
    />
  );
}
