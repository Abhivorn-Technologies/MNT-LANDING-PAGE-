import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mnt: {
          orange: "#FA4C00",
          "orange-hover": "#E04400",
          "orange-light": "#FFBD59",
          "orange-glow": "rgba(250, 76, 0, 0.25)",
          "orange-subtle": "rgba(250, 76, 0, 0.08)",
          black: "#050505",
          dark: "#111111",
          surface: "#171717",
          card: "#1E1E22",
          "card-hover": "#25252B",
          border: "#2A2A30",
          "border-subtle": "rgba(255, 255, 255, 0.08)",
          cream: "#FFF8EF",
          "cream-warm": "#FAF4E6",
          "cream-dark": "#F3E9D9",
          muted: "#94949E",
          "muted-light": "#71717A",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(250, 76, 0, 0.35)",
        "glow-lg": "0 0 60px -10px rgba(250, 76, 0, 0.45)",
        "glow-orange-sm": "0 0 15px rgba(250, 76, 0, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 20px 40px -15px rgba(250, 76, 0, 0.2)",
        subtle: "0 4px 20px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "float-slow": "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.05)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
