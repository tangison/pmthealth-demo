import * as React from "react";

/**
 * BentoStatBlock — gapless bento grid (Phase 3 directive).
 *
 * Uses grid-flow-dense so there are zero empty cells. Four stats:
 * Qualification, NQF Level, Funding, Campuses. Each cell has its own
 * background tint (alternating cream shades) so the grid feels rhythmic
 * without visual gaps.
 *
 * Per Phase 3: no "SECTION 01" style meta-labels. Use clean headers.
 */
type Stat = {
  label: string;
  value: string;
  sublabel?: string;
  span?: 1 | 2; // column span
};

type BentoStatBlockProps = {
  stats: Stat[];
  className?: string;
};

export function BentoStatBlock({ stats, className = "" }: BentoStatBlockProps) {
  return (
    <div
      className={`bento-grid grid-cols-2 lg:grid-cols-4 border border-pmt-purple-900/10 rounded-2xl overflow-hidden ${className}`}
    >
      {stats.map((stat, i) => {
        const spanClass =
          stat.span === 2 ? "col-span-2 lg:col-span-2" : "col-span-1";
        const bgClass = i % 2 === 0 ? "bg-white" : "bg-pmt-cream-2/60";
        return (
          <div
            key={stat.label}
            className={`p-6 sm:p-7 lg:p-8 ${spanClass} ${bgClass} border-r border-b border-pmt-purple-900/10 last:border-r-0 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(4n)]:border-r-0`}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-3">
              {stat.label}
            </p>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-pmt-purple-900 leading-tight tracking-tight">
              {stat.value}
            </p>
            {stat.sublabel && (
              <p className="mt-2 text-sm text-pmt-ink-soft leading-relaxed">
                {stat.sublabel}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
