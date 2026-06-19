import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PulseLine } from "@/components/site/pulse-line";
import { AccreditationBadge } from "@/components/site/accreditation-badge";
import { CampusCard } from "@/components/site/campus-card";
import { CTAButton } from "@/components/site/cta-button";
import { SectionHeading } from "@/components/site/section-heading";
import { site, campuses, journey, accreditation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "PMT Health Care Institution — Quality Nurses for Namibia",
  description:
    "HPCNA-approved and NQA-accredited nursing school in Namibia. Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6. Campuses in Windhoek, Rundu, and Ongwediva. Apply now for the next intake.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ──────────────────────────── HERO ──────────────────────────── */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-border"
      >
        {/* Background texture — subtle warm gradient, no fake photography */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-warm-off-white-2/60 via-warm-off-white to-warm-off-white"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-1/3 h-1/2 bg-forest-teal/[0.03] -z-10"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            {/* Left — copy */}
            <div className="lg:col-span-7">
              {/* Trust badges above the fold */}
              <div className="flex flex-wrap gap-2 mb-8">
                <AccreditationBadge
                  shortName={accreditation.hpcna.shortName}
                  fullName={accreditation.hpcna.name}
                  detail={`Approved ${accreditation.hpcna.approvedOn}`}
                />
                <AccreditationBadge
                  shortName={accreditation.nqa.shortName}
                  fullName={accreditation.nqa.name}
                />
              </div>

              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Founded 2019 · Windhoek · Rundu · Ongwediva
              </p>

              <h1
                id="hero-title"
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Quality Nurses,
                <br />
                <span className="italic text-forest-teal-soft">
                  improving Health Care Delivery.
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-charcoal-soft leading-relaxed max-w-2xl">
                {site.mission}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <CTAButton href="/admissions" size="lg">
                  Apply Now
                </CTAButton>
                <CTAButton href="/accreditation" variant="outline">
                  Verify accreditation
                </CTAButton>
              </div>

              {/* Quick facts strip */}
              <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 pt-6 border-t border-border">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Qualification
                  </dt>
                  <dd className="mt-1 text-sm text-forest-teal font-medium">
                    Diploma, Enrolled Nursing &amp; Midwifery
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    NQF Level
                  </dt>
                  <dd className="mt-1 text-sm text-forest-teal font-medium">
                    Level 6
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Funding
                  </dt>
                  <dd className="mt-1 text-sm text-forest-teal font-medium">
                    NSFAF accepted
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Campuses
                  </dt>
                  <dd className="mt-1 text-sm text-forest-teal font-medium">
                    Windhoek · Rundu · Ongwediva
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right — Oath card, the one true ceremonial detail */}
            <aside
              className="lg:col-span-5 lg:sticky lg:top-24"
              aria-labelledby="oath-card-title"
            >
              <div className="bg-forest-teal text-warm-off-white p-7 sm:p-9 relative overflow-hidden">
                {/* Maroon ceremonial rule */}
                <span
                  className="block w-16 h-px bg-deep-maroon mb-6"
                  aria-hidden="true"
                />

                <p
                  id="oath-card-title"
                  className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre mb-4"
                >
                  The Oath
                </p>

                <p className="font-display italic text-xl sm:text-2xl leading-snug text-warm-off-white">
                  &ldquo;The day before graduation, our students take the
                  oath — a formal pledge to serve Namibia with skill,
                  integrity, and compassion.&rdquo;
                </p>

                <p className="mt-6 text-sm text-warm-off-white/70 leading-relaxed">
                  It is the one moment that turns training into vocation.
                  Everything we do — admissions, classroom, clinical
                  placement — leads to that pledge.
                </p>

                <a
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-warm-ochre hover:underline underline-offset-4"
                >
                  Read our story
                  <span aria-hidden="true">→</span>
                </a>

                {/* Decorative corner mark */}
                <span
                  className="absolute top-0 right-0 w-px h-12 bg-warm-ochre/40"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-0 right-0 h-px w-12 bg-warm-ochre/40"
                  aria-hidden="true"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────────── PULSE LINE — signature motif, used once ─────────────── */}
      <section
        aria-label="The student journey — from application to graduation"
        className="border-b border-border bg-warm-off-white"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="The journey"
            title={
              <>
                From application
                <br className="hidden sm:block" /> to the oath, and beyond.
              </>
            }
            lede="Every PMT student walks the same path. The Pulse Line below traces it — admission, training, the oath the day before graduation, and the moment you walk into practice."
            align="left"
          />

          {/* The Pulse Line itself */}
          <div className="mt-12 mb-10">
            <PulseLine className="w-full h-auto" />
          </div>

          {/* Journey steps aligned to the line */}
          <ol
            className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none p-0"
          >
            {journey.map((stage) => (
              <li key={stage.step} className="relative">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs text-warm-ochre">
                    {stage.step}
                  </span>
                  <span
                    className="h-px flex-1 bg-warm-ochre/30"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-2xl text-forest-teal leading-none mb-2">
                  {stage.label}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <CTAButton href="/admissions" variant="outline">
              Start your application
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─────────────────────── FOUNDER TEASER ─────────────────────── */}
      <section
        aria-labelledby="founder-title"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
                The founder
              </p>
              <h2
                id="founder-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-teal leading-[1.05] tracking-tightest"
              >
                Why PMT is named after
                <span className="italic"> Priscilla Monica Tendo.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-charcoal-soft leading-relaxed">
                {site.director} founded PMT in {site.founded}. The institution
                carries the name of {site.namedFor}, who inspired her to
                become a nurse.
              </p>
              <p className="mt-4 text-base text-charcoal-soft leading-relaxed">
                That origin shapes how PMT trains nurses today — not as a
                transactional qualification, but as a commitment to the people
                of Namibia. The oath each student takes the night before
                graduation is the visible expression of that founding impulse.
              </p>
              <a
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-warm-ochre hover:underline underline-offset-4"
              >
                Read the full founder story
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 3-CAMPUS SNAPSHOT STRIP ─────────────────── */}
      <section
        aria-labelledby="campuses-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Three campuses"
              title="Train where you live."
              lede="PMT operates from three Namibian campuses — Windhoek, Rundu, and Ongwediva — so students across the country can train close to home and clinical placement."
            />
            <CTAButton href="/campuses" variant="ghost">
              All campus details →
            </CTAButton>
          </div>

          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((c, i) => (
              <CampusCard
                key={c.slug}
                city={c.city}
                phone={c.phone}
                address={c.address}
                mapHref={
                  c.mapQuery
                    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        c.mapQuery
                      )}`
                    : undefined
                }
                index={i + 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CLOSING CTA ─────────────────── */}
      <section aria-labelledby="cta-title" className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
            Next intake
          </p>
          <h2
            id="cta-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight"
          >
            If you are ready,
            <br />
            <span className="italic text-warm-ochre-soft">
              we are ready.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-warm-off-white/80 max-w-xl mx-auto leading-relaxed">
            Applications are open for the next intake of the Diploma in
            Enrolled Nursing and Midwifery Science. NSFAF-funded and
            self-funded applicants are both welcome.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/admissions" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton href="/contact" variant="outline" className="border-warm-off-white/30 text-warm-off-white hover:bg-warm-off-white hover:text-forest-teal">
              Talk to a campus
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
