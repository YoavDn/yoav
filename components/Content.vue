<script setup lang="ts">
const { registerElement } = useRevealOnScroll()
</script>

<template>
  <section class="about prose prose-invert lg:prose-lg" id="about">
    <h2 class="scroll-hidden" :ref="registerElement">About me.</h2>
    <p class="scroll-hidden" :ref="registerElement">
      Hi! I'm Yoav Mendelson, a software developer currently working at
      <NuxtLink to="https://www.rezonate.io/" external target="_blank" rel="noreferrer">Rezonate</NuxtLink>,
      which was recently acquired by
      <NuxtLink
        to="https://www.silverfort.com/"
        external
        target="_blank"
        rel="noreferrer"
      >Silverfort</NuxtLink>.
      <br />
      I started coding out of pure curiosity. It quickly became a hobby, and
      after a while I decided to go all in and do it full-time.
    </p>

    <p class="scroll-hidden" :ref="registerElement">
      I have a genuine passion for development and design. I like building
      things that push me out of my comfort zone and challenge my creativity.
      I'm eager to learn whenever I can and happy to embrace new ideas. My goal
      is to build beautiful websites that not only look good, but also work
      well across every layer.
    </p>

    <p class="scroll-hidden" :ref="registerElement">
      I work with
      <span class="link-list">
        <span class="link">TypeScript</span>,
        <span class="link">Python</span>,
        <span class="link">Postgres</span>,
        <span class="link">Kafka</span>,
        <span class="link">Nx</span>,
        <span class="link">Node.js</span>,
        <span class="link">NestJS</span>,
        <span class="link">GraphQL</span>,
        <span class="link">Angular</span>,
        <span class="link">Vue</span>,
        <span class="link">React</span>,
        and more.
      </span>
    </p>

    <p class="scroll-hidden" :ref="registerElement">
      When I'm not coding, you can usually find me drinking coffee,
      skateboarding, or hanging out with my dog.
    </p>
  </section>
</template>

<style lang="scss" scoped>
@reference "../assets/styles/tailwind-ref.css";

.about {
  @apply mx-auto w-full max-w-[85ch] px-4 py-6;
}

a,
.link {
  @apply text-primary underline underline-offset-4 font-medium;

  &:hover {
    @apply decoration-wavy;
  }
}

.link-list {
  @apply inline;
}
</style>
