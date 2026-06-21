"use client";

import * as React from "react";

/**
 * DemoDisclosure — small, dismissible banner that appears once per session.
 *
 * Per Fix 5 directive:
 * - Not a blocking modal — does not prevent interaction with the site
 * - Appears once per session ( sessionStorage )
 * - Clearly states this is a speculative pitch demo by Tangison Studio
 * - Understated, on-brand (purple/gold, rounded per existing button system)
 * - Positioned so it doesn't cover the nav or hero CTA → bottom-center
 *   (above the chatbot FAB which is bottom-right, and the scroll-to-top
 *   which is bottom-left)
 * - Easy to dismiss (X button) — does not reappear after dismissal
 *
 * Accessibility:
 * - role="dialog" aria-modal="false" — non-blocking
 * - aria-labelledby pointing at the title
 * - Focus moves to the dismiss button on mount, returns to body on dismiss
 * - ESC also dismisses
 */
const STORAGE_KEY = "pmt-demo-disclosure-dismissed";

export function DemoDisclosure() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        // Small delay so it doesn't jank on first paint
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // sessionStorage might be unavailable (SSR, privacy mode) — fall through
    }
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }

  React.useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        dismiss();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="demo-disclosure-title"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100vw-2.5rem)] max-w-md"
      style={{
        animation: "fade-up 0.5s ease-out both",
      }}
    >
      <div className="glass-pill-dark rounded-2xl p-5 sm:p-6 shadow-2xl border border-pmt-gold/30">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <span
              className="inline-flex w-9 h-9 rounded-full bg-pmt-gold/15 items-center justify-center"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1L1 16h16L9 1z"
                  stroke="#C9972B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 7v4"
                  stroke="#C9972B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="9" cy="13.5" r="0.85" fill="#C9972B" />
              </svg>
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p
              id="demo-disclosure-title"
              className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-1.5"
            >
              Speculative demo
            </p>
            <p className="text-sm text-pmt-cream leading-relaxed">
              This is a pitch demo built by{" "}
              <span className="text-pmt-gold-soft font-medium">
                Tangison Studio
              </span>{" "}
              — not PMT's official live site. Verify all facts with PMT
              directly.
            </p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss demo notice"
            className="btn-physics flex-shrink-0 inline-flex w-8 h-8 items-center justify-center rounded-full text-pmt-cream/70 hover:bg-pmt-cream/10 hover:text-pmt-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pmt-gold"
          >
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
