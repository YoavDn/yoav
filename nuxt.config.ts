
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

     css: [
        '@/assets/styles/global.scss',
    ],
    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '@/assets/styles/global.scss',
        configPath: '@/tailwind.config.js',
        //  config: {
    //   plugins: [tailwindTypography]
    // }
    },
   
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js')
        }
    }
})

