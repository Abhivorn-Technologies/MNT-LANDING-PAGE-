import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { WHY_CHOOSE_US } from "@/data/features";
import {
  Zap,
  Layers,
  Tag,
  Store,
  ShieldCheck,
  Headphones,
  Sparkles,
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Layers":
        return <Layers className="w-6 h-6" />;
      case "Tag":
        return <Tag className="w-6 h-6" />;
      case "Store":
        return <Store className="w-6 h-6" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "Headphones":
        return <Headphones className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FA4C00]/4 blur-[180px] pointer-events-none" />

      <Container>
        <SectionHeading
          dark={false}
          badge="Unrivaled Advantages"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#FA4C00]" />}
          title="Why Choose Multi New Trends?"
          highlightText="Multi New Trends?"
          subtitle="Built from the ground up to provide seamless commerce, verified local merchants, and instant fulfillment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const delays = [100, 200, 300, 400, 500, 600] as const;

            return (
              <AnimatedCard
                key={item.title}
                delay={delays[index]}
                className="group relative rounded-3xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#FA4C00]/50 p-8 flex flex-col justify-between overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(250,76,0,0.12)] transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm mb-6">
                    {getIcon(item.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-[#111111] tracking-tight mb-3 group-hover:text-[#FA4C00] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
