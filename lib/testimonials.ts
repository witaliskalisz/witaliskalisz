export interface Testimonial {
  id: string;
  /** Imię i nazwisko — jak w opinii Google. */
  name: string;
  rating: 5;
  /** Data dodania opinii (ISO) — na jej podstawie liczymy „X dni/tygodni temu". */
  date: string;
  /** Treść opinii z Google. */
  quote: string;
}

/**
 * Realne opinie klientów z profilu Google (Wizytówka Firmy).
 * Etykieta czasu („6 dni temu" itd.) wyliczana jest automatycznie z pola `date`.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "g1",
    name: "Kamila Jędrzejczak",
    rating: 5,
    date: "2026-07-07",
    quote:
      "Bardzo polecam to miejsce! Profesjonalna i miła obsługa, wszystko zostało dokładnie wyjaśnione, a badanie przebiegło w komfortowej atmosferze. Czuć indywidualne podejście do pacjenta. Jestem bardzo zadowolona z wizyty i z pewnością wrócę!!",
  },
  {
    id: "g2",
    name: "Wiktor Chojnowski",
    rating: 5,
    date: "2026-07-06",
    quote:
      "Profesjonalne podejście i bardzo dobry kontakt. Duży plus za cierpliwe tłumaczenie wszystkiego krok po kroku. Lokalizacja w centrum Kalisza też wygodna.",
  },
];

/** Zwraca etykietę względną po polsku, np. „6 dni temu", „tydzień temu". */
export function relativeTimePl(dateStr: string, now: Date = new Date()): string {
  const then = new Date(dateStr);
  const days = Math.max(0, Math.floor((now.getTime() - then.getTime()) / 86400000));
  if (days <= 0) return "dziś";
  if (days === 1) return "wczoraj";
  if (days < 7) return `${days} dni temu`;

  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks === 1 ? "tydzień temu" : `${weeks} tygodnie temu`;

  const months = Math.floor(days / 30);
  if (months < 12) {
    if (months === 1) return "miesiąc temu";
    return months < 5 ? `${months} miesiące temu` : `${months} miesięcy temu`;
  }

  const years = Math.floor(days / 365);
  return years === 1 ? "rok temu" : years < 5 ? `${years} lata temu` : `${years} lat temu`;
}
