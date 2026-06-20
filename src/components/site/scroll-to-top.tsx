"use client";

import * as React from "react";

/**
 * ScrollToTop v2 — purple FAB, gold up-arrow, rounded-full.
 * Appears only after scrolling past 600px.
 */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const prefersReducedMotion = React.useRef(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    function onScroll() {
      setVisible(window.scrollY > 600);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick() {
    if (prefersReducedMotion.current) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`btn-physics fixed bottom-5 left-5 z-40 inline-flex items-center justify-center w-11 h-11 rounded-full bg-pmt-purple-900 text-pmt-cream shadow-lg hover:bg-pmt-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M9 15V3M9 3L3 9M9 3L15 9"
          stroke="#C9972B"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
