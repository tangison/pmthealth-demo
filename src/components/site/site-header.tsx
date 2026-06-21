"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation, site } from "@/lib/site-data";

/**
 * SiteHeader v3 — Glass-pill navigation with proper full-screen mobile takeover.
 *
 * Fixes from v2:
 * - Mobile nav sheet now z-[60] (above the glass-pill header which is z-50)
 * - Sheet uses solid pmt-purple-900 background (no transparency)
 * - Sheet takes the entire viewport (inset-0)
 * - Badge logo displayed prominently at the top of the sheet
 * - Close button is large, accessible, in the top-right
 * - Sheet includes contact info + Apply Now CTA at the bottom
 * - Body scroll locked when sheet is open
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
    <>
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
              {/* Left — badge logo + wordmark */}
              <Link
                href="/"
                className="flex items-center gap-2.5 group flex-shrink-0"
                aria-label={`${site.name} — home`}
              >
                <Image
                  src="/images/logo-circular-badge.webp"
                  alt="PMT Health Care Institution badge logo"
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
      </header>

      {/* Mobile nav sheet — FULL-SCREEN TAKEOVER */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 z-[60] bg-pmt-purple-900 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Top bar — badge logo + close button */}
          <div className="flex items-center justify-between px-5 pt-4 pb-4 border-b border-pmt-cream/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
              aria-label={`${site.name} — home`}
            >
              <Image
                src="/images/logo-badge-white.webp"
                alt="PMT Health Care Institution badge logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-base text-pmt-cream tracking-tight">
                  PMT Health Care
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-pmt-gold mt-0.5">
                  Institution · Namibia
                </span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-pmt-cream/20 text-pmt-cream hover:bg-pmt-cream/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav links — full-width, generously sized, scrollable */}
          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto px-5 py-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-4">
              Menu
            </p>
            <ul className="flex flex-col list-none p-0 m-0">
              {navigation.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between py-5 border-b border-pmt-cream/10 text-2xl font-display tracking-tight ${
                      isActive(item.href)
                        ? "text-pmt-gold"
                        : "text-pmt-cream"
                    }`}
                    style={{
                      animation: `fade-up 0.4s ease-out ${i * 40}ms both`,
                    }}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <span
                      className="text-pmt-gold/60 font-mono text-sm"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Apply Now CTA — full-width pill */}
            <Link
              href="/admissions"
              onClick={() => setMobileOpen(false)}
              className="btn-physics mt-8 inline-flex w-full items-center justify-center rounded-full bg-pmt-gold text-pmt-ink font-mono uppercase tracking-wider text-sm px-6 py-4"
            >
              Apply Now
            </Link>

            {/* Contact info at bottom */}
            <div className="mt-10 pt-8 border-t border-pmt-cream/10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-3">
                Contact
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+26461250976"
                  className="block font-mono text-sm text-pmt-cream hover:text-pmt-gold"
                >
                  +264 61 250 976 (landline)
                </a>
                <a
                  href="tel:0813421056"
                  className="block font-mono text-sm text-pmt-cream hover:text-pmt-gold"
                >
                  081 342 1056 (mobile)
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="block font-mono text-sm text-pmt-cream hover:text-pmt-gold"
                >
                  {site.email}
                </a>
              </div>
              <div className="mt-5 flex gap-4">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-pmt-cream/70 hover:text-pmt-gold"
                >
                  Facebook ↗
                </a>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-pmt-cream/70 hover:text-pmt-gold"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
