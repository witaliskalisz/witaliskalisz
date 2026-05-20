"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Loader2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PACKAGES } from "@/lib/packages";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const schema = z.object({
  packageSlug: z.string().min(1, "Wybierz pakiet"),
  date: z.string().min(1, "Wybierz datę"),
  time: z.string().min(1, "Wybierz godzinę"),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  notes: z.string().max(500).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Wymagana zgoda" }) }),
});

type FormData = z.infer<typeof schema>;

// Generate next 14 weekdays
function generateSlots() {
  const slots: { date: string; label: string; weekday: string }[] = [];
  const today = new Date();
  let added = 0;
  let offset = 1;
  while (added < 14) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const wd = d.getDay();
    if (wd >= 1 && wd <= 5) {
      slots.push({
        date: d.toISOString().slice(0, 10),
        label: d.toLocaleDateString("pl-PL", { day: "numeric", month: "short" }),
        weekday: d.toLocaleDateString("pl-PL", { weekday: "short" }),
      });
      added++;
    }
    offset++;
  }
  return slots;
}

const TIMES = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"];
const SLOTS = generateSlots();

export function BookingForm({ initialPackageSlug }: { initialPackageSlug?: string } = {}) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      packageSlug: initialPackageSlug ?? "",
      consent: true as const,
    },
  });

  const formData = watch();
  const selectedPkg = PACKAGES.find((p) => p.slug === formData.packageSlug);

  async function next() {
    let valid = false;
    if (step === 0) valid = await trigger("packageSlug");
    else if (step === 1) valid = await trigger(["date", "time"]);
    if (valid) setStep((s) => s + 1);
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("network");
      toast.success("Wstępna rezerwacja wysłana", {
        description: "Skontaktujemy się z Tobą telefonicznie, by potwierdzić termin.",
      });
      setDone(true);
    } catch {
      toast.error("Wystąpił błąd", { description: "Zadzwoń: 881 353 444." });
    }
  }

  if (done) {
    return (
      <Card>
        <CardContent className="p-10 text-center space-y-4">
          <div className="inline-flex items-center justify-center size-14 rounded-full bg-success/15 text-success">
            <Check className="size-6" />
          </div>
          <h2 className="font-display text-3xl">Wstępna rezerwacja przyjęta!</h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Dziękujemy. Skontaktujemy się z Tobą telefonicznie w ciągu <strong>24 godzin
            roboczych</strong> (pon-pt 16:00-20:00) by potwierdzić termin i odpowiedzieć na ewentualne pytania.
          </p>
          <div className="bg-muted/60 rounded-2xl p-5 max-w-sm mx-auto text-left text-sm space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="success" className="text-[10px]">Pakiet</Badge>
              <span className="font-medium">{selectedPkg?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-muted-foreground" />
              <span>{formData.date} · {formData.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="size-4 text-muted-foreground" />
              <span>{formData.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 md:p-10">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {[0, 1, 2].map((s) => (
            <div
              key={s}
              className={cn(
                "h-1 flex-1 rounded-full transition-all",
                s <= step ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Krok 1 / 3</Badge>
                  <h2 className="font-display text-3xl md:text-4xl mt-3">Wybierz pakiet</h2>
                  <p className="text-muted-foreground mt-2">Możesz to później zmienić — to wstępny wybór.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-2">
                  {PACKAGES.map((p) => (
                    <button
                      type="button"
                      key={p.slug}
                      onClick={() => setValue("packageSlug", p.slug, { shouldValidate: true })}
                      className={cn(
                        "text-left p-4 rounded-2xl border transition-all",
                        formData.packageSlug === p.slug
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border bg-card hover:border-foreground/30"
                      )}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-display text-lg">{p.name}</span>
                        <span className="text-xs text-muted-foreground">{p.metadata.priceLabel}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-snug line-clamp-2">{p.tagline}</p>
                    </button>
                  ))}
                </div>
                {errors.packageSlug && <p className="text-xs text-destructive">{errors.packageSlug.message}</p>}
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Krok 2 / 3</Badge>
                  <h2 className="font-display text-3xl md:text-4xl mt-3">Wybierz termin</h2>
                  <p className="text-muted-foreground mt-2">
                    Wizyty: poniedziałek-piątek w godz. 16:00-20:00. Termin potwierdzimy telefonicznie.
                  </p>
                </div>
                <div>
                  <Label className="mb-3 block">
                    <Calendar className="inline size-4 mr-1.5" /> Data wizyty
                  </Label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-2">
                    {SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot.date}
                        onClick={() => setValue("date", slot.date, { shouldValidate: true })}
                        className={cn(
                          "p-2.5 rounded-xl border text-center transition-all",
                          formData.date === slot.date
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-foreground/30"
                        )}
                      >
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{slot.weekday}</div>
                        <div className="text-sm font-semibold mt-0.5">{slot.label}</div>
                      </button>
                    ))}
                  </div>
                  {errors.date && <p className="text-xs text-destructive mt-2">{errors.date.message}</p>}
                </div>
                {formData.date && (
                  <div>
                    <Label className="mb-3 block">
                      <Clock className="inline size-4 mr-1.5" /> Godzina
                    </Label>
                    <div className="grid grid-cols-4 gap-2">
                      {TIMES.map((time) => (
                        <button
                          type="button"
                          key={time}
                          onClick={() => setValue("time", time, { shouldValidate: true })}
                          className={cn(
                            "p-2.5 rounded-xl border text-sm font-medium transition-all",
                            formData.time === time
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-foreground/30"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {errors.time && <p className="text-xs text-destructive mt-2">{errors.time.message}</p>}
                  </div>
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Krok 3 / 3</Badge>
                  <h2 className="font-display text-3xl md:text-4xl mt-3">Twoje dane</h2>
                  <p className="text-muted-foreground mt-2">Zadzwonimy, by potwierdzić termin.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="bk-name">Imię i nazwisko *</Label>
                    <Input id="bk-name" {...register("name")} placeholder="Jan Kowalski" />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="bk-phone">Telefon *</Label>
                    <Input id="bk-phone" {...register("phone")} placeholder="600 100 200" />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bk-email">E-mail *</Label>
                  <Input id="bk-email" type="email" {...register("email")} placeholder="jan@email.pl" />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bk-notes">Dodatkowe informacje (opcjonalnie)</Label>
                  <Textarea id="bk-notes" {...register("notes")} placeholder="Coś, co warto wiedzieć przed wizytą..." rows={3} />
                </div>
                <label className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
                  <input type="checkbox" {...register("consent")} className="mt-0.5 accent-primary" />
                  <span>
                    Zgadzam się na przetwarzanie moich danych w celu obsługi rezerwacji, zgodnie z{" "}
                    <a href="/polityka-prywatnosci" className="underline">Polityką prywatności</a>. *
                  </span>
                </label>
                {/* Summary */}
                <div className="bg-muted/60 rounded-2xl p-4 text-sm space-y-1.5">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Podsumowanie</div>
                  <div className="flex items-center justify-between">
                    <span>Pakiet:</span><span className="font-medium">{selectedPkg?.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cena:</span><span className="font-medium">{selectedPkg?.metadata.priceLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Termin:</span><span className="font-medium">{formData.date} · {formData.time}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
            {step > 0 ? (
              <Button type="button" variant="ghost" onClick={back}>
                <ArrowLeft className="size-4" /> Wstecz
              </Button>
            ) : (
              <span />
            )}
            {step < 2 ? (
              <Button type="button" variant="primary" onClick={next}>
                Dalej <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Wysyłanie...
                  </>
                ) : (
                  <>
                    Zarezerwuj wizytę <Check className="size-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
