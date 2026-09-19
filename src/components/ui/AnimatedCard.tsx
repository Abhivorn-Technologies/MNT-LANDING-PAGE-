import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: 100 | 200 | 300 | 400 | 500 | 600;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in" | "blur-in";
  glowOnHover?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay,
  animation = "fade-up",
  glowOnHover = true,
  ...props
}) => {
  return (
    <div
      data-reveal={animation}
      data-delay={delay ? delay.toString() : undefined}
      className={cn(
        "rounded-2xl transition-all duration-500",
        glowOnHover && "hover:-translate-y-1.5 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
