export const SITE = {
  name: "Witalis",
  fullName: "Witalis — Prywatna diagnostyka w Kaliszu",
  tagline: "Zobacz, czego naprawdę potrzebuje Twój organizm.",
  description:
    "Prywatna diagnostyka funkcjonalna i prewencyjna w Kaliszu — mikroskopia żywej kropli krwi, testy nietolerancji pokarmowych IgG (FoodDetective) i analiza niedoborów. Metody komplementarne do badań laboratoryjnych.",
  url: "https://witalis.kalisz.pl",
  ogImage: "/og-default.png",
  locale: "pl_PL",

  founded: 2018,
  clientsServed: 1240,

  owner: {
    name: "Majka Sośnicka",
    title: "Właściciel Witalis",
  },

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
    facebook: "https://www.facebook.com/WitalisKalisz/",
    instagram: "https://www.instagram.com/witalis.kalisz/",
    youtube: "",
  },

  certifications: [
    "Certyfikat FoodDetective™",
    "Mikroskopia z 1600× powiększeniem",
    "RODO compliant",
  ],
} as const;

export const NAVIGATION = {
  main: [
    { label: "Pakiety", href: "/pakiety" },
    { label: "O nas", href: "/o-nas" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
    diagnostyka: [
      { label: "Wszystkie pakiety", href: "/pakiety" },
      { label: "Badanie żywej kropli krwi", href: "/badanie-zywej-kropli-krwi" },
      { label: "Start — żywa kropla krwi", href: "/pakiety/start" },
      { label: "Gut Health — nietolerancje", href: "/pakiety/gut-health" },
      { label: "Witaminy & minerały", href: "/pakiety/vitamins" },
    ],
    company: [
      { label: "O nas", href: "/o-nas" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legal: [
      { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
      { label: "Regulamin", href: "/regulamin" },
      { label: "RODO", href: "/polityka-prywatnosci#rodo" },
    ],
  },
} as const;
