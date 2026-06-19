import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { news } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News",
  description:
    "Announcements from PMT Health Care Institution — intakes, graduation ceremonies, NSFAF funding updates, and institutional partnerships such as the I-Care Health Training Institute MOU.",
  alternates: { canonical: "/news" },
};

const categoryColors: Record<string, string> = {
  Announcement: "text-forest-teal border-forest-teal/30",
  Intake: "text-warm-ochre border-warm-ochre/40 bg-warm-ochre/5",
  Partnership: "text-forest-teal-soft border-forest-teal-soft/30",
  Funding: "text-deep-maroon border-deep-maroon/30",
  Ceremony: "text-deep-maroon border-deep-maroon/30 bg-deep-maroon/5",
};

export default function NewsPage() {
  // Sort by ISO date desc
  const sorted = [...news].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                News · Static feed
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                From the
                <span className="italic"> campus.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                Announcements, intake windows, and institutional updates from
                PMT. This is a static feed — not a CMS — built so the
                institution can edit content directly when this demo goes
                live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── NEWS GRID ─────────── */}
      <section aria-labelledby="news-list-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 id="news-list-title" className="sr-only">
            News list
          </h2>

          <ol className="grid gap-px bg-border sm:grid-cols-2 border border-border list-none p-0">
            {sorted.map((item) => (
              <li
                key={item.slug}
                className="bg-warm-off-white p-7 sm:p-8 flex flex-col group hover:bg-warm-off-white-2/60 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 border font-mono text-[10px] uppercase tracking-widest ${
                      categoryColors[item.category] ?? ""
                    }`}
                  >
                    {item.category}
                  </span>
                  <time
                    dateTime={item.isoDate}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {item.date}
                  </time>
                </div>

                <h3 className="font-display text-2xl text-forest-teal leading-tight mb-3 group-hover:text-warm-ochre transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>

          {/* Note on sourcing */}
          <div className="mt-10 bg-card border border-border p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
              Note on sourcing
            </p>
            <p className="text-sm text-charcoal-soft leading-relaxed">
              The items above reflect real PMT announcements — graduation
              ceremonies, intake windows, NSFAF funding, and the I-Care MOU
              signed on 22 August 2023. For the institution's live,
              up-to-the-minute updates, follow PMT on Facebook or Instagram.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/pmthealthcareinstitution"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
              >
                Facebook ↗
              </a>
              <a
                href="https://www.instagram.com/pmthealthcareinstitution"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Have a question about an announcement?
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            The campus team can confirm current details on any item above —
            especially intake dates and NSFAF coordination.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" size="lg">
              Contact PMT
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
