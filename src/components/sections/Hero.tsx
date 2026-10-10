"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  Download,
  ShoppingBag,
  Zap,
  Tag,
  Store,
  Star,
  ShieldCheck,
} from "lucide-react";

export const Hero: React.FC = () => {
  const benefits = [
    { label: "Wide Range of Products", icon: ShoppingBag },
    { label: "Fast & Reliable Delivery", icon: Zap },
    { label: "Best Deals & Discounts", icon: Tag },
    { label: "Support Local Businesses", icon: Store },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#050505]"
    >
      {/* Background Image from /public/assets/hero/hero.png */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/hero/hero.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        {/* Subtle Dark Overlay for Optimal Text Legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 100%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            {/* Top Micro Badge */}
            <div data-reveal="fade-down">
              <Badge variant="glow" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Multi New Trends • The Super Shopping App
              </Badge>
            </div>

            {/* Main Cinematic Heading */}
            <h1
              data-reveal="fade-up"
              data-delay="100"
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-heading text-white leading-[1.08]"
            >
              Everything You Need.{" "}
              <span className="block mt-1 text-gradient-orange">
                One Trend Away.
              </span>
            </h1>

            {/* Supporting Text */}
            <p
              data-reveal="fade-up"
              data-delay="200"
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              From groceries and gadgets to fashion and everyday essentials — discover
              everything you need in one convenient place.
            </p>

            {/* CTA Action Buttons */}
            <div
              data-reveal="fade-up"
              data-delay="300"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#categories"
                icon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Shop Now
              </Button>

              <Button
                variant="glass"
                size="lg"
                href="#download"
                icon={<Download className="w-5 h-5 text-mnt-orange-light" />}
                className="w-full sm:w-auto"
              >
                Download App
              </Button>
            </div>

            {/* 4 Core Benefits */}
            <div
              data-reveal="fade-up"
              data-delay="400"
              className="pt-6 border-t border-white/[0.08]"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {benefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-left p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-mnt-orange/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-mnt-orange/15 flex items-center justify-center text-mnt-orange shrink-0 group-hover:bg-mnt-orange group-hover:text-white transition-all">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-white/90 leading-tight">
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Hero Visual (5 cols on lg) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Backlight Glow behind phone */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-mnt-orange/25 blur-[90px] animate-pulseGlow pointer-events-none" />

            {/* Main Phone Wrapper with Smooth Float */}
            <div
              data-reveal="scale-in"
              className="relative z-10 w-[290px] sm:w-[340px] md:w-[380px] transition-transform duration-700 hover:scale-[1.02]"
            >
              {/* Phone Graphic */}
              <div className="relative rounded-[48px] p-2 bg-gradient-to-b from-[#2A2A38] to-[#121218] shadow-2xl shadow-black/80 border border-white/15 animate-float">
                <div className="rounded-[40px] overflow-hidden bg-mnt-black">
                  <Image
                    src="/assets/hero/ss.png"
                    alt="Multi New Trends shopping app screenshot"
                    width={380}
                    height={823}
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Floating Live Badge 1: Lightning Fast 10-15 Min Delivery */}
              <div className="absolute -top-4 -left-6 sm:-left-10 p-3.5 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-3 animate-float-delayed z-20">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mnt-orange to-[#FF7A00] flex items-center justify-center text-white font-bold shadow-glow-orange-sm">
                  <Zap className="w-5 h-5 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-mnt-orange">
                    Lightning Fast
                  </p>
                  <p className="text-xs font-bold text-white">10-15 Min Delivery</p>
                </div>
              </div>

              {/* Floating Live Badge 2: 50k+ Happy Customers */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 p-3.5 rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-3 animate-float z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-mnt-orange-light fill-mnt-orange-light" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">50,000+ Verified Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
