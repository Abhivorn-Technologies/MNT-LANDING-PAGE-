/**
 * Multi New Trends — Cookie Consent & Tracking Preferences Manager
 * Implements persistent consent storage compliant with India's DPDP Act, 2023 & DPDP Rules, 2025.
 * 
 * Rules:
 * - Strictly Necessary: Always active (cannot be disabled).
 * - Analytics: Optional, default OFF, requires explicit consent.
 * - Marketing: Optional, default OFF, requires explicit consent.
 * - Closing modal without saving does NOT grant consent.
 * - Consent timestamp is tracked.
 * - Dispatches 'mnt_cookie_consent_change' DOM event upon modification.
 */

export interface CookieConsentPreferences {
  strictlyNecessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
  version: number;
}

export const COOKIE_CONSENT_NAME = "mnt_cookie_consent";
export const COOKIE_CONSENT_STORAGE_KEY = "mnt_cookie_consent_v1";
export const COOKIE_CONSENT_EVENT = "mnt_cookie_consent_change";
export const OPEN_COOKIE_MODAL_EVENT = "mnt_open_cookie_preferences";

export const DEFAULT_CONSENT: CookieConsentPreferences = {
  strictlyNecessary: true,
  analytics: false,
  marketing: false,
  timestamp: "",
  version: 1,
};

/**
 * Read cookie by name from document.cookie
 */
function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
  }
  return null;
}

/**
 * Set persistent first-party cookie (1 year expiry)
 */
function setCookie(name: string, value: string, days = 365): void {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}

/**
 * Retrieve saved cookie consent state.
 * Checks first-party cookie first, falls back to localStorage.
 * Returns null if user has not yet expressed a preference.
 */
export function getSavedCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    // 1. Try reading from cookie
    const cookieVal = getCookie(COOKIE_CONSENT_NAME);
    if (cookieVal) {
      const parsed = JSON.parse(cookieVal);
      if (typeof parsed === "object" && parsed !== null) {
        return {
          strictlyNecessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
          timestamp: parsed.timestamp || new Date().toISOString(),
          version: parsed.version || 1,
        };
      }
    }

    // 2. Fall back to localStorage
    const localVal = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (localVal) {
      const parsed = JSON.parse(localVal);
      if (typeof parsed === "object" && parsed !== null) {
        return {
          strictlyNecessary: true,
          analytics: Boolean(parsed.analytics),
          marketing: Boolean(parsed.marketing),
          timestamp: parsed.timestamp || new Date().toISOString(),
          version: parsed.version || 1,
        };
      }
    }
  } catch {
    // Ignore JSON parse errors and return null
  }

  return null;
}

/**
 * Save user cookie consent preferences.
 * Stores in both first-party cookie and localStorage, and dispatches change event.
 */
export function saveCookieConsent(
  prefs: Pick<CookieConsentPreferences, "analytics" | "marketing">
): CookieConsentPreferences {
  const fullConsent: CookieConsentPreferences = {
    strictlyNecessary: true,
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
    timestamp: new Date().toISOString(),
    version: 1,
  };

  if (typeof window !== "undefined") {
    try {
      const serialized = JSON.stringify(fullConsent);
      setCookie(COOKIE_CONSENT_NAME, serialized, 365);
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, serialized);

      // Dispatch global custom event for any listeners / tag managers
      window.dispatchEvent(
        new CustomEvent(COOKIE_CONSENT_EVENT, { detail: fullConsent })
      );
    } catch {
      // Storage might be restricted
    }
  }

  return fullConsent;
}

/**
 * Check whether a category has active, explicit consent.
 * Default is FALSE if user has not consented or if category is disabled.
 */
export function hasConsent(category: "analytics" | "marketing"): boolean {
  const saved = getSavedCookieConsent();
  if (!saved) return false;
  return saved[category] === true;
}

/**
 * Open the Cookie Preferences Modal from anywhere in the app.
 */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_COOKIE_MODAL_EVENT));
  }
}
