module.exports = {
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
  plugins: [],
};
