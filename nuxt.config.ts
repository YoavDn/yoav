import tailwindTypography from '@tailwindcss/typography';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    tailwindcss: {
        config: {
            plugins: [tailwindTypography]
        }
    },
    css: [
        '@/assets/styles/main.scss',
    ],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.ts'),
        },
    }
})

