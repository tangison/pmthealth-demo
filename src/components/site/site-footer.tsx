import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { site, campuses, navigation } from "@/lib/site-data";

/**
 * SiteFooter v2 — circular badge logo is the anchor visual (Phase 1 directive).
 *
 * Layout: large circular badge logo on the left as the dominant visual,
 * mission + nav sitemap + campus contacts on the right, social + disclosure
 * at the bottom. Purple-900 background throughout.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto bg-pmt-purple-900 text-pmt-cream relative overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle gold radial accent in the top-right */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,151,43,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Top — badge logo + mission */}
        <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
          {/* Large circular badge logo — the anchor visual */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-circular-badge.png"
              alt="PMT Health Care Institution circular badge logo"
              width={180}
              height={180}
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain"
              priority
            />
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-pmt-gold text-center md:text-left">
              Your Health Is Our Expertise
            </p>
          </div>

          {/* Mission + nav */}
          <div className="md:col-span-8 lg:col-span-5">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-pmt-cream leading-tight tracking-tight">
              {site.mission}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Link
                href="/accreditation"
                className="btn-physics inline-flex items-center gap-2 rounded-full border border-pmt-cream/30 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
              >
                HPCNA Approved · 10 Sept 2021
              </Link>
              <Link
                href="/accreditation"
                className="btn-physics inline-flex items-center gap-2 rounded-full border border-pmt-cream/30 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
              >
                NQA Accredited
              </Link>
            </div>
          </div>

          {/* Nav sitemap */}
          <nav
            aria-label="Footer"
            className="md:col-span-12 lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2"
          >
            <p className="col-span-full font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-2">
              Explore
            </p>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-pmt-cream/80 hover:text-pmt-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Campus contacts strip */}
        <div className="mt-14 pt-10 border-t border-pmt-cream/10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-6">
            Three Campuses · Namibia
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {campuses.map((c) => (
              <div key={c.slug} className="text-sm">
                <p className="font-display text-lg text-pmt-cream">{c.city}</p>
                {c.address && (
                  <p className="mt-1 text-xs text-pmt-cream/60 leading-relaxed">
                    {c.address}
                  </p>
                )}
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="mt-2 inline-block font-mono text-xs text-pmt-gold hover:underline underline-offset-4"
                >
                  {c.phone}
                </a>
                {c.landline && (
                  <a
                    href={`tel:${c.landline.replace(/\s/g, "")}`}
                    className="ml-2 font-mono text-xs text-pmt-cream/60 hover:text-pmt-gold"
                  >
                    · {c.landline}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pulse Line divider (decorative) */}
        <div className="mt-12 mb-8 opacity-30" aria-hidden="true">
          <svg viewBox="0 0 1200 20" width="100%" height="20" preserveAspectRatio="none">
            <path
              d="M0,10 L380,10 L400,4 L420,16 L440,2 L460,18 L480,10 L780,10 L800,5 L820,15 L840,10 L1200,10"
              fill="none"
              stroke="#C9972B"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom — copyright + email + social + disclosure */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] text-pmt-cream/60 leading-relaxed">
              © {year} {site.name}. Founded {site.founded}.
              <br />
              <a
                href={`mailto:${site.email}`}
                className="text-pmt-gold hover:underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-3 font-mono text-[10px] text-pmt-cream/40 leading-relaxed max-w-md">
              Speculative demo site by Tangison Studio — not the institution's
              live site. Verify all facts with PMT directly.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-physics inline-flex items-center justify-center w-10 h-10 rounded-full border border-pmt-cream/20 text-pmt-cream/80 hover:bg-pmt-gold hover:text-pmt-ink hover:border-pmt-gold"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
              </svg>
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-physics inline-flex items-center justify-center w-10 h-10 rounded-full border border-pmt-cream/20 text-pmt-cream/80 hover:bg-pmt-gold hover:text-pmt-ink hover:border-pmt-gold"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C20.32 1.35 19.65.94 18.86.63 18.1.33 17.22.13 15.95.07 14.67.01 14.26 0 12 0z"/>
                <path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16S15.4 5.84 12 5.84zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                <circle cx="18.41" cy="5.59" r="1.44"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
