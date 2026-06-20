import * as React from "react";
import Link from "next/link";

/**
 * CTAButton — the only "alive" interactive surface per the brand brief.
 * Ochre fill, charcoal ink. Two sizes, two intents.
 *
 * Per anti-AI rules: copy must be plain. No "Get Started," no "Learn More,"
 * no "Unlock." Use specific verbs tied to the user's actual next action.
 */
type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
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
    "inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre";

  const sizes = {
    default: "text-xs px-5 py-3",
    lg: "text-sm px-7 py-4",
  };

  const variants = {
    primary:
      "bg-warm-ochre text-charcoal hover:bg-warm-ochre-soft hover:-translate-y-0.5 shadow-[0_1px_0_rgba(0,0,0,0.06)]",
    outline:
      "border border-forest-teal text-forest-teal bg-transparent hover:bg-forest-teal hover:text-warm-off-white",
    ghost:
      "text-forest-teal hover:text-warm-ochre underline underline-offset-4 decoration-warm-ochre/40 hover:decoration-warm-ochre",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
