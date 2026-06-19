import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { PulseLine } from "@/components/site/pulse-line";
import { SectionHeading } from "@/components/site/section-heading";
import { CTAButton } from "@/components/site/cta-button";
import { accreditation } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Accreditation & Trust",
  description:
    "PMT Health Care Institution is approved by the Health Professions Council of Namibia (HPCNA) on 10 September 2021 and accredited by the Namibia Qualifications Authority (NQA). Verify the institution's legitimacy here, with primary-source proof.",
  alternates: { canonical: "/accreditation" },
};

export default function AccreditationPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Accreditation &amp; Trust · Verified
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Verified.
                <br />
                <span className="italic">Not claimed.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                PMT Health Care Institution holds formal approval from HPCNA
                and accreditation from NQA. This page exists to make that
                verifiable — not as marketing copy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── THE LEGITIMACY PARAGRAPH — calm, factual ─────────── */}
      <section aria-labelledby="legitimacy-title" className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <p
            id="legitimacy-title"
            className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-6"
          >
            On the question of legitimacy
          </p>

          <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-forest-teal leading-[1.25] tracking-tight">
            PMT is a registered, accredited nursing training institution in
            Namibia. The Health Professions Council of Namibia granted
            approval on{" "}
            <span className="italic">{accreditation.hpcna.approvedOn}</span>,
            and the qualification is accredited by NQA at NQF Level 6. Both
            are matters of public record.
          </p>

          {/* Maroon ceremonial rule — only place maroon appears on this page */}
          <span
            className="block mt-10 mb-6"
            aria-hidden="true"
            style={{ width: 64, height: 1, backgroundColor: "#6B1F2A" }}
          />

          <p className="text-base sm:text-lg text-charcoal-soft leading-relaxed">
            The institution has, at times, been the subject of incorrect
            information shared online. We do not engage with that noise
            defensively. Instead, this page sets out the primary-source proof
            of PMT's standing — the regulator, the date of approval, and what
            each accreditation means in plain terms for a prospective student.
            If a claim about PMT's legitimacy cannot be traced back to HPCNA
            or NQA, it is not authoritative.
          </p>

          <p className="mt-6 text-base text-charcoal-soft leading-relaxed">
            Prospective students, parents, employers, and the public are
            encouraged to verify PMT's status directly with the relevant
            authorities. Contact details for both regulators are listed
            below.
          </p>
        </div>
      </section>

      {/* ─────────── PULSE LINE — signature motif, used once on this page ─────────── */}
      <div
        className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8"
        aria-hidden="true"
      >
        <PulseLine variant="divider" strokeColor="#16433D" />
      </div>

      {/* ─────────── HPCNA DETAIL ─────────── */}
      <section
        aria-labelledby="hpcna-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              {/* Typographic "stamp" — no fake seal artwork */}
              <div className="bg-forest-teal text-warm-off-white p-7 sm:p-9 border border-forest-teal-deep">
                <div className="flex items-baseline justify-between gap-3 mb-6 pb-6 border-b border-warm-off-white/15">
                  <span className="font-display text-3xl tracking-tight">
                    {accreditation.hpcna.shortName}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre">
                    Approved
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-warm-off-white/50 mb-2">
                  Regulator
                </p>
                <p className="text-base text-warm-off-white leading-snug mb-6">
                  {accreditation.hpcna.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-warm-off-white/50 mb-2">
                  Approval date
                </p>
                <p className="font-display text-2xl text-warm-ochre-soft leading-tight">
                  {accreditation.hpcna.approvedOn}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2
                id="hpcna-title"
                className="font-display text-3xl sm:text-4xl text-forest-teal leading-[1.05] tracking-tightest mb-6"
              >
                Health Professions Council of Namibia
              </h2>
              <p className="text-base text-charcoal-soft leading-relaxed mb-5">
                {accreditation.hpcna.whatItMeans}
              </p>
              <p className="text-base text-charcoal-soft leading-relaxed mb-5">
                Approval was granted on{" "}
                <span className="font-mono text-warm-ochre">
                  {accreditation.hpcna.approvedOn}
                </span>
                . From that date, PMT is authorised to train health
                professionals in Namibia under the regulatory framework
                administered by HPCNA.
              </p>
              <p className="text-base text-charcoal-soft leading-relaxed">
                For prospective students, the practical implication is
                straightforward: graduates of an HPCNA-approved institution
                are eligible to register with HPCNA and practise in Namibia.
                Without that approval, a nursing qualification has no
                regulatory standing.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Verify directly with HPCNA
                </p>
                <a
                  href="https://www.hpcna.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-forest-teal hover:text-warm-ochre transition-colors"
                >
                  hpcna.org
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── NQA DETAIL ─────────── */}
      <section
        aria-labelledby="nqa-title"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 lg:order-2">
              <div className="bg-card border-2 border-forest-teal p-7 sm:p-9">
                <div className="flex items-baseline justify-between gap-3 mb-6 pb-6 border-b border-border">
                  <span className="font-display text-3xl tracking-tight text-forest-teal">
                    {accreditation.nqa.shortName}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre">
                    Accredited
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Authority
                </p>
                <p className="text-base text-forest-teal leading-snug mb-6">
                  {accreditation.nqa.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Qualification
                </p>
                <p className="font-display text-xl text-forest-teal leading-tight">
                  Diploma in Enrolled Nursing and Midwifery Science
                </p>
                <p className="font-mono text-sm text-warm-ochre mt-1">
                  NQF Level 6
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <h2
                id="nqa-title"
                className="font-display text-3xl sm:text-4xl text-forest-teal leading-[1.05] tracking-tightest mb-6"
              >
                Namibia Qualifications Authority
              </h2>
              <p className="text-base text-charcoal-soft leading-relaxed mb-5">
                {accreditation.nqa.whatItMeans}
              </p>
              <p className="text-base text-charcoal-soft leading-relaxed mb-5">
                NQA accreditation places the qualification on the Namibian
                Qualifications Framework at{" "}
                <span className="font-mono text-warm-ochre">
                  NQF Level 6
                </span>
                . This means the qualification's learning outcomes, duration,
                and assessment standards have been evaluated against a
                national benchmark — not set by the institution itself.
              </p>
              <p className="text-base text-charcoal-soft leading-relaxed">
                For graduates, NQA accreditation is what allows the diploma
                to be recognised by employers, further training institutions,
                and articulation partners — including the I-Care Health
                Training Institute MOU signed on 22 August 2023.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Verify directly with NQA
                </p>
                <a
                  href="https://www.namqa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm text-forest-teal hover:text-warm-ochre transition-colors"
                >
                  namqa.org
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ — short, factual ─────────── */}
      <section
        aria-labelledby="faq-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Direct answers"
            title="Common questions about PMT's standing."
            align="left"
          />

          <dl className="mt-10 divide-y divide-border border-y border-border">
            <div className="py-6">
              <dt className="font-display text-xl text-forest-teal mb-3">
                Is PMT a legitimate nursing school?
              </dt>
              <dd className="text-sm text-charcoal-soft leading-relaxed">
                Yes. PMT Health Care Institution is approved by the Health
                Professions Council of Namibia (HPCNA), with approval granted
                on {accreditation.hpcna.approvedOn}, and the Diploma in
                Enrolled Nursing and Midwifery Science is accredited by NQA
                at NQF Level 6. Both are verifiable through the relevant
                regulators.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-display text-xl text-forest-teal mb-3">
                Can I register with HPCNA after graduating from PMT?
              </dt>
              <dd className="text-sm text-charcoal-soft leading-relaxed">
                Graduates of an HPCNA-approved institution are eligible to
                apply for registration with HPCNA. Registration is the
                regulatory step that allows a nurse to legally practise in
                Namibia.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-display text-xl text-forest-teal mb-3">
                What does NQF Level 6 mean?
              </dt>
              <dd className="text-sm text-charcoal-soft leading-relaxed">
                NQF Level 6 sits on the Namibian Qualifications Framework
                above Level 5 (typically certificates and lower diplomas) and
                below Level 7 (typically bachelor's degrees). It is the level
                at which diploma-level nursing and midwifery qualifications
                are placed on the framework.
              </dd>
            </div>
            <div className="py-6">
              <dt className="font-display text-xl text-forest-teal mb-3">
                Where can I verify this independently?
              </dt>
              <dd className="text-sm text-charcoal-soft leading-relaxed">
                The two authoritative sources are HPCNA (hpcna.org) and NQA
                (namqa.org). Both maintain public registers of approved and
                accredited institutions. If a claim about PMT cannot be
                traced back to either body, it should not be treated as
                authoritative.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Trust is earned, then made public.
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            If you have further questions about PMT's accreditation, contact
            the Windhoek campus — we will point you to the primary source.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact" size="lg">
              Contact PMT
            </CTAButton>
            <CTAButton
              href="/programmes"
              variant="outline"
              className="border-warm-off-white/30 text-warm-off-white hover:bg-warm-off-white hover:text-forest-teal"
            >
              See the programme
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
