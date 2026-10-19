import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  CreditCard,
  Server,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  FileText,
  Users,
  EyeOff,
  BellRing,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Security | Multi New Trends",
  description:
    "Learn about Multi New Trends security measures, authentication safeguards, payment handling, and responsible disclosure practices.",
  alternates: {
    canonical: `${siteConfig.url}/security`,
  },
  openGraph: {
    title: "Security | Multi New Trends",
    description:
      "Learn about Multi New Trends security measures, authentication safeguards, payment handling, and responsible disclosure practices.",
    url: `${siteConfig.url}/security`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Multi New Trends - Security Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security | Multi New Trends",
    description:
      "Learn about Multi New Trends security measures, authentication safeguards, payment handling, and responsible disclosure practices.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

const securityTocItems: TocItem[] = [
  { id: "security-overview", title: "Security Overview" },
  { id: "account-authentication", title: "Account & Authentication Safeguards" },
  { id: "transmission-encryption", title: "Secure Data Transmission" },
  { id: "ecosystem-segregation", title: "Ecosystem Access & Data Segregation" },
  { id: "payment-security", title: "Payment Security & Partner Roles" },
  { id: "storage-protection", title: "Data Storage & Retention Controls" },
  { id: "vulnerability-disclosure", title: "Responsible Vulnerability Disclosure" },
  { id: "incident-management", title: "Incident Response & Breach Protocols" },
  { id: "user-recommendations", title: "Security Best Practices for Users" },
  { id: "security-contact", title: "Security & Grievance Contact" },
];

export default function SecurityPage() {
  return (
    <LegalPageLayout
      title="Security Overview"
      subtitle="How Multi New Trends implements reasonable safeguards to protect accounts, platform communications, and customer data."
      effectiveDate="September 21, 2026"
      lastUpdated="October 19, 2026"
      tocItems={securityTocItems}
    >
      {/* 1. Security Overview */}
      <section id="security-overview" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Security Overview
          </h2>
        </div>
        <p className="text-base text-[#444444]">
          At Multi New Trends, we take the security of our hyperlocal marketplace, user accounts, and personal data seriously. In accordance with India&apos;s Digital Personal Data Protection (DPDP) Act, 2023, the Information Technology Act, 2000, and applicable cybersecurity guidelines, we implement reasonable technical and organizational measures designed to protect information from unauthorized access, loss, alteration, or misuse.
        </p>
        <p className="text-sm text-[#555555]">
          This document describes the verifiable safeguards deployed across our web platform and mobile applications, the role of certified third-party service providers, and our procedures for managing security incidents and vulnerability reports.
        </p>
      </section>

      {/* 2. Account & Authentication Safeguards */}
      <section id="account-authentication" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Account &amp; Authentication Safeguards
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          User accounts for customers, vendors, and delivery partners are secured through role-specific authentication controls:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <KeyRound className="w-4 h-4 text-[#FA4C00]" />
              <h4>One-Time Password (OTP) Verification</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Mobile phone number verification utilizes time-limited, cryptographically randomized OTPs delivered via authorized SMS gateways. OTPs expire quickly and are invalidated upon single use.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <Lock className="w-4 h-4 text-[#FA4C00]" />
              <h4>Session Management</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Active sessions utilize short-lived, signed tokens with automatic expiry. Sessions can be terminated remotely, and authentication tokens are invalidated upon password changes or account deletion requests.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <ShieldCheck className="w-4 h-4 text-[#FA4C00]" />
              <h4>Credential Hashing</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Where user passwords or secrets exist, they are stored using salted cryptographic one-way hashing algorithms. We never store or transmit plaintext credentials.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm font-heading">
              <EyeOff className="w-4 h-4 text-[#FA4C00]" />
              <h4>Brute-Force &amp; Rate Limiting</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Sensitive endpoints—including login, OTP request, and checkout—are protected by automated rate limits to prevent credential-stuffing and automated script abuses.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Secure Data Transmission */}
      <section id="transmission-encryption" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Secure Data Transmission
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          All communications between your web browser or mobile application and our backend endpoints are encrypted in transit:
        </p>
        <div className="space-y-2.5 pl-2">
          {[
            "Strict Transport Security (HTTPS): Enforced across all domains using TLS 1.2 and TLS 1.3 with modern, secure cipher suites.",
            "Certificate Management: Automated renewal of cryptographic certificates signed by reputable, globally trusted Certificate Authorities.",
            "API Authentication: API requests between client applications and platform servers require validated authorization headers.",
            "Cookie Security: Essential session cookies utilize Secure, HttpOnly, and SameSite flags to defend against Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
              <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ecosystem Access & Data Segregation */}
      <section id="ecosystem-segregation" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Ecosystem Access &amp; Data Segregation
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Multi New Trends operates as a multi-party hyperlocal ecosystem involving Customers, Retail Vendors, and Delivery Partners (Riders). Access control is architected on the principle of least privilege:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA4C00] block">Customer Privacy</span>
            <h4 className="font-heading font-semibold text-sm text-[#111111]">Controlled Disclosure</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Vendors only receive item details, order IDs, and delivery names required to prepare orders. Riders only receive destination coordinates and masked contact details needed for dispatch.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA4C00] block">Vendor Portal</span>
            <h4 className="font-heading font-semibold text-sm text-[#111111]">Merchant Isolation</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Each vendor&apos;s product inventory, payout history, bank accounts, and customer communications are strictly isolated from other merchant accounts.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FA4C00] block">Rider Fleet</span>
            <h4 className="font-heading font-semibold text-sm text-[#111111]">Active Order Access</h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              Delivery partners have access to delivery addresses solely during active assignment. Once the order status is completed, address access is revoked.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Payment Security & Partner Roles */}
      <section id="payment-security" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Payment Security &amp; Partner Roles
          </h2>
        </div>
        <div className="p-5 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-3">
          <div className="flex items-center gap-2.5 font-bold text-[#111111] text-base font-heading">
            <CreditCard className="w-5 h-5 text-[#FA4C00]" />
            <h3>RBI-Authorized Payment Aggregators</h3>
          </div>
          <p className="text-sm text-[#555555] leading-relaxed">
            Multi New Trends integrates with licensed, Reserve Bank of India (RBI) regulated third-party payment aggregators to process digital payments including UPI, Net Banking, Debit/Credit Cards, and Digital Wallets.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#555555]">
            <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E8DFC9]">
              <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
              <span><strong>Zero Card Storage:</strong> Multi New Trends servers never receive, process, or store unmasked debit/credit card numbers or CVV codes.</span>
            </div>
            <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-[#E8DFC9]">
              <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
              <span><strong>PCI-DSS Compliance:</strong> Payment processing is governed by the certified Level 1 PCI-DSS infrastructure of our integrated payment partners.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Data Storage & Retention Controls */}
      <section id="storage-protection" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Data Storage &amp; Retention Controls
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          In compliance with the Digital Personal Data Protection Act, 2023, personal data is processed exclusively for specified, lawful purposes and stored within secure database environments:
        </p>
        <ul className="space-y-2 pl-2 text-sm text-[#444444]">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2" />
            <span><strong>Geographic Storage:</strong> Primary platform databases and hosting services are hosted in enterprise data centers located within India.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2" />
            <span><strong>Purpose Limitation:</strong> We do not retain personal information longer than required to fulfill your orders, provide customer support, and meet legal and statutory obligations (such as tax and accounting record-keeping).</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2" />
            <span><strong>Secure Erasure:</strong> When an account is deleted or when the retention period expires, personal data is permanently scrubbed or anonymized in accordance with our <Link href="/delete-account" className="text-[#FA4C00] hover:underline font-semibold">Delete Account Policy</Link>.</span>
          </li>
        </ul>
      </section>

      {/* 7. Responsible Vulnerability Disclosure */}
      <section id="vulnerability-disclosure" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Responsible Vulnerability Disclosure
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          We welcome collaboration with ethical security researchers, penetration testers, and community members to protect our ecosystem. If you believe you have discovered a potential vulnerability, we ask that you adhere to our responsible disclosure policy:
        </p>

        <div className="p-4 rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] space-y-3">
          <h4 className="font-heading font-bold text-sm text-[#111111]">Disclosure Guidelines:</h4>
          <ul className="space-y-2 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
              <span>Report suspected vulnerabilities promptly to <strong>support@multinewtrends.com</strong> with the subject <em>&quot;Security Vulnerability Report&quot;</em>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
              <span>Include clear, reproducible steps (PoC scripts, screenshots, or HTTP request payloads) without disclosing sensitive personal data.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
              <span>Do not access, modify, or destroy user data, vendor records, or disrupt platform availability (e.g. no denial-of-service testing).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-1.5" />
              <span>Give our engineering team reasonable time to investigate, remediate, and verify the fix before publishing or sharing details publicly.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Incident Response & Breach Protocols */}
      <section id="incident-management" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Incident Response &amp; Breach Protocols
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Multi New Trends maintains incident management procedures to identify, contain, investigate, and remediate cybersecurity events:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-white border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm">
              <BellRing className="w-4 h-4 text-[#FA4C00]" />
              <h4>CERT-In Reporting</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              In accordance with directions issued by the Indian Computer Emergency Response Team (CERT-In), cybersecurity incidents of specified categories are documented and reported within mandated statutory timeframes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#E8DFC9] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#111111] text-sm">
              <ShieldCheck className="w-4 h-4 text-[#FA4C00]" />
              <h4>DPDP Data Breach Notification</h4>
            </div>
            <p className="text-xs text-[#555555] leading-relaxed">
              Pursuant to Section 8(6) of the Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025, in the event of a confirmed personal data breach, Multi New Trends will notify the Data Protection Board of India and affected Data Principals without undue delay.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Security Best Practices for Users */}
      <section id="user-recommendations" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Security Best Practices for Users &amp; Partners
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          Security is a shared responsibility. We strongly recommend that customers, vendors, and delivery partners follow these safeguards:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-2 pt-1 text-xs text-[#555555]">
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9]">
            <AlertTriangle className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Never Share Your OTP:</strong> Multi New Trends representatives will never ask you for your login OTP or payment CVV over the phone or email.</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9]">
            <Lock className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Device Protection:</strong> Keep your mobile device operating system updated and enable screen locks (PIN, fingerprint, or biometric).</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9]">
            <Users className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Beware of Phishing:</strong> Always verify that you are communicating through our official website (<code className="text-[#111111] font-mono">multinewtrends.com</code>) or verified customer care.</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9]">
            <EyeOff className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <span><strong>Report Suspicious Activity:</strong> If you observe unauthorized orders or profile modifications, notify our support team immediately.</span>
          </div>
        </div>
      </section>

      {/* 10. Security & Grievance Contact */}
      <section id="security-contact" className="scroll-mt-28 space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Security &amp; Grievance Contact
          </h2>
        </div>
        <p className="text-sm text-[#555555]">
          For security inquiries, vulnerability submissions, or personal data security concerns, please reach out through our official channels:
        </p>

        <div className="rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] p-6 space-y-4">
          <h3 className="text-base font-bold font-heading text-[#111111]">
            Multi New Trends — Security &amp; Data Protection
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
                <span className="text-[10px] sm:text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Jurisdiction</span>
                <span className="text-xs sm:text-[12px] xl:text-[13px] font-semibold text-[#111111] block truncate">India</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#777777] italic pt-1">
            * Security reports are acknowledged within 48 business hours. For privacy rights, visit our <Link href="/privacy" className="text-[#FA4C00] underline font-semibold">Privacy Policy</Link> or <Link href="/delete-account" className="text-[#FA4C00] underline font-semibold">Delete Account Policy</Link>.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
