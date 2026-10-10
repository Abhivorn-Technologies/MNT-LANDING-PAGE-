import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Multi New Trends",
    "MNT",
    "Online Shopping",
    "Hyperlocal Delivery",
    "Grocery Shopping",
    "Electronics",
    "Fashion",
    "Home Essentials",
    "Local Shopping",
    "Shopping Deals",
    "Vendor Platform",
    "Delivery Partners",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/logo/favicon.png",
    shortcut: "/assets/logo/favicon.png",
    apple: "/assets/logo/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: "Multi New Trends - Hyperlocal Multi-Category Shopping Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi New Trends | Shop Groceries, Electronics, Fashion & More",
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Global structured data: Organization & WebSite (no fake search action)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          url: `${siteConfig.url}${siteConfig.logo}`,
          caption: `${siteConfig.name} Logo`,
        },
        image: `${siteConfig.url}${siteConfig.logo}`,
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        sameAs: [
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.twitter,
          siteConfig.socials.linkedin,
          siteConfig.socials.youtube,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/assets/logo/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-mnt-black text-white antialiased selection:bg-mnt-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
