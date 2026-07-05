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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.1)]"
            : "bg-background/0 backdrop-blur-0"
        )}
      >
        <nav className="container flex h-16 items-center justify-between gap-6">
          <Logo />

          <ul className="hidden md:flex items-center gap-1">
            {NAVIGATION.main.map((item) => {
              const href: string = item.href;
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Telefon — główne CTA, widoczny także na mobile */}
            <Button asChild variant="primary" size="sm">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" />
                <span className="hidden sm:inline">{SITE.contact.phoneDisplay}</span>
                <span className="sm:hidden">Zadzwoń</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
              <Link href="/umow-konsultacje">Umów online</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl md:hidden pt-24"
          >
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
                  <Link href="/umow-konsultacje">Umów online</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
