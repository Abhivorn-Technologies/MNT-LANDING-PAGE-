import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Categories } from "@/components/sections/Categories";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedDeals } from "@/components/sections/FeaturedDeals";
import { UserAppShowcase } from "@/components/sections/UserAppShowcase";
import { VendorSection } from "@/components/sections/VendorSection";
import { RiderSection } from "@/components/sections/RaiderSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { DownloadApp } from "@/components/sections/DownloadApp";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollObserver } from "@/components/ui/ScrollObserver";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
  description:
    "Discover groceries, electronics, fashion, home essentials and more with Multi New Trends. Explore products, local stores, deals and convenient shopping.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
    description:
      "Discover groceries, electronics, fashion, home essentials and more with Multi New Trends. Explore products, local stores, deals and convenient shopping.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Multi New Trends - Hyperlocal Multi-Category Shopping Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
    description:
      "Discover groceries, electronics, fashion, home essentials and more with Multi New Trends. Explore products, local stores, deals and convenient shopping.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-mnt-black text-white relative">
      {/* Client Scroll Animation Observer */}
      <ScrollObserver />

      {/* 01: Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Cinematic Hero */}
        <Hero />

        {/* 03: Three-App Ecosystem */}
        <Ecosystem />

        {/* 04: Shop by Category */}
        <Categories />

        {/* 05: How It Works */}
        <HowItWorks />

        {/* 06: Featured Deals (Promotional Orange Section) */}
        <FeaturedDeals />

        {/* 07: User App Showcase */}
        <UserAppShowcase />

        {/* 08: Vendor Section */}
        <VendorSection />

        {/* 09: Rider Section */}
        <RiderSection />

        {/* 10: Why Choose Multi New Trends */}
        <WhyChooseUs />

        {/* 11: Loved by Thousands (Testimonials) */}
        <Testimonials />

        {/* 12: Download App */}
        <DownloadApp />

        {/* 13: Strong Final CTA */}
        <FinalCTA />

        {/* 15: FAQ Section (Light #FAF4E6 theme) */}
        <FAQ />

        {/* 16: Contact Us Section (Dark #050505 theme) */}
        <ContactSection />
      </main>

      {/* Floating Scroll-to-Top Arrow */}
      <ScrollToTop />

      {/* 17: Footer */}
      <Footer />
    </div>
  );
}
