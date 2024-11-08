import { defineNuxtConfig } from "nuxt/config";

const baseUrl = "/account-page";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      base: baseUrl,
    },
  },
});
