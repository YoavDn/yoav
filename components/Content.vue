<script setup lang="ts">
const { registerElement } = useRevealOnScroll()
</script>

<template>
  <section class="about" id="about">
    <div class="prose prose-invert lg:prose-lg">
      <h2 class="scroll-hidden" :ref="registerElement">About me.</h2>
      <p class="scroll-hidden" :ref="registerElement">
        I'm Yoav Mendelson. I enjoy building products and solutions.
        Currently building
        <NuxtLink to="https://postpeer.dev" external target="_blank" rel="noopener">PostPeer</NuxtLink>.
      </p>

      <p class="scroll-hidden" :ref="registerElement">
        I care about taste, craft, and the small details that make
        software feel good to use. I'm happiest in the early, messy
        part of building, when an idea is still figuring out
        what it wants to be. Every now and then I
        <NuxtLink to="/blog">write about it</NuxtLink>.
      </p>

      <br/>

      <p class="scroll-hidden" :ref="registerElement">
        When I'm not coding, you can usually find me drinking coffee,
        skateboarding, or hanging out with my dog.
      </p>
    </div>
  </section>
</template>

<style scoped>
@reference "../assets/styles/tailwind-ref.css";

.about {
  @apply mx-auto w-full max-w-[85ch] px-4 py-6;
}

.prose {
  @apply max-w-none;
}

a {
  @apply font-medium text-primary underline underline-offset-4;

  &:hover {
    @apply decoration-wavy;
  }
}
</style>
