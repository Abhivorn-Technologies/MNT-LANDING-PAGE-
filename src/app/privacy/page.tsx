import React from "react";
import { Metadata } from "next";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, Lock, Eye, Database, Smartphone, UserCheck } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Multi New Trends",
  description:
    "Learn how Multi New Trends handles personal information, privacy, data usage and user choices.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Multi New Trends",
    description:
      "Learn how Multi New Trends handles personal information, privacy, data usage and user choices.",
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Multi New Trends - Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Multi New Trends",
    description:
      "Learn how Multi New Trends handles personal information, privacy, data usage and user choices.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

const privacyTocItems: TocItem[] = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We May Collect" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "communications", title: "Communications" },
  { id: "cookies-technologies", title: "Cookies and Similar Technologies" },
  { id: "how-we-share-information", title: "How We Share Information" },
  { id: "vendor-delivery-access", title: "Vendor and Delivery Partner Access" },
  { id: "payment-information", title: "Payment Information" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "privacy-choices", title: "Your Privacy Choices" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "third-party-websites", title: "Third-Party Websites and Services" },
  { id: "changes-to-privacy-policy", title: "Changes to This Privacy Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Learn how Multi New Trends collects, uses and protects information."
      effectiveDate="September 21, 2026"
      lastUpdated="September 21, 2026"
      tocItems={privacyTocItems}
    >
      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Introduction
          </h2>
        </div>
        <p className="text-base">
          Multi New Trends respects your privacy and is committed to protecting information associated
          with your use of our website, applications, and services.
        </p>
        <p>
          This Privacy Policy explains what information may be collected, how it may be used, how it
          may be shared, and the choices available to you.
        </p>
      </section>

      {/* 2. Information We May Collect */}
      <section id="information-we-collect" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Information We May Collect
          </h2>
        </div>
        <p>
          Depending on how you use Multi New Trends, we may collect information such as:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Personal Information */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <UserCheck className="w-4 h-4 text-[#FA4C00]" />
              <h4>Personal Information</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Name",
                "Mobile number",
                "Email address",
                "Delivery address",
                "Billing information",
                "Account information",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Information */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <Database className="w-4 h-4 text-[#FA4C00]" />
              <h4>Order Information</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Products purchased",
                "Order history",
                "Delivery information",
                "Transaction status",
                "Refund information",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Device Information */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <Smartphone className="w-4 h-4 text-[#FA4C00]" />
              <h4>Device Information</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Device type",
                "Operating system",
                "Browser type",
                "IP address",
                "App version",
                "Device identifiers where applicable",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Information */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <MapPin className="w-4 h-4 text-[#FA4C00]" />
              <h4>Location Information</h4>
            </div>
            <p className="text-[11px] text-[#666666] leading-snug">
              Where you enable location services, we may use location information to:
            </p>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Finding nearby stores",
                "Estimating delivery availability",
                "Providing delivery tracking",
                "Improving location-based services",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. How We Use Information */}
      <section id="how-we-use-information" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            How We Use Information
          </h2>
        </div>
        <p>Information may be used to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-2">
          {[
            "Create and manage your account",
            "Process orders",
            "Provide deliveries",
            "Process payments",
            "Provide customer support",
            "Send order notifications",
            "Provide relevant offers and promotions",
            "Improve products and services",
            "Detect and prevent fraud",
            "Maintain platform security",
            "Analyze platform performance",
            "Comply with legal obligations",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
              <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Communications */}
      <section id="communications" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Communications
          </h2>
        </div>
        <p>We may contact you regarding:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Orders",
            "Deliveries",
            "Payments",
            "Account activity",
            "Security notifications",
            "Customer support requests",
            "Important service updates",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">
          Where permitted, we may also send promotional communications.
        </p>
      </section>

      {/* 5. Cookies and Similar Technologies */}
      <section id="cookies-technologies" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Cookies and Similar Technologies
          </h2>
        </div>
        <p>Our website may use cookies and similar technologies to:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Keep the website functioning",
            "Remember preferences",
            "Understand website usage",
            "Improve performance",
            "Measure marketing effectiveness",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="pt-2">
          Users may be able to control cookies through browser settings.
        </p>
      </section>

      {/* 6. How We Share Information */}
      <section id="how-we-share-information" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            How We Share Information
          </h2>
        </div>
        <p>
          We may share information with service providers where necessary to operate our services.
        </p>
        <p>These may include:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-2">
          {[
            "Vendors",
            "Delivery partners",
            "Payment processors",
            "Cloud hosting providers",
            "Analytics providers",
            "Customer support providers",
            "Technology service providers",
          ].map((partner, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] text-xs font-medium text-center text-[#111111]">
              {partner}
            </div>
          ))}
        </div>
        <p className="pt-2">
          We may also disclose information where required by applicable law or legal process.
        </p>
      </section>

      {/* 7. Vendor and Delivery Partner Access */}
      <section id="vendor-delivery-access" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Vendor and Delivery Partner Access
          </h2>
        </div>
        <p>
          When an order requires fulfillment or delivery, relevant information may be shared with the applicable vendor or delivery partner.
        </p>
        <p>Information may include:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Customer name",
            "Delivery address",
            "Contact information",
            "Order details",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] text-xs text-[#555555]">
          Only information reasonably necessary for the relevant service should be shared.
        </div>
      </section>

      {/* 8. Payment Information */}
      <section id="payment-information" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Payment Information
          </h2>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9]">
          <Lock className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm text-[#444444]">
            <p>
              Payments may be processed by third-party payment providers.
            </p>
            <p>
              Payment information may be handled directly by the applicable payment provider.
            </p>
            <p>
              We do not intend to collect or store sensitive payment credentials unless specifically disclosed and permitted.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Data Security */}
      <section id="data-security" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Data Security
          </h2>
        </div>
        <p>
          We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <p>
          However, no internet-based system can be guaranteed to be completely secure.
        </p>
      </section>

      {/* 10. Data Retention */}
      <section id="data-retention" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Data Retention
          </h2>
        </div>
        <p>We may retain information for as long as reasonably necessary to:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Provide our services",
            "Maintain business and transaction records",
            "Resolve disputes",
            "Prevent fraud",
            "Meet legal obligations",
            "Enforce agreements",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. Your Privacy Choices */}
      <section id="privacy-choices" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Your Privacy Choices
          </h2>
        </div>
        <p>
          Depending on applicable law, you may have rights regarding your personal information, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
          {[
            "Requesting access to certain information",
            "Requesting correction of inaccurate information",
            "Requesting deletion where legally applicable",
            "Managing certain communications",
            "Managing device permissions",
            "Withdrawing certain permissions where applicable",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-[#444444]">
              <Eye className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="pt-2">
          Requests may be subject to identity verification and applicable legal requirements.
        </p>
      </section>

      {/* 12. Children's Privacy */}
      <section id="childrens-privacy" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Children&apos;s Privacy
          </h2>
        </div>
        <p>
          Our services are not intended to knowingly collect personal information from children in circumstances where parental consent is legally required.
        </p>
        <p>
          If you believe a child has provided personal information inappropriately, please contact us.
        </p>
      </section>

      {/* 13. Third-Party Websites and Services */}
      <section id="third-party-websites" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Third-Party Websites and Services
          </h2>
        </div>
        <p>
          Our platform may contain links or integrations to third-party websites, applications, or services.
        </p>
        <p>
          We are not responsible for the privacy practices of third-party services.
        </p>
        <p>
          Users should review their respective privacy policies.
        </p>
      </section>

      {/* 14. Changes to This Privacy Policy */}
      <section id="changes-to-privacy-policy" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Changes to This Privacy Policy
          </h2>
        </div>
        <p>
          We may update this Privacy Policy periodically.
        </p>
        <p>
          When changes are made, the updated version will be published on this page with a revised Last Updated date.
        </p>
      </section>

      {/* 15. Contact Us */}
      <section id="contact-us" className="scroll-mt-28 space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Contact Us
          </h2>
        </div>
        <p>
          If you have questions about this Privacy Policy or your personal information, please contact us:
        </p>

        <div className="rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] p-6 space-y-4">
          <h3 className="text-base font-bold font-heading text-[#111111]">
            Multi New Trends
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DFC9]">
              <Mail className="w-4 h-4 text-[#FA4C00] shrink-0" />
              <div>
                <span className="text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Email</span>
                <a href="mailto:support@multinewtrends.com" className="font-semibold text-[#111111] hover:text-[#FA4C00] transition-colors">
                  support@multinewtrends.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DFC9]">
              <Phone className="w-4 h-4 text-[#FA4C00] shrink-0" />
              <div>
                <span className="text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Phone</span>
                <a
                  href="tel:+919992125566"
                  className="font-semibold text-[#111111] hover:text-[#FA4C00] transition-colors block"
                >
                  +91 9992125566
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DFC9]">
              <MapPin className="w-4 h-4 text-[#FA4C00] shrink-0" />
              <div>
                <span className="text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Location</span>
                <span className="font-semibold text-[#111111] block">India</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#777777] italic pt-1">
            * These are draft contact details for legal review and will be updated with final registered entity information.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
