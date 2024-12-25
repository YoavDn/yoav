<script setup lang="ts">
import { useShownOnScroll } from '~~/features/useShownOnScroll'
import { onMounted } from 'vue'

onMounted(() => {
  const scrollEls = document.querySelectorAll('.scroll-hidden')
  scrollEls.forEach(el => useShownOnScroll(el))
})
</script>

<template>
  <main class="prose lg:prose-lg prose-invert m-auto">
    <section class="about content" id="about">
      <h2 class="scroll-hidden">About me.</h2>
      <p class="scroll-hidden">
        Hi! I'm Yoav Mendelson, a software developer currently working at
        <a href="https://www.rezonate.io/">Rezonate</a>, which was recently acquired by <a href="https://www.silverfort.com/">Silverfort</a>. <br />
        I started Coding out of pure curiosity, it became a hobby and after a
        while I decided to take the next step and go for it do it full time.
      </p>

      <p class="scroll-hidden">
        I have a genuine passion for development and design, i like building new
        things that push me out of my comfort zone and challenge my creativity.
        I'm eager to learn whenever I can, and happy to embrace new ideas. As a
        developer, my goal is make beautiful websites that not only look good,
        but also function in multiple levels.
      </p>

      <p class="scroll-hidden">
        I am familiar with a variety of technologies including  
        <a class="link">TypeScript</a>, 
        <a class="link">Python</a>, 
        <a class="link">Postgres</a>, 
        <a class="link">Kafka</a>, 
        <a class="link">Nx</a>, 
        <a class="link">Node.js</a>, 
        <a class="link">Nestjs</a>, 
        <a class="link">Graphql</a>, 
        <a class="link">Angular</a>, 
        <a class="link">Vue.js</a>, 
        <a class="link">React</a>, 
        and more.
      </p>

	    <p class="scroll-hidden">When I'm not conding you can find me drinking coffee, skateboarding or hanging out with my dog</p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
a {
  @apply text-primary underline underline-offset-4 font-500;

  &:hover {
    @apply decoration-wavy;
  }
}
</style>
