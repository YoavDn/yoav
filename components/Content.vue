<script setup lang="ts">
import { useShownOnScroll } from '~~/features/useShownOnScroll'
import { onMounted } from 'vue'

onMounted(() => {
  const scrollEls = document.querySelectorAll('.scroll-hidden')
  scrollEls.forEach(el => useShownOnScroll(el))
})
</script>

<template>
  <section class="about content" id="about">
    <h2 class="scroll-hidden">About.</h2>
    <p class="scroll-hidden">
      Hi, I am Yoav Mendelson, a passionate Frontend/FullStack developer.
      Initially I started Coding out of pure curiosity, it became a hobby and
      after a while I decided to take the next step and go for it. I’m a recent
      graduate from the
      <span>
        <a href="https://www.coding-academy.org/index.php">
          Coding Academy
        </a></span
      >
      Bootcamp Where I created some of my projects. Currently I’m searching for
      an opportunity where i could make an impact. Be sure to contact me if you
      have any questions of just wanna talk :)
    </p>

    <p class="scroll-hidden">
      I have a genuine passion for development and design, i like building new
      things that push me out of my comfort zone and challenge my creativity.
      I'm eager to learn whenever i can, and happy to embrace new ideas. As a
      developer, my goal is make beautiful websites that not only look good, but
      also function in multiple levels. I would love to make your digital vision
      into reality
    </p>
  </section>

  <section class="skills content">
    <h2 class="skills-title">Skills</h2>
    <p>
      I have experience in Vue, Javascript, Typescript, CSS/SASS, HTML, MongoDB,
      Node.js, Tailwind, Astro , React, and more…  I prefer to learn skills as I
      need them, so I can focus on finding solutions to problems instead of
      trying to implement new technologies for the sake of implementing them.
    </p>
  </section>
</template>

<style lang="scss">
.content {
  h2 {
    @apply text-3xl font-900 my-6;
  }
  p {
    @apply mb-12;
    @apply text-base sm:text-xl leading-relaxed text-lime-50;
    font-weight: 300;
  }
}

.skills {
  @apply mb-16;
  .skills-title {
    @apply font-700 text-2xl;
  }
}

.about {
  a {
    @apply text-primary underline underline-offset-4 font-500;
  }
}
</style>
