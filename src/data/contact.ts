export interface ContactInfo {
  phone: string;
  phoneDisplay: string;
  email: string;
  location: string;
  hours: string;
}

export const CONTACT_DETAILS: ContactInfo = {
  phone: "+91 XXXXX XXXXX",
  phoneDisplay: "+91 XXXXX XXXXX",
  email: "support@multinewtrends.com",
  location: "India",
  hours: "Monday – Sunday: 8:00 AM – 10:00 PM IST",
};

export const CONTACT_SUBJECTS = [
  "General Inquiry",
  "Order & Delivery Support",
  "Become a Vendor Partner",
  "Join as a Rider Partner",
  "Business & Corporate Partnerships",
  "Feedback & Suggestions",
];
