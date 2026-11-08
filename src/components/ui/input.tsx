import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-brand-ink shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-gold focus:ring-4 focus:ring-amber-100 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
