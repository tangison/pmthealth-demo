import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { campuses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to PMT Health Care Institution. NSFAF-funded and self-funded applicants are both welcome. Contact your nearest campus to confirm the next intake dates, entrance test window, and entry requirements.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  { step: "01", label: "Enquire", body: "Call the campus closest to you. The admissions team will confirm the next intake, entry requirements, and the entrance test window for that intake." },
  { step: "02", label: "Confirm funding path", body: "Decide whether you will apply through NSFAF (government subsidised funding) or as a self-funded student. Both paths lead to the same qualification — the difference is how fees are paid." },
  { step: "03", label: "Submit application", body: "Submit your application with the required documents (certified academic records, ID, and any documents requested by the campus). The admissions team will guide you through the checklist." },
  { step: "04", label: "Entrance test", body: "Where required, sit the entrance assessment. Dates rotate with each intake — your campus will share the date for your cohort." },
  { step: "05", label: "Accept offer", body: "If successful, accept your place, complete enrolment, and begin your training. The oath comes later — the night before graduation." },
];

export default function AdmissionsPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                Admissions · Open for the next intake
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-pmt-purple-900 leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Apply to
                <span className="italic"> PMT.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <div className="img-zoom rounded-3xl overflow-hidden bg-pmt-purple-900 aspect-[4/3] mb-5">
                { }
                <img
                  src="/images/stock/study-01.webp"
                  alt="Medical textbooks and stethoscope on a study desk."
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                PMT accepts both NSFAF-funded and self-funded applicants into
                the Diploma in Enrolled Nursing and Midwifery Science. The
                fastest way to start is to call your nearest campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── APPLY / ENQUIRE PHONE STRIP ─────────── */}
      <section
        aria-labelledby="apply-strip-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-purple-900 text-pmt-cream"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12">
          <h2
            id="apply-strip-title"
            className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-5"
          >
            Call the campus closest to you
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {campuses.map((c) => (
              <a
                key={c.slug}
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="btn-physics group flex flex-col"
              >
                <span className="font-display text-2xl sm:text-3xl text-pmt-cream group-hover:text-pmt-gold transition-colors tracking-tight">
                  {c.city}
                </span>
                <span className="font-mono text-sm text-pmt-gold-soft mt-1">
                  {c.phone}
                </span>
                {c.landline && (
                  <span className="font-mono text-xs text-pmt-cream/50 mt-1">
                    {c.landline}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── APPLICATION STEPS ─────────── */}
      <section aria-labelledby="steps-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="The process"
            title="Five steps from enquiry to enrolment."
            lede="Admissions at PMT are handled campus by campus. The structure is the same everywhere — what changes is the date of your intake and the specifics of your entrance test window."
            className="mb-12"
          />

          <ol className="mt-12 grid gap-px bg-pmt-purple-900/10 sm:grid-cols-2 lg:grid-cols-5 border border-pmt-purple-900/10 rounded-2xl overflow-hidden list-none p-0" data-reveal>
            {steps.map((s) => (
              <li
                key={s.step}
                className="bg-pmt-cream p-6 flex flex-col card-physics"
              >
                <span className="font-mono text-xs text-pmt-gold mb-3">
                  {s.step}
                </span>
                <h3 className="font-display text-xl text-pmt-purple-900 leading-tight mb-2 tracking-tight">
                  {s.label}
                </h3>
                <p className="text-sm text-pmt-ink-soft leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────── FUNDING PATHS ─────────── */}
      <section
        aria-labelledby="funding-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Two paths, one qualification"
            title="NSFAF-funded or self-funded."
            lede="Both paths lead to the same Diploma in Enrolled Nursing and Midwifery Science. The difference is how fees are paid — not what you learn, not what you graduate with, and not the oath you take the night before."
            className="mb-12"
          />

          {/* Real photo strip — students in skills lab (reused from crawled assets) */}
          <div className="mb-12 grid gap-4 sm:grid-cols-3" data-reveal>
            <div className="img-zoom aspect-[4/3] rounded-2xl overflow-hidden bg-pmt-purple-900 sm:col-span-2">
              { }
              <img
                src="/images/crawled/students-practical-room.webp"
                alt="PMT students in blue scrubs outside the Practical Room."
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="img-zoom aspect-[4/3] rounded-2xl overflow-hidden bg-pmt-purple-900">
              { }
              <img
                src="/images/crawled/photo-nurses-day.webp"
                alt="Two PMT nurses holding a Nurses Day frame."
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2" data-reveal>
            {/* NSFAF */}
            <article className="bg-white border border-pmt-purple-900/10 rounded-3xl p-7 sm:p-8 flex flex-col card-physics">
              <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-pmt-purple-900/10">
                <h3 className="font-display text-2xl text-pmt-purple-900 tracking-tight">
                  NSFAF-funded
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold">
                  Government subsidised
                </span>
              </div>
              <p className="text-sm text-pmt-ink-soft leading-relaxed mb-5">
                The Namibia Students Financial Assistance Fund provides
                government-subsidised tertiary funding to eligible Namibian
                students. PMT accepts NSFAF-sponsored applicants into the
                Diploma programme.
              </p>
              <ul className="space-y-2.5 text-sm text-pmt-ink-soft">
                {[
                  "Eligibility is determined by NSFAF, not by PMT — check current NSFAF criteria before applying.",
                  "Apply to NSFAF in parallel with your PMT application — funding confirmation is typically required before enrolment.",
                  "The admissions team at each campus can walk you through the coordination between NSFAF and PMT.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-pmt-gold font-mono" aria-hidden="true">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.nsfaf.na/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 btn-physics inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-pmt-purple-900 hover:text-pmt-gold"
              >
                nsfaf.na
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            {/* Self-funded */}
            <article className="bg-white border border-pmt-purple-900/10 rounded-3xl p-7 sm:p-8 flex flex-col card-physics">
              <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-pmt-purple-900/10">
                <h3 className="font-display text-2xl text-pmt-purple-900 tracking-tight">
                  Self-funded
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold">
                  Private
                </span>
              </div>
              <p className="text-sm text-pmt-ink-soft leading-relaxed mb-5">
                Applicants who do not qualify for NSFAF, or who choose to
                fund their studies privately, are equally welcome. The
                qualification, training, and graduation path are identical.
              </p>
              <ul className="space-y-2.5 text-sm text-pmt-ink-soft">
                {[
                  "Fee structure and payment schedule are confirmed by the campus at the point of application.",
                  "Self-funded students follow the same academic, practical, and clinical placement path as NSFAF-funded students.",
                  "Graduation, the oath, and HPCNA registration eligibility are identical regardless of funding path.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="text-pmt-gold font-mono" aria-hidden="true">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-7 btn-physics inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-pmt-purple-900 hover:text-pmt-gold"
              >
                Ask about fees
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ─────────── INTAKE + ENTRANCE TEST ─────────── */}
      <section aria-labelledby="intake-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              <SectionHeading
                eyebrow="Dates rotate per intake"
                title="Intake windows and the entrance test."
                lede="PMT runs at least one intake per year. Exact dates — application window, entrance test date, course start — rotate with each cohort. Rather than hard-coding a date that goes stale, this page is built to be updated per intake."
              />
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="bg-white border border-pmt-purple-900/10 rounded-3xl overflow-hidden">
                <div className="bg-pmt-purple-900 text-pmt-cream px-6 py-4 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg tracking-tight">
                    Indicative intake calendar
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold">
                    Updated per intake
                  </span>
                </div>

                <dl className="divide-y divide-pmt-purple-900/10">
                  {[
                    { l: "Application window", v: "Opens ahead of each intake. Confirm the current window with your campus." },
                    { l: "Entrance test", v: "Where required, held after application close. Your campus will share the date and venue for your cohort." },
                    { l: "Course start", v: "Aligned with the academic calendar. The next confirmed start date will be posted here and on the News page once finalised." },
                    { l: "Next confirmed intake", v: "March 2026 — applications open. Contact campus to confirm.", live: true },
                  ].map((d) => (
                    <div key={d.l} className="grid grid-cols-12 gap-4 px-6 py-5">
                      <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft sm:pt-1">
                        {d.l}
                      </dt>
                      <dd className="col-span-12 sm:col-span-8 text-sm text-pmt-ink-soft">
                        {d.live ? (
                          <span className="inline-flex items-center gap-2">
                            <span
                              className="inline-block w-2 h-2 rounded-full bg-pmt-gold animate-pulse"
                              aria-hidden="true"
                            />
                            {d.v}
                          </span>
                        ) : (
                          d.v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-6 text-xs text-pmt-ink-soft/70 leading-relaxed">
                This structure is intentionally not hard-coded with a single
                year's date so the page stays accurate between intakes.
                Confirm the current window by phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CHECKLIST ─────────── */}
      <section
        aria-labelledby="checklist-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Before you call"
            title="Application checklist."
            lede="A short, indicative checklist of what to have ready. Your campus will confirm the final document list for your situation — use this as a starting point."
            className="mb-12"
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2" data-reveal>
            {[
              "Certified copy of your Grade 12 / NSSC certificate",
              "Certified copy of your national ID or passport",
              "Recent passport-size photograph",
              "Proof of residence",
              "Completed application form (from the campus)",
              "Application fee confirmation (where applicable)",
              "Medical certificate of fitness (if requested)",
              "NSFAF confirmation letter (if NSFAF-funded)",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-white border border-pmt-purple-900/10 rounded-2xl p-4"
              >
                <span
                  className="inline-flex w-5 h-5 mt-0.5 rounded-full border-2 border-pmt-purple-900/30 items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-pmt-ink-soft leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
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
            Pick up the phone.
          </h2>
          <p className="mt-4 text-pmt-cream/80 max-w-lg mx-auto">
            Admissions are handled by each campus directly. The team will
            confirm the next intake window, entry requirements, and your
            funding path.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact" size="lg">
              All campus numbers
            </CTAButton>
            <CTAButton
              href="/programmes"
              variant="outline"
              className="border-pmt-cream/40 text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
            >
              Review the programme
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
