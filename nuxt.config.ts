import { title } from 'process'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
    head: {
        title: 'Yoav Mendelson | Web Developer',
        viewport: 'width=500, initial-scale=1',
        meta: [
            {
                name: 'description',
                content:
                    'A web Developer based in Haifa, Israel. Passionate about building beautiful websites and libraries.',
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content:
                    'Yoav Mendelson, Web Dev, UX/UI, software developer, design'.split(
                        ','
                    ),
            },
            { name: 'og:title', content: 'Yoav Mendelson | Web Developer' },
            {
                name: 'og:description',
                content:
                    'A web Developer based in Haifa, Israel. Passionate about building beautiful websites and libraries.',
            },
            { name: 'og:orl', content: 'https://yoav.vercel.app' },
            { name: 'og:image', content: '@/assets/imgs/mysite.png' },
        ],
    },

    css: ['@/assets/styles/global.scss'],
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
            postcssOptions: require('./postcss.config.js'),
        },
    },
})
