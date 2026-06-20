import * as React from "react";
import Link from "next/link";
import { site, campuses, navigation } from "@/lib/site-data";

/**
 * SiteFooter — appears on every page. Sticky-footer behaviour is handled by
 * the page shell wrapper (min-h-screen flex flex-col). This component itself
 * just renders footer content.
 *
 * Sections: mission reminder, navigation sitemap, campus contacts, social,
 * accreditation recap, copyright + demo notice.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto bg-forest-teal text-warm-off-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top — mission + nav */}
        <div className="grid gap-10 md:gap-12 md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <Link
              href="/"
              className="font-display text-2xl tracking-tight inline-block"
            >
              PMT
            </Link>
            <p className="mt-4 text-sm text-warm-off-white/70 leading-relaxed max-w-xs">
              {site.mission}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-sm border border-warm-off-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider">
                HPCNA Approved
              </span>
              <span className="inline-flex items-center gap-2 rounded-sm border border-warm-off-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider">
                NQA Accredited
              </span>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="md:col-span-3 lg:col-span-3 grid grid-cols-2 gap-x-6 gap-y-2"
          >
            <p className="col-span-2 font-mono text-[10px] uppercase tracking-widest text-warm-off-white/50 mb-1">
              Pages
            </p>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-warm-off-white/80 hover:text-warm-ochre transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="md:col-span-4 lg:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-warm-off-white/50 mb-3">
              Campuses
            </p>
            <ul className="space-y-3">
              {campuses.map((c) => (
                <li key={c.slug} className="text-sm">
                  <span className="block text-warm-off-white">
                    {c.city}
                    {c.address && (
                      <span className="block text-warm-off-white/60 text-xs mt-0.5">
                        {c.address}
                      </span>
                    )}
                  </span>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="font-mono text-xs text-warm-ochre hover:underline underline-offset-4 mt-1 inline-block"
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pulse Line divider (decorative, hidden on small screens) */}
        <div
          className="mt-12 mb-8 opacity-30"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1200 20" width="100%" height="20" preserveAspectRatio="none">
            <path
              d="M0,10 L380,10 L400,4 L420,16 L440,2 L460,18 L480,10 L780,10 L800,5 L820,15 L840,10 L1200,10"
              fill="none"
              stroke="#D98E2B"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom — copyright + social + demo notice */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-warm-off-white/10">
          <p className="font-mono text-[11px] text-warm-off-white/50 leading-relaxed">
            © {year} {site.name}. Founded {site.founded}. Windhoek · Rundu · Ongwediva.
            <br />
            <span className="text-warm-off-white/40">
              Speculative demo site by Tangison Studio — not the institution's
              live site. Verify all facts with PMT directly.
            </span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-off-white/70 hover:text-warm-ochre transition-colors"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-warm-off-white/70 hover:text-warm-ochre transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
