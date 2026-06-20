import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { programme, accreditation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "The Diploma in Enrolled Nursing and Midwifery Science, NQF Level 6, offered by PMT Health Care Institution. HPCNA-approved, NQA-accredited, with NSFAF funding accepted.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Programme · NQF Level {programme.nqfLevel}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-forest-teal leading-[1.02] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Diploma in Enrolled
                <br />
                Nursing and
                <span className="italic"> Midwifery Science.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                PMT's flagship qualification. Recognised on the Namibian
                Qualifications Framework at Level {programme.nqfLevel},
                approved by HPCNA, and accredited by NQA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PROGRAMME AT A GLANCE ─────────── */}
      <section aria-labelledby="glance-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2
            id="glance-title"
            className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-8"
          >
            At a glance
          </h2>

          <dl className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 border border-border">
            <div className="bg-warm-off-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Qualification
              </dt>
              <dd className="font-display text-xl text-forest-teal leading-tight">
                Diploma
              </dd>
              <p className="mt-2 text-sm text-charcoal-soft">
                Enrolled Nursing and Midwifery Science
              </p>
            </div>
            <div className="bg-warm-off-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                NQF Level
              </dt>
              <dd className="font-display text-xl text-forest-teal leading-tight">
                Level {programme.nqfLevel}
              </dd>
              <p className="mt-2 text-sm text-charcoal-soft">
                Namibian Qualifications Framework
              </p>
            </div>
            <div className="bg-warm-off-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Regulator
              </dt>
              <dd className="font-display text-xl text-forest-teal leading-tight">
                {accreditation.hpcna.shortName}
              </dd>
              <p className="mt-2 text-sm text-charcoal-soft">
                Approved {accreditation.hpcna.approvedOn}
              </p>
            </div>
            <div className="bg-warm-off-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                Accreditation
              </dt>
              <dd className="font-display text-xl text-forest-teal leading-tight">
                {accreditation.nqa.shortName}
              </dd>
              <p className="mt-2 text-sm text-charcoal-soft">
                Nationally accredited qualification
              </p>
            </div>
          </dl>
        </div>
      </section>

      {/* ─────────── WHAT THE DIPLOMA PREPARES YOU FOR ─────────── */}
      <section aria-labelledby="prepares-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="What you train for"
                title="A registered nurse, ready to serve."
                lede="The Diploma in Enrolled Nursing and Midwifery Science prepares graduates for registration with HPCNA as enrolled nurses and midwives — equipped to work in hospitals, clinics, and community health settings across Namibia."
              />

              <div className="mt-10 space-y-6">
                <div>
                  <h3 className="font-display text-xl text-forest-teal mb-2">
                    Theory
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    Classroom-based learning covering the foundational
                    sciences — anatomy, physiology, microbiology — alongside
                    nursing theory, midwifery, pharmacology, and professional
                    ethics.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-teal mb-2">
                    Skills lab
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    Practical skills are rehearsed in a controlled training
                    environment before any clinical contact — from basic
                    observations and wound care to assisted delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-teal mb-2">
                    Clinical placement
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    Students rotate through clinical settings under
                    supervision, building real-world competence in patient
                    care, midwifery, and community health practice.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest-teal mb-2">
                    The oath
                  </h3>
                  <p className="text-sm text-charcoal-soft leading-relaxed">
                    The night before graduation, students recite the formal
                    nursing oath — the moment training becomes vocation. This
                    is the institutional signature: every PMT graduate has
                    taken it.
                  </p>
                </div>
              </div>
            </div>

            {/* Image panel — placeholder, with branded fallback */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <figure>
                <PlaceholderImage
                  src="/images/gallery/classroom-01.jpg"
                  alt="Nursing students in a classroom session at PMT."
                  width={800}
                  height={1000}
                  fallbackCaption="Photo pending — skills lab in session"
                  className="w-full h-auto"
                />
                <figcaption className="mt-3 font-mono text-xs text-muted-foreground">
                  Skills lab and classroom — Windhoek campus. (Photo to be
                  supplied.)
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── ENTRY REQUIREMENTS (PLACEHOLDER) ─────────── */}
      <section
        aria-labelledby="entry-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="To be confirmed"
                title="Entry requirements."
                lede="Specific entry requirements are confirmed with each intake. The structure below outlines what to expect — final requirements for the next intake should be verified with your nearest campus."
              />
            </div>

            <div className="lg:col-span-7">
              {/* Clearly-labeled placeholder block per the brief */}
              <div className="bg-card border-2 border-dashed border-warm-ochre/40 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
                  <span
                    className="inline-flex w-8 h-8 rounded-full bg-warm-ochre/15 text-warm-ochre items-center justify-center font-mono text-xs"
                    aria-hidden="true"
                  >
                    !
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre">
                    Placeholder — to be confirmed with the institution
                  </p>
                </div>

                <p className="text-sm text-charcoal-soft leading-relaxed mb-6">
                  The structure below is the typical framework for a Diploma
                  in Enrolled Nursing and Midwifery Science at NQF Level 6.
                  Final, current requirements for the next intake should be
                  confirmed with PMT directly — see campus contact numbers
                  below.
                </p>

                <ul className="space-y-3 text-sm text-charcoal-soft">
                  <li className="flex gap-3">
                    <span
                      className="font-mono text-warm-ochre mt-0.5"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    <span>
                      <span className="text-forest-teal font-medium">
                        Secondary schooling:
                      </span>{" "}
                      a recognised Grade 12 / NSSC certificate with passes in
                      relevant subjects (typically including English,
                      Biology, and Mathematics or Physical Science). Exact
                      subject and grade requirements to be confirmed.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="font-mono text-warm-ochre mt-0.5"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    <span>
                      <span className="text-forest-teal font-medium">
                        Entrance test:
                      </span>{" "}
                      applicants may be required to sit an entrance
                      assessment. Dates rotate with each intake.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="font-mono text-warm-ochre mt-0.5"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    <span>
                      <span className="text-forest-teal font-medium">
                        Medical fitness:
                      </span>{" "}
                      a medical certificate of fitness may be required prior
                      to clinical placement.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span
                      className="font-mono text-warm-ochre mt-0.5"
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    <span>
                      <span className="text-forest-teal font-medium">
                        Documentation:
                      </span>{" "}
                      certified copies of academic records, ID, and any other
                      documents requested by the campus.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <CTAButton href="/admissions">
                    See the admissions process
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── DURATION & STRUCTURE (PLACEHOLDER) ─────────── */}
      <section aria-labelledby="duration-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="To be confirmed"
                title="Duration and structure."
                lede="The Diploma in Enrolled Nursing and Midwifery Science typically runs over multiple years, combining academic, practical, and clinical placement components. The exact duration and structure should be confirmed with PMT."
              />
            </div>

            <div className="lg:col-span-7">
              <div className="bg-card border-2 border-dashed border-warm-ochre/40 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-border">
                  <span
                    className="inline-flex w-8 h-8 rounded-full bg-warm-ochre/15 text-warm-ochre items-center justify-center font-mono text-xs"
                    aria-hidden="true"
                  >
                    !
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre">
                    Placeholder — to be confirmed with the institution
                  </p>
                </div>

                <p className="text-sm text-charcoal-soft leading-relaxed mb-6">
                  Programmes at NQF Level 6 typically span several academic
                  years and include supervised clinical placement. The exact
                  duration, modular breakdown, and placement schedule for the
                  current PMT cohort are confirmed at the point of
                  application.
                </p>

                <dl className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Indicative duration
                    </dt>
                    <dd className="text-sm text-charcoal-soft">
                      To be confirmed — typically multi-year for NQF Level 6
                      nursing diplomas.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Delivery mode
                    </dt>
                    <dd className="text-sm text-charcoal-soft">
                      On-campus, full-time. Theory + skills lab + clinical
                      placement.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Intake frequency
                    </dt>
                    <dd className="text-sm text-charcoal-soft">
                      At least one intake per year — confirm next window with
                      campus.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                      Outcome
                    </dt>
                    <dd className="text-sm text-charcoal-soft">
                      Eligibility to register with HPCNA as an enrolled nurse
                      and midwife.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Ready to apply?
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            The admissions team at each campus can confirm entry requirements,
            intake dates, and funding options for your situation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/admissions" size="lg">
              Apply Now
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline"
              className="border-warm-off-white/30 text-warm-off-white hover:bg-warm-off-white hover:text-forest-teal"
            >
              Contact a campus
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
