"use client";

import * as React from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useScrollReveal } from "@/components/site/use-scroll-reveal";

/**
 * PageShell v2 — adds top padding so content doesn't hide under the
 * floating glass-pill nav. Also runs the GSAP scroll-reveal observer
 * once on mount so any [data-reveal] children on the page animate in.
 */
export function PageShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-pmt-purple-900 focus:text-pmt-cream focus:px-4 focus:py-2 focus:rounded-full focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>
      <SiteHeader />
      {/* pt-24 to clear the floating nav (which is ~72px tall + 16px margin top) */}
      <main id="main" className="flex-1 pt-24">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
