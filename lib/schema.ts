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
    logo: `${SITE.url}/logo.svg`,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    priceRange: "199-4999 PLN",
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
          "Analiza świeżej kropli krwi pod mikroskopem z powiększeniem do 1600× pozwala ocenić kształt erytrocytów, aktywność leukocytów, obecność pasożytów, candidy, dysbiozy oraz markery zapalne.",
      },
      {
        "@type": "MedicalTest",
        name: "Test nietolerancji pokarmowych FoodDetective™",
        description:
          "Test IgG na 59 najpopularniejszych produktów żywieniowych. Wynik w 40 minut.",
      },
      {
        "@type": "MedicalTest",
        name: "Food Print 200+",
        description:
          "Laboratoryjny test IgG w technologii mikromacierzy na 222 alergeny pokarmowe.",
      },
      {
        "@type": "MedicalTest",
        name: "Diacom 3D — Health Diagnostic Scanner",
        description:
          "Bioreznoansowa diagnostyka funkcjonalna pozwalająca ocenić stan układów organizmu — komplementarna do badań laboratoryjnych.",
      },
    ],
    sameAs: [SITE.social.facebook].filter(Boolean),
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
