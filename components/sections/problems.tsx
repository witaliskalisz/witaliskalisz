"use client";

import { motion } from "framer-motion";
import {
  Battery,
  Brain,
  Activity,
  Droplets,
  Wind,
  AlertCircle,
  Moon,
  Dumbbell,
  Heart,
  TrendingDown,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

const PROBLEMS = [
  {
    icon: Battery,
    title: "Stałe zmęczenie",
    desc: "8 godzin snu, ale rano nadal jak po nocnej zmianie. Brak energii do południa, kawa nie pomaga.",
    color: "from-amber-500/20 to-amber-400/5",
    iconColor: "text-amber-600",
  },
  {
    icon: Brain,
    title: "Mgła mózgowa",
    desc: "Trudność z koncentracją, ciągłe gubienie myśli, gorsza pamięć. Coś, czego nie było rok temu.",
    color: "from-violet-500/20 to-violet-400/5",
    iconColor: "text-violet-600",
  },
  {
    icon: Activity,
    title: "Hormony w rozsypce",
    desc: "Wahania nastroju, problemy z wagą, libido, snem. NFZ-owy TSH wychodzi 'w normie' a Ty wiesz że coś jest nie tak.",
    color: "from-rose-500/20 to-rose-400/5",
    iconColor: "text-rose-600",
  },
  {
    icon: Wind,
    title: "Problemy trawienne",
    desc: "Wzdęcia, zaparcia, IBS, biegunki po niektórych posiłkach. Eliminujesz produkty, nie wiedząc dlaczego.",
    color: "from-emerald-500/20 to-emerald-400/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: AlertCircle,
    title: "Skóra, która 'krzyczy'",
    desc: "Atopowe zapalenie skóry, łuszczyca, trądzik dorosłych, pokrzywka. Dermatolog daje sterydy, ale to wraca.",
    color: "from-orange-500/20 to-orange-400/5",
    iconColor: "text-orange-600",
  },
  {
    icon: Droplets,
    title: "Słaba regeneracja",
    desc: "Po treningu boli dłużej niż kiedyś. Sport, który wcześniej cieszył, teraz męczy.",
    color: "from-blue-500/20 to-blue-400/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Moon,
    title: "Sen, który nie regeneruje",
    desc: "Zasypiasz, ale budzisz się 3-4 razy w nocy. Albo śpisz 9 godzin i nadal padasz na twarz.",
    color: "from-indigo-500/20 to-indigo-400/5",
    iconColor: "text-indigo-600",
  },
  {
    icon: TrendingDown,
    title: "Brak efektów treningu",
    desc: "Wciskasz progres na siłowni 6 miesięcy. Waga nie spada, masa mięśniowa nie rośnie. Jakby ktoś wcisnął pause.",
    color: "from-cyan-500/20 to-cyan-400/5",
    iconColor: "text-cyan-600",
  },
  {
    icon: Heart,
    title: "Lęk i napięcie",
    desc: "Niski poziom magnezu, B12, witaminy D są często niezauważoną przyczyną stanów lękowych i przewlekłego stresu.",
    color: "from-pink-500/20 to-pink-400/5",
    iconColor: "text-pink-600",
  },
  {
    icon: Dumbbell,
    title: "Problemy hormonalne sportowca",
    desc: "Spadek formy bez powodu, gorsze wyniki mimo objętości treningowej, kontuzje przeciążeniowe.",
    color: "from-teal-500/20 to-teal-400/5",
    iconColor: "text-teal-600",
  },
];

export function Problems() {
  return (
    <section className="py-24 md:py-32 relative" id="problemy">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            02 · Sygnały, które ignorujesz
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Twoje ciało <span className="italic font-normal text-muted-foreground">krzyczy</span>
            <br />— a Ty go nie słyszysz?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            10 najczęstszych sygnałów, które klienci ignorują latami. Każdy z nich może mieć
            źródło w niedoborze, nietolerancji albo dysbalansie — czymś, co realnie da się
            zdiagnozować i naprawić.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 p-6 bg-gradient-to-br ${p.color} transition-all hover:border-foreground/20 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)]`}
            >
              <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
              <div className="relative space-y-4">
                <div className={`inline-flex items-center justify-center size-12 rounded-2xl bg-background border border-border/50 ${p.iconColor}`}>
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
              <div className="absolute -bottom-12 -right-12 size-32 rounded-full bg-gradient-to-br from-foreground/[0.02] to-transparent group-hover:from-foreground/[0.05] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
