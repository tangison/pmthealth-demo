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
  {
    step: "01",
    label: "Enquire",
    body: "Call the campus closest to you. The admissions team will confirm the next intake, entry requirements, and the entrance test window for that intake.",
  },
  {
    step: "02",
    label: "Confirm funding path",
    body: "Decide whether you will apply through NSFAF (government subsidised funding) or as a self-funded student. Both paths lead to the same qualification — the difference is how fees are paid.",
  },
  {
    step: "03",
    label: "Submit application",
    body: "Submit your application with the required documents (certified academic records, ID, and any documents requested by the campus). The admissions team will guide you through the checklist.",
  },
  {
    step: "04",
    label: "Entrance test",
    body: "Where required, sit the entrance assessment. Dates rotate with each intake — your campus will share the date for your cohort.",
  },
  {
    step: "05",
    label: "Accept offer",
    body: "If successful, accept your place, complete enrolment, and begin your training. The oath comes later — the night before graduation.",
  },
];

export default function AdmissionsPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Admissions · Open for the next intake
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Apply to
                <span className="italic"> PMT.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
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
        className="border-b border-border bg-forest-teal text-warm-off-white"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-10">
          <h2
            id="apply-strip-title"
            className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-5"
          >
            Call the campus closest to you
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {campuses.map((c) => (
              <a
                key={c.slug}
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="group flex flex-col"
              >
                <span className="font-display text-2xl sm:text-3xl text-warm-off-white group-hover:text-warm-ochre transition-colors">
                  {c.city}
                </span>
                <span className="font-mono text-sm text-warm-ochre-soft mt-1">
                  {c.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── APPLICATION STEPS ─────────── */}
      <section aria-labelledby="steps-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="The process"
            title="Five steps from enquiry to enrolment."
            lede="Admissions at PMT are handled campus by campus. The structure is the same everywhere — what changes is the date of your intake and the specifics of your entrance test window."
          />

          <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5 border border-border list-none p-0">
            {steps.map((s) => (
              <li
                key={s.step}
                className="bg-warm-off-white p-6 flex flex-col"
              >
                <span className="font-mono text-xs text-warm-ochre mb-3">
                  {s.step}
                </span>
                <h3 className="font-display text-xl text-forest-teal leading-tight mb-2">
                  {s.label}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">
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
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Two paths, one qualification"
            title="NSFAF-funded or self-funded."
            lede="Both paths lead to the same Diploma in Enrolled Nursing and Midwifery Science. The difference is how fees are paid — not what you learn, not what you graduate with, and not the oath you take the night before."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* NSFAF */}
            <article className="bg-card border border-border p-7 sm:p-8 flex flex-col">
              <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-border">
                <h3 className="font-display text-2xl text-forest-teal">
                  NSFAF-funded
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre">
                  Government subsidised
                </span>
              </div>
              <p className="text-sm text-charcoal-soft leading-relaxed mb-5">
                The Namibia Students Financial Assistance Fund provides
                government-subsidised tertiary funding to eligible Namibian
                students. PMT accepts NSFAF-sponsored applicants into the
                Diploma programme.
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal-soft">
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    Eligibility is determined by NSFAF, not by PMT — check
                    current NSFAF criteria before applying.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    Apply to NSFAF in parallel with your PMT application —
                    funding confirmation is typically required before
                    enrolment.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    The admissions team at each campus can walk you through
                    the coordination between NSFAF and PMT.
                  </span>
                </li>
              </ul>
              <a
                href="https://www.nsfaf.na/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
              >
                nsfaf.na
                <span aria-hidden="true">↗</span>
              </a>
            </article>

            {/* Self-funded */}
            <article className="bg-card border border-border p-7 sm:p-8 flex flex-col">
              <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-border">
                <h3 className="font-display text-2xl text-forest-teal">
                  Self-funded
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre">
                  Private
                </span>
              </div>
              <p className="text-sm text-charcoal-soft leading-relaxed mb-5">
                Applicants who do not qualify for NSFAF, or who choose to
                fund their studies privately, are equally welcome. The
                qualification, training, and graduation path are identical.
              </p>
              <ul className="space-y-2.5 text-sm text-charcoal-soft">
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    Fee structure and payment schedule are confirmed by the
                    campus at the point of application.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    Self-funded students follow the same academic,
                    practical, and clinical placement path as NSFAF-funded
                    students.
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <span
                    className="text-warm-ochre font-mono"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>
                    Graduation, the oath, and HPCNA registration
                    eligibility are identical regardless of funding path.
                  </span>
                </li>
              </ul>
              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
              >
                Ask about fees
                <span aria-hidden="true">→</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ─────────── INTAKE + ENTRANCE TEST (PLACEHOLDER STRUCTURE) ─────────── */}
      <section aria-labelledby="intake-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Dates rotate per intake"
                title="Intake windows and the entrance test."
                lede="PMT runs at least one intake per year. Exact dates — application window, entrance test date, course start — rotate with each cohort. Rather than hard-coding a date that goes stale, this page is built to be updated per intake."
              />
            </div>

            <div className="lg:col-span-7">
              {/* Indicative structure — institution to fill in current dates */}
              <div className="bg-card border border-border overflow-hidden">
                <div className="bg-forest-teal text-warm-off-white px-6 py-4 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg">
                    Indicative intake calendar
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre">
                    Updated per intake
                  </span>
                </div>

                <dl className="divide-y divide-border">
                  <div className="grid grid-cols-12 gap-4 px-6 py-5">
                    <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:pt-1">
                      Application window
                    </dt>
                    <dd className="col-span-12 sm:col-span-8 text-sm text-charcoal-soft">
                      Opens ahead of each intake. Confirm the current window
                      with your campus.
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 px-6 py-5">
                    <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:pt-1">
                      Entrance test
                    </dt>
                    <dd className="col-span-12 sm:col-span-8 text-sm text-charcoal-soft">
                      Where required, held after application close. Your
                      campus will share the date and venue for your cohort.
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 px-6 py-5">
                    <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:pt-1">
                      Course start
                    </dt>
                    <dd className="col-span-12 sm:col-span-8 text-sm text-charcoal-soft">
                      Aligned with the academic calendar. The next confirmed
                      start date will be posted here and on the News page
                      once finalised.
                    </dd>
                  </div>
                  <div className="grid grid-cols-12 gap-4 px-6 py-5">
                    <dt className="col-span-12 sm:col-span-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:pt-1">
                      Next confirmed intake
                    </dt>
                    <dd className="col-span-12 sm:col-span-8 text-sm text-charcoal-soft">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="inline-block w-2 h-2 rounded-full bg-warm-ochre animate-pulse"
                          aria-hidden="true"
                        />
                        March 2026 — applications open. Contact campus to
                        confirm.
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
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
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Before you call"
            title="Application checklist."
            lede="A short, indicative checklist of what to have ready. Your campus will confirm the final document list for your situation — use this as a starting point."
          />

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
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
                className="flex items-start gap-3 bg-card border border-border p-4"
              >
                <span
                  className="inline-flex w-5 h-5 mt-0.5 rounded-sm border border-forest-teal/40 items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm text-charcoal-soft leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Pick up the phone.
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            Admissions are handled by each campus directly. The team will
            confirm the next intake window, entry requirements, and your
            funding path.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact" size="lg">
              All campus numbers
            </CTAButton>
            <CTAButton
              href="/programmes"
              variant="outline"
              className="border-warm-off-white/30 text-warm-off-white hover:bg-warm-off-white hover:text-forest-teal"
            >
              Review the programme
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
