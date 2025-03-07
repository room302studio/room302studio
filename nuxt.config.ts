// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: {
  //   enabled: true,
  // },
  ssr: false,
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false,
  //   },
  // },
  modules: [
    // '@vueuse/motion/nuxt',
    "@nuxt/content",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-gtag",
    "@tresjs/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [300, 400, 500, 600, 700, 800],
          "Source Code Pro": [400, 700],
          "IBM Plex Sans": [300, 400, 500, 600, 700, 800],
        },
      },
    ],
  ],
  // routeRules: {
  //   "/contact": { prerender: true },
  // },
  content: {
    // documentDriven: true,
  },
  gtag: {
    id: "G-6XGQNYZQMC",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Room 302 Studio",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "Room 302 Studio RSS Feed",
          href: "/rss.xml",
        },
      ],
      script: [
        {
          src: "https://js.hsforms.net/forms/v2.js",
          defer: true,
        },
      ],
    },
  },
});
