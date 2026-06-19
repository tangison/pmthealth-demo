import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { CampusCard } from "@/components/site/campus-card";
import { CTAButton } from "@/components/site/cta-button";
import { campuses } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Campuses",
  description:
    "PMT Health Care Institution operates from three Namibian campuses — Windhoek (No. 12, Sauerbruch Street, Windhoek West), Rundu, and Ongwediva. Contact each campus directly to apply.",
  alternates: { canonical: "/campuses" },
};

export default function CampusesPage() {
  const windhoek = campuses.find((c) => c.slug === "windhoek")!;

  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Three campuses · Namibia
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                Train where
                <span className="italic"> you live.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                PMT operates from three campuses across Namibia — Windhoek,
                Rundu, and Ongwediva. Each runs its own admissions, so the
                fastest route to applying is to call the campus closest to
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CAMPUS GRID ─────────── */}
      <section aria-labelledby="campuses-list-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2
            id="campuses-list-title"
            className="sr-only"
          >
            Campus list
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campuses.map((c, i) => (
              <CampusCard
                key={c.slug}
                city={c.city}
                phone={c.phone}
                address={c.address}
                mapHref={
                  c.mapQuery
                    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        c.mapQuery
                      )}`
                    : undefined
                }
                index={i + 1}
              />
            ))}
          </div>

          {/* Note on addresses */}
          <p className="mt-8 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            The Windhoek campus has a published street address. For Rundu and
            Ongwediva, please call the campus directly — staff will share
            directions and visiting hours.
          </p>
        </div>
      </section>

      {/* ─────────── WINDHOEK MAP ─────────── */}
      <section
        aria-labelledby="windhoek-map-title"
        className="border-b border-border bg-warm-off-white-2/40"
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <SectionHeading
            eyebrow="Find us"
            title="Windhoek campus — Sauerbruch Street."
            lede="The Windhoek campus is at No. 12, Sauerbruch Street, Windhoek West. The map below is embedded from OpenStreetMap to keep the page lightweight and tracker-free."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            {/* Address card */}
            <div className="lg:col-span-4">
              <div className="bg-card border border-border p-6 h-full">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                  Address
                </p>
                <p className="font-display text-2xl text-forest-teal leading-tight">
                  No. 12, Sauerbruch Street
                  <br />
                  Windhoek West
                  <br />
                  Windhoek, Namibia
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${windhoek.phone.replace(/\s/g, "")}`}
                    className="font-mono text-lg text-warm-ochre hover:underline underline-offset-4"
                  >
                    {windhoek.phone}
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      windhoek.mapQuery!
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest-teal hover:text-warm-ochre transition-colors"
                  >
                    Open in Google Maps
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map embed — OpenStreetMap iframe, no API key, no tracking */}
            <div className="lg:col-span-8">
              <div className="aspect-[4/3] lg:aspect-[16/10] w-full bg-forest-teal/5 border border-border overflow-hidden">
                <iframe
                  title="Map showing Sauerbruch Street, Windhoek West, Namibia"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=17.075%2C-22.575%2C17.095%2C-22.560&amp;layer=mapnik&amp;marker=-22.5675%2C17.085"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 font-mono text-xs text-muted-foreground">
                Map data © OpenStreetMap contributors · embedded tracker-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── OTHER LOCATIONS NOTE ─────────── */}
      <section aria-labelledby="other-campuses-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
                Rundu
              </p>
              <h2
                id="other-campuses-title"
                className="font-display text-3xl text-forest-teal leading-tight mb-3"
              >
                North-eastern Namibia.
              </h2>
              <p className="text-sm text-charcoal-soft leading-relaxed mb-5">
                The Rundu campus serves the Kavango East and Kavango West
                regions. For directions, visiting hours, and intake
                information, call the campus directly.
              </p>
              <a
                href="tel:0817218099"
                className="font-mono text-lg text-warm-ochre hover:underline underline-offset-4"
              >
                081 721 8099
              </a>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
                Ongwediva
              </p>
              <h2 className="font-display text-3xl text-forest-teal leading-tight mb-3">
                Northern Namibia.
              </h2>
              <p className="text-sm text-charcoal-soft leading-relaxed mb-5">
                The Ongwediva campus serves the northern regions — Oshana,
                Ohangwena, Omusati, and Oshikoto. As with Rundu, the
                fastest way to start your application is by phone.
              </p>
              <a
                href="tel:0813959524"
                className="font-mono text-lg text-warm-ochre hover:underline underline-offset-4"
              >
                081 395 9524
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Call the campus closest to you.
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            The admissions team can confirm intake dates, entry requirements,
            and funding options for your situation.
          </p>
          <div className="mt-8">
            <CTAButton href="/admissions" size="lg">
              See the admissions process
            </CTAButton>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
