import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import {
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Database,
  FileText,
  UserX,
  CheckCircle2,
  Lock,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Delete Account Policy | Multi New Trends",
  description:
    "Learn how to request deletion of your Multi New Trends account and understand the applicable account and data deletion process.",
  alternates: {
    canonical: `${siteConfig.url}/delete-account`,
  },
  openGraph: {
    title: "Delete Account Policy | Multi New Trends",
    description:
      "Learn how to request deletion of your Multi New Trends account and understand the applicable account and data deletion process.",
    url: `${siteConfig.url}/delete-account`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Multi New Trends - Delete Account Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delete Account Policy | Multi New Trends",
    description:
      "Learn how to request deletion of your Multi New Trends account and understand the applicable account and data deletion process.",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

const deleteAccountTocItems: TocItem[] = [
  { id: "how-to-request", title: "How to Request Account Deletion" },
  { id: "what-happens", title: "What Happens After a Request?" },
  { id: "retained-information", title: "Information That May Be Retained" },
  { id: "deletion-of-personal-information", title: "Deletion of Personal Information" },
  { id: "before-requesting-deletion", title: "Before Requesting Deletion" },
  { id: "contact-support", title: "Contact Support" },
];

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      title="Delete Account Policy"
      subtitle="Learn how to request the deletion of your Multi New Trends account and understand what happens to your associated information."
      effectiveDate="September 21, 2026"
      lastUpdated="September 21, 2026"
      tocItems={deleteAccountTocItems}
    >
      {/* Section 1: How to Request Account Deletion */}
      <section id="how-to-request" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            How to Request Account Deletion
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          Multi New Trends respects your autonomy over your personal data. You have the right to request the permanent deletion of your account and associated personal profile information through the channels outlined below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          {/* Method A: In-App Deletion */}
          <div className="p-5 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-3">
            <div className="flex items-center gap-2.5 font-bold text-[#111111] text-base font-heading">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] shadow-sm">
                <Smartphone className="w-4 h-4" />
              </div>
              <h3>In-App Deletion Request</h3>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              Users can request account deletion directly through account settings within the Multi New Trends mobile application, if this feature is available in your current application version:
            </p>
            <ol className="space-y-2 text-xs sm:text-sm text-[#555555] list-decimal list-inside pl-1">
              <li>Open the Multi New Trends app and log into your account.</li>
              <li>Navigate to <strong className="text-[#111111]">Profile &gt; Settings</strong>.</li>
              <li>Select <strong className="text-[#111111]">Account Management</strong> (or <strong className="text-[#111111]">Security</strong>).</li>
              <li>Tap <strong className="text-[#111111]">Request Account Deletion</strong> and follow the on-screen confirmation prompts.</li>
            </ol>
          </div>

          {/* Method B: Contact Support */}
          <div className="p-5 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-3">
            <div className="flex items-center gap-2.5 font-bold text-[#111111] text-base font-heading">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] shadow-sm">
                <Mail className="w-4 h-4" />
              </div>
              <h3>Customer Support Request</h3>
            </div>
            <p className="text-sm text-[#555555] leading-relaxed">
              If the in-app deletion option is unavailable, if you no longer have access to the mobile application, or if you encounter any difficulties, you should contact the official Multi New Trends support team directly using the verified contact details on this website.
            </p>
            <div className="p-3 rounded-xl bg-white border border-[#E8DFC9] text-xs text-[#555555] space-y-1">
              <p className="font-semibold text-[#111111]">Send an email to:</p>
              <a
                href="mailto:support@multinewtrends.com?subject=Account%20Deletion%20Request"
                className="font-medium text-[#FA4C00] hover:underline"
              >
                support@multinewtrends.com
              </a>
              <p className="text-[11px] text-[#777777] pt-1">
                Use the subject line: <span className="font-mono text-[#333333]">Account Deletion Request</span>
              </p>
            </div>
          </div>
        </div>

        {/* Identity Verification Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-[#665235]">
            <h4 className="font-bold text-[#111111] text-sm">Identity Verification Required</h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              To safeguard user privacy and prevent unauthorized, fraudulent, or malicious account terminations, users may need to verify their identity before a deletion request can be processed. You may be requested to authenticate via a one-time verification code (OTP) sent to your registered mobile number or confirm ownership through your registered email address.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What Happens After a Request? */}
      <section id="what-happens" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            What Happens After a Request?
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          Once your account deletion request and identity verification are successfully received, Multi New Trends will process the request in accordance with applicable company policies and legal obligations.
        </p>

        <div className="space-y-3.5">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6]/50 border border-[#E8DFC9]">
            <CheckCircle2 className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
            <div className="text-sm text-[#555555]">
              <strong className="text-[#111111] font-semibold block mb-0.5">Account Access Termination</strong>
              Where applicable, active account access, login credentials, and session tokens across web and mobile platforms will be permanently deactivated.
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6]/50 border border-[#E8DFC9]">
            <CheckCircle2 className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
            <div className="text-sm text-[#555555]">
              <strong className="text-[#111111] font-semibold block mb-0.5">Personal Data Deletion or Anonymization</strong>
              Associated personal profile information that is eligible for erasure will be deleted or irreversibly anonymized in our primary operating databases.
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6]/50 border border-[#E8DFC9]">
            <Clock className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
            <div className="text-sm text-[#555555]">
              <strong className="text-[#111111] font-semibold block mb-0.5">Processing Timeframe Notice</strong>
              Account deletion does not occur instantaneously. A reasonable administrative and technical processing window is required to verify identity, confirm there are no pending in-transit orders or open dispute proceedings, and propagate data removal across distributed system services.
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Information That May Be Retained */}
      <section id="retained-information" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Information That May Be Retained
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          Certain information cannot be erased immediately and may need to be retained where legally required or reasonably necessary for legitimate, documented purposes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00]">
              <FileText className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-[#111111] text-sm font-heading">
              Financial &amp; Transaction Records
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              Order invoices, tax documentation, and payment records required by applicable commercial, tax, and accounting legislation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00]">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-[#111111] text-sm font-heading">
              Dispute Resolution &amp; Claims
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              Records and correspondence necessary to resolve pending disputes, claims, chargebacks, customer grievances, or legal inquiries.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] space-y-2">
            <div className="w-7 h-7 rounded-lg bg-white border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00]">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-[#111111] text-sm font-heading">
              Fraud Prevention &amp; Legal Compliance
            </h4>
            <p className="text-xs text-[#555555] leading-relaxed">
              Audit trails, restriction records, and logs needed to prevent fraudulent behavior, protect users, and comply with binding statutory obligations.
            </p>
          </div>
        </div>

        <p className="text-sm text-[#555555] leading-relaxed">
          Retained information will be restricted from standard operational use, isolated from marketing communications, and handled strictly in accordance with applicable statutory requirements and our{" "}
          <Link href="/privacy" className="text-[#FA4C00] font-semibold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      {/* Section 4: Deletion of Personal Information */}
      <section id="deletion-of-personal-information" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Deletion of Personal Information
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          Personal data eligible for deletion will be processed and removed in accordance with applicable laws and Multi New Trends&apos; actual data-retention practices.
        </p>

        <div className="p-5 rounded-2xl bg-[#FAF4E6]/60 border border-[#E8DFC9] space-y-3 text-sm text-[#555555]">
          <div className="flex items-center gap-2 font-bold text-[#111111] font-heading">
            <Database className="w-4 h-4 text-[#FA4C00]" />
            <h3>Systems Scope &amp; Technical Realities</h3>
          </div>
          <p className="leading-relaxed">
            Eligible personal data is expunged or de-identified from active production databases and primary application interfaces upon completion of the deletion workflow.
          </p>
          <p className="leading-relaxed">
            Consistent with standard industry infrastructure practice, Multi New Trends does not represent that data will be simultaneously removed from every offline system backup or third-party service at the exact moment of deletion. Routine system backup archives and disaster recovery copies are maintained on secure, isolated media and are overwritten or phased out naturally in accordance with established backup retention lifecycles and technical feasibility.
          </p>
          <p className="leading-relaxed">
            Third-party payment gateways, logistics partners, and banking institutions maintain their own regulatory and statutory retention schedules independent of Multi New Trends.
          </p>
        </div>
      </section>

      {/* Section 5: Before Requesting Deletion */}
      <section id="before-requesting-deletion" className="scroll-mt-28 space-y-6 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Before Requesting Deletion
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          Please review the following essential consequences before submitting an account deletion request. Account deletion is permanent and cannot be undone once processed.
        </p>

        <div className="rounded-2xl bg-[#FAF4E6]/70 border border-[#E8DFC9] p-5 space-y-3">
          <h4 className="text-sm font-bold font-heading text-[#111111] flex items-center gap-2">
            <UserX className="w-4 h-4 text-[#FA4C00]" />
            Loss of Access to Account Features
          </h4>
          <p className="text-xs sm:text-sm text-[#555555]">
            Deleting your Multi New Trends account will permanently terminate your ability to access:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-[#555555]">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8DFC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0" />
              <span>Order history, receipts &amp; past delivery summaries</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8DFC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0" />
              <span>Saved home, work &amp; secondary delivery addresses</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8DFC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0" />
              <span>Account preferences, saved cards &amp; profile settings</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E8DFC9]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0" />
              <span>Unused coupons, reward points &amp; platform perks</span>
            </div>
          </div>
        </div>

        {/* Warning Regarding Pending Transactions */}
        <div className="p-4 sm:p-5 rounded-2xl bg-red-50/60 border border-red-200/80 flex items-start gap-3.5">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-[#721c24]">
            <h4 className="font-bold text-[#111111] text-sm">Important: Pending Orders &amp; Financial Obligations</h4>
            <p className="text-xs sm:text-sm leading-relaxed text-[#555555]">
              Submitting an account deletion request does not automatically cancel pending orders, dispatch deliveries, or erase existing refunds, chargebacks, or outstanding financial obligations. If you have an active order or ongoing delivery, please wait until the order has been delivered and completed before initiating account deletion. Any unresolved financial transactions must be concluded prior to final deletion.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Contact Support */}
      <section id="contact-support" className="scroll-mt-28 space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Contact Support
          </h2>
        </div>

        <p className="text-base text-[#555555]">
          If you have questions regarding this Delete Account Policy, require assistance submitting a deletion request, or wish to verify the status of an ongoing request, please contact our support team:
        </p>

        {/* Contact Info Card */}
        <div className="rounded-2xl bg-[#FAF4E6] border border-[#E8DFC9] p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E8DFC9] pb-4">
            <div>
              <h3 className="text-base font-bold font-heading text-[#111111]">
                Multi New Trends Support
              </h3>
              <p className="text-xs text-[#777777]">
                Official Customer Support &amp; Privacy Assistance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8DFC9]">
              <Mail className="w-4 h-4 text-[#FA4C00] shrink-0" />
              <div>
                <span className="text-[11px] text-[#777777] block font-medium uppercase tracking-wider">Email</span>
                <a
                  href="mailto:support@multinewtrends.com"
                  className="font-semibold text-[#111111] hover:text-[#FA4C00] transition-colors break-all"
                >
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

        {/* Helpful links footer in article */}
        <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-[#777777]">
          <span>Related policies:</span>
          <Link href="/privacy" className="text-[#FA4C00] hover:underline font-medium inline-flex items-center gap-1">
            Privacy Policy <ArrowRight className="w-3 h-3" />
          </Link>
          <span className="text-[#D4C8B0]">•</span>
          <Link href="/terms" className="text-[#FA4C00] hover:underline font-medium inline-flex items-center gap-1">
            Terms &amp; Conditions <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>
    </LegalPageLayout>
  );
}
