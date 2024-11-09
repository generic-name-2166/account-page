import { defineNuxtConfig } from "nuxt/config";

const baseURL = "/account-page";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL,
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  $production: {
    devtools: { enabled: false },
  },
  future: {
    compatibilityVersion: 4,
  },
  srcDir: "src/",
  ssr: true,
  nitro: {
    preset: "github-pages",
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
