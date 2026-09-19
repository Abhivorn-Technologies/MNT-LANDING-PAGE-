"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Mail, Send, CheckCircle2, Sparkles } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] relative overflow-hidden border-b border-black/[0.06]">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FA4C00]/5 blur-3xl pointer-events-none" />

      <Container size="narrow">
        <div
          data-reveal="scale-in"
          className="relative rounded-3xl bg-[#FAF4E6] border border-[#E8DFC9] p-8 sm:p-12 text-center overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
        >
          <div className="max-w-xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5DAC0] text-[#FA4C00] font-bold text-xs uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Stay in the Loop
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#111111] tracking-tight">
              Don’t Miss the <span className="text-[#FA4C00]">Next Trend.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Subscribe for the latest deals, offers, product launches and updates delivered
              directly to your inbox. No spam, unsubscribe anytime.
            </p>

            {/* Newsletter Input Form */}
            <form onSubmit={handleSubmit} className="pt-4 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888888]" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-full bg-[#FFFFFF] border border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/20 text-[#111111] placeholder-[#888888] text-sm font-medium outline-none transition-all shadow-sm"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                className="shrink-0 font-bold"
              >
                Subscribe
              </Button>
            </form>

            {/* Success Toast */}
            {isSubscribed && (
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 py-2.5 px-4 rounded-xl animate-fade-in mt-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You have been added to our VIP trendsetter list.</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
