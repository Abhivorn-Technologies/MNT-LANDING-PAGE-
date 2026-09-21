export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Categories", href: "/#categories", id: "categories" },
  { label: "How It Works", href: "/#how-it-works", id: "how-it-works" },
  { label: "Deals", href: "/#deals", id: "deals" },
  { label: "FAQ", href: "/#faq", id: "faq" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/#about" },
    { label: "Careers", href: "/#contact" },
    { label: "Contact", href: "/#contact" },
  ],
  forBusiness: [
    { label: "Become a Vendor", href: "/#vendor" },
    { label: "Become a Rider", href: "/#rider" },
    { label: "Partner With Us", href: "/#contact" },
  ],
  support: [
    { label: "Help Center", href: "/#contact" },
    { label: "FAQs", href: "/#faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Contact Us", href: "/#contact" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    { name: "X (Twitter)", href: "https://twitter.com", icon: "Twitter" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
};
