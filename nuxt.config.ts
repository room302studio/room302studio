// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false, // for netlify deploy
    modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    [
      '@nuxt/image',
      {
        provider: 'static',
      },
    ],
    ['@nuxtjs/google-fonts', {
      families: {
        'Source Code Pro': [200, 400, 700, 900],
      },
    }],
  ],
  content: {
    documentDriven: true,
  },
  css: ['tachyons/css/tachyons.min.css'],
  head: {
    title: 'Room 302 Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'title', content: 'Room 302 Studio' },      
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'An innovative and creative space where people collaborate on projects and cultivate ideas.'
      },
      { property: 'og:title', content: 'Room 302 Studio' },
      { property: 'og:description', content: 'An innovative and creative space where people collaborate on projects and cultivate ideas.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://room302.studio' },
      { property: 'og:image', content: 'https://room302.studio/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Room 302 Studio' },
      { name: 'twitter:description', content: 'An innovative and creative space where people collaborate on projects and cultivate ideas.' },
      { name: 'twitter:image', content: 'https://room302.studio/twitter-image.jpg' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
})
