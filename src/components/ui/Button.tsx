import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "glow";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  fullWidth = false,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none focus:outline-none focus:ring-2 focus:ring-mnt-orange/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-base px-8 py-3.5 gap-2.5 font-semibold",
    xl: "text-lg px-9 py-4 gap-3 font-bold",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-mnt-orange to-[#FF7A00] text-white shadow-glow hover:shadow-glow-lg hover:brightness-110 active:brightness-95",
    secondary:
      "bg-white text-mnt-black hover:bg-mnt-cream hover:text-mnt-orange shadow-md",
    outline:
      "border border-mnt-orange/40 text-mnt-orange hover:bg-mnt-orange/10 hover:border-mnt-orange",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/15 hover:border-mnt-orange/40",
    glow:
      "bg-mnt-orange text-white shadow-glow hover:shadow-glow-lg hover:bg-mnt-orange-hover",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(combinedClasses, "group")}>
        {content}
      </a>
    );
  }

  return (
    <button className={cn(combinedClasses, "group")} {...props}>
      {content}
    </button>
  );
};
