"use client";

import * as React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * useScrollReveal — GSAP-powered scroll-triggered reveals.
 *
 * Adds the `reveal-up` and `reveal-scale` classes (defined in globals.css)
 * to elements with `data-reveal` attributes, then triggers them via ScrollTrigger.
 *
 * Respects prefers-reduced-motion: if user opts out, classes are added
 * immediately and no ScrollTrigger is created.
 */
export function useScrollReveal() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const observers: IntersectionObserver[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    observers.push(observer);

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);
}

/**
 * ScrollRevealBoundary — wraps page content, applies useScrollReveal.
 * Drop this around any page's content to enable data-reveal attributes.
 */
export function ScrollRevealBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollReveal();
  return <>{children}</>;
}
