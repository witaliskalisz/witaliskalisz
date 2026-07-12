import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Polityka cookies",
  description: "Witalis — zasady korzystania z plików cookies. Używamy wyłącznie niezbędnych plików cookies, bez śledzenia reklamowego.",
  path: "/polityka-cookies",
});

export default function CookiesPage() {
  return (
    <div className="pt-12">
      <article className="container max-w-3xl py-16 md:py-20 space-y-8">
        <Reveal className="space-y-4">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Cookies</Badge>
          <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight">
            Polityka cookies
          </h1>
          <p className="text-sm text-muted-foreground">Ostatnia aktualizacja: 1 lipca 2026</p>
        </Reveal>

        <div className="prose-witalis space-y-6 text-foreground/90 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">1. Czym są pliki cookies</h2>
            <p>
              Pliki cookies to niewielkie pliki tekstowe zapisywane na Państwa urządzeniu podczas
              korzystania ze strony. Służą do zapewnienia prawidłowego działania witryny oraz
              zapamiętania podstawowych preferencji.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">2. Jakie cookies stosujemy</h2>
            <p>
              Strona {SITE.url.replace("https://", "")} wykorzystuje <strong>wyłącznie niezbędne
              pliki cookies i pamięć lokalną (localStorage)</strong>:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>preferencja motywu</strong> — zapamiętanie wyboru trybu jasnego lub ciemnego,
              </li>
              <li>
                <strong>zgoda na cookies</strong> — zapisanie informacji, że zapoznali się Państwo z
                niniejszą polityką (aby nie wyświetlać ponownie komunikatu).
              </li>
            </ul>
            <p>
              <strong>Nie stosujemy</strong> plików cookies do śledzenia reklamowego, profilowania ani
              analityki firm trzecich.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">3. Podstawa prawna</h2>
            <p>
              Niezbędne pliki cookies wykorzystywane są na podstawie prawnie uzasadnionego interesu
              administratora (art. 6 ust. 1 lit. f RODO), polegającego na zapewnieniu prawidłowego
              działania strony. Cookies niezbędne nie wymagają zgody użytkownika.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">4. Zarządzanie cookies</h2>
            <p>
              W każdej chwili mogą Państwo usunąć zapisane pliki cookies oraz zablokować ich zapisywanie
              w ustawieniach swojej przeglądarki. Ograniczenie plików niezbędnych może wpłynąć na
              prawidłowe działanie niektórych funkcji strony (np. zapamiętanie motywu).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">5. Kontakt</h2>
            <p>
              W sprawach dotyczących plików cookies i prywatności prosimy o kontakt:{" "}
              <a href={`mailto:${SITE.contact.email}`} className="text-primary underline-offset-4 hover:underline">
                {SITE.contact.email}
              </a>
              . Zasady przetwarzania danych opisano w{" "}
              <Link href="/polityka-prywatnosci" className="text-primary underline underline-offset-4">
                Polityce prywatności
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
