import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Search,
  CreditCard,
  MapPin,
  Tag,
  Sparkles,
  Smartphone,
} from "lucide-react";

export const UserAppShowcase: React.FC = () => {
  const features = [
    {
      title: "Smart Search",
      description: "AI-powered instant search across thousands of products with intelligent typo tolerance and visual suggestions.",
      icon: Search,
    },
    {
      title: "Easy Checkout",
      description: "Fast 1-tap checkout with saved delivery addresses, multiple payment options, and instant promo code redemption.",
      icon: CreditCard,
    },
    {
      title: "Live Order Tracking",
      description: "Real-time interactive GPS map tracking from merchant packing to doorstep delivery with live ETA updates.",
      icon: MapPin,
    },
    {
      title: "Exclusive Deals",
      description: "App-only flash sales, daily cashback vouchers, and early bird discounts tailored to your favorite categories.",
      icon: Tag,
    },
    {
      title: "Personalized Shopping",
      description: "Curated feeds and customized product recommendations tailored to your everyday lifestyle and past purchases.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="user-showcase" className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle Ambient Orange Glow behind Mockups */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#FA4C00]/8 blur-[160px] pointer-events-none" />

      <Container>
        <SectionHeading
          dark={false}
          badge="Flagship User Experience"
          badgeIcon={<Smartphone className="w-3.5 h-3.5 text-[#FA4C00]" />}
          title="Everything You Need. Right at Your Fingertips."
          highlightText="Right at Your Fingertips."
          subtitle="Designed with meticulous attention to detail to deliver the smoothest, fastest shopping experience on mobile."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-6">
          {/* Left Features List (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((feat, index) => {
              const Icon = feat.icon;
              const delays = [100, 200, 300, 400, 500] as const;

              return (
                <div
                  key={feat.title}
                  data-reveal="fade-right"
                  data-delay={delays[index].toString()}
                  className="group p-5 rounded-2xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#FA4C00]/50 hover:bg-[#FAF4E6]/40 transition-all duration-300 flex items-start gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(250,76,0,0.1)]"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white transition-all shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#111111] font-heading group-hover:text-[#FA4C00] transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] mt-1 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dual App Mockups (6 Cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px]">
            {/* Phone 1 (Back left) */}
            <div
              data-reveal="fade-left"
              data-delay="200"
              className="relative -mr-16 sm:-mr-20 z-10 w-[220px] sm:w-[260px] opacity-85 hover:opacity-100 transition-all duration-500 hover:z-30 hover:scale-105 animate-float-delayed"
            >
              <div className="rounded-[40px] p-2 bg-gradient-to-b from-[#353540] to-[#121218] border border-black/10 shadow-2xl">
                <div className="rounded-[32px] overflow-hidden bg-black relative aspect-[9/16] w-full isolate [transform:translateZ(0)]">
                  <Image
                    src="/assets/categories/PH SS-2.png"
                    alt="Multi New Trends User App"
                    fill
                    sizes="(max-width: 640px) 220px, 260px"
                    className="object-cover w-full h-full block"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Phone 2 (Front right) */}
            <div
              data-reveal="fade-left"
              data-delay="400"
              className="relative z-20 w-[250px] sm:w-[290px] shadow-2xl transition-all duration-500 hover:scale-105 animate-float"
            >
              <div className="rounded-[44px] p-2.5 bg-gradient-to-b from-[#2A2A38] to-[#14141B] border border-[#FA4C00]/40 shadow-[0_15px_40px_rgba(250,76,0,0.25)]">
                <div className="rounded-[36px] overflow-hidden bg-black relative aspect-[9/16] w-full isolate [transform:translateZ(0)]">
                  <Image
                    src="/assets/categories/PH SS-1.png"
                    alt="Multi New Trends Live Tracking"
                    fill
                    sizes="(max-width: 640px) 250px, 290px"
                    className="object-cover w-full h-full block"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
