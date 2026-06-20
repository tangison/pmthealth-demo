import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { galleryImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of PMT Health Care Institution — graduations, oath ceremonies, classrooms, skills lab, and campus life across Windhoek, Rundu, and Ongwediva.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-pmt-purple-900/10 bg-pmt-cream-2/30">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-32">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-4">
                Gallery · Real photos from PMT
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-pmt-purple-900 leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                The oath,
                <br />
                <span className="italic">the night before.</span>
              </h1>
            </div>
            <div className="lg:col-span-4" data-reveal>
              <p className="text-base text-pmt-ink-soft leading-relaxed">
                Real photos from PMT — classrooms, skills lab, graduations,
                and campus life across Windhoek, Rundu, and Ongwediva.
                Sourced from the institution's own public site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── IMAGE GRID ─────────── */}
      <section aria-labelledby="grid-title" className="border-b border-pmt-purple-900/10">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h2 id="grid-title" className="sr-only">
            Photo grid
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bento-grid" data-reveal>
            {galleryImages.map((img, i) => {
              const spanClasses =
                img.span === "wide"
                  ? "sm:col-span-2"
                  : img.span === "tall"
                  ? "row-span-2"
                  : "";

              return (
                <figure
                  key={img.src}
                  className={`group relative overflow-hidden bg-pmt-purple-900 rounded-2xl ${spanClasses}`}
                >
                  <div className="img-zoom h-full">
                    { }
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full h-full object-cover ${
                        img.span === "tall" ? "min-h-[400px]" : "min-h-[200px]"
                      }`}
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-pmt-purple-900/90 to-transparent">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-pmt-cream/90">
                      {img.caption}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Image source disclosure */}
          <div className="mt-12 bg-white border border-pmt-purple-900/10 rounded-3xl p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-pmt-gold mb-3">
              Image source
            </p>
            <p className="text-sm text-pmt-ink-soft leading-relaxed">
              All photographs in this gallery were sourced from the
              institution's existing public website (47.kesug.com). A full
              manifest of crawled image assets — including original URLs,
              descriptions, and a conflict-flag report against the original
              brief — is in{" "}
              <code className="font-mono text-xs bg-pmt-cream-2 px-1.5 py-0.5 rounded">
                /public/images/crawled/manifest.md
              </code>
              . The institution retains full ownership of all imagery.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── CONTRIBUTION NOTE ─────────── */}
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
            Photos from PMT's community.
          </h2>
          <p className="mt-4 text-pmt-cream/80 max-w-lg mx-auto">
            If you have additional graduation or campus photos you would like
            featured — especially from the first graduation of 50 nurses at
            Mecure Hotel — please contact the Windhoek campus.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
