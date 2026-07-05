import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { GrainOverlay } from "@/components/effects/grain-overlay";
import { Chatbot } from "@/components/chatbot/chatbot";
import { Toaster } from "@/components/ui/sonner";
import { buildMetadata } from "@/lib/seo";
import { medicalBusinessSchema, faqSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfdff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
        />
      </head>
      <body className="font-sans antialiased min-h-dvh flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AnnouncementBar />
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chatbot />
          <Toaster position="bottom-right" />
          <GrainOverlay />
        </ThemeProvider>
      </body>
    </html>
  );
}
