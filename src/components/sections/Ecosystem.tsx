import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { Smartphone, Store, Bike, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const Ecosystem: React.FC = () => {
  const apps = [
    {
      id: "user",
      badge: "FOR SHOPPERS",
      title: "USER APP",
      tagline: "Shop Everything",
      description:
        "Access thousands of daily essentials, groceries, trending gadgets, and fashion with instant delivery and exclusive discounts.",
      cta: "Explore App",
      ctaLink: "#user-showcase",
      icon: Smartphone,
      accent: "#FA4C00",
      previewImage: "/assets/apps/user/showcase.png",
      features: ["Hyperlocal delivery", "Daily flash discounts", "Live order GPS tracker"],
    },
    {
      id: "vendor",
      badge: "FOR RETAILERS",
      title: "VENDOR APP",
      tagline: "Grow Your Business",
      description:
        "Digitize your store, manage inventory effortlessly, fulfill online orders, and reach thousands of new neighborhood customers.",
      cta: "Become a Vendor",
      ctaLink: "#vendor",
      icon: Store,
      accent: "#FFBD59",
      previewImage: "/assets/apps/vendor/dashboard.png",
      features: ["Instant store onboarding", "Real-time stock control", "Automated daily payouts"],
    },
    {
      id: "raider",
      badge: "FOR DELIVERY PARTNERS",
      title: "RAIDER APP",
      tagline: "Earn While You Deliver",
      description:
        "Join our flexible delivery network with competitive per-order payouts, surge incentives, and seamless route navigation.",
      cta: "Join as a Raider",
      ctaLink: "#raider",
      icon: Bike,
      accent: "#FA4C00",
      previewImage: "/assets/apps/raider/delivery.png",
      features: ["Flexible working hours", "Instant weekly transfers", "Performance rewards & bonuses"],
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FA4C00]/5 blur-[120px] pointer-events-none" />

      <Container>
        <SectionHeading
          dark={false}
          badge="The MN Trends Ecosystem"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#FA4C00]" />}
          title="One Platform. Three Powerful Apps."
          highlightText="Three Powerful Apps."
          subtitle="Built for Customers, Vendors and Raiders — a complete ecosystem for a smarter, faster shopping experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {apps.map((app, index) => {
            const Icon = app.icon;
            const delays = [100, 200, 300] as const;
            return (
              <AnimatedCard
                key={app.id}
                delay={delays[index]}
                className="group relative rounded-3xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#FA4C00]/40 p-7 flex flex-col justify-between overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgba(250,76,0,0.12)] transition-all duration-400"
              >
                <div className="flex-1 flex flex-col">
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF4E6] text-[#FA4C00] border border-[#E8DFC9]">
                      {app.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:scale-110 group-hover:bg-[#FA4C00] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-black font-heading tracking-tight text-[#111111] mb-1">
                    {app.title}
                  </h3>
                  <p className="text-sm font-bold text-[#FA4C00] mb-4">
                    {app.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#555555] leading-relaxed mb-6">
                    {app.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-8">
                    {app.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#333333] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom App Image Preview & CTA */}
                <div className="pt-4 border-t border-black/[0.06] mt-auto">
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-black/[0.08] mb-6 group-hover:border-[#FA4C00]/30 transition-all">
                    <Image
                      src={app.previewImage}
                      alt={app.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 420px"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <Button
                    variant="outline"
                    fullWidth
                    size="md"
                    href={app.ctaLink}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="border-[#FA4C00]/30 text-[#FA4C00] hover:bg-[#FA4C00] hover:text-white hover:border-transparent transition-all font-bold"
                  >
                    {app.cta}
                  </Button>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
