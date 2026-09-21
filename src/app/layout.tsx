import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://multinewtrends.com"),
  title: "Multi New Trends — Everything You Need. One Trend Away.",
  description:
    "Discover groceries, electronics, fashion, home essentials and more with Multi New Trends. Fast delivery, unbeatable prices, and local store support.",
  keywords: [
    "Multi New Trends",
    "MN Trends",
    "Ecommerce",
    "Hyperlocal Delivery",
    "Online Shopping",
    "Grocery Delivery",
    "Gadgets and Electronics",
    "Fashion Trends",
    "Vendor App",
    "Rider App",
  ],
  authors: [{ name: "Multi New Trends" }],
  icons: {
    icon: "/assets/logo/favicon.png",
    shortcut: "/assets/logo/favicon.png",
    apple: "/assets/logo/favicon.png",
  },
  openGraph: {
    title: "Multi New Trends — Everything You Need. One Trend Away.",
    description:
      "From groceries and gadgets to fashion and everyday essentials — discover everything you need in one convenient place.",
    url: "https://multinewtrends.com",
    siteName: "Multi New Trends",
    images: [
      {
        url: "/assets/hero/hero-main.png",
        width: 1200,
        height: 630,
        alt: "Multi New Trends Ecosystem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi New Trends — Everything You Need. One Trend Away.",
    description:
      "From groceries and gadgets to fashion and everyday essentials — discover everything you need in one convenient place.",
    images: ["/assets/hero/hero-main.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FA4C00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/assets/logo/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-mnt-black text-white antialiased selection:bg-mnt-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
