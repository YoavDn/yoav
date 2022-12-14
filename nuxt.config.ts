import { title } from 'process'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['@/assets/styles/global.scss'],


})
