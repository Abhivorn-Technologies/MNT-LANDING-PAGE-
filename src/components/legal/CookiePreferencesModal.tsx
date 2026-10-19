"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ShieldCheck,
  Check,
  Sliders,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  getSavedCookieConsent,
  saveCookieConsent,
  DEFAULT_CONSENT,
  CookieConsentPreferences,
} from "@/lib/cookieConsent";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Local toggles for modal form state
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [savedConsent, setSavedConsent] = useState<CookieConsentPreferences | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Load existing preferences when opened
  useEffect(() => {
    if (isOpen) {
      const current = getSavedCookieConsent();
      if (current) {
        setSavedConsent(current);
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      } else {
        setSavedConsent(null);
        setAnalytics(DEFAULT_CONSENT.analytics);
        setMarketing(DEFAULT_CONSENT.marketing);
      }
      setJustSaved(false);

      // Focus close button on open
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      // Prevent body scrolling while modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close modal (without saving/changing consent)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Actions
  const handleSavePreferences = () => {
    const updated = saveCookieConsent({ analytics, marketing });
    setSavedConsent(updated);
    setJustSaved(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleAcceptAll = () => {
    setAnalytics(true);
    setMarketing(true);
    const updated = saveCookieConsent({ analytics: true, marketing: true });
    setSavedConsent(updated);
    setJustSaved(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleRejectOptional = () => {
    setAnalytics(false);
    setMarketing(false);
    const updated = saveCookieConsent({ analytics: false, marketing: false });
    setSavedConsent(updated);
    setJustSaved(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const formattedTimestamp = savedConsent?.timestamp
    ? new Date(savedConsent.timestamp).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm transition-all"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      aria-describedby="cookie-preferences-description"
      onClick={(e) => {
        // Closing modal by backdrop click does NOT grant consent
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#0F0F12] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto text-white flex flex-col max-h-[90vh]"
      >
        {/* Modal Top Header with Glow */}
        <div className="relative px-6 pt-6 pb-5 border-b border-white/[0.08] bg-gradient-to-r from-white/[0.03] to-transparent">
          <div className="absolute top-0 right-1/4 w-40 h-20 bg-[#FA4C00]/15 blur-3xl pointer-events-none" />

          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#FA4C00]/20 to-[#FFBD59]/10 border border-[#FA4C00]/30 flex items-center justify-center text-[#FA4C00] shadow-sm">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] font-semibold uppercase tracking-wider text-[#FFBD59] mb-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#FA4C00]" />
                  Privacy &amp; DPDP Controls
                </div>
                <h2
                  id="cookie-preferences-title"
                  className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight"
                >
                  Cookie Preferences
                </h2>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-white/20 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FA4C00]/50"
              aria-label="Close cookie preferences modal without changing consent"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p
            id="cookie-preferences-description"
            className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed"
          >
            Multi New Trends respects your autonomy over personal data under India&apos;s Digital Personal Data Protection (DPDP) Act, 2023. We use strictly necessary cookies to ensure secure site operation and record your consent choices. Optional cookies require your explicit, prior consent before loading.
          </p>

          {formattedTimestamp && (
            <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-white/50">
              <Clock className="w-3 h-3 text-[#FFBD59]" />
              <span>Current preference recorded on: <strong className="text-white/80">{formattedTimestamp}</strong></span>
            </div>
          )}
        </div>

        {/* Modal Scrollable Categories */}
        <div className="px-6 py-5 overflow-y-auto space-y-4 flex-1 custom-scrollbar text-sm">
          {/* Transparent Notice on Current Site Behavior */}
          <div className="p-3.5 rounded-2xl bg-[#FA4C00]/[0.06] border border-[#FA4C00]/20 flex items-start gap-3">
            <Info className="w-4 h-4 text-[#FA4C00] shrink-0 mt-0.5" />
            <p className="text-xs text-white/80 leading-relaxed">
              <strong>Website Status:</strong> This website currently operates with <span className="text-[#FFBD59] font-medium">strictly necessary technologies only</span>. We do not load third-party advertising cookies or cross-site tracking scripts. You can manage future category permissions below.
            </p>
          </div>

          {/* Category 1: Strictly Necessary */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12] transition-colors space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#FA4C00]" />
                <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                  Strictly Necessary Cookies
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold text-[11px] uppercase tracking-wider">
                Always Active
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              These cookies and local storage tokens are essential for the website to function properly. They facilitate secure navigation, basic session handling, network integrity, and remember your cookie preferences. Under applicable privacy law, these cannot be disabled.
            </p>
          </div>

          {/* Category 2: Analytics Technologies */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12] transition-colors space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Sliders className="w-4 h-4 text-[#FFBD59]" />
                <div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                    Analytics Technologies
                  </h3>
                  <span className="text-[11px] text-white/50 block">Optional measurement</span>
                </div>
              </div>

              {/* Accessible Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={analytics}
                onClick={() => setAnalytics(!analytics)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FA4C00] focus:ring-offset-2 focus:ring-offset-[#0F0F12] ${
                  analytics ? "bg-[#FA4C00]" : "bg-white/20"
                }`}
                aria-label="Toggle analytics cookies"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    analytics ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              When enabled, these technologies allow us to count aggregated page visits, understand traffic sources, and evaluate page responsiveness to optimize overall user experience. Data collected is aggregated and not used for individualized tracking.
            </p>
          </div>

          {/* Category 3: Marketing & Advertising */}
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.12] transition-colors space-y-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#FFBD59]" />
                <div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                    Marketing &amp; Personalization
                  </h3>
                  <span className="text-[11px] text-white/50 block">Optional promotional technologies</span>
                </div>
              </div>

              {/* Accessible Toggle Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={marketing}
                onClick={() => setMarketing(!marketing)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#FA4C00] focus:ring-offset-2 focus:ring-offset-[#0F0F12] ${
                  marketing ? "bg-[#FA4C00]" : "bg-white/20"
                }`}
                aria-label="Toggle marketing cookies"
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                    marketing ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              When enabled, these technologies may be used by advertising partners to build a profile of your interests and show you relevant promotional banners on other websites. They do not store direct personal information but uniquely identify your browser and device.
            </p>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0A0A0D] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Quick status message */}
          <div className="text-xs text-white/60 text-center sm:text-left">
            {justSaved ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" /> Preferences saved securely
              </span>
            ) : (
              <span>Closing this dialog will not change your existing choices.</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={handleRejectOptional}
              className="px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-white/90 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Reject Optional Cookies
            </button>

            <button
              type="button"
              onClick={handleSavePreferences}
              className="px-4 py-2 rounded-xl bg-white/[0.12] hover:bg-white/[0.18] border border-white/20 text-xs font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#FA4C00]/50"
            >
              Save Preferences
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FA4C00] to-[#FF7A00] hover:from-[#E04300] hover:to-[#FA4C00] text-white text-xs font-bold transition-all shadow-[0_4px_14px_rgba(250,76,0,0.3)] focus:outline-none focus:ring-2 focus:ring-[#FA4C00]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
