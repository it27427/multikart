import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "pathe";
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],

  primevue: {
    unstyled: true,
  },

  css: ["primeicons/primeicons.css", "@/assets/scss/main.scss"],

  alias: {
    "@": resolve(__dirname, "./app"),
    "@/": resolve(fileURLToPath(import.meta.url), "./app"),
    "~": resolve(fileURLToPath(import.meta.url), "./"),
  },
} as any);
