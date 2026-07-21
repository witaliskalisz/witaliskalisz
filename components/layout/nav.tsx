"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { NAVIGATION, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Pełny pasek pojawia się, gdy duże logo w hero znika (a trochę wcześniej).
    // Na podstronach bez hero-brand pasek jest widoczny od razu.
    const el = document.getElementById("hero-brand");
    if (!el) {
      setScrolled(true);
      return;
    }
    setScrolled(false);
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-100px 0px 0px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/40 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.12)]"
            : "bg-transparent"
        )}
      >
        <nav className="container flex h-16 items-center gap-6">
          {scrolled ? (
            /* Po scrollu — pełny pasek nawigacji */
            <motion.div
              key="full-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-6 w-full"
            >
              <Logo />

              <ul className="hidden md:flex items-center gap-1 mx-auto">
                {NAVIGATION.main.map((item) => {
                  const href: string = item.href;
                  const active =
                    pathname === href || (href !== "/" && pathname.startsWith(href));
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-foreground",
                          active ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-0 rounded-full bg-foreground/5 -z-10"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-center gap-2 ml-auto md:ml-0">
                <ThemeToggle />
                <Button asChild variant="primary" size="sm">
                  <a href={`tel:${SITE.contact.phone}`}>
                    <Phone className="size-4" />
                    <span className="hidden sm:inline">{SITE.contact.phoneDisplay}</span>
                    <span className="sm:hidden">Zadzwoń</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                  <Link href="/kontakt">Napisz do nas</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setOpen(true)}
                  aria-label="Menu"
                >
                  <Menu className="size-5" />
                </Button>
              </div>
            </motion.div>
          ) : (
            /* Na górze — przezroczyście, tylko hamburger (menu) */
            <button
              onClick={() => setOpen(true)}
              aria-label="Otwórz menu"
              className="ml-auto inline-flex size-11 items-center justify-center rounded-full border border-border/50 bg-background/40 backdrop-blur-sm text-foreground/80 hover:text-foreground hover:bg-background/70 transition-colors"
            >
              <Menu className="size-5" />
            </button>
          )}
        </nav>
      </header>

      {/* Menu (drawer) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl pt-6"
          >
            <div className="container flex items-center justify-between h-16">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpen(false)}
                aria-label="Zamknij menu"
              >
                <X className="size-5" />
              </Button>
            </div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="container py-8 flex flex-col gap-2"
            >
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-display py-3 border-b border-border/30 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                <Button asChild variant="primary" size="lg">
                  <a href={`tel:${SITE.contact.phone}`}>
                    <Phone className="size-4" />
                    Zadzwoń: {SITE.contact.phoneDisplay}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kontakt">Napisz do nas</Link>
                </Button>
                <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                  <ThemeToggle />
                  <span>Zmień motyw</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
