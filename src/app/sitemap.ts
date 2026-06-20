import type { MetadataRoute } from "next";
import { navigation } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pmthealth.example";
  const now = new Date();

  return navigation.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : item.href === "/accreditation" ? 0.9 : 0.7,
  }));
}
