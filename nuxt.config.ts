import tailwindTypography from '@tailwindcss/typography';
import postcssConfig from './postcss.config.js'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

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

