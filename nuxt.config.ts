// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-07-27",
  ssr: true,
  // Keep the flat root project structure (pages/, components/, etc. at root)
  // rather than moving everything under app/ for the Nuxt 4 default.
  srcDir: ".",
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: [],
      failOnError: false,
    },
  },
  devServer: {
    port: 3302,
  },
  css: ["~/assets/css/main.css", "~/assets/css/academic.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
  ],
  fonts: {
    families: [
      { name: "IBM Plex Sans", provider: "google", weights: [300, 400, 500, 700] },
      { name: "IBM Plex Mono", provider: "google", weights: [400, 500] },
    ],
  },
  site: {
    url: "https://room302.studio",
    name: "Room 302 Studio",
  },
  icon: {
    serverBundle: "local",
  },
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      title: "Room 302 Studio — Data Visualization & Interactive Studio",
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Room 302 Studio builds data visualizations, interactive tools, and prototypes. We've made election graphics for the AP, mapped coral reefs for WCS, and supported a studio member's indie game covered by Fast Company.",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content:
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://umami.tools.ejfox.com; connect-src 'self' https://umami.tools.ejfox.com;",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://umami.tools.ejfox.com/script.js",
          defer: true,
          "data-website-id": "b069146f-591b-47a8-86fd-48ce126b1b9f",
        },
      ],
    },
  },
});
