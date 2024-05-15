// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({

  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts', "@nuxtjs/tailwindcss"],// ['@pinia/nuxt'],
  
  googleFonts: {
    families: {
      Roboto: true,
      Rubik: true
    }
  },


  devtools: { enabled: true },
  supabase: {
    redirect: false
  },

  css: ['~/assets/css/main.css'],
  postcss:{
    plugins:{tailwindcss:{}, autoprefixer:{}}}
})