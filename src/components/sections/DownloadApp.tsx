import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Smartphone, Download, QrCode, Star, ShieldCheck, Check } from "lucide-react";

export const DownloadApp: React.FC = () => {
  return (
    <section id="download" className="py-24 sm:py-32 bg-gradient-to-b from-[#09090D] via-[#150904] to-[#0A0A0E] relative overflow-hidden border-t border-white/[0.08]">
      {/* High-impact Ambient Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-mnt-orange/15 blur-[170px] pointer-events-none" />

      <Container>
        <div className="relative rounded-[36px] bg-gradient-to-br from-mnt-card via-[#1A110D] to-[#120B08] border border-mnt-orange/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Decorative grid inside container */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6" data-reveal="fade-right">
              <Badge variant="glow" icon={<Smartphone className="w-3.5 h-3.5" />}>
                Get Mobile App
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white leading-tight">
                Your Next Favorite Shopping Experience{" "}
                <span className="text-gradient-orange">Is Just One Tap Away.</span>
              </h2>

              <p className="text-base sm:text-lg text-mnt-muted leading-relaxed font-normal">
                Shop anytime, anywhere. Available for free on Android and iOS with instant access
                to flash sales, live order tracking, and local store discounts.
              </p>

              {/* App Store Buttons & QR Code Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-3">
                {/* Store buttons */}
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white text-black hover:bg-mnt-cream hover:shadow-glow transition-all group duration-300"
                  >
                    <Smartphone className="w-6 h-6 text-mnt-orange group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-black/60">
                        GET IT ON
                      </span>
                      <span className="block text-base font-extrabold font-heading text-black leading-none">
                        Google Play
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://apple.com/app-store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-mnt-orange/50 text-white transition-all group duration-300"
                  >
                    <Smartphone className="w-6 h-6 text-mnt-orange-light group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-white/60">
                        DOWNLOAD ON THE
                      </span>
                      <span className="block text-base font-extrabold font-heading text-white leading-none">
                        App Store
                      </span>
                    </div>
                  </a>
                </div>

                {/* QR Code Container */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <div className="w-20 h-20 bg-white p-1 rounded-xl shrink-0 shadow-md">
                    <Image
                      src="/assets/decorative/qr-code.png"
                      alt="Scan to Download MN Trends App"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Scan to Install</span>
                    <span className="text-[11px] text-mnt-muted block mt-0.5">iOS & Android</span>
                    <div className="flex items-center gap-1 text-[11px] text-mnt-orange-light mt-1 font-semibold">
                      <Star className="w-3 h-3 fill-mnt-orange-light" /> 4.9★ Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right App Screenshot Mockup (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end" data-reveal="fade-left">
              <div className="relative w-[260px] sm:w-[300px] animate-float">
                <div className="rounded-[44px] p-2.5 bg-gradient-to-b from-[#353545] to-[#121218] border border-mnt-orange/50 shadow-glow">
                  <div className="rounded-[36px] overflow-hidden bg-mnt-black">
                    <Image
                      src="/assets/hero/phone-01.png"
                      alt="Download MN Trends App"
                      width={300}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
