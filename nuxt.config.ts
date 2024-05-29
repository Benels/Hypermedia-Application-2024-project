// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore

export default defineNuxtConfig({

  app: {
    head: {
      title: 'HERmet',
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'HERmet website, where you can find all the information you need about us: people, projects, services, contacts.' },
        { name: 'keywords', content: 'HERmet, Antiviolence Center, People, Projects, Services, Contacts' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //social media meta tags
        { name: 'og:title', content: 'HERmet' },
        { name: 'og:description', content: 'HERmet website, where you can find all the information you need about us: people, projects, services, contacts.' },
        { name: 'og:url', content: 'https://hypermediaapplicationproject2024-benels-projects.vercel.app/' },
        { name: 'og:image', content: 'https://imgur.com/a/3XjyyVq' },
        { name: 'author', content: 'TheCEOs' },
      ],
    }
  },

  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts', "@nuxtjs/tailwindcss"],// ['@pinia/nuxt'],
  googleFonts: {
    families: {
      Roboto: true,
      Rubik: true,
      Caveat: true,
      "Indie Flower": true
    }
  },


  devtools: { enabled: true },
  supabase: {
    redirect: false
  },

  runtimeConfig: {
    public:{
      OPENAI_KEY: process.env.OPENAI_KEY
    }
  },

  css: ['~/assets/css/main.css'],
  postcss:{
    plugins:{tailwindcss:{}, autoprefixer:{}}},

})