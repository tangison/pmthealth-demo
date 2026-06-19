import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { ContactForm } from "@/components/site/contact-form";
import { site, campuses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PMT Health Care Institution. Three campuses — Windhoek (081 342 1056), Rundu (081 721 8099), and Ongwediva (081 395 9524). Windhoek campus at No. 12, Sauerbruch Street, Windhoek West.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const windhoek = campuses.find((c) => c.slug === "windhoek")!;

  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Contact · Three campuses
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Speak to
                <span className="italic"> a campus.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                The fastest way to reach PMT is by phone — admissions,
                accreditation questions, and intake details are all handled
                at campus level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CAMPUS CONTACTS ─────────── */}
      <section
        aria-labelledby="campus-contacts-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="By phone"
            title="Three campuses, three direct lines."
            lede="Each campus runs its own admissions and enquiries. Pick the campus closest to you — the team will know the next intake, the entrance test date, and the right funding path for your situation."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {campuses.map((c, i) => (
              <article
                key={c.slug}
                className="bg-card border border-border p-6 sm:p-7 flex flex-col"
              >
                <div className="flex items-baseline justify-between gap-3 mb-5 pb-5 border-b border-border">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl text-forest-teal leading-none">
                    {c.city}
                  </h2>
                </div>

                {c.address && (
                  <div className="mb-5">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Address
                    </p>
                    <p className="text-sm text-charcoal-soft leading-relaxed">
                      {c.address}
                    </p>
                  </div>
                )}

                <div className="mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="font-mono text-xl text-warm-ochre hover:underline underline-offset-4"
                  >
                    {c.phone}
                  </a>
                </div>

                {c.mapQuery && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      c.mapQuery
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
                  >
                    Map
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>

          {/* Windhoek address block */}
          <div className="mt-8 bg-forest-teal text-warm-off-white p-7 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-warm-ochre mb-3">
              Windhoek campus — full address
            </p>
            <p className="font-display text-2xl sm:text-3xl text-warm-off-white leading-tight">
              {windhoek.address}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT FORM ─────────── */}
      <section
        aria-labelledby="form-title"
        className="border-b border-border"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Or send a message"
                title="Use the form for non-urgent enquiries."
                lede="For admissions, intake dates, or accreditation questions, calling the relevant campus will always be faster. The form below is for general enquiries that don't fit a single campus."
              />

              <div className="mt-8 space-y-4 text-sm text-charcoal-soft">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Social
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={site.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-teal hover:text-warm-ochre transition-colors"
                    >
                      Facebook ↗
                    </a>
                    <a
                      href={site.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest-teal hover:text-warm-ochre transition-colors"
                    >
                      Instagram ↗
                    </a>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Response time
                  </p>
                  <p>
                    Messages are reviewed during business hours. For urgent
                    admissions questions, please call.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* DEMO NOTICE — visible to the user, not just a code comment */}
              <div className="bg-warm-ochre/10 border border-warm-ochre/40 p-4 mb-6">
                <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-1">
                  Demo notice
                </p>
                <p className="text-sm text-charcoal-soft leading-relaxed">
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
