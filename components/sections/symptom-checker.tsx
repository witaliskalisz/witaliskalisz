"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getPackageBySlug } from "@/lib/packages";

type Answer = string;

interface Question {
  id: string;
  prompt: string;
  options: { value: string; label: string; emoji?: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "main",
    prompt: "Co dolega Ci najbardziej?",
    options: [
      { value: "tired", label: "Zmęczenie i brak energii", emoji: "🔋" },
      { value: "gut", label: "Problemy trawienne / skóra", emoji: "🥗" },
      { value: "general", label: "Chcę zacząć od podstaw", emoji: "🔬" },
    ],
  },
  {
    id: "duration",
    prompt: "Od jak dawna trwają te problemy?",
    options: [
      { value: "short", label: "Kilka tygodni", emoji: "⏳" },
      { value: "medium", label: "Kilka miesięcy", emoji: "📅" },
      { value: "long", label: "Rok lub dłużej", emoji: "🗓️" },
    ],
  },
  {
    id: "tried",
    prompt: "Czy badałeś/aś się już wcześniej?",
    options: [
      { value: "nothing", label: "Nie, to mój pierwszy raz", emoji: "🌱" },
      { value: "nfz", label: "Tylko podstawowe badania", emoji: "🩺" },
      { value: "private", label: "Tak, ale bez odpowiedzi", emoji: "🔁" },
    ],
  },
];

function recommend(answers: Record<string, Answer>): string {
  // Heurystyka rekomendacji — tylko 3 pakiety w ofercie
  if (answers.main === "gut") return "gut-health";
  if (answers.main === "tired") return "vitamins";
  // "general" lub pierwsza wizyta → Start; przy dłuższych problemach → Witaminy & Minerały
  if (answers.main === "general" && answers.tried === "private") return "vitamins";
  return "start";
}

export function SymptomChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [done, setDone] = useState(false);

  const question = QUESTIONS[step];

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 250);
    } else {
      setTimeout(() => setDone(true), 250);
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const progress = ((step + (done ? 1 : 0)) / QUESTIONS.length) * 100;
  const recommendedSlug = done ? recommend(answers) : null;
  const recommendedPkg = recommendedSlug ? getPackageBySlug(recommendedSlug) : null;

  return (
    <section className="py-24 md:py-32 relative" id="quiz">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12 space-y-5">
            <Badge variant="accent" className="text-[11px] uppercase tracking-[0.18em]">
              <Sparkles className="size-3" /> 04 · 1 minuta, 3 pytania
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              <span className="italic font-normal text-muted-foreground">Nie wiesz</span> od czego zacząć?
              <br />Pomożemy.
            </h2>
            <p className="text-lg text-muted-foreground">
              Odpowiedz na kilka pytań — polecimy pakiet dopasowany do Twoich objawów.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <Card className="overflow-hidden">
              {/* Progress bar */}
              <div className="h-1.5 bg-muted">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-[hsl(var(--neon))]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              <CardContent className="p-8 md:p-12 min-h-[420px]">
                <AnimatePresence mode="wait">
                  {!done ? (
                    <motion.div
                      key={`q-${step}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-7"
                    >
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-mono">
                          Pytanie {step + 1} / {QUESTIONS.length}
                        </span>
                        <span className="font-mono">{Math.round(progress)}%</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl leading-tight text-balance">
                        {question.prompt}
                      </h3>
                      <div className="grid gap-2.5">
                        {question.options.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => selectAnswer(opt.value)}
                            className={cn(
                              "group flex items-center gap-4 w-full p-4 rounded-2xl border border-border bg-card text-left transition-all hover:border-primary hover:bg-primary/5 hover:shadow-md"
                            )}
                          >
                            {opt.emoji && (
                              <span className="text-2xl">{opt.emoji}</span>
                            )}
                            <span className="flex-1 text-sm font-medium">{opt.label}</span>
                            <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                      {step > 0 && (
                        <div className="pt-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setStep(step - 1)}
                          >
                            <ArrowLeft className="size-3.5" /> Wstecz
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center space-y-6"
                    >
                      <div className="inline-flex items-center justify-center size-16 rounded-3xl bg-gradient-to-br from-primary to-[hsl(var(--neon))] text-primary-foreground shadow-lg mb-2">
                        <Stethoscope className="size-7" />
                      </div>
                      <div className="space-y-2">
                        <Badge variant="success" className="text-[11px] uppercase tracking-wider">
                          Rekomendacja
                        </Badge>
                        <h3 className="font-display text-3xl md:text-4xl leading-tight">
                          {recommendedPkg?.name}
                        </h3>
                        <p className="text-muted-foreground italic max-w-xl mx-auto">
                          {recommendedPkg?.tagline}
                        </p>
                      </div>
                      <div className="bg-muted/60 rounded-2xl p-5 max-w-xl mx-auto">
                        <p className="text-sm text-foreground/85 leading-relaxed">
                          {recommendedPkg?.description}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
                          <span className="font-display text-2xl">
                            {recommendedPkg?.metadata.priceLabel}
                          </span>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-muted-foreground">{recommendedPkg?.duration}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild variant="primary" size="lg">
                          <Link href={`/pakiety/${recommendedSlug}`}>
                            Zobacz szczegóły pakietu
                            <ArrowRight className="size-4" />
                          </Link>
                        </Button>
                        <Button variant="ghost" size="lg" onClick={reset}>
                          <RotateCcw className="size-4" /> Zacznij od nowa
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Rekomendacja oparta na heurystyce — finalny wybór skonsultujemy przy zapisie.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
