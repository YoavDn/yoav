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
        I build in everything, but my favorite technologies are
        <span class="link-list">
          <span class="link">TypeScript</span>,
          <span class="link">Postgres</span>,
          <span class="link">Node.js</span>,
          <span class="link">Vue</span>,
          <span class="link">React</span>,
          <span class="link">Python</span>,
          <span class="link">GraphQL</span>,
          <span class="link">Kafka</span>,
          and more.
        </span>
      </p>

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

a,
.link {
  @apply font-medium text-primary underline underline-offset-4;

  &:hover {
    @apply decoration-wavy;
  }
}

.link-list {
  @apply inline;
}
</style>
