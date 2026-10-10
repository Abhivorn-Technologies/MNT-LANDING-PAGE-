"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_DETAILS, CONTACT_SUBJECTS } from "@/data/contact";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone.trim() && !/^[0-9+\s()-]{7,16}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please enter at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean frontend submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF4E6] text-[#111111] relative overflow-hidden border-t border-[#E8DFC9]">
      {/* Ambient Orange & Gold Glow in Background */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FA4C00]/5 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFBD59]/8 blur-[150px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column: Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8" data-reveal="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5DAC0] text-[#FA4C00] font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                GET IN TOUCH
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#111111] tracking-tight leading-tight">
                Let’s <span className="text-[#FA4C00]">Connect.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
                Have a question, need support, want to become a vendor or interested in joining
                our delivery network? We’d love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8DFC9] hover:border-[#FA4C00]/50 transition-all flex items-start gap-4 group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white transition-all shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block">
                    Phone Support
                  </span>
                  <a
                    href={`tel:${CONTACT_DETAILS.phone.replace(/\s+/g, "")}`}
                    className="text-base font-bold text-[#111111] group-hover:text-[#FA4C00] transition-colors block mt-0.5"
                  >
                    {CONTACT_DETAILS.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8DFC9] hover:border-[#FA4C00]/50 transition-all flex items-start gap-4 group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white transition-all shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block">
                    Email Inquiry
                  </span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="text-base font-bold text-[#111111] group-hover:text-[#FA4C00] transition-colors block mt-0.5"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                  <span className="text-xs text-[#666666] block mt-1 font-medium">
                    Quick response within 24 hours
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E8DFC9] hover:border-[#FA4C00]/50 transition-all flex items-start gap-4 group shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00] group-hover:bg-[#FA4C00] group-hover:text-white transition-all shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block">
                    Headquarters
                  </span>
                  <span className="text-base font-bold text-[#111111] block mt-0.5">
                    {CONTACT_DETAILS.location}
                  </span>
                  <span className="text-xs text-[#666666] block mt-1 font-medium">
                    Serving shoppers & partners nationwide
                  </span>
                </div>
              </div>
            </div>

            {/* Abstract Decorative Brand Accent */}
            <div className="pt-2">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FFFFFF] border border-[#E5DAC0] text-xs text-[#555555] shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#FA4C00] shrink-0" />
                <span>All partner and customer inquiries are handled under strict confidentiality.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7" data-reveal="fade-left">
            <div className="rounded-3xl p-7 sm:p-10 bg-[#FFFFFF] border border-[#E8DFC9] shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF4E6] border border-[#E8DFC9] flex items-center justify-center text-[#FA4C00]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-[#111111]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#666666] mt-0.5">
                      Fill in the details below and our team will get back promptly.
                    </p>
                  </div>
                </div>
              </div>

              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-black font-heading text-[#111111]">
                    Thank you! Your message has been received.
                  </h4>
                  <p className="text-sm text-[#555555] max-w-md mx-auto leading-relaxed">
                    We appreciate you reaching out to Multi New Trends. Our representative will review
                    your message and reply shortly.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => setIsSuccess(false)}
                      className="border-[#FA4C00] text-[#FA4C00]"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                      >
                        Full Name <span className="text-[#FA4C00]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#111111] placeholder-[#888888] font-medium text-sm border focus:outline-none transition-all",
                          errors.fullName
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                            : "border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/30 shadow-sm"
                        )}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                      >
                        Email Address <span className="text-[#FA4C00]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#111111] placeholder-[#888888] font-medium text-sm border focus:outline-none transition-all",
                          errors.email
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                            : "border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/30 shadow-sm"
                        )}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                      >
                        Phone Number <span className="text-[#888888] text-[10px] lowercase">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={cn(
                          "w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#111111] placeholder-[#888888] font-medium text-sm border focus:outline-none transition-all",
                          errors.phone
                            ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                            : "border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/30 shadow-sm"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3 shrink-0" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#111111] font-medium text-sm border border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/30 focus:outline-none transition-all shadow-sm"
                      >
                        {CONTACT_SUBJECTS.map((sub) => (
                          <option key={sub} value={sub} className="text-black">
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-2"
                    >
                      Message <span className="text-[#FA4C00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we assist you today? Tell us more about your inquiry..."
                      className={cn(
                        "w-full px-4 py-3 rounded-xl bg-[#FFFFFF] text-[#111111] placeholder-[#888888] font-medium text-sm border focus:outline-none transition-all resize-y shadow-sm",
                        errors.message
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                          : "border-[#E2D5BE] focus:border-[#FA4C00] focus:ring-2 focus:ring-[#FA4C00]/30"
                      )}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3 shrink-0" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                      className="shadow-[0_4px_20px_rgba(250,76,0,0.35)] hover:shadow-[0_8px_25px_rgba(250,76,0,0.5)] font-bold"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
