import * as React from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

/**
 * PageShell — common wrapper for every page.
 *
 * Provides:
 * - Sticky-header + sticky-footer behaviour (min-h-screen flex flex-col,
 *   footer pushed via mt-auto).
 * - Skip link for keyboard users.
 * - Main landmark with proper ID.
 *
 * Per page-break rule: pages flow continuously. No artificial page breaks
 * between sections.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-forest-teal focus:text-warm-off-white focus:px-4 focus:py-2 focus:rounded-sm focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
