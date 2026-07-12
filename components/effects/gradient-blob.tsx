import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "neon" | "amber" | "violet" | "cyan";
}

const sizes = {
  sm: "h-[300px] w-[300px]",
  md: "h-[500px] w-[500px]",
  lg: "h-[700px] w-[700px]",
  xl: "h-[1000px] w-[1000px]",
};

const colors = {
  primary: "from-primary/40 to-primary/0",
  neon: "from-[hsl(var(--neon))]/40 to-[hsl(var(--neon))]/0",
  amber: "from-amber-400/30 to-amber-300/0",
  violet: "from-rose-500/30 to-rose-400/0",
  cyan: "from-orange-400/30 to-orange-300/0",
};

export function GradientBlob({ className, size = "lg", color = "primary" }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute rounded-full bg-gradient-radial blur-3xl opacity-70 animate-float",
        sizes[size],
        className
      )}
      style={{
        background: `radial-gradient(circle, hsl(var(--${color === "primary" ? "primary" : color === "neon" ? "neon" : "primary"}) / 0.3) 0%, transparent 70%)`,
      }}
    />
  );
}
