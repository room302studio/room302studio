// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
    'nuxt-gtag',
    '@tresjs/nuxt',
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: [300, 400, 500, 700],
          "Source Code Pro": [400, 700],
          "IBM Plex Sans": [400, 500, 600, 700],
        },
      },
    ],
  ],
  content: {
    // documentDriven: true,
  },
  ui: {
    icons: 'all'
  },
  gtag: {
    id: 'G-6XGQNYZQMC',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
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
