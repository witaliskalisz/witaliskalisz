import { SITE } from "./site";
import { FAQ } from "./faq";

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    legalName: "Witalis",
    description: SITE.description,
    url: SITE.url,
    image: `${SITE.url}/og-default.png`,
    logo: `${SITE.url}/logo-mark.png`,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: "od 249 PLN",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postal,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.coords.lat,
      longitude: SITE.address.coords.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Kalisz" },
      { "@type": "City", name: "Ostrów Wielkopolski" },
      { "@type": "City", name: "Pleszew" },
      { "@type": "City", name: "Jarocin" },
      { "@type": "AdministrativeArea", name: "Województwo Wielkopolskie" },
    ],
    medicalSpecialty: [
      "NutritionalDiagnostics",
      "ClinicalLaboratoryService",
    ],
    availableService: [
      {
        "@type": "MedicalTest",
        name: "Mikroskopowe badanie żywej kropli krwi",
        description:
          "Analiza świeżej kropli krwi pod mikroskopem z powiększeniem do 1600× pozwala ocenić kształt erytrocytów, aktywność leukocytów oraz inne struktury. Metoda komplementarna do badań laboratoryjnych.",
      },
      {
        "@type": "MedicalTest",
        name: "Test nietolerancji pokarmowych FoodDetective™",
        description:
          "Test przeciwciał IgG na produkty żywieniowe. Cena zależna od liczby badanych produktów.",
      },
      {
        "@type": "MedicalTest",
        name: "Analiza niedoborów witamin i minerałów — Analizator Zdrowia Quantum",
        description:
          "Bezinwazyjna ocena niedoborów witamin, minerałów, aminokwasów i pracy narządów Kwantowym Magnetycznym Analizatorem Rezonansowym. Metoda komplementarna wraz z indywidualnym planem suplementacji.",
      },
      {
        "@type": "MedicalTest",
        name: "HEALTH DIAGNOSTIC SCANNER 3D (biorezonans)",
        description:
          "Biorezonansowa diagnostyka funkcjonalna oceniająca czynnościowy stan organizmu i jego układów — komplementarna do badań laboratoryjnych.",
      },
    ],
    sameAs: [SITE.social.facebook, SITE.social.instagram].filter(Boolean),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function medicalTestSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name,
    description,
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "MedicalBusiness",
      "@id": `${SITE.url}#business`,
      name: SITE.name,
      telephone: SITE.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        postalCode: SITE.address.postal,
        addressCountry: SITE.address.country,
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };
}
