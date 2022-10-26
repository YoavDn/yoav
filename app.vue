<script setup lang="ts">
import Navbar from '~~/components/Navbar.vue'
import Footer from '~~/components/Footer.vue'

useHead({
  title: 'Yoav Mendelson | Web Developer',
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
        'Yoav Mendelson, Web Dev, UX/UI, software developer, design'.split(','),
    },
    { name: 'og:title', content: 'Yoav Mendelson | Web Developer' },
    {
      name: 'og:description',
      content:
        'A web Developer based in Haifa, Israel. Passionate about building beautiful websites and libraries.',
    },
    { name: 'og:orl', content: 'https://yoav.vercel.app' },
    { name: 'og:image', content: '~~/assets/imgs/mysite.png' },
  ],
})
</script>

<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<style lang="scss"></style>
