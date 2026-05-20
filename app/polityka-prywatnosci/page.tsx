import type { Metadata } from "next";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Polityka prywatności",
  description: "Witalis — polityka prywatności, RODO, przetwarzanie danych medycznych.",
  path: "/polityka-prywatnosci",
});

export default function PolitykaPage() {
  return (
    <div className="pt-12">
      <article className="container max-w-3xl py-16 md:py-20 space-y-8">
        <Reveal className="space-y-4">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Polityka</Badge>
          <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight">
            Polityka prywatności
          </h1>
          <p className="text-sm text-muted-foreground">
            Ostatnia aktualizacja: 2026-05-01
          </p>
        </Reveal>

        <div className="prose-witalis space-y-6 text-foreground/90 leading-relaxed">
          <section className="space-y-3" id="rodo">
            <h2 className="font-display text-2xl mt-8">1. Administrator danych</h2>
            <p>
              Administratorem Państwa danych osobowych jest <strong>Witalis</strong>,
              {" "}{SITE.address.fullLine}, tel. {SITE.contact.phoneDisplay},
              e-mail {SITE.contact.email}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">2. Cele i podstawy przetwarzania</h2>
            <p>Przetwarzamy Państwa dane w następujących celach:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>obsługa zapytań i kontaktu (art. 6 ust. 1 lit. b i f RODO),</li>
              <li>realizacja umowy o świadczenie usług diagnostycznych (art. 6 ust. 1 lit. b RODO oraz art. 9 ust. 2 lit. h dla danych dotyczących zdrowia),</li>
              <li>wysyłka newslettera — wyłącznie po wyrażeniu zgody (art. 6 ust. 1 lit. a RODO),</li>
              <li>spełnienie obowiązków księgowo-podatkowych (art. 6 ust. 1 lit. c RODO).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">3. Dane dotyczące zdrowia</h2>
            <p>
              Dane dotyczące zdrowia (wyniki badań, wywiad medyczny, rekomendacje) stanowią
              szczególną kategorię danych osobowych. Przechowywane są w zabezpieczonej dokumentacji
              papierowej oraz zaszyfrowanej bazie elektronicznej. Dostęp ma wyłącznie administrator.
              Nie przekazujemy tych danych żadnym podmiotom trzecim bez Państwa wyraźnej zgody.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">4. Państwa prawa</h2>
            <p>Mają Państwo prawo do:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>dostępu do swoich danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych ("prawo do bycia zapomnianym"),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przeniesienia danych,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>cofnięcia zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody),</li>
              <li>wniesienia skargi do Prezesa UODO.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">5. Czas przechowywania</h2>
            <p>
              Dane medyczne — zgodnie z wymogami prawnymi (min. 20 lat dla dokumentacji medycznej).
              Dane marketingowe — do momentu cofnięcia zgody. Dane księgowe — 5 lat od końca roku
              podatkowego.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">6. Pliki cookie</h2>
            <p>
              Strona witalis.kalisz.pl używa wyłącznie niezbędnych plików cookie do działania
              (preferencje motywu, sesja). Nie używamy plików cookie do śledzenia reklamowego ani
              profilowania.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl mt-8">7. Kontakt w sprawach RODO</h2>
            <p>
              Wszelkie pytania, prośby o realizację praw lub zgłoszenia incydentów dotyczących
              danych osobowych prosimy kierować na e-mail{" "}
              <a href={`mailto:${SITE.contact.email}`} className="text-primary underline-offset-4 hover:underline">
                {SITE.contact.email}
              </a>{" "}
              lub telefonicznie: {SITE.contact.phoneDisplay}.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
