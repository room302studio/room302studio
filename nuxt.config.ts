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
  devServer: {
    port: 3302,
  },
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
          // Primary sans-serif
          "IBM Plex Sans": {
            wght: [300, 400, 500, 700],
          },
          // Signature monospace font - our differentiator
          "IBM Plex Mono": [400, 500],
          // Serif for occasional accent
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
