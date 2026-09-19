import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/data/navigation";
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Smartphone,
  ShieldCheck,
  Heart,
} from "lucide-react";

export const Footer: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      case "Facebook":
        return <Facebook className="w-4 h-4" />;
      case "Youtube":
        return <Youtube className="w-4 h-4" />;
      case "Twitter":
        return <Twitter className="w-4 h-4" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-[#08080B] text-white pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-mnt-orange/5 blur-[120px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none" aria-label="Multi New Trends Home">
              <div className="relative h-11 w-auto flex items-center">
                <Image
                  src="/assets/logo/footer.png"
                  alt="Multi New Trends"
                  width={200}
                  height={44}
                  className="h-10 w-auto object-contain brightness-110 rounded-[10px]"
                />
              </div>
            </a>

            <p className="text-sm font-semibold tracking-wider text-mnt-orange uppercase">
              EVERYTHING YOU NEED. ONE TREND AWAY.
            </p>

            <p className="text-sm text-mnt-muted leading-relaxed pr-6">
              A comprehensive hyperlocal commerce ecosystem connecting customers, verified retail vendors, and independent raiders for a smarter, faster shopping experience.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {FOOTER_LINKS.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-mnt-orange/50 hover:bg-mnt-orange/15 hover:text-mnt-orange text-white/70 flex items-center justify-center transition-all duration-300"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: For Business */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              For Business
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.forBusiness.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: App Download & Badges */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              Get the Apps
            </h4>
            <div className="space-y-2.5">
              <a
                href="#download"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-mnt-orange/50 hover:bg-white/[0.08] transition-all group"
              >
                <Smartphone className="w-5 h-5 text-mnt-orange group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-mnt-muted uppercase font-medium">Get it on</span>
                  <span className="text-xs font-bold text-white">Google Play</span>
                </div>
              </a>

              <a
                href="#download"
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-mnt-orange/50 hover:bg-white/[0.08] transition-all group"
              >
                <Smartphone className="w-5 h-5 text-mnt-orange-light group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-mnt-muted uppercase font-medium">Download on the</span>
                  <span className="text-xs font-bold text-white">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mnt-muted">
          <p>© 2026 Multi New Trends. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/70">
              <ShieldCheck className="w-4 h-4 text-mnt-orange" /> 100% Secure Platform
            </span>
            <span className="flex items-center gap-1.5 text-white/70">
              Crafted with <Heart className="w-3.5 h-3.5 text-mnt-orange fill-mnt-orange" /> for shoppers & partners
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
