import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Quote, CheckCircle2, Heart } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF4E6] text-[#111111] relative overflow-hidden border-b border-[#E8DFC9]">
      <Container>
        <SectionHeading
          dark={false}
          badge="Customer Stories"
          badgeIcon={<Heart className="w-3.5 h-3.5 fill-[#FA4C00] text-[#FA4C00]" />}
          title="Loved by Thousands"
          highlightText="Loved by Thousands"
          subtitle="Real reviews from regular shoppers, local vendors, and delivery partners across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => {
            const delays = [100, 200, 300] as const;

            return (
              <AnimatedCard
                key={t.id}
                delay={delays[index]}
                className="group relative rounded-3xl bg-[#FFFFFF] border border-[#E5DAC0] hover:border-[#FA4C00]/50 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(250,76,0,0.12)] transition-all duration-300"
              >
                <div>
                  {/* Top Quote Icon & Star Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#FA4C00]">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FA4C00]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-black/10 group-hover:text-[#FA4C00]/30 transition-colors" />
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-[#333333] leading-relaxed italic mb-8 font-normal">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#F2E8D2] flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FA4C00]/40 shadow-sm shrink-0">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} - ${t.role}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-[#111111] font-heading">
                        {t.name}
                      </h4>
                      {t.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FA4C00]" />
                      )}
                    </div>
                    <p className="text-xs text-[#666666] font-medium mt-0.5">
                      {t.role} • {t.location}
                    </p>
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
