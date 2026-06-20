import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PulseLine } from "@/components/site/pulse-line";
import { AccreditationBadge } from "@/components/site/accreditation-badge";
import { CampusCard } from "@/components/site/campus-card";
import { CTAButton } from "@/components/site/cta-button";
import { SectionHeading } from "@/components/site/section-heading";
import { BentoStatBlock } from "@/components/site/bento-stat-block";
import { site, campuses, journey, accreditation, programme } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "PMT Health Care Institution — Quality Nurses for Namibia",
  description:
    "HPCNA-approved and NQA-accredited nursing school in Namibia. Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6. Campuses in Windhoek, Rundu, and Ongwediva. Apply now for the next intake.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageShell>
      {/* ──────────────────────────── HERO (Attention) ──────────────────────────── */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden"
      >
        {/* Background: real crawled photo of PMT students in classroom, with purple overlay */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          { }
          <img
            src="/images/crawled/banner-students-classroom.jpg"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(46,31,82,0.92) 0%, rgba(46,31,82,0.78) 50%, rgba(67,45,114,0.85) 100%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              {/* Trust badges above the fold */}
              <div className="flex flex-wrap gap-2 mb-8" data-reveal>
                <AccreditationBadge
                  shortName={accreditation.hpcna.shortName}
                  fullName={accreditation.hpcna.name}
                  detail={`Approved ${accreditation.hpcna.approvedOn}`}
                  variant="light"
                />
                <AccreditationBadge
                  shortName={accreditation.nqa.shortName}
                  fullName={accreditation.nqa.name}
                  variant="light"
                />
              </div>

              <p
                className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4"
                data-reveal
              >
                Founded {site.founded} · Windhoek · Rundu · Ongwediva
              </p>

              <h1
                id="hero-title"
                className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-pmt-cream leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
                data-reveal
              >
                Quality Nurses,
                <br />
                <span className="italic text-pmt-gold-soft">
                  improving Health Care Delivery.
                </span>
              </h1>

              <p
                className="mt-6 text-lg sm:text-xl text-pmt-cream/85 leading-relaxed max-w-2xl"
                data-reveal
              >
                {site.mission}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal>
                <CTAButton href="/admissions" size="lg">
                  Apply Now
                </CTAButton>
                <CTAButton
                  href="/accreditation"
                  variant="outline"
                  className="border-pmt-cream/40 text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
                >
                  Verify accreditation
                </CTAButton>
              </div>
            </div>

            {/* Right — Oath card (Interest) */}
            <aside
              className="lg:col-span-4 lg:sticky lg:bottom-12"
              aria-labelledby="oath-card-title"
              data-reveal
            >
              <div className="glass-pill-dark rounded-3xl p-7 sm:p-8 text-pmt-cream relative overflow-hidden">
                <span
                  className="block w-16 h-px bg-pmt-maroon mb-6"
                  aria-hidden="true"
                />
                <p
                  id="oath-card-title"
                  className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-4"
                >
                  The Oath
                </p>
                <p className="font-display italic text-xl sm:text-2xl leading-snug text-pmt-cream">
                  &ldquo;The day before graduation, our students take the
                  oath — a formal pledge to serve Namibia with skill,
                  integrity, and compassion.&rdquo;
                </p>
                <p className="mt-6 text-sm text-pmt-cream/70 leading-relaxed">
                  It is the one moment that turns training into vocation.
                  Everything we do — admissions, classroom, clinical
                  placement — leads to that pledge.
                </p>
                <a
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-pmt-gold hover:underline underline-offset-4"
                >
                  Read our story
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─────────────── PULSE LINE — signature motif, used once (Desire) ─────────────── */}
      <section
        aria-label="The student journey — from application to graduation"
        className="border-y border-pmt-purple-900/10 bg-pmt-cream"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
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
            className="mb-16"
          />

          <div className="mb-12" data-reveal>
            <PulseLine className="w-full h-auto" />
          </div>

          <ol className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
            {journey.map((stage, i) => (
              <li
                key={stage.step}
                className="relative"
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs text-pmt-gold">
                    {stage.step}
                  </span>
                  <span
                    className="h-px flex-1 bg-pmt-gold/30"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-2xl text-pmt-purple-900 leading-none mb-2 tracking-tight">
                  {stage.label}
                </h3>
                <p className="text-sm text-pmt-ink-soft leading-relaxed">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12" data-reveal>
            <CTAButton href="/admissions" variant="outline">
              Start your application
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ─────────────────── GAPLESS BENTO STAT BLOCK ─────────────────── */}
      <section
        aria-labelledby="stats-title"
        className="bg-pmt-cream-2/40 border-b border-pmt-purple-900/10"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="At a glance"
            title="What PMT offers."
            lede="The Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6. Recognised, regulated, and accessible to both NSFAF-funded and self-funded applicants across three Namibian campuses."
            className="mb-12"
          />
          <div data-reveal>
            <BentoStatBlock
              stats={[
                {
                  label: "Qualification",
                  value: "Diploma",
                  sublabel: "Enrolled Nursing & Midwifery Science",
                  span: 2,
                },
                {
                  label: "NQF Level",
                  value: `Level ${programme.nqfLevel}`,
                  sublabel: "Namibian Qualifications Framework",
                },
                {
                  label: "Funding",
                  value: "NSFAF",
                  sublabel: "Accepted, alongside self-funded applicants",
                },
                {
                  label: "Regulator",
                  value: accreditation.hpcna.shortName,
                  sublabel: `Approved ${accreditation.hpcna.approvedOn}`,
                },
                {
                  label: "Accreditation",
                  value: accreditation.nqa.shortName,
                  sublabel: "Nationally accredited qualification",
                },
                {
                  label: "Campuses",
                  value: "3",
                  sublabel: "Windhoek · Rundu · Ongwediva",
                  span: 2,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────── FOUNDER TEASER ─────────────────────── */}
      <section
        aria-labelledby="founder-title"
        className="border-b border-pmt-purple-900/10"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            {/* Founder portrait — real crawled photo */}
            <div className="lg:col-span-5" data-reveal>
              <figure className="relative">
                <div className="img-zoom rounded-3xl overflow-hidden bg-pmt-purple-900 aspect-[4/5] max-w-sm">
                  { }
                  <img
                    src="/images/crawled/founder-rutendo-zvidza.jpg"
                    alt={`${site.director}, founder of PMT Health Care Institution, with a patient.`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Decorative gold accent frame */}
                <div
                  className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-pmt-gold rounded-3xl -z-10"
                  aria-hidden="true"
                />
              </figure>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-3">
                The founder
              </p>
              <h2
                id="founder-title"
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-pmt-purple-900 leading-[1.02] tracking-tightest mb-8"
              >
                Why PMT is named after
                <span className="italic"> Priscilla Monica Tendo.</span>
              </h2>
              <p className="text-lg text-pmt-ink-soft leading-relaxed mb-5">
                {site.director} founded PMT in {site.founded}. The institution
                carries the name of {site.namedFor}, who inspired her to
                become a nurse.
              </p>
              <p className="text-base text-pmt-ink-soft leading-relaxed mb-8">
                That origin shapes how PMT trains nurses today — not as a
                transactional qualification, but as a commitment to the people
                of Namibia. The oath each student takes the night before
                graduation is the visible expression of that founding impulse.
              </p>
              <CTAButton href="/about" variant="ghost">
                Read the full founder story →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── 3-CAMPUS SNAPSHOT STRIP ─────────────────── */}
      <section
        aria-labelledby="campuses-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Three campuses"
              title="Train where you live."
              lede="PMT operates from three Namibian campuses — Windhoek, Rundu, and Ongwediva — so students across the country can train close to home and clinical placement."
            />
            <CTAButton href="/campuses" variant="ghost">
              All campus details →
            </CTAButton>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
            {campuses.map((c, i) => (
              <CampusCard
                key={c.slug}
                city={c.city}
                phone={c.phone}
                landline={c.landline}
                address={c.address}
                mapHref={
                  c.mapQuery
                    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        c.mapQuery
                      )}`
                    : undefined
                }
                index={i + 1}
                imageSrc={
                  c.slug === "windhoek"
                    ? "/images/crawled/students-campus-building.jpg"
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── CLOSING CTA (Action) ─────────────────── */}
      <section
        aria-labelledby="cta-title"
        className="relative bg-pmt-purple-900 text-pmt-cream overflow-hidden"
      >
        {/* Gold radial accent */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,43,0.5) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,43,0.4) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center" data-reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
            Next intake
          </p>
          <h2
            id="cta-title"
            className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            If you are ready,
            <br />
            <span className="italic text-pmt-gold-soft">we are ready.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-pmt-cream/80 max-w-xl mx-auto leading-relaxed">
            Applications are open for the next intake of the Diploma in
            Enrolled Nursing and Midwifery Science. NSFAF-funded and
            self-funded applicants are both welcome.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/admissions" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline"
              className="border-pmt-cream/40 text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
            >
              Talk to a campus
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
