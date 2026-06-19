import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { site, accreditation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About PMT",
  description:
    "PMT Health Care Institution was founded in 2019 by Sister Rutendo T. Zvidza and named after Priscilla Monica Tendo, who inspired her to become a nurse. A Namibian training centre of excellence for enrolled nursing and midwifery.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Quality first",
    body: "Our mission centres on the word 'quality' for a reason. A nurse trained at PMT must be ready for the realities of Namibian wards and clinics — not just exam rooms.",
  },
  {
    title: "Compassion as practice",
    body: "Skill without care is incomplete. We treat compassion as a clinical discipline, not a personality trait — something built through repetition, reflection, and the oath itself.",
  },
  {
    title: "Trust, earned and verified",
    body: "We hold HPCNA approval and NQA accreditation because trust in health training cannot be claimed, only demonstrated. Our accreditation page makes the primary-source proof public.",
  },
  {
    title: "Service to Namibia",
    body: "Our graduates serve across the country — Windhoek, Rundu, Ongwediva, and beyond. The closing line of our founder's posts is the same: go out and serve Namibia with pride.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                About · Founded {site.founded}
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                A school named for
                <span className="italic"> a nurse.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                PMT Health Care Institution trains enrolled nurses and
                midwives for Namibia's health system. This is the story of
                why it exists, and who it is named after.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FOUNDER STORY ─────────── */}
      <section aria-labelledby="founder-story-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
                The founder
              </p>
              <h2
                id="founder-story-title"
                className="font-display text-3xl sm:text-4xl lg:text-5xl text-forest-teal leading-[1.05] tracking-tightest"
              >
                Sister Rutendo T. Zvidza
              </h2>

              {/* Founder "card" — typographic, no fake portrait */}
              <div className="mt-8 bg-card border border-border p-6">
                <div className="flex items-baseline justify-between gap-3 mb-4 pb-4 border-b border-border">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Director &amp; Founder
                  </span>
                  <span className="font-mono text-xs text-warm-ochre">
                    Since {site.founded}
                  </span>
                </div>
                <p className="font-display text-2xl text-forest-teal leading-tight">
                  {site.director}
                </p>
                <p className="mt-3 text-sm text-charcoal-soft leading-relaxed">
                  Nurse, educator, and founder of PMT Health Care Institution.
                  Named the school after {site.namedFor}, who first inspired
                  her to enter the profession.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 prose prose-lg max-w-none">
              <p className="text-lg text-charcoal-soft leading-relaxed">
                PMT Health Care Institution was founded in {site.founded} by{" "}
                {site.director}. The institution is named after{" "}
                <span className="text-forest-teal font-medium">
                  {site.namedFor}
                </span>{" "}
                — Priscilla Monica Tendo — the woman who inspired Sister
                Rutendo to become a nurse.
              </p>

              <p className="mt-6 text-base text-charcoal-soft leading-relaxed">
                That origin is not a marketing detail. It is the reason the
                school exists. The abbreviation PMT carries her name into
                every classroom, every clinical placement, every graduation
                ceremony — a daily reminder that nursing is, before anything
                else, a relationship between people.
              </p>

              <p className="mt-6 text-base text-charcoal-soft leading-relaxed">
                From its founding in {site.founded}, PMT set out to build a
                training centre that could be trusted by students, by
                regulators, and by the Namibian public. That trust is
                structural: the institution secured{" "}
                <span className="text-forest-teal font-medium">
                  HPCNA approval on {accreditation.hpcna.approvedOn}
                </span>{" "}
                and followed with{" "}
                <span className="text-forest-teal font-medium">
                  NQA accreditation
                </span>
                . Both are verifiable through the relevant Namibian
                authorities.
              </p>

              {/* Pull quote — ceremonial maroon rule */}
              <blockquote className="mt-10 relative pl-6">
                <span
                  className="absolute left-0 top-2 bottom-2 w-px bg-deep-maroon"
                  aria-hidden="true"
                />
                <p className="font-display italic text-2xl sm:text-3xl text-forest-teal leading-snug">
                  &ldquo;Go out there and serve Namibia with pride.&rdquo;
                </p>
                <footer className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  — The founder's sign-off, repeated across PMT's graduation
                  announcements
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── MISSION ─────────── */}
      <section
        aria-labelledby="mission-title"
        className="border-b border-border bg-forest-teal text-warm-off-white"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-6">
            Our mission
          </p>
          <h2
            id="mission-title"
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
          >
            &ldquo;{site.mission}&rdquo;
          </h2>
          <p className="mt-8 text-sm text-warm-off-white/60 font-mono">
            — Mission statement, in the institution's own words
          </p>
        </div>
      </section>

      {/* ─────────── VALUES ─────────── */}
      <section aria-labelledby="values-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="What we hold to"
            title="Four values, lived daily."
            lede="PMT's values are not abstractions printed on a wall. They show up in how admissions are handled, how clinical placements are supervised, and how the oath is taken the night before graduation."
          />

          <ol className="mt-12 grid gap-px bg-border sm:grid-cols-2 border border-border list-none p-0">
            {values.map((v, i) => (
              <li
                key={v.title}
                className="bg-warm-off-white p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono text-xs text-warm-ochre">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-px flex-1 bg-warm-ochre/30"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-2xl text-forest-teal leading-tight mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {v.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─────────── ORIGIN TIMELINE ─────────── */}
      <section aria-labelledby="timeline-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="In the open record"
            title="A short public timeline."
            lede="PMT's history is short and verifiable. These are the moments that matter, with dates that match the public record."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 list-none p-0">
            {[
              {
                year: "2019",
                label: "Founded",
                body: `${site.director} establishes PMT Health Care Institution, named after ${site.namedFor}.`,
              },
              {
                year: "10 Sep 2021",
                label: "HPCNA approval",
                body: "The Health Professions Council of Namibia grants formal approval to train health professionals.",
              },
              {
                year: "22 Aug 2023",
                label: "I-Care MOU",
                body: "Articulation and cross-crediting memorandum of understanding signed with I-Care Health Training Institute.",
              },
              {
                year: "Ongoing",
                label: "NQA accredited",
                body: "NQA accreditation confirms the Diploma in Enrolled Nursing and Midwifery Science meets national standards at NQF Level 6.",
              },
            ].map((item) => (
              <li
                key={item.label}
                className="border-l-2 border-warm-ochre pl-5 py-1"
              >
                <p className="font-mono text-xs text-warm-ochre mb-1">
                  {item.year}
                </p>
                <h3 className="font-display text-xl text-forest-teal leading-tight mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-3">
            <CTAButton href="/accreditation">
              Verify accreditation
            </CTAButton>
            <CTAButton href="/programmes" variant="outline">
              See the programme
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
