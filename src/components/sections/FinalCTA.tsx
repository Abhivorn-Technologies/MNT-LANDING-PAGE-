import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#FA4C00] via-[#E84400] to-[#D93D00] text-white relative overflow-hidden shadow-2xl">
      {/* Cinematic gold & orange ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFBD59]/25 blur-[160px] pointer-events-none" />

      <Container>
        <div
          data-reveal="scale-in"
          className="relative rounded-[40px] bg-black/15 border border-white/20 p-10 sm:p-16 lg:p-20 text-center overflow-hidden backdrop-blur-sm shadow-2xl"
        >
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Join Multi New Trends Today
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
              Everything You Need.{" "}
              <span className="block mt-1 text-[#FFBD59]">
                One Trend Away.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal max-w-2xl mx-auto">
              Discover a smarter way to shop, sell and deliver with lightning-fast fulfillment,
              verified merchants, and unbeatable daily prices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-base bg-[#FFFFFF] text-[#111111] hover:bg-[#FAF4E6] shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-bold text-base bg-[#111111] text-[#FFFFFF] hover:bg-black border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95"
              >
                <span>Download App</span>
                <Download className="w-5 h-5 text-[#FFBD59]" />
              </a>
            </div>

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/90 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFBD59]" /> 100% Buyer Protection
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-[#FFBD59]" /> Instant 10-15 Min Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFBD59]" /> Daily Exclusive Deals
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
