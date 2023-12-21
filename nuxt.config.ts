// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  modules: [
    // '@vueuse/motion/nuxt',
    "@nuxt/content",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/ui",
    // '@nuxtjs/google-gtag',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [300, 400, 500, 700],
          "Source Code Pro": [400, 700],
        },
      },
    ],
  ],
  content: {
    documentDriven: true,
  },
  ui: {
    icons: 'all'
  },
  // 'google-gtag': {
  //   id: 'G-6XGQNYZQMC',
  // },
  // css: ['tachyons/css/tachyons.min.css'],
  app: {
    head: {
      title: "Room 302 Studio",
      meta: [
        { charset: "utf-8" },
        { name: "title", content: "Room 302 Studio" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "An innovative and creative space where people collaborate on projects and cultivate ideas.",
        },
        { property: "og:title", content: "Room 302 Studio" },
        {
          property: "og:description",
          content:
            "An innovative and creative studio where people collaborate on projects and cultivate ideas.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://room302.studio" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Room 302 Studio" },
        {
          name: "twitter:description",
          content:
            "An innovative and creative space where people collaborate on projects and cultivate ideas.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
