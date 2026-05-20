# Witalis 2026 — Premium Health-Tech Site

Kompletna nowa strona dla **Witalis** (Kalisz, ul. Babina 6) — prywatnej diagnostyki funkcjonalnej.

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

## Stack

- **Next.js 15** App Router + **React 19 RC**
- **TypeScript 5** strict mode
- **Tailwind CSS 3** + `tailwindcss-animate`
- **shadcn/ui** primitives (lokalne kopie w `components/ui/`)
- **Framer Motion** — animacje
- **@react-three/fiber + drei** — hero DNA scene (lazy-loaded)
- **react-hook-form + zod** — formularze
- **next-themes** — dark/light mode

## Struktura

```
app/
  layout.tsx, page.tsx          # home
  pakiety/, dla-firm/, sport-performance/
  blog/, kontakt/, umow-konsultacje/
  polityka-prywatnosci/, regulamin/
  api/{lead,newsletter,booking}/route.ts  # mock endpoints
  robots.ts, sitemap.ts, opengraph-image.tsx

components/
  sections/        # 13 sekcji strony głównej
  ui/              # shadcn primitives
  effects/         # Reveal, AnimatedNumber, MagneticButton, DnaScene
  layout/          # Nav, Footer, ThemeToggle, Logo
  forms/           # LeadForm, NewsletterForm, BookingForm
  chatbot/         # Demo chatbot z canned responses

lib/
  site.ts          # NAP, navigation
  packages.ts      # 14 pakietów (źródło prawdy)
  articles.ts      # 6 artykułów bloga (markdown inline)
  faq.ts, testimonials.ts
  seo.ts, schema.ts
```

## Pakiety (do edycji w `lib/packages.ts`)

**B2C indywidualne (7):** Start · Witaminy & Minerały · Hormonal Balance · Gut Health · Food Print 200+ · Full Body Premium · VIP Longevity 6M

**B2B firmy (3):** Office Check · Team Vitality · Executive Care

**Sport (4):** Amateur Athlete · Pro Athlete · Sport Club / Team · Recovery 1:1

Wszystkie ceny w PLN są **placeholderami** — zweryfikuj z mamą przed publikacją.

## TODO przed publikacją

- [ ] Cennik — zweryfikuj wszystkie ceny PLN w `lib/packages.ts`
- [ ] Zdjęcie i bio założycielki — `components/sections/team.tsx` (obecnie placeholder)
- [ ] Testimoniale — `lib/testimonials.ts` (wszystkie oznaczone `[DEMO]` — zebrać prawdziwe zgody RODO + cytaty)
- [ ] Logo (jeśli istnieje) — zamień w `components/layout/logo.tsx` lub dodaj `/public/logo.svg`
- [ ] Adres URL — w `lib/site.ts` ustaw produkcyjny URL (obecnie `https://witalis.kalisz.pl`)
- [ ] Regulamin — `app/regulamin/page.tsx` zawiera szablon do konsultacji z prawnikiem
- [ ] Treść artykułów blogowych — `lib/articles.ts` (6 sample postów do uzupełnienia/zastąpienia)
- [ ] Sprawdzenie wszystkich `[PLACEHOLDER]` w kodzie
- [ ] Faktycznie zdjęcie OG — obecnie generowane dynamicznie przez `app/opengraph-image.tsx`

## Backend integracje (TODO)

API routes w `app/api/*` obecnie są **mockowe** — logują do konsoli i zwracają `{ ok: true }`. Aby
zacząć przyjmować realne leady:

1. **E-mail (Resend lub Brevo):**
   ```bash
   npm install resend
   ```
   Następnie w `app/api/lead/route.ts` zamień `console.info` na `resend.emails.send(...)`.

2. **Baza danych (Vercel Postgres / Neon / Supabase):**
   Wybierz przez Vercel Marketplace, dodaj zmienne środowiskowe, zapisuj leady do `leads` table.

3. **AI Chatbot (opcjonalnie):**
   Obecnie chatbot używa canned responses w `components/chatbot/canned-responses.ts`. Aby
   włączyć prawdziwego LLM-a przez Vercel AI Gateway:
   ```ts
   import { generateText } from "ai";
   const result = await generateText({
     model: "anthropic/claude-haiku-4-5-20251001",
     prompt: ...,
   });
   ```
   Dodaj endpoint `app/api/chat/route.ts` i podłącz `Chatbot` do streamingu.

## Deployment

Polecane: **Vercel** (one-click). Push do GitHub → Connect → Deploy. Domena custom w
Vercel Dashboard.

```bash
# Jeśli masz Vercel CLI:
vercel
```

## Skrypty

```bash
npm run dev        # dev server na :3000
npm run build      # production build
npm start          # uruchom produkcyjny build
npm run typecheck  # typescript check
npm run lint       # eslint
```

## Wsparcie

- **Mama (właścicielka):** 881 353 444 · witalis.kalisz@wp.pl
- **Bugi w kodzie:** kanał wewnętrzny (do uzgodnienia)
