"use client";

import React from "react";
import Link from "next/link";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Eye,
  Database,
  Smartphone,
  UserCheck,
  Sliders,
  AlertTriangle,
  RotateCcw,
  FileText,
  UserX,
  CreditCard,
  Scale,
  ExternalLink,
  Languages,
} from "lucide-react";
import { openCookiePreferences } from "@/lib/cookieConsent";
import { siteConfig } from "@/lib/siteConfig";

const privacyTocItems: TocItem[] = [
  { id: "fiduciary-introduction", title: "1. Introduction & Data Fiduciary Role" },
  { id: "itemized-data-collection", title: "2. Itemized Personal Data Collected" },
  { id: "processing-purposes", title: "3. Purposes & Legal Grounds of Processing" },
  { id: "consent-and-withdrawal", title: "4. Consent Management & Withdrawal" },
  { id: "cookies-tracking", title: "5. Cookies & Tracking Technologies" },
  { id: "third-party-sharing", title: "6. Data Processors & Third-Party Sharing" },
  { id: "vendor-rider-access", title: "7. Vendor & Rider Data Access" },
  { id: "payment-data", title: "8. Payment Security & Financial Data" },
  { id: "data-security", title: "9. Technical & Organizational Safeguards" },
  { id: "retention-deletion", title: "10. Data Retention, Storage & Erasure" },
  { id: "data-principal-rights", title: "11. Rights of Data Principals (DPDP Act)" },
  { id: "children-data", title: "12. Protection of Children & Minors" },
  { id: "cross-border-transfers", title: "13. Storage Location & Cross-Border Transfers" },
  { id: "grievance-redressal", title: "14. Grievance Redressal & DPBI Escalation" },
  { id: "policy-updates", title: "15. Policy Updates & Multilingual Notice" },
  { id: "contact-us", title: "16. Privacy Contact Details" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Comprehensive privacy notice explaining how Multi New Trends collects, processes, protects, and handles personal data under India's Digital Personal Data Protection (DPDP) Act, 2023 and DPDP Rules, 2025."
      effectiveDate="September 21, 2026"
      lastUpdated="October 19, 2026"
      tocItems={privacyTocItems}
    >
      {/* 1. Introduction & Data Fiduciary Role */}
      <section id="fiduciary-introduction" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Introduction &amp; Data Fiduciary Role
          </h2>
        </div>
        <p className="text-base text-[#444444]">
          Multi New Trends (&quot;MNT&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a hyperlocal multi-category shopping ecosystem connecting consumers with local retail vendors and independent delivery partners (&quot;Riders&quot;).
        </p>
        <p className="text-sm text-[#555555]">
          Under the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and the notified <strong>Digital Personal Data Protection Rules, 2025</strong>, Multi New Trends acts as a <strong>Data Fiduciary</strong> in determining the purpose and means of processing personal data collected through our website (<code className="text-[#111111] font-mono">multinewtrends.com</code>), customer applications, vendor merchant portals, and rider mobile applications.
        </p>
        <p className="text-sm text-[#555555]">
          This Privacy Policy provides an itemized notice of personal data processing, explains our lawful grounds, outlines how third-party data processors operate, and details your statutory rights as a Data Principal under Indian law.
        </p>
      </section>

      {/* 2. Itemized Personal Data Collected */}
      <section id="itemized-data-collection" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Itemized Personal Data Collected
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          In adherence to the principle of <strong>data minimisation</strong> (Section 4 and Section 5 of the DPDP Act), we collect only personal data that is reasonably necessary to provide requested shopping, order fulfillment, delivery, customer support, and account security services:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Account Profile Data */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <UserCheck className="w-4 h-4 text-[#FA4C00]" />
              <h4>Account &amp; Identity Details</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Full Name",
                "Mobile Phone Number (primary account identifier)",
                "Email Address",
                "Password hashes or cryptographic authentication tokens",
                "Profile preferences and saved preferences",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery & Hyperlocal Address Data */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <MapPin className="w-4 h-4 text-[#FA4C00]" />
              <h4>Delivery &amp; Location Details</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Saved delivery addresses (house/flat, street, landmark, PIN code)",
                "Precise GPS coordinates (with device permission for delivery pin)",
                "Hyperlocal vendor distance estimations",
                "Rider transit location (during active delivery only)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Order & Transaction Details */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <Database className="w-4 h-4 text-[#FA4C00]" />
              <h4>Order &amp; Transaction Details</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Ordered items, item quantities, and pricing breakdown",
                "Order status history (confirmed, preparing, out for delivery)",
                "GST invoices and fiscal transaction identifiers",
                "Payment status (success, pending, failed; via payment gateway)",
                "Cancellation, refund, and replacement requests",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Device & Technical Data */}
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <Smartphone className="w-4 h-4 text-[#FA4C00]" />
              <h4>Device &amp; Diagnostic Details</h4>
            </div>
            <ul className="space-y-1.5 text-xs text-[#555555]">
              {[
                "Device model and operating system version",
                "Browser user-agent and language preference",
                "Internet Protocol (IP) address for fraud detection",
                "App version and crash diagnostics",
                "Essential session identifiers and cookie consent state",
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

      {/* 3. Purposes & Legal Grounds of Processing */}
      <section id="processing-purposes" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Purposes &amp; Legal Grounds of Processing
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Under the DPDP Act, personal data may only be processed on the basis of <strong>explicit consent</strong> (Section 6) or for specified <strong>legitimate uses</strong> (Section 7). Below is an itemized mapping:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-[#E8DFC9] rounded-xl overflow-hidden">
            <thead className="bg-[#FAF4E6] text-[#111111] font-heading font-bold border-b border-[#E8DFC9]">
              <tr>
                <th className="p-3">Category of Personal Data</th>
                <th className="p-3">Specific Purpose of Processing</th>
                <th className="p-3">Legal Basis (DPDP Act, 2023)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFC9] text-[#555555]">
              <tr>
                <td className="p-3 font-semibold text-[#111111]">Name &amp; Mobile Number</td>
                <td className="p-3">Account creation, OTP verification, service notifications, customer support.</td>
                <td className="p-3">Consent (Sec 6) &amp; Fulfilling goods/services requested (Sec 7(b))</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#111111]">Delivery Address &amp; GPS Location</td>
                <td className="p-3">Routing orders to nearest vendor, dispatching assigned Rider, order delivery.</td>
                <td className="p-3">Consent (Sec 6) &amp; Fulfilling requested delivery (Sec 7(b))</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#111111]">Order &amp; Billing Records</td>
                <td className="p-3">Generating GST invoices, reconciling vendor payouts, audit compliance.</td>
                <td className="p-3">Compliance with Indian laws (Sec 7(a), GST Act &amp; Companies Act)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#111111]">Customer Support &amp; Chat</td>
                <td className="p-3">Grievance redressal, resolving delivery or product disputes.</td>
                <td className="p-3">Consent (Sec 6) &amp; Consumer Protection Grievance Rules</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-[#111111]">IP Address &amp; Device Tokens</td>
                <td className="p-3">Platform security, fraud detection, preventing abusive multi-account exploits.</td>
                <td className="p-3">Reasonable security safeguards (Sec 8(5))</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Consent Management & Withdrawal */}
      <section id="consent-and-withdrawal" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Consent Management &amp; Right to Withdraw Consent
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Pursuant to Section 6 of the DPDP Act and Rule 4 of the DPDP Rules, 2025:
        </p>
        <ul className="space-y-2.5 pl-2 text-sm text-[#444444]">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Clear &amp; Unbundled:</strong> Consent is requested for specific, informed purposes and is not bundled with unrelated service terms.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Ease of Withdrawal (Sec 6(4)):</strong> You have the right to withdraw your consent as easily as you provided it. You may withdraw consent through in-app privacy settings, by visiting our <Link href="/delete-account" className="text-[#FA4C00] underline font-semibold">Delete Account Policy</Link>, or by emailing our Grievance Officer at <a href="mailto:support@multinewtrends.com" className="text-[#FA4C00] font-semibold underline">support@multinewtrends.com</a>.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Consequences of Withdrawal:</strong> If you withdraw consent for essential data (e.g. mobile number or address), Multi New Trends may no longer be able to provide account features, process shopping orders, or execute doorstep deliveries.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Registered Consent Managers:</strong> When interoperable Consent Managers registered under the DPDP Rules become active, you will also be able to review, manage, or withdraw consent through certified Consent Manager platforms.</span>
          </li>
        </ul>
      </section>

      {/* 5. Cookies & Tracking Technologies */}
      <section id="cookies-tracking" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Cookies &amp; Similar Technologies
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Multi New Trends respects your browser choices. We categorize web technologies into:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9]">
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-sm text-[#111111]">Strictly Necessary Technologies</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Always Active</span>
            </div>
            <p className="text-xs text-[#666666] mt-1 leading-relaxed">
              Essential for secure site rendering, page navigation, and recording your cookie preferences. These do not track personal identities.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9]">
            <div className="flex items-center justify-between">
              <span className="font-heading font-bold text-sm text-[#111111]">Optional Analytics &amp; Marketing</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Requires Prior Consent</span>
            </div>
            <p className="text-xs text-[#666666] mt-1 leading-relaxed">
              <strong>Actual Website Implementation:</strong> Currently, Multi New Trends does <em>not</em> run third-party advertising cookies or cross-site behavioral trackers on this website. Optional categories remain blocked by default unless you explicitly opt in.
            </p>
          </div>
        </div>

        {/* Real Interactive Trigger for Cookie Preferences Modal */}
        <div className="pt-2 flex items-center gap-3">
          <button
            type="button"
            onClick={() => openCookiePreferences()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8DFC9] text-xs font-bold text-[#FA4C00] hover:bg-[#FAF4E6] hover:border-[#FA4C00]/50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA4C00]/40"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Open Cookie Preferences Interface</span>
          </button>
          <span className="text-xs text-[#777777]">You can modify your preferences at any time.</span>
        </div>
      </section>

      {/* 6. Data Processors & Third-Party Sharing */}
      <section id="third-party-sharing" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Data Processors &amp; Third-Party Sharing
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Multi New Trends does <strong>not sell, lease, or rent</strong> your personal data to third-party data brokers or marketing firms. We share data only with validated <strong>Data Processors</strong> engaged under binding contracts pursuant to Section 8(2) of the DPDP Act:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9] space-y-1">
            <span className="font-bold text-[#111111] block">Retail Vendors</span>
            <p className="text-[#666666]">Receive order items and recipient name for packing and dispatch preparation.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9] space-y-1">
            <span className="font-bold text-[#111111] block">Delivery Partners (Riders)</span>
            <p className="text-[#666666]">Receive destination coordinates and temporary phone masking for physical delivery.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9] space-y-1">
            <span className="font-bold text-[#111111] block">Payment Aggregators</span>
            <p className="text-[#666666]">Licensed payment gateways that securely authorize digital transactions.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-[#E8DFC9] space-y-1">
            <span className="font-bold text-[#111111] block">Cloud &amp; SMS Providers</span>
            <p className="text-[#666666]">Indian cloud hosting facilities and TRAI-compliant transactional SMS gateways.</p>
          </div>
        </div>

        <p className="text-xs text-[#666666] pt-1">
          We may also disclose personal data to law enforcement agencies or regulatory bodies where mandated by applicable Indian laws, judicial orders, or search warrants under Section 7(a) of the DPDP Act.
        </p>
      </section>

      {/* 7. Vendor & Rider Data Access */}
      <section id="vendor-rider-access" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Vendor and Delivery Partner (Rider) Access
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Because Multi New Trends operates as a three-sided hyperlocal commerce marketplace, access to customer information is strictly regulated:
        </p>
        <ul className="space-y-2 pl-2 text-xs text-[#555555]">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
            <span>Vendors and Riders are bound by partner agreements prohibiting the misuse, copying, or storage of customer personal data for personal or external commercial purposes.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
            <span>Riders receive delivery address information exclusively while an order is in an active delivery state. Upon delivery confirmation, transit access is closed.</span>
          </li>
        </ul>
      </section>

      {/* 8. Payment Security & Financial Data */}
      <section id="payment-data" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Payment Security &amp; Financial Information
          </h2>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9]">
          <CreditCard className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-sm text-[#444444]">
            <p>
              Digital payments on Multi New Trends are facilitated directly through RBI-authorized payment aggregators conforming to the <strong>Payment Card Industry Data Security Standard (PCI-DSS)</strong>.
            </p>
            <p className="text-xs text-[#666666]">
              Multi New Trends does <em>not</em> store your full payment card number, CVV code, or banking PINs on its application servers.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Technical & Organizational Safeguards */}
      <section id="data-security" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Technical &amp; Organizational Safeguards
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Pursuant to Section 8(5) of the DPDP Act, we implement reasonable security safeguards to protect personal data from unauthorized disclosure, destruction, or breach. Measures include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#555555] pl-1">
          <div className="p-3 rounded-lg bg-white border border-[#E8DFC9]">
            <strong>Encryption in Transit:</strong> HTTPS / TLS 1.2+ encryption for all browser and API requests.
          </div>
          <div className="p-3 rounded-lg bg-white border border-[#E8DFC9]">
            <strong>Access Control:</strong> Role-based access privileges restricted to authorized personnel.
          </div>
          <div className="p-3 rounded-lg bg-white border border-[#E8DFC9]">
            <strong>Authentication Security:</strong> Secure OTP-based authentication and token validation.
          </div>
          <div className="p-3 rounded-lg bg-white border border-[#E8DFC9]">
            <strong>Security Page:</strong> Read our detailed <Link href="/security" className="text-[#FA4C00] font-semibold underline">Security Policy</Link> for technical safeguards and vulnerability reporting.
          </div>
        </div>
      </section>

      {/* 10. Data Retention, Storage & Erasure */}
      <section id="retention-deletion" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Data Retention, Storage &amp; Erasure
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Under Section 8(7) of the DPDP Act, personal data is retained only for as long as necessary to satisfy the purpose for which it was collected, or as mandated by statutory Indian regulations:
        </p>
        <ul className="space-y-2 pl-2 text-xs text-[#555555]">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
            <span><strong>Active Account Life:</strong> Profile data is retained while your account remains active.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
            <span><strong>Statutory Record Keeping:</strong> Commercial tax invoices and transaction records are retained for mandatory statutory periods (up to 8 years) under the Goods and Services Tax (GST) Act and the Companies Act, 2013.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
            <span><strong>Account Deletion:</strong> Upon receiving a validated deletion request, personal profile data is erased or irreversibly anonymized in accordance with our <Link href="/delete-account" className="text-[#FA4C00] font-semibold underline">Delete Account Policy</Link>.</span>
          </li>
        </ul>
      </section>

      {/* 11. Rights of Data Principals (DPDP Act) */}
      <section id="data-principal-rights" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Rights of Data Principals under DPDP Act, 2023
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          As a Data Principal under Indian law, you are entitled to exercise the following statutory rights:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#555555]">
          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1">
            <span className="font-heading font-bold text-[#111111] block">1. Right to Access Information (Sec 11)</span>
            <p>You may request a summary of personal data being processed and the identities of all Data Fiduciaries/Processors with whom it has been shared.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1">
            <span className="font-heading font-bold text-[#111111] block">2. Right to Correction &amp; Completion (Sec 12)</span>
            <p>You may request the correction of inaccurate personal data or completion of incomplete profile information directly through app settings or support.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1">
            <span className="font-heading font-bold text-[#111111] block">3. Right to Erasure (Sec 12)</span>
            <p>You may request erasure of personal data that is no longer required for the purpose for which it was collected, subject to statutory retention obligations.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1">
            <span className="font-heading font-bold text-[#111111] block">4. Right to Nominate (Sec 14)</span>
            <p>You have the right to nominate an individual who shall, in the event of death or incapacity, exercise your data rights under the DPDP Act.</p>
          </div>
        </div>

        <p className="text-xs text-[#666666] pt-1">
          To exercise any of these rights, email your request to <a href="mailto:support@multinewtrends.com" className="text-[#FA4C00] font-semibold underline">support@multinewtrends.com</a>. Identity verification may be required to protect against unauthorized disclosures.
        </p>
      </section>

      {/* 12. Protection of Children & Minors */}
      <section id="children-data" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Protection of Children &amp; Minors
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Under Section 9 of the DPDP Act and Rule 10 of the DPDP Rules, 2025, a child is defined as an individual who has not completed 18 years of age.
        </p>
        <div className="p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-2 text-xs text-[#555555]">
          <p>
            <strong>Eligibility Requirement:</strong> The Multi New Trends shopping platform and applications are intended for individuals who can enter into legally binding contracts in India (age 18 and above). We do not knowingly permit account creation by unaccompanied minors.
          </p>
          <p>
            <strong>Statutory Safeguards:</strong> In strict compliance with Section 9(2) and Section 9(3) of the DPDP Act:
          </p>
          <ul className="space-y-1.5 pl-3 list-disc">
            <li>We do not process personal data that is likely to cause any detrimental effect on the well-being of a child.</li>
            <li>We strictly prohibit tracking, behavioral monitoring, or targeted advertisements directed at children.</li>
          </ul>
        </div>
      </section>

      {/* 13. Storage Location & Cross-Border Transfers */}
      <section id="cross-border-transfers" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Storage Location &amp; Cross-Border Transfers
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          All primary customer databases, order ledgers, and transaction stores are physically hosted in secure cloud data centers located within <strong>India</strong>.
        </p>
        <p className="text-xs text-[#666666]">
          Under Section 16 of the DPDP Act, personal data may only be transferred outside India in compliance with rules, restrictions, or bilateral arrangements notified by the Central Government of India.
        </p>
      </section>

      {/* 14. Grievance Redressal & DPBI Escalation */}
      <section id="grievance-redressal" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Grievance Redressal &amp; DPBI Escalation
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          In adherence to Section 8(10) and Section 13 of the DPDP Act, Multi New Trends maintains an accessible grievance redressal mechanism:
        </p>

        <div className="p-5 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-3">
          <div className="flex items-center gap-2.5 font-bold text-[#111111] text-sm font-heading">
            <Scale className="w-4 h-4 text-[#FA4C00]" />
            <h3>Grievance Handling Process &amp; Timelines</h3>
          </div>
          <div className="space-y-2 text-xs text-[#555555]">
            <p>
              <strong>1. Filing a Grievance:</strong> You may file a privacy or data-related grievance by emailing <strong>support@multinewtrends.com</strong> with the subject <em>&quot;Privacy Grievance — DPDP Act&quot;</em>.
            </p>
            <p>
              <strong>2. Acknowledgment:</strong> We will acknowledge your grievance within <strong>48 hours</strong> with a unique tracking identifier.
            </p>
            <p>
              <strong>3. Redressal Period:</strong> We endeavor to resolve all privacy grievances within <strong>30 calendar days</strong> from receipt.
            </p>
            <p className="pt-2 border-t border-[#E8DFC9] text-[#444444]">
              <strong>4. Escalation to the Data Protection Board of India (DPBI):</strong> If you are dissatisfied with our response or if your grievance is not redressed within the statutory timeframe, you have the statutory right under Section 13(3) of the DPDP Act to submit a complaint directly to the <strong>Data Protection Board of India</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 15. Policy Updates & Multilingual Notice */}
      <section id="policy-updates" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Policy Updates &amp; Multilingual Notice
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          We may update this Privacy Policy from time to time to reflect operational, technological, or regulatory developments under the DPDP Rules. When revisions are published, the &quot;Last Updated&quot; date at the top of this notice will be amended.
        </p>
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8DFC9] text-xs text-[#555555]">
          <Languages className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
          <p>
            <strong>Multilingual Notice Accessibility:</strong> Pursuant to Section 5(3) of the DPDP Act, Data Principals are entitled to access this privacy notice in English or any of the 22 languages specified in the Eighth Schedule to the Constitution of India. If you require this notice in an Eighth Schedule language, please contact our Grievance Officer.
          </p>
        </div>
      </section>

      {/* 16. Privacy Contact Details */}
      <section id="contact-us" className="scroll-mt-28 space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Privacy &amp; Grievance Contact
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          For any questions, personal data access or erasure requests, or grievances, please reach out to our designated privacy contact:
        </p>

        <div className="rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] p-6 space-y-4">
          <h3 className="text-base font-bold font-heading text-[#111111]">
            Multi New Trends — Grievance Redressal Office
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm">
            <div className="flex items-start sm:items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFC9] min-w-0 overflow-hidden shadow-sm">
              <Mail className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5 sm:mt-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Email</span>
                <a
                  href="mailto:support@multinewtrends.com"
                  className="text-xs sm:text-[12px] xl:text-[13px] font-semibold text-[#111111] hover:text-[#FA4C00] transition-colors block break-all [overflow-wrap:anywhere]"
                  title="support@multinewtrends.com"
                >
                  support@multinewtrends.com
                </a>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFC9] min-w-0 overflow-hidden shadow-sm">
              <Phone className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5 sm:mt-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Phone</span>
                <a
                  href="tel:+919992125566"
                  className="text-xs sm:text-[12px] xl:text-[13px] font-semibold text-[#111111] hover:text-[#FA4C00] transition-colors block truncate"
                >
                  +91 9992125566
                </a>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E8DFC9] min-w-0 overflow-hidden shadow-sm">
              <MapPin className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5 sm:mt-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] sm:text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Location</span>
                <span className="text-xs sm:text-[12px] xl:text-[13px] font-semibold text-[#111111] block truncate">India</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#777777] italic pt-1">
            * Grievance inquiries are acknowledged within 48 hours. Related policies: <Link href="/terms" className="text-[#FA4C00] underline font-semibold">Terms &amp; Conditions</Link>, <Link href="/security" className="text-[#FA4C00] underline font-semibold">Security Policy</Link>, and <Link href="/delete-account" className="text-[#FA4C00] underline font-semibold">Delete Account Policy</Link>.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
