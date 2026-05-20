import type { Metadata } from "next";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Regulamin",
  description: "Regulamin świadczenia usług diagnostycznych Witalis Kalisz.",
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
          <p className="text-sm text-muted-foreground">Wersja 1.0 — 2026-05-01</p>
        </Reveal>

        <div className="prose-witalis text-foreground/90 leading-relaxed space-y-6">
          <p className="text-sm bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-amber-700 dark:text-amber-300">
            <strong>UWAGA:</strong> Treść regulaminu poniżej jest szablonem do uzupełnienia przed publikacją.
            Skonsultuj treść z prawnikiem właściwym dla branży diagnostyki funkcjonalnej i przepisów
            o świadczeniach medycznych.
          </p>

          <section>
            <h2 className="font-display text-2xl mt-6">§1 Postanowienia ogólne</h2>
            <p>
              Niniejszy regulamin określa zasady świadczenia usług diagnostycznych przez Witalis
              z siedzibą w Kaliszu, ul. Babina 6.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§2 Charakter usług</h2>
            <p>
              Usługi świadczone przez Witalis mają charakter <strong>diagnostyki funkcjonalnej
              i prewencyjnej</strong>. Nie zastępują diagnostyki medycznej prowadzonej przez lekarza
              ani nie stanowią leczenia chorób w rozumieniu prawa medycznego.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§3 Rezerwacja i płatność</h2>
            <p>Rezerwacja telefoniczna pod numerem 881 353 444 (pon-pt 16:00-20:00) lub online.</p>
            <p>Płatność: gotówka, BLIK, karty płatnicze. Faktura VAT na życzenie.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§4 Odwołanie wizyty</h2>
            <p>
              Wizytę można odwołać bezpłatnie do 24 godzin przed planowanym terminem.
              Późniejsze odwołanie wiąże się z opłatą 30% wartości pakietu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§5 Reklamacje</h2>
            <p>
              Reklamacje należy składać pisemnie (e-mail lub list) w terminie do 14 dni od dnia
              wykonania usługi. Reklamacje rozpatrujemy w ciągu 14 dni roboczych.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl mt-6">§6 Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
              polskiego.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
