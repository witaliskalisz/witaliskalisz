export const SITE = {
  name: "Witalis",
  fullName: "Witalis — Diagnostyka Premium",
  tagline: "Zobacz, czego naprawdę potrzebuje Twój organizm.",
  description:
    "Premium diagnostyka funkcjonalna i prewencyjna w Kaliszu — mikroskopia żywej kropli krwi, testy nietolerancji IgG (FoodDetective, Food Print), analiza niedoborów i wsparcie wellness. Metody komplementarne do badań laboratoryjnych.",
  url: "https://witalis.kalisz.pl",
  ogImage: "/og-default.png",
  locale: "pl_PL",

  founded: 2018,
  clientsServed: 1240,

  address: {
    street: "ul. Babina 6",
    city: "Kalisz",
    postal: "62-800",
    country: "PL",
    fullLine: "ul. Babina 6, 62-800 Kalisz",
    region: "wielkopolskie",
    coords: { lat: 51.7611, lng: 18.0911 },
  },

  contact: {
    phone: "+48881353444",
    phoneDisplay: "881 353 444",
    email: "witalis.kalisz@wp.pl",
    hoursRegistration: "Pon-Pt 16:00 – 20:00",
    hoursVisit: "Wizyty po telefonicznym umówieniu",
  },

  social: {
    facebook:
      "https://www.facebook.com/pages/Witalis-Mikroskopowe-Badanie-%C5%BBywej-Kropli-Krwi/1447099678929932",
    instagram: "",
    youtube: "",
  },

  certifications: [
    "Certyfikat FoodDetective™",
    "Diacom 3D Quantum Scanner",
    "Mikroskopia z 1600× powiększeniem",
    "RODO compliant",
  ],
} as const;

export const NAVIGATION = {
  main: [
    { label: "Pakiety", href: "/pakiety" },
    { label: "Dla firm", href: "/dla-firm" },
    { label: "Sport", href: "/sport-performance" },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    diagnostyka: [
      { label: "Wszystkie pakiety", href: "/pakiety" },
      { label: "Żywa kropla krwi", href: "/pakiety/start" },
      { label: "Nietolerancje IgG", href: "/pakiety/gut-health" },
      { label: "Diacom 3D", href: "/pakiety/full-body" },
      { label: "Witaminy & minerały", href: "/pakiety/vitamins" },
    ],
    offerings: [
      { label: "Dla osób indywidualnych", href: "/pakiety#indywidualne" },
      { label: "Dla firm — Witalis at Work", href: "/dla-firm" },
      { label: "Dla sportowców", href: "/sport-performance" },
      { label: "Pakiety VIP / Longevity", href: "/pakiety/vip-longevity" },
    ],
    company: [
      { label: "O Witalis", href: "/#zespol" },
      { label: "Blog edukacyjny", href: "/blog" },
      { label: "Umów konsultację", href: "/umow-konsultacje" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legal: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "Regulamin", href: "/regulamin" },
      { label: "RODO", href: "/polityka-prywatnosci#rodo" },
    ],
  },
} as const;
