import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/styles/tailwind.css', '@/assets/styles/global.css'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vercel/analytics',
        '@canvas-party/vue',
      ],
    },
  },
  experimental: {
    serverAppConfig: false,
  },
  compatibilityDate: '2025-07-15',
})
