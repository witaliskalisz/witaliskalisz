import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Regulamin",
  description: "Regulamin świadczenia usług diagnostyki funkcjonalnej Witalis w Kaliszu.",
  path: "/regulamin",
});

export default function RegulaminPage() {
  return (
    <div className="pt-12">
      <article className="container max-w-3xl py-16 md:py-20 space-y-6">
        <Reveal className="space-y-4">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Regulamin</Badge>
          <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight">
            Regulamin świadczenia usług
          </h1>
          <p className="text-sm text-muted-foreground">Obowiązuje od 1 lipca 2026 r. · wersja 2.0</p>
        </Reveal>

        <div className="prose-witalis text-foreground/90 leading-relaxed space-y-6">
          <section>
            <h2 className="font-display text-2xl mt-6">§1 Postanowienia ogólne</h2>
            <p>
              Niniejszy regulamin określa zasady świadczenia usług diagnostyki funkcjonalnej i
              prewencyjnej przez pracownię <strong>Witalis</strong>, prowadzoną przez {SITE.owner.name},
              z siedzibą w Kaliszu przy {SITE.address.fullLine} („Gabinet"). Gabinet działa od 2016 roku.
            </p>
            <p>
              Kontakt: telefon {SITE.contact.phoneDisplay} (rejestracja {SITE.contact.hoursRegistration}),
              e-mail {SITE.contact.email}.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§2 Charakter usług</h2>
            <p>
              Usługi Gabinetu mają charakter <strong>diagnostyki funkcjonalnej, obserwacyjnej i
              prewencyjnej</strong>. Obejmują m.in. mikroskopowe badanie żywej kropli krwi, testy
              nietolerancji pokarmowych IgG (FoodDetective™, Food Print), analizę niedoborów witamin i
              minerałów Analizatorem Zdrowia Quantum oraz biorezonans HEALTH DIAGNOSTIC SCANNER 3D.
            </p>
            <p>
              Stosowane metody są <strong>komplementarne</strong> i nie zastępują badań laboratoryjnych,
              diagnostyki medycznej prowadzonej przez lekarza ani leczenia chorób w rozumieniu prawa
              medycznego. Nie służą do stawiania rozpoznań chorobowych. W uzasadnionych przypadkach
              Gabinet zaleca konsultację lekarską lub badania laboratoryjne.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§3 Rezerwacja wizyty</h2>
            <p>
              Wizyty umawiane są telefonicznie pod numerem {SITE.contact.phoneDisplay}
              ({SITE.contact.hoursRegistration}). Kontakt możliwy jest również mailowo oraz przez
              wiadomość prywatną na profilach Facebook i Instagram Gabinetu. Termin potwierdzamy
              telefonicznie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§4 Ceny i płatność</h2>
            <p>
              Ceny pakietów podane są w cenniku na stronie i są cenami brutto. Cena pakietu Gut Health
              zależy od liczby badanych produktów i jest ustalana indywidualnie. Formy płatności:
              gotówka, BLIK oraz karty płatnicze. Fakturę VAT wystawiamy na życzenie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§5 Przygotowanie do badania</h2>
            <p>
              Klient zobowiązany jest zastosować się do zaleceń przygotowania właściwych dla danego
              badania (m.in. karencja od alkoholu, posiłków i używek, odpowiednie nawodnienie),
              przekazanych podczas rejestracji oraz opisanych na stronach poszczególnych badań. Część
              badań posiada przeciwwskazania (m.in. ciąża, rozrusznik serca, epilepsja) — należy je
              zgłosić przed wizytą.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§6 Odwołanie i zmiana terminu</h2>
            <p>
              Wizytę można bezpłatnie odwołać lub przełożyć najpóźniej na 24 godziny przed planowanym
              terminem. Prosimy o wcześniejsze informowanie o nieobecności telefonicznie.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§7 Reklamacje</h2>
            <p>
              Reklamacje można składać mailowo na adres {SITE.contact.email} lub pisemnie na adres
              Gabinetu w terminie 14 dni od wykonania usługi. Reklamacje rozpatrujemy w ciągu 14 dni
              roboczych od otrzymania.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§8 Dane osobowe i pliki cookies</h2>
            <p>
              Zasady przetwarzania danych osobowych opisano w{" "}
              <Link href="/polityka-prywatnosci" className="text-primary underline underline-offset-4">
                Polityce prywatności
              </Link>
              , a zasady korzystania z plików cookies w{" "}
              <Link href="/polityka-cookies" className="text-primary underline underline-offset-4">
                Polityce cookies
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§9 Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
              polskiego. Gabinet zastrzega prawo do zmiany regulaminu — aktualna wersja publikowana
              jest na tej stronie.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
