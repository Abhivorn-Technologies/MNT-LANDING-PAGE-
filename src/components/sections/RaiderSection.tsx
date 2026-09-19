import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RAIDER_FEATURES } from "@/data/features";
import { Bike, DollarSign, Clock, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const RaiderSection: React.FC = () => {
  return (
    <section id="raider" className="py-24 sm:py-32 bg-[#050507] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-mnt-orange/10 blur-[160px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Preview (6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1" data-reveal="fade-right">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-mnt-card to-[#121217] border border-white/15 shadow-2xl shadow-black/80">
              {/* Raider App Status Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-mnt-orange/20 flex items-center justify-center text-mnt-orange font-bold">
                    <Bike className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Raider Partner Mode</h4>
                    <p className="text-xs text-emerald-400 font-medium">● Online • High Surge Active (+₹30)</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  Today: ₹2,450
                </span>
              </div>

              {/* Earnings & Trips Row */}
              <div className="grid grid-cols-3 gap-3 my-6">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] text-mnt-muted block">Deliveries</span>
                  <span className="text-xl font-extrabold font-heading text-white">18</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] text-mnt-muted block">Online Time</span>
                  <span className="text-xl font-extrabold font-heading text-mnt-orange-light">5.2h</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                  <span className="text-[11px] text-mnt-muted block">Rating</span>
                  <span className="text-xl font-extrabold font-heading text-emerald-400">4.95★</span>
                </div>
              </div>

              {/* Raider Screen Graphic */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-mnt-dark border border-white/5">
                <Image
                  src="/assets/apps/raider/delivery.png"
                  alt="Raider App Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2" data-reveal="fade-left">
            <Badge variant="glow" icon={<Bike className="w-3.5 h-3.5" />}>
              Earn On Your Terms
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white leading-tight">
              Deliver. <span className="text-gradient-orange">Earn.</span> Grow.
            </h2>

            <p className="text-base sm:text-lg text-mnt-muted leading-relaxed font-normal">
              Join the Multi New Trends delivery network and turn your time into flexible earning
              opportunities with instant weekly payouts, surge bonuses, and accidental insurance.
            </p>

            {/* 4 Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {RAIDER_FEATURES.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-mnt-orange/40 transition-all"
                >
                  <div className="w-6 h-6 rounded-lg bg-mnt-orange/15 flex items-center justify-center text-mnt-orange shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Join as a Raider
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
