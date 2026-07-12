import type { Metadata } from "next";
import { SITE } from "./site";

interface PageMeta {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

export function buildMetadata({ title, description, path = "/", ogImage }: PageMeta = {}): Metadata {
  const fullTitle = title ? `${title} · ${SITE.name}` : `${SITE.name} — Prywatna diagnostyka zdrowia w Kaliszu`;
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
      "mikroskopowe badanie krwi Kalisz",
      "nietolerancja pokarmowa Kalisz",
      "test nietolerancji pokarmowej Kalisz",
      "FoodDetective Kalisz",
      "test IgG Kalisz",
      "analizator zdrowia Quantum Kalisz",
      "biorezonans Kalisz",
      "Health Diagnostic Scanner 3D Kalisz",
      "diagnostyka niedoborów witamin i minerałów Kalisz",
      "diagnostyka funkcjonalna Kalisz",
      "medycyna funkcjonalna Wielkopolska",
      "prywatna diagnostyka zdrowia Kalisz",
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
      icon: "/logo-mark.png",
      apple: "/logo-mark.png",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}
