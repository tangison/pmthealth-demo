import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { programme, accreditation, additionalProgrammes } from "@/lib/site-data";

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
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                Programme · NQF Level {programme.nqfLevel}
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-pmt-purple-900 leading-[1.02] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Diploma in Enrolled
                <br />
                Nursing and
                <span className="italic"> Midwifery Science.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                PMT's flagship qualification. Recognised on the Namibian
                Qualifications Framework at Level {programme.nqfLevel},
                approved by HPCNA, and accredited by NQA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PROGRAMME AT A GLANCE (BENTO) ─────────── */}
      <section aria-labelledby="glance-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h2
            id="glance-title"
            className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-8"
          >
            At a glance
          </h2>

          <dl className="grid gap-px bg-pmt-purple-900/10 sm:grid-cols-2 lg:grid-cols-4 border border-pmt-purple-900/10 rounded-2xl overflow-hidden" data-reveal>
            <div className="bg-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                Qualification
              </dt>
              <dd className="font-display text-xl text-pmt-purple-900 leading-tight tracking-tight">
                Diploma
              </dd>
              <p className="mt-2 text-sm text-pmt-ink-soft">
                Enrolled Nursing and Midwifery Science
              </p>
            </div>
            <div className="bg-pmt-cream-2/40 p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                NQF Level
              </dt>
              <dd className="font-display text-xl text-pmt-purple-900 leading-tight tracking-tight">
                Level {programme.nqfLevel}
              </dd>
              <p className="mt-2 text-sm text-pmt-ink-soft">
                Namibian Qualifications Framework
              </p>
            </div>
            <div className="bg-white p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                Regulator
              </dt>
              <dd className="font-display text-xl text-pmt-purple-900 leading-tight tracking-tight">
                {accreditation.hpcna.shortName}
              </dd>
              <p className="mt-2 text-sm text-pmt-ink-soft">
                Approved {accreditation.hpcna.approvedOn}
              </p>
            </div>
            <div className="bg-pmt-cream-2/40 p-6">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                Accreditation
              </dt>
              <dd className="font-display text-xl text-pmt-purple-900 leading-tight tracking-tight">
                {accreditation.nqa.shortName}
              </dd>
              <p className="mt-2 text-sm text-pmt-ink-soft">
                Nationally accredited qualification
              </p>
            </div>
          </dl>
        </div>
      </section>

      {/* ─────────── WHAT THE DIPLOMA PREPARES YOU FOR ─────────── */}
      <section aria-labelledby="prepares-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6" data-reveal>
              <SectionHeading
                eyebrow="What you train for"
                title="A registered nurse, ready to serve."
                lede="The Diploma in Enrolled Nursing and Midwifery Science prepares graduates for registration with HPCNA as enrolled nurses and midwives — equipped to work in hospitals, clinics, and community health settings across Namibia."
              />

              <div className="mt-10 space-y-6">
                {[
                  {
                    title: "Theory",
                    body: "Classroom-based learning covering the foundational sciences — anatomy, physiology, microbiology — alongside nursing theory, midwifery, pharmacology, and professional ethics.",
                    img: "/images/stock/classroom-05.webp",
                    alt: "Nursing students studying together with books and notebooks.",
                  },
                  {
                    title: "Skills lab",
                    body: "Practical skills are rehearsed in a controlled training environment before any clinical contact — from basic observations and wound care to assisted delivery.",
                    img: "/images/stock/skillslab-01.webp",
                    alt: "Nursing skills lab with training manikin and medical equipment.",
                  },
                  {
                    title: "Clinical placement",
                    body: "Students rotate through clinical settings under supervision, building real-world competence in patient care, midwifery, and community health practice.",
                    img: "/images/stock/placement-01.webp",
                    alt: "Nursing student in clinical placement in a hospital ward.",
                  },
                  {
                    title: "The oath",
                    body: "The night before graduation, students recite the formal nursing oath — the moment training becomes vocation. This is the institutional signature: every PMT graduate has taken it.",
                    img: "/images/stock/oath-02.webp",
                    alt: "Nursing oath ceremony with candle lighting.",
                  },
                ].map((s) => (
                  <div key={s.title} className="flex gap-5 items-start">
                    <div className="img-zoom flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-pmt-purple-900">
                      { }
                      <img
                        src={s.img}
                        alt={s.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl text-pmt-purple-900 mb-2 tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-sm text-pmt-ink-soft leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real photo of PMT students in skills lab */}
            <div className="lg:col-span-6 lg:sticky lg:top-28" data-reveal>
              <figure>
                <div className="img-zoom rounded-3xl overflow-hidden bg-pmt-purple-900 aspect-[4/5]">
                  { }
                  <img
                    src="/images/crawled/students-skills-lab.webp"
                    alt="Four PMT students in teal uniforms, aprons, and masks in the skills lab."
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-xs text-pmt-ink-soft">
                  Skills lab in session — PMT Windhoek campus.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CAREER OUTCOMES — VISUAL GRID ─────────── */}
      <section
        aria-labelledby="careers-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Where you'll work"
            title="Career outcomes after PMT."
            lede="Graduates of the Diploma in Enrolled Nursing and Midwifery Science are equipped to serve across Namibia's health system — in hospitals, clinics, community health, and midwifery care."
            className="mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
            {[
              { img: "/images/stock/hospital-02.webp", alt: "Hospital ward interior.", label: "Hospital wards" },
              { img: "/images/stock/midwife-02.webp", alt: "Midwife with newborn.", label: "Midwifery care" },
              { img: "/images/stock/bloodpressure-01.webp", alt: "Nurse checking patient blood pressure.", label: "Patient care" },
              { img: "/images/stock/community-02.webp", alt: "Community health outreach.", label: "Community health" },
            ].map((card, i) => (
              <figure
                key={i}
                className="img-zoom relative aspect-[4/3] rounded-2xl overflow-hidden bg-pmt-purple-900 group card-physics"
              >
                { }
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-pmt-purple-900/95 to-transparent">
                  <p className="font-display text-lg text-pmt-cream leading-tight">{card.label}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ADDITIONAL PROGRAMMES (from crawl) ─────────── */}
      <section
        aria-labelledby="additional-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Also listed by PMT"
            title="Other training pathways."
            lede="PMT's existing site lists additional programmes alongside the flagship Diploma. Confirm current availability and intake windows with PMT directly — these are surfaced here for completeness."
            className="mb-12"
          />

          <div className="grid gap-px bg-pmt-purple-900/10 sm:grid-cols-2 lg:grid-cols-3 border border-pmt-purple-900/10 rounded-2xl overflow-hidden" data-reveal>
            {additionalProgrammes.map((p, i) => (
              <article
                key={p.name}
                className={`p-6 ${i % 2 === 0 ? "bg-white" : "bg-pmt-cream"} card-physics`}
              >
                <h3 className="font-display text-xl text-pmt-purple-900 mb-2 tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-pmt-ink-soft leading-relaxed">
                  {p.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ENTRY REQUIREMENTS (PLACEHOLDER) ─────────── */}
      <section
        aria-labelledby="entry-title"
        className="border-b border-pmt-purple-900/10"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              <SectionHeading
                eyebrow="To be confirmed"
                title="Entry requirements."
                lede="Specific entry requirements are confirmed with each intake. The structure below outlines what to expect — final requirements for the next intake should be verified with your nearest campus."
              />
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="bg-white border-2 border-dashed border-pmt-gold/50 rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-pmt-purple-900/10">
                  <span
                    className="inline-flex w-8 h-8 rounded-full bg-pmt-gold/15 text-pmt-gold items-center justify-center font-mono text-xs"
                    aria-hidden="true"
                  >
                    !
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold">
                    Placeholder — to be confirmed with the institution
                  </p>
                </div>

                <p className="text-sm text-pmt-ink-soft leading-relaxed mb-6">
                  The structure below is the typical framework for a Diploma
                  in Enrolled Nursing and Midwifery Science at NQF Level 6.
                  Final, current requirements for the next intake should be
                  confirmed with PMT directly — see campus contact numbers
                  below.
                </p>

                <ul className="space-y-3 text-sm text-pmt-ink-soft">
                  {[
                    { t: "Secondary schooling:", v: "a recognised Grade 12 / NSSC certificate with passes in relevant subjects (typically including English, Biology, and Mathematics or Physical Science). Exact subject and grade requirements to be confirmed." },
                    { t: "Entrance test:", v: "applicants may be required to sit an entrance assessment. Dates rotate with each intake." },
                    { t: "Medical fitness:", v: "a medical certificate of fitness may be required prior to clinical placement." },
                    { t: "Documentation:", v: "certified copies of academic records, ID, and any other documents requested by the campus." },
                  ].map((item) => (
                    <li key={item.t} className="flex gap-3">
                      <span className="font-mono text-pmt-gold mt-0.5" aria-hidden="true">▸</span>
                      <span>
                        <span className="text-pmt-purple-900 font-medium">{item.t}</span>{" "}
                        {item.v}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-pmt-purple-900/10">
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
      <section
        aria-labelledby="duration-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              <SectionHeading
                eyebrow="To be confirmed"
                title="Duration and structure."
                lede="The Diploma in Enrolled Nursing and Midwifery Science typically runs over multiple years, combining academic, practical, and clinical placement components. The exact duration and structure should be confirmed with PMT."
              />
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="bg-white border-2 border-dashed border-pmt-gold/50 rounded-3xl p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-pmt-purple-900/10">
                  <span
                    className="inline-flex w-8 h-8 rounded-full bg-pmt-gold/15 text-pmt-gold items-center justify-center font-mono text-xs"
                    aria-hidden="true"
                  >
                    !
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold">
                    Placeholder — to be confirmed with the institution
                  </p>
                </div>

                <p className="text-sm text-pmt-ink-soft leading-relaxed mb-6">
                  Programmes at NQF Level 6 typically span several academic
                  years and include supervised clinical placement. The exact
                  duration, modular breakdown, and placement schedule for the
                  current PMT cohort are confirmed at the point of
                  application.
                </p>

                <dl className="grid gap-4 sm:grid-cols-2">
                  {[
                    { l: "Indicative duration", v: "To be confirmed — typically multi-year for NQF Level 6 nursing diplomas." },
                    { l: "Delivery mode", v: "On-campus, full-time. Theory + skills lab + clinical placement." },
                    { l: "Intake frequency", v: "At least one intake per year — confirm next window with campus." },
                    { l: "Outcome", v: "Eligibility to register with HPCNA as an enrolled nurse and midwife." },
                  ].map((d) => (
                    <div key={d.l}>
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-1">
                        {d.l}
                      </dt>
                      <dd className="text-sm text-pmt-ink-soft">{d.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-pmt-purple-900 text-pmt-cream relative overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,151,43,0.5) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center" data-reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
            Ready to apply?
          </h2>
          <p className="mt-4 text-pmt-cream/80 max-w-lg mx-auto">
            The admissions team at each campus can confirm entry requirements,
            intake dates, and funding options for your situation.
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
              Contact a campus
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
