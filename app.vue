<script>
import Navbar from '~~/components/Navbar.vue'
import Footer from '~~/components/Footer.vue'

export default {
  head: {
    title: 'Yoav Mendelson | Web Developer ',
  },
}
</script>

<template>
  <NuxtLayout>
    <Navbar />
    <NuxtPage />
    <Footer />
  </NuxtLayout>
</template>

<style lang="scss"></style>
