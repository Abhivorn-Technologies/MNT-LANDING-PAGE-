import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS } from "@/data/navigation";
import {
  Instagram,
  Facebook,
  Youtube,
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
      case "YouTube":
      case "Youtube":
        return <Youtube className="w-4 h-4" />;
      case "X":
      case "Twitter":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "LinkedIn":
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  const getSocialHoverClass = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return "social-icon-btn-instagram";
      case "Facebook":
        return "social-icon-btn-facebook";
      case "YouTube":
      case "Youtube":
        return "social-icon-btn-youtube";
      case "X":
      case "Twitter":
        return "social-icon-btn-x";
      case "LinkedIn":
      case "Linkedin":
        return "social-icon-btn-linkedin";
      default:
        return "";
    }
  };

  return (
    <footer className="bg-[#090909] text-white pt-20 pb-12 border-t border-white/[0.08] relative overflow-hidden">
      {/* =========================================================================
          Subtle Background Dot Pattern & Ambient Glow (Behind content, pointer-events: none)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none" aria-hidden="true">
        {/* Small Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_90%)] pointer-events-none" />

        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-48 bg-[#FA4C00]/[0.035] blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-48 bg-[#FFBD59]/[0.025] blur-[130px] rounded-full pointer-events-none" />
      </div>

      <Container className="relative z-10">
        {/* 4-Column Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Column 1 — Brand (Spans 5 cols on desktop for optimal layout) */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus:outline-none"
              aria-label="Multi New Trends Home"
            >
              <div className="relative h-11 w-auto flex items-center">
                <Image
                  src="/assets/logo/footer.png"
                  alt="Multi New Trends company logo"
                  width={200}
                  height={44}
                  className="h-10 w-auto object-contain brightness-110 rounded-[10px]"
                />
              </div>
            </Link>

            <p className="text-sm font-semibold tracking-wider text-[#FA4C00] uppercase font-heading">
              EVERYTHING YOU NEED. ONE TREND AWAY.
            </p>

            <p className="text-sm text-mnt-muted leading-relaxed max-w-md">
              A comprehensive hyperlocal commerce ecosystem connecting customers, verified retail vendors, and independent riders for a smarter, faster shopping experience.
            </p>

            {/* Social Media Icons Underneath Description */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 flex-wrap">
                {FOOTER_LINKS.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 flex items-center justify-center social-icon-btn ${getSocialHoverClass(
                      social.icon
                    )}`}
                  >
                    {/* Subtle moving shine sweep across icon on hover */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* App Download Badges */}
            <div className="pt-2 flex items-center gap-3 flex-wrap">
              <Link
                href="/#download"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FA4C00]/50 hover:bg-white/[0.06] transition-all group"
              >
                <Smartphone className="w-4 h-4 text-[#FA4C00] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-mnt-muted uppercase font-medium leading-none">Get it on</span>
                  <span className="text-xs font-bold text-white leading-tight">Google Play</span>
                </div>
              </Link>
              <Link
                href="/#download"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FFBD59]/50 hover:bg-white/[0.06] transition-all group"
              >
                <Smartphone className="w-4 h-4 text-[#FFBD59] group-hover:scale-110 transition-transform" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] text-mnt-muted uppercase font-medium leading-none">Download on</span>
                  <span className="text-xs font-bold text-white leading-tight">App Store</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — For Business */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              For Business
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.forBusiness.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] uppercase text-white font-heading">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-mnt-muted hover:text-white transition-colors duration-200 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mnt-muted">
          {/* Copyright & Security Badges */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-center md:text-left">
            <p>© 2026 Multi New Trends. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#FA4C00]" /> 100% Secure Platform
            </span>
            <span className="hidden lg:inline text-white/20">•</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/70">
              Crafted with <Heart className="w-3.5 h-3.5 text-[#FA4C00] fill-[#FA4C00]" /> for shoppers &amp; partners
            </span>
          </div>

          {/* Developer Credit with Continuous #2DC0EB Cyan Glow & Light Shine */}
          <div className="flex items-center justify-center gap-1.5 text-center md:text-right shrink-0">
            <span className="text-mnt-muted">Developed By</span>
            <a
              href="https://www.abhivorn.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-credit-name font-semibold"
              aria-label="Developed By Abhivorn Technologies Pvt Ltd."
            >
              Abhivorn Technologies Pvt Ltd.
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
