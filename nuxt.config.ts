// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    '@vueuse/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Source Code Pro': [200, 400, 700, 900],
      },
    }],
  ],
  css: ['tachyons/css/tachyons.min.css'],

})
