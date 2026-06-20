import * as React from "react";
import Link from "next/link";

/**
 * CTAButton v2 — fully rounded pill shape (Phase 2 directive).
 *
 * Every button on the site uses this. Primary = solid gold fill, dark ink text.
 * Outline = purple-900 border on light bg, white border on dark bg.
 * Hover physics: scale + shadow lift, never static.
 */
type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  className?: string;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "btn-physics inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold";

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    default: "text-xs px-5 py-2.5",
    lg: "text-sm px-7 py-3.5",
  };

  const variants = {
    primary:
      "bg-pmt-gold text-pmt-ink hover:bg-pmt-gold-soft shadow-[0_4px_14px_-4px_rgba(201,151,43,0.5)]",
    outline:
      "border border-pmt-purple-900 text-pmt-purple-900 bg-transparent hover:bg-pmt-purple-900 hover:text-pmt-cream",
    outlineLight:
      "border border-pmt-cream/40 text-pmt-cream bg-transparent hover:bg-pmt-cream hover:text-pmt-purple-900",
    ghost:
      "text-pmt-purple-900 hover:text-pmt-gold underline underline-offset-4 decoration-pmt-gold/40 hover:decoration-pmt-gold",
  };

  // Pick the right outline variant based on extra className hint
  const finalVariant =
    variant === "outline" && className.includes("text-pmt-cream")
      ? variants.outlineLight
      : variants[variant];

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${finalVariant} ${className}`}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
