import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "orange" | "glow" | "dark" | "outline" | "pill";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "orange",
  size = "md",
  className,
  icon,
  ...props
}) => {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wide",
    md: "text-xs px-3.5 py-1 tracking-wider uppercase font-semibold",
  };

  const variantStyles = {
    orange: "bg-mnt-orange/15 text-mnt-orange border border-mnt-orange/30",
    glow: "bg-gradient-to-r from-mnt-orange/20 to-mnt-orange-light/20 text-mnt-orange-light border border-mnt-orange/40 shadow-glow-orange-sm",
    dark: "bg-mnt-card text-white/90 border border-white/10",
    outline: "border border-white/20 text-white/80",
    pill: "bg-white/10 text-white border border-white/15",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-300",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="text-mnt-orange">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
