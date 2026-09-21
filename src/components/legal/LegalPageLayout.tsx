"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, FileText, Calendar, Clock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  tocItems: TocItem[];
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  tocItems,
  children,
}) => {
  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const item of tocItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111111]">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Legal Page Header */}
        <section className="bg-[#FAF4E6] border-b border-[#E8DFC9] py-12 sm:py-16 relative overflow-hidden">
          {/* Subtle Decorative Ambient Glow */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#FA4C00]/8 blur-[120px] pointer-events-none" />
          <div className="absolute -top-10 left-10 w-64 h-64 bg-[#FFBD59]/10 blur-[100px] pointer-events-none" />

          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DAC0] text-[#FA4C00] font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              MULTI NEW TRENDS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#111111] tracking-tight">
              {title}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-[#555555] max-w-2xl font-normal leading-relaxed">
              {subtitle}
            </p>

            {/* Dates Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-[#E8DFC9]/70 text-xs sm:text-sm text-[#666666]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FA4C00]" />
                <span>Effective Date: <strong className="text-[#111111] font-semibold">{effectiveDate}</strong></span>
              </div>
              <span className="hidden sm:inline text-[#D4C8B0]">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FA4C00]" />
                <span>Last Updated: <strong className="text-[#111111] font-semibold">{lastUpdated}</strong></span>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Page Main Content Area */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Mobile Collapsible TOC */}
          <div className="lg:hidden mb-8">
            <div className="rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] p-4 shadow-sm">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-full flex items-center justify-between text-left font-heading font-bold text-[#111111] text-sm focus:outline-none"
                aria-expanded={mobileMenuOpen}
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#FA4C00]" />
                  <span>On this page ({tocItems.length} sections)</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-[#555555] transition-transform duration-200",
                    mobileMenuOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileMenuOpen && (
                <div className="mt-4 pt-3 border-t border-[#E8DFC9] max-h-72 overflow-y-auto space-y-1 text-xs">
                  {tocItems.map((item, index) => {
                    const isActive = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg font-medium transition-colors flex items-center gap-2",
                          isActive
                            ? "bg-[#FA4C00] text-white font-bold"
                            : "text-[#555555] hover:bg-[#F2E8D2] hover:text-[#111111]"
                        )}
                      >
                        <span className={cn("text-[10px]", isActive ? "text-white/80" : "text-[#888888]")}>
                          {index + 1}.
                        </span>
                        <span className="truncate">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Desktop 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Table of Contents (4 cols) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-2 custom-scrollbar">
              <div className="rounded-2xl bg-[#FAF4E6]/80 border border-[#E8DFC9] p-5 shadow-sm">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#111111] font-heading">
                  <FileText className="w-4 h-4 text-[#FA4C00]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1">
                  {tocItems.map((item, index) => {
                    const isActive = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-start gap-2.5 leading-snug group",
                          isActive
                            ? "bg-white text-[#FA4C00] shadow-sm border border-[#E5DAC0] font-bold"
                            : "text-[#555555] hover:text-[#FA4C00] hover:bg-white/60"
                        )}
                      >
                        <span
                          className={cn(
                            "text-[11px] shrink-0 mt-0.5",
                            isActive ? "text-[#FA4C00]" : "text-[#888888] group-hover:text-[#FA4C00]"
                          )}
                        >
                          {index + 1}.
                        </span>
                        <span className="flex-1">{item.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Right Legal Content (8 cols) */}
            <article className="lg:col-span-8 space-y-10 min-w-0 text-[#555555] leading-relaxed text-sm sm:text-base font-normal">
              {children}
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
