"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { CATEGORIES } from "@/data/categories";
import { ArrowUpRight, Grid } from "lucide-react";

export const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FA4C00]/5 blur-[160px] pointer-events-none" />

      <Container>
        <SectionHeading
          dark={false}
          badge="Endless Variety"
          badgeIcon={<Grid className="w-3.5 h-3.5 text-[#FA4C00]" />}
          title="Shop by Category"
          highlightText="Category"
          subtitle="Explore thousands of curated essentials and trending products across our most popular departments."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat, index) => {
            const delayMap = [100, 200, 300, 400, 500, 600] as const;
            const delay = delayMap[index % 6];

            return (
              <AnimatedCard
                key={cat.id}
                delay={delay}
                className="group relative rounded-2xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#FA4C00]/50 p-4 sm:p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_28px_rgba(250,76,0,0.12)] cursor-pointer"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#F7F7F7] border border-black/[0.04] mb-3.5 flex items-center justify-center group-hover:border-[#FA4C00]/30 transition-all">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#111111] font-heading group-hover:text-[#FA4C00] transition-colors leading-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-[#777777] font-medium mt-0.5">
                      {cat.itemCount}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="w-7 h-7 rounded-full bg-[#FAF4E6] group-hover:bg-[#FA4C00] flex items-center justify-center text-[#111111] group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
