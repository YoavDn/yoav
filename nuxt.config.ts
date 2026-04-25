import { defineNuxtConfig } from 'nuxt/config'
import { readdirSync } from 'node:fs'
import { join, parse } from 'node:path'

const blogDirectory = join(process.cwd(), 'content', 'blog')
const blogRoutes = readdirSync(blogDirectory)
  .filter((file) => file.endsWith('.md'))
  .map((file) => `/blog/${parse(file).name}`)

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
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
  nitro: {
    prerender: {
      routes: ['/blog', ...blogRoutes],
    },
  },
  experimental: {
    payloadExtraction: false,
    serverAppConfig: false,
  },
  compatibilityDate: '2025-07-15',
})
