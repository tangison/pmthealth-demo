"use client";

import * as React from "react";

/**
 * ScrollToTop — appears only after the user has scrolled past 600px.
 *
 * - Smooth scroll back to top
 * - Respects prefers-reduced-motion (falls back to instant jump)
 * - Visible focus state, keyboard accessible
 * - Hides when near top (no decorative repetition)
 * - Sits bottom-left so it doesn't collide with the chatbot (bottom-right)
 */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);
  const prefersReducedMotion = React.useRef(false);

  React.useEffect(() => {
    // Detect reduced-motion preference once
    if (typeof window !== "undefined" && window.matchMedia) {
      prefersReducedMotion.current = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }

    function onScroll() {
      // 600px threshold — past the hero on most pages
      setVisible(window.scrollY > 600);
    }

    onScroll(); // set initial state
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
      className={`fixed bottom-5 left-5 z-40 inline-flex items-center justify-center w-11 h-11 bg-forest-teal text-warm-off-white rounded-full shadow-lg hover:bg-forest-teal-deep transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warm-ochre ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 15V3M9 3L3 9M9 3L15 9"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
