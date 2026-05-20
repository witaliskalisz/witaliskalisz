import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
  short?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-9 w-9", icon: "size-5", radius: "rounded-xl" },
  md: { box: "h-10 w-10", icon: "size-6", radius: "rounded-2xl" },
  lg: { box: "h-12 w-12", icon: "size-7", radius: "rounded-2xl" },
};

export function Logo({ className, short = false, size = "md" }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center bg-gradient-to-br from-primary to-[hsl(var(--neon))] shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.45)] transition-transform group-hover:scale-105",
          s.box,
          s.radius
        )}
      >
        <BrandMark className={cn(s.icon, "text-primary-foreground")} />
        <span
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-br from-primary to-[hsl(var(--neon))] opacity-30 blur-md -z-10",
            s.radius
          )}
        />
      </span>
      {!short && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl font-semibold tracking-tight">
            {SITE.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Prywatna diagnostyka · Kalisz
          </span>
        </span>
      )}
    </Link>
  );
}

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      {/* Elegant teardrop */}
      <path
        d="M 16 5.5 C 14 8, 12.6 9.8, 12.6 11.7 C 12.6 13.6, 14.1 14.9, 16 14.9 C 17.9 14.9, 19.4 13.6, 19.4 11.7 C 19.4 9.8, 18 8, 16 5.5 Z"
        fill="currentColor"
      />
      {/* Smooth W with bezier curves */}
      <path
        d="M 5.5 17 C 5.5 17, 7.5 22.5, 10 26.5 C 11 28, 12 27.8, 12.6 26.5 C 13.5 24.5, 14.8 22, 16 19.5 C 17.2 22, 18.5 24.5, 19.4 26.5 C 20 27.8, 21 28, 22 26.5 C 24.5 22.5, 26.5 17, 26.5 17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
