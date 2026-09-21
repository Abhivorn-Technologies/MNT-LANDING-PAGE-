"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FAQ_DATA } from "@/data/faq";
import { Plus, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle decorative background watermark */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FA4C00]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFBD59]/6 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28" data-reveal="fade-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E6] border border-[#E8DFC9] text-[#FA4C00] font-bold text-xs uppercase tracking-wider">
              <HelpCircle className="w-4 h-4 text-[#FA4C00]" />
              NEED TO KNOW?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#111111] tracking-tight leading-[1.15]">
              Frequently Asked <span className="text-[#FA4C00]">Questions</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              Find quick answers to common questions about Multi New Trends, shopping, delivery,
              vendors and riders.
            </p>

            {/* Decorative MN Brand Card Visual */}
            <div className="pt-4">
              <div className="rounded-2xl p-6 bg-[#FAF4E6] border border-[#E8DFC9] shadow-sm relative overflow-hidden group">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#FA4C00]/10 group-hover:scale-125 transition-transform duration-500" />
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FA4C00] text-white flex items-center justify-center font-heading font-black text-base shadow-sm">
                    MN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">Still have questions?</h4>
                    <p className="text-xs text-[#666666]">Our 24/7 support is ready to help.</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FA4C00] hover:text-[#E04400] transition-colors mt-2"
                >
                  Contact Support Team <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) - Accordion */}
          <div className="lg:col-span-7 space-y-3.5" data-reveal="fade-left">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "rounded-2xl transition-all duration-300 overflow-hidden border",
                    isOpen
                      ? "bg-[#FFFFFF] border-[#FA4C00] shadow-[0_4px_20px_rgba(250,76,0,0.1)]"
                      : "bg-[#FFFFFF] hover:bg-[#FAF4E6]/40 border-black/[0.08] hover:border-[#FA4C00]/40 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleFAQ(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      id={`faq-question-${item.id}`}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#111111] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4C00]/50 select-none cursor-pointer"
                    >
                      <span className={cn("transition-colors", isOpen && "text-[#FA4C00]")}>
                        {item.question}
                      </span>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                          isOpen
                            ? "bg-[#FA4C00] text-white rotate-45"
                            : "bg-[#FAF4E6] text-[#111111] hover:bg-[#FA4C00] hover:text-white"
                        )}
                      >
                        <Plus className="w-4 h-4 transition-transform duration-300" />
                      </div>
                    </button>
                  </h3>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-6 pt-0 border-t border-black/[0.06] text-sm sm:text-base text-[#555555] leading-relaxed">
                        <p className="pt-3">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
