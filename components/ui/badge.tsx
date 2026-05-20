import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-foreground text-background",
        secondary:
          "border-transparent bg-muted text-muted-foreground",
        outline:
          "border-border text-foreground bg-background/60 backdrop-blur",
        glass:
          "border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 text-foreground backdrop-blur-xl",
        accent:
          "border-transparent bg-gradient-to-r from-primary/15 to-[hsl(var(--neon))]/15 text-primary",
        success:
          "border-transparent bg-success/15 text-success",
        amber:
          "border-transparent bg-amber-500/15 text-amber-600 dark:text-amber-400",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
