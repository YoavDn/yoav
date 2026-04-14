<script setup lang="ts">
const site = useSite()
const ogImage = `${site.url}/mysite.png`

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
})

useSeoMeta({
  title: site.title,
  description: site.description,
  keywords: 'Yoav Mendelson, Web Dev, UX/UI, software developer, design',
  ogTitle: site.title,
  ogDescription: site.description,
  ogUrl: site.url,
  ogImage,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: site.title,
  twitterDescription: site.description,
  twitterImage: ogImage,
})
</script>

<template>
  <NuxtLoadingIndicator color="rgb(163 230 53)" :height="3" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
