import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-[0_6px_24px_-8px_rgba(0,0,0,0.35)] hover:bg-foreground/90 hover:shadow-[0_10px_32px_-8px_rgba(0,0,0,0.45)] hover:-translate-y-[1px]",
        primary:
          "bg-gradient-to-br from-primary via-primary to-[hsl(var(--neon))] text-primary-foreground shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.5)] hover:shadow-[0_12px_40px_-6px_hsl(var(--primary)/0.7)] hover:-translate-y-[1px]",
        outline:
          "border border-border bg-background/60 backdrop-blur-md hover:bg-background hover:border-foreground/30",
        ghost: "hover:bg-foreground/5 text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-white/10",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6",
        lg: "h-13 px-8 text-base font-medium",
        xl: "h-14 px-10 text-base font-medium",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
