"use client";

import React from "react";
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
import { Newsletter } from "@/components/sections/Newsletter";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { useGlobalScrollReveal } from "@/hooks/useScrollAnimation";

export default function Home() {
  // Activate global scroll observer for replayable animations on scroll entry & exit
  useGlobalScrollReveal();

  return (
    <div className="flex flex-col min-h-screen bg-mnt-black text-white relative">
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

        {/* 13: Newsletter */}
        <Newsletter />

        {/* 14: Strong Final CTA */}
        <FinalCTA />

        {/* 15: FAQ Section (Light #FAF4E6 theme) */}
        <FAQ />

        {/* 16: Contact Us Section (Dark #050505 theme) */}
        <ContactSection />
      </main>

      {/* 17: Footer */}
      <Footer />
    </div>
  );
}
