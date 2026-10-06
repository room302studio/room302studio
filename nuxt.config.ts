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
  sitemap: {
    strictNuxtContentPaths: true,
    // strictNuxtContentPaths emits a sitemap URL for every Nuxt Content
    // document. content/members/*.md have no matching route — the bios render
    // inline on /members via ContentRenderer — so those URLs 404.
    exclude: [
      // Anything *under* /members. A glob ("/members/**" or "/members/*") also
      // matches /members itself, which is a real page; this requires at least
      // one character after the slash, so the parent survives.
      /^\/members\/.+/,
    ],
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
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://umami.tools.ejfox.com https://umami-plus.tools.ejfox.com; connect-src 'self' https://umami.tools.ejfox.com https://room302-contact.ejfox.workers.dev;",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      // Umami 3.4 (self-hosted). ?v= skips a pre-3.4 tracker still cached at Cloudflare's edge,
      // which lacks data-performance + getSession (recorder.js needs them). recorder.js = heatmaps
      // and session replay with STRICT masking (all text + inputs hidden; sampling is set inside
      // Umami, not here). umami-plus = scroll depth, engaged time, copy (length only), 404s;
      // outbound + mailto stay with plugins/umami-funnel.client.ts so nothing counts twice.
      script: [
        {
          src: "https://umami.tools.ejfox.com/script.js?v=3.4.0",
          defer: true,
          "data-website-id": "b069146f-591b-47a8-86fd-48ce126b1b9f",
          "data-performance": "true",
        },
        {
          src: "https://umami-plus.tools.ejfox.com/umami-plus.js?v=3",
          defer: true,
          "data-outbound": "false",
          "data-mailto": "false",
          "data-feeds": "false",
        },
        {
          src: "https://umami.tools.ejfox.com/recorder.js",
          defer: true,
          "data-website-id": "b069146f-591b-47a8-86fd-48ce126b1b9f",
        },
      ],
    },
  },
});
