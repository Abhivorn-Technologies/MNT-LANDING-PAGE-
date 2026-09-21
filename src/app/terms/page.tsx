import React from "react";
import { Metadata } from "next";
import { LegalPageLayout, TocItem } from "@/components/legal/LegalPageLayout";
import { Mail, Phone, MapPin, ShieldAlert, CheckCircle2, AlertTriangle, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Multi New Trends",
  description: "Terms and conditions governing the use of Multi New Trends services.",
};

const termsTocItems: TocItem[] = [
  { id: "introduction", title: "Introduction" },
  { id: "about", title: "About Multi New Trends" },
  { id: "eligibility", title: "Eligibility" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "products-information", title: "Products and Product Information" },
  { id: "prices-offers", title: "Prices and Offers" },
  { id: "orders", title: "Orders" },
  { id: "payments", title: "Payments" },
  { id: "delivery", title: "Delivery" },
  { id: "vendors", title: "Vendors" },
  { id: "delivery-partners", title: "Delivery Partners / Riders" },
  { id: "cancellations-returns-refunds", title: "Cancellations, Returns and Refunds" },
  { id: "prohibited-activities", title: "Prohibited Activities" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "platform-availability", title: "Platform Availability" },
  { id: "limitation-liability", title: "Limitation of Liability" },
  { id: "changes-to-terms", title: "Changes to These Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact-us", title: "Contact Us" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using Multi New Trends."
      effectiveDate="September 21, 2026"
      lastUpdated="September 21, 2026"
      tocItems={termsTocItems}
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
          Welcome to Multi New Trends.
        </p>
        <p>
          These Terms & Conditions govern your access to and use of the Multi New Trends website,
          mobile applications, and related services.
        </p>
        <p>
          By accessing or using our platform, you agree to be bound by these Terms & Conditions. If you do
          not agree with any part of these terms, please do not use the platform.
        </p>
      </section>

      {/* 2. About Multi New Trends */}
      <section id="about" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            About Multi New Trends
          </h2>
        </div>
        <p>
          Multi New Trends is a multi-category shopping and delivery platform where customers can
          discover and purchase products across categories including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
          {[
            "Grocery",
            "Electronics",
            "Home Living",
            "Kitchen",
            "Kids",
            "Sports",
            "Stationery & Books",
            "Pet Products",
            "Gifts",
            "Mobile Accessories",
            "Beauty",
            "Fashion",
          ].map((category) => (
            <div
              key={category}
              className="px-3.5 py-2 rounded-xl bg-[#FAF4E6]/70 border border-[#E8DFC9] text-xs font-semibold text-[#111111] flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              {category}
            </div>
          ))}
        </div>
        <p className="pt-2">
          The platform may also provide services for vendors and delivery partners through dedicated
          applications or interfaces.
        </p>
      </section>

      {/* 3. Eligibility */}
      <section id="eligibility" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Eligibility
          </h2>
        </div>
        <p>
          You must provide accurate information when creating an account or placing an order.
        </p>
        <p>By using Multi New Trends, you confirm that:</p>
        <ul className="space-y-2.5 pl-2">
          {[
            "The information you provide is accurate and current.",
            "You will maintain the security of your account credentials.",
            "You will not use another person's account without authorization.",
            "You will use the platform only for lawful purposes.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#FA4C00] shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. User Accounts */}
      <section id="user-accounts" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            User Accounts
          </h2>
        </div>
        <p>
          Certain features may require you to create an account.
        </p>
        <p>You are responsible for:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Maintaining the confidentiality of your login information.",
            "Keeping your account information accurate.",
            "All activities performed through your account.",
            "Informing us if you suspect unauthorized access.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] text-xs text-[#555555] flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
          <p>
            Multi New Trends may suspend or restrict accounts involved in fraudulent, abusive, unlawful, or prohibited activities.
          </p>
        </div>
      </section>

      {/* 5. Products and Product Information */}
      <section id="products-information" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Products and Product Information
          </h2>
        </div>
        <p>
          We aim to provide accurate information about products displayed on the platform.
        </p>
        <p>Product information may include:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
          {[
            "Product name",
            "Description",
            "Images",
            "Price",
            "Availability",
            "Discounts",
            "Seller information",
            "Specifications",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-[#444444]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p>
          Product images are provided for representation purposes and actual products may vary slightly in appearance, packaging, color, or specifications.
        </p>
        <p>
          Product availability may change without prior notice.
        </p>
      </section>

      {/* 6. Prices and Offers */}
      <section id="prices-offers" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Prices and Offers
          </h2>
        </div>
        <p>
          Product prices and promotional offers displayed on the platform may change from time to time.
        </p>
        <p>
          Applicable taxes, delivery charges, service charges, or other fees may be displayed during checkout where applicable.
        </p>
        <p>
          Promotional offers may have additional terms, eligibility requirements, validity periods, or usage limits.
        </p>
        <p>
          Multi New Trends reserves the right to correct pricing or listing errors.
        </p>
      </section>

      {/* 7. Orders */}
      <section id="orders" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Orders
          </h2>
        </div>
        <p>
          When you place an order, you are submitting a request to purchase the selected products.
        </p>
        <p>An order may be accepted, rejected, modified, or cancelled due to circumstances including:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Product unavailability",
            "Incorrect product information",
            "Pricing errors",
            "Payment issues",
            "Delivery limitations",
            "Suspected fraudulent activity",
            "Technical problems",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 8. Payments */}
      <section id="payments" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Payments
          </h2>
        </div>
        <p>
          Payments may be processed through supported third-party payment providers.
        </p>
        <p>
          You agree to provide valid and authorized payment information.
        </p>
        <p>
          Payment processing may be subject to the terms and privacy policies of the applicable payment provider.
        </p>
      </section>

      {/* 9. Delivery */}
      <section id="delivery" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Delivery
          </h2>
        </div>
        <p>Delivery availability and estimated delivery times may depend on:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
          {[
            "Customer location",
            "Product availability",
            "Vendor processing time",
            "Delivery partner availability",
            "Weather",
            "Traffic",
            "Public events",
            "Other circumstances beyond reasonable control",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-[#444444]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <p className="pt-2">
          Estimated delivery times are provided for guidance and may change.
        </p>
      </section>

      {/* 10. Vendors */}
      <section id="vendors" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Vendors
          </h2>
        </div>
        <p>Vendors using the Multi New Trends platform are responsible for:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Product accuracy",
            "Product quality",
            "Product availability",
            "Pricing information",
            "Order fulfillment",
            "Applicable legal requirements",
            "Appropriate packaging",
            "Accurate business information",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Vendor-specific agreements may apply separately.
        </p>
      </section>

      {/* 11. Delivery Partners / Riders */}
      <section id="delivery-partners" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Delivery Partners / Riders
          </h2>
        </div>
        <p>
          Delivery partners using the Rider platform must provide accurate information and comply with applicable platform rules.
        </p>
        <p>Delivery partners are responsible for:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Following applicable traffic and safety regulations",
            "Maintaining appropriate documentation",
            "Handling customer orders responsibly",
            "Following delivery instructions",
            "Maintaining professional conduct",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA4C00] shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Additional Rider Partner Terms may apply.
        </p>
      </section>

      {/* 12. Cancellations, Returns and Refunds */}
      <section id="cancellations-returns-refunds" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Cancellations, Returns and Refunds
          </h2>
        </div>
        <p>
          Orders may be eligible for cancellation, return, replacement, or refund depending on the product, vendor, order status, and applicable policy.
        </p>
        <p>
          Certain products may have different return or cancellation conditions.
        </p>
        <p>
          Customers should review applicable cancellation and refund information before completing an order.
        </p>
      </section>

      {/* 13. Prohibited Activities */}
      <section id="prohibited-activities" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Prohibited Activities
          </h2>
        </div>
        <p>You must not use Multi New Trends to:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-2">
          {[
            "Commit fraud",
            "Misuse payment systems",
            "Upload malicious software",
            "Attempt unauthorized access",
            "Interfere with platform operations",
            "Create fraudulent accounts",
            "Abuse promotional offers",
            "Misrepresent your identity",
            "Violate applicable laws",
            "Infringe intellectual property rights",
            "Harass vendors, customers, or delivery partners",
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-[#444444]">
              <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Intellectual Property */}
      <section id="intellectual-property" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Intellectual Property
          </h2>
        </div>
        <p>
          The Multi New Trends name, logo, branding, website design, software, graphics, text, images, and other original content may be protected by applicable intellectual property laws.
        </p>
        <p>
          You may not copy, reproduce, distribute, modify, sell, or commercially exploit our content without appropriate authorization.
        </p>
        <p>
          Third-party trademarks remain the property of their respective owners.
        </p>
      </section>

      {/* 15. Third-Party Services */}
      <section id="third-party-services" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Third-Party Services
          </h2>
        </div>
        <p>Multi New Trends may use third-party services for:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pl-2">
          {[
            "Payments",
            "Maps",
            "Analytics",
            "Authentication",
            "Notifications",
            "Cloud hosting",
            "Delivery services",
          ].map((service, idx) => (
            <div key={idx} className="p-2.5 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] text-xs font-medium text-center text-[#111111]">
              {service}
            </div>
          ))}
        </div>
        <p className="pt-2">
          Third-party services may have their own terms and privacy policies.
        </p>
      </section>

      {/* 16. Platform Availability */}
      <section id="platform-availability" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Platform Availability
          </h2>
        </div>
        <p>
          We aim to keep Multi New Trends available and reliable, but we do not guarantee uninterrupted access.
        </p>
        <p>
          The platform may occasionally be unavailable due to maintenance, technical issues, updates, network problems, security incidents, or circumstances outside our reasonable control.
        </p>
      </section>

      {/* 17. Limitation of Liability */}
      <section id="limitation-liability" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            17
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Limitation of Liability
          </h2>
        </div>
        <p>
          To the extent permitted by applicable law, Multi New Trends will not be responsible for losses resulting from circumstances beyond its reasonable control.
        </p>
        <p>
          Nothing in these Terms is intended to exclude rights or protections that cannot legally be excluded.
        </p>
      </section>

      {/* 18. Changes to These Terms */}
      <section id="changes-to-terms" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            18
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Changes to These Terms
          </h2>
        </div>
        <p>
          We may update these Terms & Conditions from time to time.
        </p>
        <p>
          Updated terms will be published on this page with a revised Last Updated date.
        </p>
      </section>

      {/* 19. Governing Law */}
      <section id="governing-law" className="scroll-mt-28 space-y-4 pb-8 border-b border-[#E8DFC9]">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            19
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Governing Law
          </h2>
        </div>
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9]">
          <Scale className="w-5 h-5 text-[#FA4C00] shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-[#444444]">
            <p>
              These Terms & Conditions shall be governed by the applicable laws of India.
            </p>
            <p>
              Any disputes shall be subject to the jurisdiction of the appropriate courts, subject to applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* 20. Contact Us */}
      <section id="contact-us" className="scroll-mt-28 space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-xs font-bold text-[#FA4C00]">
            20
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#111111]">
            Contact Us
          </h2>
        </div>
        <p>
          If you have questions about these Terms & Conditions, please contact us:
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
                <span className="font-semibold text-[#111111] block">+91 XXXXX XXXXX</span>
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
