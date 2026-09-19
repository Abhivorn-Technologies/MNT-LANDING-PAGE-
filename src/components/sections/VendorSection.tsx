import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { VENDOR_FEATURES } from "@/data/features";
import {
  Store,
  CheckCircle2,
  ArrowRight,
  BarChart3,
} from "lucide-react";

export const VendorSection: React.FC = () => {
  return (
    <section id="vendor" className="py-24 sm:py-32 bg-[#F7F7F7] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#FA4C00]/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Dashboard Visual Card (6 cols) */}
          <div className="lg:col-span-6" data-reveal="fade-right">
            <div className="relative rounded-3xl p-6 sm:p-8 bg-[#FFFFFF] border border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
              {/* Dashboard Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-black/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] font-bold">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111111]">Vendor Portal Hub</h4>
                    <p className="text-xs text-emerald-600 font-semibold">● Live Store Active</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#FA4C00] bg-[#FAF4E6] px-3 py-1.5 rounded-lg border border-[#E8DFC9]">
                  Monthly Growth: +340%
                </span>
              </div>

              {/* Metric stats grid */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-black/[0.05]">
                  <span className="text-xs text-[#666666] font-medium block mb-1">Monthly Gross Revenue</span>
                  <span className="text-2xl font-black font-heading text-[#111111]">₹3,42,800</span>
                  <span className="text-[11px] text-emerald-600 font-bold block mt-1">↑ +28.4% this week</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-black/[0.05]">
                  <span className="text-xs text-[#666666] font-medium block mb-1">Total Fulfilled Orders</span>
                  <span className="text-2xl font-black font-heading text-[#FA4C00]">1,248</span>
                  <span className="text-[11px] text-[#666666] font-medium block mt-1">4.9★ Store Rating</span>
                </div>
              </div>

              {/* Visual preview */}
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-[#181820] border border-black/5 shadow-inner">
                <Image
                  src="/assets/apps/vendor/dashboard.png"
                  alt="Vendor Dashboard Interface"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6" data-reveal="fade-left">
            <Badge variant="orange" icon={<Store className="w-3.5 h-3.5 text-[#FA4C00]" />} className="bg-[#FAF4E6] text-[#FA4C00] border-[#E8DFC9]">
              Partner With MN Trends
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#111111] leading-tight">
              Turn Your Store Into a{" "}
              <span className="text-[#FA4C00]">Digital Business.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
              Multi New Trends helps businesses reach more customers, manage products and
              grow their sales through a simple digital platform with zero complex setups.
            </p>

            {/* 6 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {VENDOR_FEATURES.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-black/[0.08] hover:border-[#FA4C00]/40 transition-all shadow-sm"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#FAF4E6] flex items-center justify-center text-[#FA4C00] shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[#222222]">
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
                Become a Vendor
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
