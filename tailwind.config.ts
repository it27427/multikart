import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImages: {
        conicGradient:
          "conic-gradient(from 90deg, #f97316, #f59e0b, #eab308, #84cc16, #22c55e, #10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6, #6366f1, #8b5cf6, #a855f7, #d946ef, #ec4899, #f43f5e)",
      },

      fontFamily: {
        body: [
          "Be Vietnam Pro",
          "Zalando Sans Expanded",
          "Ubuntu",
          "DM Sans",
          "PT Sans",
          "Outfit",
          "Bebas Neue",
          "Saira",
          "sans-serif",
        ],
        vietnam: ["Be Vietnam Pro", "sans-serif"],
        zalando: ["Zalando Sans Expanded", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
        pt: ["PT Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
        saira: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }: { addBase: any; theme: any }) => {
      addBase({
        html: {
          fontFamily: theme("fontFamily.body").join(", "),
        },
      });
    }),
  ],
};

export default config;
