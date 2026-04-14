<script setup lang="ts">
const site = useSite()
const ogImage = `${site.url}/og-mysite.jpg`

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
  meta: [
    { property: 'og:see_also', content: site.social.github },
    { property: 'og:see_also', content: site.social.linkedin },
    { property: 'og:see_also', content: site.social.x },
  ],
})

useSeoMeta({
  title: site.title,
  description: site.description,
  keywords: 'Yoav Mendelson, builder, products, postpeer, software, developer',
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
