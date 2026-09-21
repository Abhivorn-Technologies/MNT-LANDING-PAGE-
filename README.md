# MULTI NEW TRENDS (MN TRENDS) — Landing Page

> **Official Tagline:** EVERYTHING YOU NEED. ONE TREND AWAY.

A production-ready, high-performance landing page for **MULTI NEW TRENDS** built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Brand Design System

| Color Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Orange** | `#FA4C00` | CTA buttons, active states, key highlights, glowing accents |
| **Secondary Orange** | `#FFBD59` | Gradient stops, star ratings, badges, subtle accents |
| **Black** | `#050505` | Deep background surface |
| **Dark** | `#111111` / `#1E1E22` | Cards, elevated glass panels, modal surfaces |
| **Cream** | `#FFF8EF` | Light button hovers, contrast text accents |
| **White** | `#FFFFFF` | Primary headings, clear readable body copy |

---

## ⚡ Replayable Scroll Animation System

All sections and interactive elements utilize an **IntersectionObserver** engine (`useGlobalScrollReveal` & `useScrollAnimation`):
- When an element enters the viewport, it triggers smooth, cubic-bezier entrance animations (`fade-up`, `scale-in`, `fade-left`, `fade-right`, `blur-in`).
- When an element leaves the viewport on scroll down or up, its state resets cleanly so that returning to the section **replays the animation seamlessly**.
- Full accessibility support for `prefers-reduced-motion`.

---

## 📱 The 15 Complete Page Sections

1. **Navbar**: Sticky header with glass backdrop blur, active section scroll spy, search popup modal, and mobile drawer.
2. **Hero**: Cinematic lighting, orange gradient heading, 3D floating phone mockups, delivery speed badges, and 4 core value props.
3. **Three-App Ecosystem**: Interactive showcase cards for the **User App**, **Vendor App**, and **Rider App**.
4. **Shop by Category**: 12 curated departments with hover scale, dynamic tags, and arrow indicators.
5. **How It Works**: 3-step timeline (`01 DISCOVER`, `02 ORDER`, `03 DELIVERED`) with connecting lines.
6. **Featured Deals**: High-impact promotional section with live countdown ticker, discount badges, and 1-click cart action.
7. **User App Showcase**: Dark flagship showcase with dual floating phones illustrating real UI screens.
8. **Vendor Section**: Store digitalization hub with revenue growth metrics and partner onboarding.
9. **Rider Section**: Delivery network spotlight with earnings preview and surge bonus tracker.
10. **Why Choose Us**: 6 frosted glass feature cards with modern icons.
11. **Loved by Thousands (Testimonials)**: Verified customer reviews with 5-star ratings.
12. **Download App**: App Store and Google Play conversion section with interactive QR code scanner.
13. **Newsletter**: Instant subscription form with interactive confirmation toast.
14. **Final CTA**: High-converting closing banner with branded gradient buttons.
15. **Footer**: 4-column structured footer with social icons, legal links, and copyright 2026.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🔐 Environment Variables

This project does not require private API keys or database connections for local development or static hosting. 

For optional customization and environment setup, refer to [.env.example](.env.example).

