export interface Testimonial {
  id: string;
  /** Imię i nazwisko — jak w opinii Google. */
  name: string;
  rating: 5;
  /** Kiedy dodano opinię (jak w Google). */
  when?: string;
  /** Treść opinii z Google. */
  quote: string;
  /** Placeholder — do zastąpienia realną opinią przed publikacją. */
  demo: boolean;
}

/**
 * Realne opinie klientów z profilu Google (Wizytówka Firmy).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "g1",
    name: "Kamila Jędrzejczak",
    rating: 5,
    when: "6 dni temu",
    quote:
      "Bardzo polecam to miejsce! Profesjonalna i miła obsługa, wszystko zostało dokładnie wyjaśnione, a badanie przebiegło w komfortowej atmosferze. Czuć indywidualne podejście do pacjenta. Jestem bardzo zadowolona z wizyty i z pewnością wrócę!!",
    demo: false,
  },
  {
    id: "g2",
    name: "Wiktor Chojnowski",
    rating: 5,
    when: "tydzień temu",
    quote:
      "Profesjonalne podejście i bardzo dobry kontakt. Duży plus za cierpliwe tłumaczenie wszystkiego krok po kroku. Lokalizacja w centrum Kalisza też wygodna.",
    demo: false,
  },
];
