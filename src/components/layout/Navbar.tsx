"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll detection for subtle shadow elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out bg-[#FAF4E6]",
          isScrolled
            ? "py-3 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border-b border-[#E8DFC9]"
            : "py-3.5 sm:py-4 shadow-sm border-b border-[#EDE4D0]"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Official Multi New Trends Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-[#FA4C00]/40 rounded-lg p-0.5 transition-transform hover:opacity-95"
              aria-label="Multi New Trends Home"
            >
              <div className="relative h-10 sm:h-11 md:h-12 w-auto flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt="Multi New Trends company logo"
                  width={220}
                  height={48}
                  priority
                  className="h-10 sm:h-11 md:h-12 w-auto object-contain max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F2E8D2]/70 border border-[#E5DAC0]">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-250 select-none",
                      isActive
                        ? "text-[#FA4C00] bg-[#FAF4E6] shadow-sm font-bold"
                        : "text-[#111111] hover:text-[#FA4C00] hover:bg-[#FAF4E6]/60"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FA4C00] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Download App CTA */}
              <Button
                variant="primary"
                size="md"
                href="/#download"
                icon={<Download className="w-4 h-4" />}
                className="shadow-[0_4px_16px_rgba(250,76,0,0.3)] hover:shadow-[0_6px_22px_rgba(250,76,0,0.45)]"
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#F2E8D2] border border-[#E2D5BE] text-[#111111] hover:text-[#FA4C00] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#FA4C00]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#111111]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#FAF4E6] border-t border-[#E8DFC9] px-4 pt-4 pb-6 mt-3 space-y-2 shadow-lg animate-fade-down">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-base font-semibold transition-all",
                    isActive
                      ? "bg-[#FA4C00] text-white font-bold shadow-md"
                      : "text-[#111111] hover:bg-[#F2E8D2] hover:text-[#FA4C00]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button
                variant="primary"
                fullWidth
                size="lg"
                href="/#download"
                onClick={() => setMobileMenuOpen(false)}
                icon={<Download className="w-4 h-4" />}
              >
                Download App
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
