import * as React from "react";

/**
 * AccreditationBadge — small, dignified trust mark for HPCNA + NQA.
 * Used above the fold on the homepage and as a structural element on the
 * Accreditation page. No fake seals, no decorative iconography — just
 * typography on a bordered chip, like a regulatory stamp.
 */
type AccreditationBadgeProps = {
  shortName: string;
  fullName: string;
  /** Optional secondary detail e.g. approval date. */
  detail?: string;
  variant?: "default" | "filled";
  className?: string;
};

export function AccreditationBadge({
  shortName,
  fullName,
  detail,
  variant = "default",
  className = "",
}: AccreditationBadgeProps) {
  const base =
    "inline-flex items-center gap-3 rounded-sm border px-3 py-1.5 transition-colors";
  const styles =
    variant === "filled"
      ? "border-forest-teal bg-forest-teal text-warm-off-white"
      : "border-forest-teal/30 bg-warm-off-white text-forest-teal";

  return (
    <span className={`${base} ${styles} ${className}`}>
      <span className="font-mono text-xs font-medium uppercase tracking-wider">
        {shortName}
      </span>
      <span
        className="h-3 w-px bg-current opacity-30"
        aria-hidden="true"
      />
      <span className="text-xs leading-tight">
        <span className="sr-only">{shortName}: </span>
        {fullName}
        {detail && (
          <span className="block font-mono text-[10px] opacity-70 mt-0.5">
            {detail}
          </span>
        )}
      </span>
    </span>
  );
}
