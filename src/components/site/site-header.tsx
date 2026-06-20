"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site-data";

/**
 * SiteHeader — sticky, minimal, accessibility-first.
 * Logo lockup left, primary nav center-right, mobile menu bottom-sheet style.
 *
 * The "PMT" mark is typographic — no logo image. The brief notes the
 * institution has no formal logo beyond a Facebook profile picture, so we
 * derive a confident typographic mark from the brand typography instead.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 bg-warm-off-white/85 backdrop-blur-md border-b border-border"
      role="banner"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo lockup — typographic */}
          <Link
            href="/"
            className="flex items-baseline gap-2 group"
            aria-label={`${site.name} — home`}
          >
            <span className="font-display text-xl sm:text-2xl text-forest-teal leading-none tracking-tight">
              PMT
            </span>
            <span
              className="hidden sm:inline font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-warm-ochre transition-colors"
            >
              Health Care Institution
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-forest-teal"
                    : "text-charcoal-soft hover:text-forest-teal"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                {isActive(item.href) && (
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-warm-ochre"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-border text-forest-teal hover:bg-forest-teal hover:text-warm-off-white transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path
                    d="M2 5H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 13H16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav sheet */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-16 z-40 bg-warm-off-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav
            aria-label="Mobile"
            className="mx-auto max-w-8xl px-4 sm:px-6 py-6 flex flex-col gap-1"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between py-3 border-b border-border text-base ${
                  isActive(item.href)
                    ? "text-forest-teal"
                    : "text-charcoal-soft"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span>{item.label}</span>
                <span
                  className="text-warm-ochre font-mono text-xs"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
            <a
              href="/admissions"
              className="mt-6 inline-flex items-center justify-center bg-warm-ochre text-charcoal font-mono text-xs uppercase tracking-wider px-5 py-4 rounded-sm"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
