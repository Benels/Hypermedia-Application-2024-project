// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({

  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts'],// ['@pinia/nuxt'],
  
  googleFonts: {
    families: {
      Roboto: true,
      Rubik: true
    }
  },

  //devtools
/*
  router: {
    // Personalizza le route qui
    extendRoutes(routes, resolve) {
      // Esempio di personalizzazione della route
      routes.push({
        name: 'custom-route',
        path: '/custom',
        component: resolve(__dirname, 'our_women/index.vue')
      })
    }
  }

*/


  /*pinia: {
    autoImports: [
        'defineStore',
    ],
  },*/
  devtools: { enabled: true },
  supabase: {
    redirect: false
  }
})
