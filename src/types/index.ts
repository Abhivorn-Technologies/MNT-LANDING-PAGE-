export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount?: string;
  accentColor?: string;
  icon?: string;
}

export interface ProductDeal {
  id: string;
  name: string;
  category: string;
  currentPrice: number;
  oldPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  image: string;
  tag?: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
  verified: boolean;
}

export interface EcosystemApp {
  id: "user" | "vendor" | "raider";
  title: string;
  tagline: string;
  badge: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  accent: string;
  features: string[];
  image: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
