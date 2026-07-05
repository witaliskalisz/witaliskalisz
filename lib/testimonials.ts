export interface Testimonial {
  id: string;
  /** Imię i inicjał — jak w opinii Google. */
  name: string;
  rating: 5;
  /** Treść opinii — do wklejenia z Google. */
  quote: string;
  /** Placeholder — do zastąpienia realną opinią przed publikacją. */
  demo: boolean;
}

/**
 * PLACEHOLDERY na opinie z Google.
 * Przed publikacją: wklej realne opinie klientów z profilu Google (Wizytówka Firmy).
 * Zostaw `demo: true` dopóki treść jest przykładowa — w UI pokazuje dyskretny badge „DEMO".
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "g1",
    name: "[Imię K.]",
    rating: 5,
    quote: "[Wklej treść opinii z Google.]",
    demo: true,
  },
  {
    id: "g2",
    name: "[Imię W.]",
    rating: 5,
    quote: "[Wklej treść opinii z Google.]",
    demo: true,
  },
  {
    id: "g3",
    name: "[Imię P.]",
    rating: 5,
    quote: "[Wklej treść opinii z Google.]",
    demo: true,
  },
];
