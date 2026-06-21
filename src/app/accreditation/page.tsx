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
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                Accreditation &amp; Trust · Verified
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-pmt-purple-900 leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Verified.
                <br />
                <span className="italic">Not claimed.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                PMT Health Care Institution holds formal approval from HPCNA
                and accreditation from NQA. This page exists to make that
                verifiable — not as marketing copy.
              </p>
            </div>
          </div>

          {/* Trust wall — all accreditation + partner logos */}
          <div className="mt-16 pt-10 border-t border-pmt-purple-900/10" data-reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-6 text-center">
              Regulators, accreditors &amp; partners
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
              {[
                { src: "/images/crawled/logo-hpcna.webp", alt: "HPCNA — Health Professions Council of Namibia", name: "HPCNA" },
                { src: "/images/crawled/logo-nqa.webp", alt: "NQA — Namibia Qualifications Authority", name: "NQA" },
                { src: "/images/crawled/logo-icare-mou.webp", alt: "I-Care Health Training Institute — articulation partner", name: "I-Care" },
                { src: "/images/crawled/logo-nta.webp", alt: "NTA — Namibia Training Authority", name: "NTA" },
                { src: "/images/crawled/logo-nip.webp", alt: "NIP — Namibia Institute of Pathology", name: "NIP" },
                { src: "/images/crawled/logo-namibia-medical-care.webp", alt: "Namibia Medical Care", name: "NMC" },
              ].map((logo) => (
                <div
                  key={logo.name}
                  className="bg-white border border-pmt-purple-900/10 rounded-2xl p-4 h-20 flex items-center justify-center card-physics"
                >
                  { }
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── THE LEGITIMACY PARAGRAPH ─────────── */}
      <section aria-labelledby="legitimacy-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <p
            id="legitimacy-title"
            className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-6"
            data-reveal
          >
            On the question of legitimacy
          </p>

          <p
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-pmt-purple-900 leading-[1.25] tracking-tight"
            data-reveal
          >
            PMT is a registered, accredited nursing training institution in
            Namibia. The Health Professions Council of Namibia granted
            approval on{" "}
            <span className="italic">{accreditation.hpcna.approvedOn}</span>,
            and the qualification is accredited by NQA at NQF Level 6. Both
            are matters of public record.
          </p>

          <span
            className="block mt-10 mb-6"
            aria-hidden="true"
            style={{ width: 64, height: 1, backgroundColor: "#6B1F2A" }}
          />

          <p className="text-base sm:text-lg text-pmt-ink-soft leading-relaxed" data-reveal>
            The institution has, at times, been the subject of incorrect
            information shared online. We do not engage with that noise
            defensively. Instead, this page sets out the primary-source proof
            of PMT's standing — the regulator, the date of approval, and what
            each accreditation means in plain terms for a prospective student.
            If a claim about PMT's legitimacy cannot be traced back to HPCNA
            or NQA, it is not authoritative.
          </p>

          <p className="mt-6 text-base text-pmt-ink-soft leading-relaxed" data-reveal>
            Prospective students, parents, employers, and the public are
            encouraged to verify PMT's status directly with the relevant
            authorities. Contact details for both regulators are listed
            below.
          </p>
        </div>
      </section>

      {/* ─────────── PULSE LINE divider ─────────── */}
      <div
        className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-8"
        aria-hidden="true"
      >
        <PulseLine variant="divider" strokeColor="#2E1F52" />
      </div>

      {/* ─────────── HPCNA DETAIL ─────────── */}
      <section
        aria-labelledby="hpcna-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              {/* HPCNA card — LIGHT theme (swapped from dark per Fix 2) */}
              <div className="bg-white border-2 border-pmt-purple-900 p-7 sm:p-9 rounded-3xl card-physics">
                <div className="flex items-center justify-between gap-3 mb-6 pb-6 border-b border-pmt-purple-900/10">
                  <img
                    src="/images/crawled/logo-hpcna.webp"
                    alt="HPCNA logo"
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold">
                    Approved
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                  Regulator
                </p>
                <p className="text-base text-pmt-purple-900 leading-snug mb-6">
                  {accreditation.hpcna.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                  Approval date
                </p>
                <p className="font-display text-2xl text-pmt-gold leading-tight">
                  {accreditation.hpcna.approvedOn}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <h2
                id="hpcna-title"
                className="font-display text-3xl sm:text-4xl text-pmt-purple-900 leading-[1.05] tracking-tightest mb-6"
              >
                Health Professions Council of Namibia
              </h2>
              <p className="text-base text-pmt-ink-soft leading-relaxed mb-5">
                {accreditation.hpcna.whatItMeans}
              </p>
              <p className="text-base text-pmt-ink-soft leading-relaxed mb-5">
                Approval was granted on{" "}
                <span className="font-mono text-pmt-gold">
                  {accreditation.hpcna.approvedOn}
                </span>
                . From that date, PMT is authorised to train health
                professionals in Namibia under the regulatory framework
                administered by HPCNA.
              </p>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                For prospective students, the practical implication is
                straightforward: graduates of an HPCNA-approved institution
                are eligible to register with HPCNA and practise in Namibia.
                Without that approval, a nursing qualification has no
                regulatory standing.
              </p>

              <div className="mt-8 pt-6 border-t border-pmt-purple-900/10">
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                  Verify directly with HPCNA
                </p>
                <a
                  href="https://www.hpcna.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-physics inline-flex items-center gap-1.5 font-mono text-sm text-pmt-purple-900 hover:text-pmt-gold"
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
        className="border-b border-pmt-purple-900/10"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 lg:order-2" data-reveal>
              {/* NQA card — DARK/PURPLE theme (swapped from light per Fix 2) */}
              <div className="bg-pmt-purple-900 text-pmt-cream p-7 sm:p-9 rounded-3xl border border-pmt-purple-800 card-physics">
                <div className="flex items-center justify-between gap-3 mb-6 pb-6 border-b border-pmt-cream/15">
                  <img
                    src="/images/crawled/logo-nqa.webp"
                    alt="NQA logo"
                    className="h-16 w-auto object-contain bg-pmt-cream rounded-lg p-1.5"
                    loading="lazy"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold">
                    Accredited
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-cream/50 mb-2">
                  Authority
                </p>
                <p className="text-base text-pmt-cream leading-snug mb-6">
                  {accreditation.nqa.name}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-cream/50 mb-2">
                  Qualification
                </p>
                <p className="font-display text-xl text-pmt-cream leading-tight tracking-tight">
                  Diploma in Enrolled Nursing and Midwifery Science
                </p>
                <p className="font-mono text-sm text-pmt-gold mt-1">
                  NQF Level 6
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1" data-reveal>
              <h2
                id="nqa-title"
                className="font-display text-3xl sm:text-4xl text-pmt-purple-900 leading-[1.05] tracking-tightest mb-6"
              >
                Namibia Qualifications Authority
              </h2>
              <p className="text-base text-pmt-ink-soft leading-relaxed mb-5">
                {accreditation.nqa.whatItMeans}
              </p>
              <p className="text-base text-pmt-ink-soft leading-relaxed mb-5">
                NQA accreditation places the qualification on the Namibian
                Qualifications Framework at{" "}
                <span className="font-mono text-pmt-gold">
                  NQF Level 6
                </span>
                . This means the qualification's learning outcomes, duration,
                and assessment standards have been evaluated against a
                national benchmark — not set by the institution itself.
              </p>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                For graduates, NQA accreditation is what allows the diploma
                to be recognised by employers, further training institutions,
                and articulation partners — including the I-Care Health
                Training Institute MOU signed on 22 August 2023.
              </p>

              <div className="mt-8 pt-6 border-t border-pmt-purple-900/10">
                <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                  Verify directly with NQA
                </p>
                <a
                  href="https://www.namqa.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-physics inline-flex items-center gap-1.5 font-mono text-sm text-pmt-purple-900 hover:text-pmt-gold"
                >
                  namqa.org
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section
        aria-labelledby="faq-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="Direct answers"
            title="Common questions about PMT's standing."
            align="left"
            className="mb-12"
          />

          <dl className="mt-10 divide-y divide-pmt-purple-900/10 border-y border-pmt-purple-900/10" data-reveal>
            {[
              {
                q: "Is PMT a legitimate nursing school?",
                a: `Yes. PMT Health Care Institution is approved by the Health Professions Council of Namibia (HPCNA), with approval granted on ${accreditation.hpcna.approvedOn}, and the Diploma in Enrolled Nursing and Midwifery Science is accredited by NQA at NQF Level 6. Both are verifiable through the relevant regulators.`,
              },
              {
                q: "Can I register with HPCNA after graduating from PMT?",
                a: "Graduates of an HPCNA-approved institution are eligible to apply for registration with HPCNA. Registration is the regulatory step that allows a nurse to legally practise in Namibia.",
              },
              {
                q: "What does NQF Level 6 mean?",
                a: "NQF Level 6 sits on the Namibian Qualifications Framework above Level 5 (typically certificates and lower diplomas) and below Level 7 (typically bachelor's degrees). It is the level at which diploma-level nursing and midwifery qualifications are placed on the framework.",
              },
              {
                q: "Where can I verify this independently?",
                a: "The two authoritative sources are HPCNA (hpcna.org) and NQA (namqa.org). Both maintain public registers of approved and accredited institutions. If a claim about PMT cannot be traced back to either body, it should not be treated as authoritative.",
              },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <dt className="font-display text-xl text-pmt-purple-900 mb-3 tracking-tight">
                  {item.q}
                </dt>
                <dd className="text-sm text-pmt-ink-soft leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
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
            Trust is earned, then made public.
          </h2>
          <p className="mt-4 text-pmt-cream/80 max-w-lg mx-auto">
            If you have further questions about PMT's accreditation, contact
            the Windhoek campus — we will point you to the primary source.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact" size="lg">
              Contact PMT
            </CTAButton>
            <CTAButton
              href="/programmes"
              variant="outline"
              className="border-pmt-cream/40 text-pmt-cream hover:bg-pmt-cream hover:text-pmt-purple-900"
            >
              See the programme
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
