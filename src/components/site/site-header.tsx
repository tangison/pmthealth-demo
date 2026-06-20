"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site-data";

/**
 * SiteHeader v2 — Glass-pill navigation bar (Phase 2 rebuild).
 *
 * Design:
 * - Floating, fixed to top, with vertical margin so it visually floats above content
 * - Semi-translucent light background (backdrop-blur) so the wordmark logo reads clearly
 * - Structure: wordmark logo left, primary links center, gold "Apply Now" CTA right
 * - Mobile: icon-driven menu (not a flat dump), opens a clean sheet
 * - Active link: gold underline, no purple pill background (keeps the bar feeling light)
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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

  // Shrink the pill slightly when scrolled
  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-5 lg:px-8 pt-3 sm:pt-4"
      role="banner"
    >
      <div
        className={`glass-pill rounded-full transition-all duration-300 ${
          scrolled ? "py-2" : "py-2.5"
        }`}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-5">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Left — wordmark logo + lockup */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label={`${site.name} — home`}
            >
              {/* Small circular badge icon (the brand logo, sized for the nav) */}
              <Image
                src="/images/logo-circular-badge.png"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                priority
              />
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-display text-base sm:text-lg text-pmt-purple-900 tracking-tight">
                  PMT Health Care
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-pmt-ink-soft mt-0.5">
                  Institution · Namibia
                </span>
              </span>
            </Link>

            {/* Center — primary nav (desktop only) */}
            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-1"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm transition-colors rounded-full ${
                    isActive(item.href)
                      ? "text-pmt-purple-900"
                      : "text-pmt-ink-soft hover:text-pmt-purple-900"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-1.5 h-1.5 rounded-full bg-pmt-gold"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right — Apply Now CTA + mobile trigger */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link
                href="/admissions"
                className="btn-physics hidden sm:inline-flex items-center justify-center rounded-full bg-pmt-gold text-pmt-ink font-mono uppercase tracking-wider text-xs px-5 py-2.5 hover:bg-pmt-gold-soft"
              >
                Apply Now
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-pmt-purple-900/20 text-pmt-purple-900 hover:bg-pmt-purple-900 hover:text-pmt-cream transition-colors"
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
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  ) : (
                    <>
                      <path
                        d="M3 5H15"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3 13H15"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav sheet */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-0 z-40 bg-pmt-purple-900"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="pt-20 pb-8 px-5 h-full overflow-y-auto">
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-1"
            >
              {navigation.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-4 border-b border-pmt-cream/10 text-lg ${
                    isActive(item.href)
                      ? "text-pmt-gold"
                      : "text-pmt-cream/90"
                  }`}
                  style={{
                    animation: `fade-up 0.4s ease-out ${i * 50}ms both`,
                  }}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  <span>{item.label}</span>
                  <span
                    className="text-pmt-gold/60 font-mono text-xs"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/admissions"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-pmt-gold text-pmt-ink font-mono uppercase tracking-wider text-sm px-6 py-4 btn-physics"
            >
              Apply Now
            </Link>
            <div className="mt-8 pt-8 border-t border-pmt-cream/10 text-center">
              <a
                href={`tel:${site.email === "hello@pmt-healthcare.org" ? "+26461250976" : "0813421056"}`}
                className="font-mono text-sm text-pmt-cream/80 hover:text-pmt-gold"
              >
                +264 61 250 976
              </a>
              <p className="font-mono text-xs text-pmt-cream/50 mt-2">
                {site.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
