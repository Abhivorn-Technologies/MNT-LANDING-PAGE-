import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Search, ShoppingCart, Truck, Sparkles, CheckCircle2 } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "Browse categories and discover products you love with smart personalized recommendations.",
      icon: Search,
      badge: "Step 1",
      details: ["10,000+ curated items", "Verified seller ratings", "Dynamic search filters"],
    },
    {
      number: "02",
      title: "ORDER",
      description: "Add your favorites to cart and place your order with 1-click checkout and secure payments.",
      icon: ShoppingCart,
      badge: "Step 2",
      details: ["Instant coupon application", "UPI, Cards & COD", "Order protection guarantee"],
    },
    {
      number: "03",
      title: "DELIVERED",
      description: "Sit back and get your order delivered to your doorstep in lightning-fast time with live GPS tracking.",
      icon: Truck,
      badge: "Step 3",
      details: ["Real-time rider location", "Contactless handoff", "Instant satisfaction"],
    },
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#FAF4E6] text-[#111111] relative overflow-hidden border-b border-[#E8DFC9]">
      <Container>
        <SectionHeading
          dark={false}
          badge="Seamless Process"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#FA4C00]" />}
          title="How It Works"
          highlightText="How It Works"
          subtitle="Three effortless steps from discovery to doorstep delivery in record time."
        />

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-12 bg-gradient-to-r from-[#FA4C00]/40 via-[#FFBD59]/60 to-[#FA4C00]/40 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FA4C00] to-transparent opacity-60 animate-shimmer" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const delays = [100, 200, 300] as const;

              return (
                <AnimatedCard
                  key={step.number}
                  delay={delays[index]}
                  className="group relative rounded-3xl bg-[#FFFFFF] border border-[#E5DAC0] hover:border-[#FA4C00]/50 p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(250,76,0,0.12)] transition-all duration-400"
                >
                  {/* Top Step Number Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black font-heading text-[#FA4C00]">
                      {step.number}
                    </span>

                    <div className="w-14 h-14 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-2xl font-extrabold font-heading text-[#111111] tracking-tight mb-3 group-hover:text-[#FA4C00] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>

                    {/* Step Perks */}
                    <div className="space-y-2 pt-4 border-t border-[#F2E8D2]">
                      {step.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#333333] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FA4C00]" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
