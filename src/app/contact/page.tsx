import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { site, campuses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PMT Health Care Institution. Three campuses — Windhoek (081 342 1056), Rundu (081 721 8099), and Ongwediva (081 395 9524). Windhoek campus at No. 12, Sauerbruch Street, Windhoek West. Email hello@pmt-healthcare.org.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const windhoek = campuses.find((c) => c.slug === "windhoek")!;

  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                Contact · Three campuses
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-pmt-purple-900 leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Speak to
                <span className="italic"> a campus.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                The fastest way to reach PMT is by phone — admissions,
                accreditation questions, and intake details are all handled
                at campus level. Email is monitored during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CAMPUS CONTACTS ─────────── */}
      <section
        aria-labelledby="campus-contacts-title"
        className="border-b border-pmt-purple-900/10"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <SectionHeading
            eyebrow="By phone"
            title="Three campuses, three direct lines."
            lede="Each campus runs its own admissions and enquiries. Pick the campus closest to you — the team will know the next intake, the entrance test date, and the right funding path for your situation."
            className="mb-12"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3" data-reveal>
            {campuses.map((c, i) => (
              <article
                key={c.slug}
                className="bg-white border border-pmt-purple-900/10 rounded-3xl p-6 sm:p-7 flex flex-col card-physics"
              >
                <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-pmt-purple-900/10">
                  <span className="font-mono text-xs text-pmt-ink-soft/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-pmt-purple-900 leading-none tracking-tight">
                    {c.city}
                  </h2>
                </div>

                {c.address && (
                  <div className="mb-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                      Address
                    </p>
                    <p className="text-sm text-pmt-ink-soft leading-relaxed">
                      {c.address}
                    </p>
                  </div>
                )}

                <div className="mb-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                    Mobile
                  </p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="font-mono text-lg text-pmt-gold hover:underline underline-offset-4"
                  >
                    {c.phone}
                  </a>
                </div>

                {c.landline && (
                  <div className="mb-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-2">
                      Landline
                    </p>
                    <a
                      href={`tel:${c.landline.replace(/\s/g, "")}`}
                      className="font-mono text-base text-pmt-purple-700 hover:text-pmt-gold"
                    >
                      {c.landline}
                    </a>
                  </div>
                )}

                {c.mapQuery && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      c.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto btn-physics inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-pmt-purple-900 hover:text-pmt-gold"
                  >
                    Map
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>

          {/* Windhoek address block */}
          <div className="mt-8 bg-pmt-purple-900 text-pmt-cream p-7 sm:p-8 rounded-3xl" data-reveal>
            <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-gold mb-3">
              Windhoek campus — full address
            </p>
            <p className="font-display text-2xl sm:text-3xl text-pmt-cream leading-tight tracking-tight">
              {windhoek.address}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block font-mono text-sm text-pmt-gold-soft hover:underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT FORM ─────────── */}
      <section
        aria-labelledby="form-title"
        className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5" data-reveal>
              <SectionHeading
                eyebrow="Or send a message"
                title="Use the form for non-urgent enquiries."
                lede="For admissions, intake dates, or accreditation questions, calling the relevant campus will always be faster. The form below is for general enquiries that don't fit a single campus."
              />

              <div className="mt-8 space-y-4 text-sm text-pmt-ink-soft">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-pmt-purple-900 hover:text-pmt-gold"
                  >
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-1">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pmt-purple-900 hover:text-pmt-gold"
                    >
                      Facebook ↗
                    </a>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pmt-purple-900 hover:text-pmt-gold"
                    >
                      Instagram ↗
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-pmt-ink-soft mb-1">
                    Response time
                  </p>
                  <p>
                    Messages are reviewed during business hours. For urgent
                    admissions questions, please call.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              {/* DEMO NOTICE */}
              <div className="bg-pmt-gold/10 border border-pmt-gold/40 p-4 mb-6 rounded-2xl">
                <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-1">
                  Demo notice
                </p>
                <p className="text-sm text-pmt-ink-soft leading-relaxed">
                  This form is non-functional in the demo build — submission
                  does not send an email or store data. When the site goes
                  live, wire the submit handler to the institution's chosen
                  email service or form backend.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
