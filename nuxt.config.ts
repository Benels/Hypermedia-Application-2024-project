// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({

  modules: ['@nuxtjs/supabase'],// ['@pinia/nuxt'],
  /*pinia: {
    autoImports: [
        'defineStore',
    ],
  },*/
  devtools: { enabled: true }
})
