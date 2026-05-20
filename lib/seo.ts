import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMeta {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function buildMetadata({ title, description, path = "/", ogImage }: PageMeta = {}): Metadata {
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} — Premium diagnostyka zdrowia w Kaliszu`;
  const desc = description || SITE.description;
  const url = `${SITE.url}${path}`;
  const image = ogImage || SITE.ogImage;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    keywords: [
      "badanie żywej kropli krwi Kalisz",
      "nietolerancja pokarmowa Kalisz",
      "FoodDetective Kalisz",
      "Food Print 200+ Kalisz",
      "Diacom 3D Kalisz",
      "diagnostyka niedoborów Kalisz",
      "witamina D Kalisz",
      "diagnostyka funkcjonalna",
      "badania krwi sportowca",
      "badania dla pracowników",
      "Witalis Kalisz",
    ],
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: SITE.tagline }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      apple: "/apple-icon.png",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}
