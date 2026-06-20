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
  Announcement: "text-pmt-purple-900 border-pmt-purple-900/30",
  Intake: "text-pmt-gold border-pmt-gold/40 bg-pmt-gold/5",
  Partnership: "text-pmt-purple-700 border-pmt-purple-700/30",
  Funding: "text-pmt-maroon border-pmt-maroon/30",
  Ceremony: "text-pmt-maroon border-pmt-maroon/30 bg-pmt-maroon/5",
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                News · Static feed
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-pmt-purple-900 leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                From the
                <span className="italic"> campus.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
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
      <section aria-labelledby="news-list-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h2 id="news-list-title" className="sr-only">
            News list
          </h2>

          <ol className="grid gap-px bg-pmt-purple-900/10 sm:grid-cols-2 border border-pmt-purple-900/10 rounded-2xl overflow-hidden list-none p-0" data-reveal>
            {sorted.map((item) => (
              <li
                key={item.slug}
                className="bg-pmt-cream p-7 sm:p-8 flex flex-col group card-physics"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 border rounded-full font-mono text-[10px] uppercase tracking-widest ${
                      categoryColors[item.category] ?? ""
                    }`}
                  >
                    {item.category}
                  </span>
                  <time
                    dateTime={item.isoDate}
                    className="font-mono text-xs text-pmt-ink-soft/70"
                  >
                    {item.date}
                  </time>
                </div>

                <h3 className="font-display text-2xl text-pmt-purple-900 leading-tight mb-3 group-hover:text-pmt-gold transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-pmt-ink-soft leading-relaxed">
                  {item.summary}
                </p>
              </li>
            ))}
          </ol>

          {/* Note on sourcing */}
          <div className="mt-10 bg-white border border-pmt-purple-900/10 rounded-3xl p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-3">
              Note on sourcing
            </p>
            <p className="text-sm text-pmt-ink-soft leading-relaxed">
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
                className="btn-physics inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-pmt-purple-900 hover:text-pmt-gold"
              >
                Facebook ↗
              </a>
              <a
                href="https://www.instagram.com/pmthealthcareinstitution"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-physics inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-pmt-purple-900 hover:text-pmt-gold"
              >
                Instagram ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-pmt-purple-900 text-pmt-cream relative overflow-hidden">
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,43,0.5) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center" data-reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Have a question about an announcement?
          </h2>
          <p className="mt-4 text-pmt-cream/80 max-w-lg mx-auto">
            The campus team can confirm current details on any item above —
            especially intake dates and NSFAF coordination.
          </p>
          <div className="mt-10">
            <CTAButton href="/contact" size="lg">
              Contact PMT
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
