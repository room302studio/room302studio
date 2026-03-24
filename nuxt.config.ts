// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-24',
  ssr: true,
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
  modules: [
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "IBM Plex Sans": {
            wght: [300, 400, 500, 700],
          },
          "IBM Plex Mono": [400, 500],
          Fraunces: {
            wght: [300, 500, 700],
          },
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
        preload: true,
      },
    ],
  ],
  site: {
    url: "https://room302.studio",
    name: "Room 302 Studio",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  icon: {
    serverBundle: 'local',
  },
  content: {},
  app: {
    pageTransition: { name: "page", mode: "out-in" },
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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },
});
