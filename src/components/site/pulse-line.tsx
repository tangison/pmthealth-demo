import * as React from "react";

/**
 * PulseLine — the signature brand motif.
 *
 * A single continuous line that reads simultaneously as a heartbeat / vital
 * signs trace AND a ceremonial thread connecting admission → training → oath
 * → graduation.
 *
 * Per the brand brief: use ONCE per page, deliberately. Do not repeat as
 * decoration. Currently used on the homepage timeline and as a divider on
 * the Accreditation page.
 *
 * Animation is auto-disabled under prefers-reduced-motion.
 */
type PulseLineProps = {
  className?: string;
  /** Vertical orientation renders a smaller decorative trace, used as a divider. */
  variant?: "full" | "divider";
  /** Color of the line stroke. Defaults to warm ochre. */
  strokeColor?: string;
  /** Hide the small heartbeat blip dot. */
  hideBlip?: boolean;
};

export function PulseLine({
  className = "",
  variant = "full",
  strokeColor = "#D98E2B",
  hideBlip = false,
}: PulseLineProps) {
  if (variant === "divider") {
    return (
      <svg
        viewBox="0 0 1200 40"
        width="100%"
        height="40"
        className={className}
        preserveAspectRatio="none"
        aria-hidden="true"
        role="presentation"
      >
        <path
          d="M0,20 L380,20 L400,8 L420,32 L440,4 L460,36 L480,20 L780,20 L800,10 L820,30 L840,20 L1200,20"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1200 120"
      width="100%"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      role="presentation"
    >
      {/* Baseline */}
      <path
        d="M0,60 L300,60 L340,60 L360,30 L380,90 L400,10 L420,110 L440,60 L600,60 L640,60 L660,40 L680,80 L700,60 L900,60 L940,60 L960,20 L980,100 L1000,60 L1200,60"
        fill="none"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-line-path"
      />
      {/* Heartbeat blip at the apex */}
      {!hideBlip && (
        <circle
          cx="420"
          cy="110"
          r="4"
          fill="#D98E2B"
          className="pulse-blip"
        />
      )}
    </svg>
  );
}
