import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { PACKAGES } from "@/lib/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;
  const staticPages = [
    "",
    "/pakiety",
    "/o-nas",
    "/kontakt",
    "/umow-konsultacje",
    "/polityka-prywatnosci",
    "/regulamin",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));

  const packagePages = PACKAGES.map((p) => ({
    url: `${base}/pakiety/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...packagePages];
}
