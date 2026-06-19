import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SectionHeading } from "@/components/site/section-heading";
import { PlaceholderImage } from "@/components/site/placeholder-image";
import { galleryImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of PMT Health Care Institution — graduation ceremonies, oath-taking, campuses, and classroom moments from Windhoek, Rundu, and Ongwediva.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PageShell>
      {/* ─────────── HEADER ─────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-4">
                Gallery · In progress
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-forest-teal leading-[0.98] tracking-tightest"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30' }}
              >
                The oath,
                <br />
                <span className="italic">the night before.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-charcoal-soft leading-relaxed">
                A working gallery of PMT — graduations, oath ceremonies, and
                life across our three campuses. Real photos are being added
                as they become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── IMAGE GRID ─────────── */}
      <section aria-labelledby="grid-title" className="border-b border-border">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 id="grid-title" className="sr-only">
            Photo grid
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                  className={`group relative overflow-hidden bg-forest-teal ${spanClasses}`}
                >
                  <PlaceholderImage
                    src={img.src}
                    alt={img.alt}
                    width={img.span === "tall" ? 600 : 800}
                    height={img.span === "tall" ? 1000 : 600}
                    fallbackVariant={
                      i % 3 === 0 ? "teal" : i % 3 === 1 ? "ochre" : "teal"
                    }
                    fallbackCaption={img.caption}
                    className={`w-full h-full object-cover ${
                      img.span === "tall" ? "min-h-[400px]" : "min-h-[200px]"
                    }`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Caption overlay — visible when image is present */}
                  <figcaption className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-forest-teal/90 to-transparent">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-warm-off-white/90">
                      {img.caption}
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* Image slot documentation block */}
          <div className="mt-12 bg-card border border-border p-6 sm:p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-warm-ochre mb-3">
              For the institution — photo upload guide
            </p>
            <p className="text-sm text-charcoal-soft leading-relaxed mb-4">
              Photos can be dropped into{" "}
              <code className="font-mono text-xs bg-warm-off-white-2 px-1.5 py-0.5 rounded">
                /public/images/gallery/
              </code>{" "}
              with the filenames below — no code changes needed. Each slot
              already has alt text and a caption wired up. Files currently
              missing fall back to the branded teal/ochre block you see above.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 font-mono text-xs text-charcoal-soft">
              {galleryImages.map((img) => (
                <li
                  key={img.src}
                  className="flex items-start gap-2"
                >
                  <span
                    className="text-warm-ochre mt-0.5"
                    aria-hidden="true"
                  >
                    ▸
                  </span>
                  <span>{img.src.replace("/images/gallery/", "")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────── CONTRIBUTION NOTE ─────────── */}
      <section className="bg-forest-teal text-warm-off-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            Photos from PMT's community.
          </h2>
          <p className="mt-4 text-warm-off-white/80 max-w-lg mx-auto">
            If you have graduation or campus photos you would like featured —
            especially from the first graduation of 50 nurses at Mecure
            Hotel — please contact the Windhoek campus.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
