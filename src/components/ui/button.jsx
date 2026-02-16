import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8c6a4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#ded7c9] text-[#161412] hover:bg-[#f1e7d4]",
        secondary: "bg-[#2a2622] text-[#ece8e2] hover:bg-[#38322d]",
        ghost: "text-[#f2efea] hover:bg-[#23211e]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";

  if (asChild && React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      className: cn(buttonVariants({ variant, size, className }), props.children.props.className),
      ...props.children.props
    });
  }

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
