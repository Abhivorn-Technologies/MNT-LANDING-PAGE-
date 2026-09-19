import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  highlightText,
  subtitle,
  align = "center",
  className,
  dark = true,
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  // Render title with highlighted part in orange gradient or solid orange
  const renderTitle = () => {
    if (!highlightText) {
      return title;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className={dark ? "text-gradient-orange inline-block" : "text-[#FA4C00] inline-block"}>
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn("flex flex-col max-w-3xl mb-12 sm:mb-16", alignClasses[align], className)}
      data-reveal="fade-up"
    >
      {badge && (
        <div className="mb-4">
          <Badge
            variant={dark ? "glow" : "orange"}
            icon={badgeIcon}
            className={!dark ? "bg-[#F2E8D2] text-[#FA4C00] border-[#E2D5BE]" : undefined}
          >
            {badge}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-[1.15]",
          dark ? "text-white" : "text-[#111111]"
        )}
      >
        {renderTitle()}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal",
            dark ? "text-mnt-muted" : "text-[#555555]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
