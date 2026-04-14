<script setup lang="ts">
import LinkSvg from '~/assets/imgs/link.svg'
import ArrowSvg from '~/assets/imgs/down-arrow.svg'

const currYear = new Date().getFullYear()
const site = useSite()
</script>

<template>
  <footer class="footer" id="contact">
    <h2>Contact.</h2>
    <ul class="links">
      <li>
        <NuxtLink :to="site.social.linkedin" external target="_blank" rel="noreferrer">
          LinkedIn <img :src="LinkSvg" alt="" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="site.social.github" external target="_blank" rel="noreferrer">
          GitHub <img :src="LinkSvg" alt="" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="site.social.x" external target="_blank" rel="noreferrer">
          Twitter <img :src="LinkSvg" alt="" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`mailto:${site.email}`" external>
          Email <img :src="LinkSvg" alt="" />
        </NuxtLink>
      </li>
    </ul>
    <div class="back-to-top">
      <img :src="ArrowSvg" alt="Arrow pointing up" />
      <NuxtLink to="/#top">Back to top</NuxtLink>
    </div>

    <h3 class="mt-10 w-full text-center text-base font-normal">
      &copy;{{ currYear }} Yoav Mendelson
    </h3>
  </footer>
</template>

<style scoped>
@reference "../assets/styles/tailwind-ref.css";
.footer {
  @apply mx-auto flex w-full max-w-[85ch] flex-col items-center px-4 py-6;

  h2 {
    @apply mb-16 text-center;
  }

  .links {
    @apply mt-2 grid grid-cols-2 gap-4 text-center text-lg text-primary md:grid-cols-4 md:gap-x-12;

    li {
      @apply text-xl;

      a {
        @apply inline-flex items-center gap-2;
      }

      &:hover {
        @apply underline-offset-4 decoration-wavy underline;
      }
    }

    img {
      @apply inline h-4;
    }
  }
}

.back-to-top {
  @apply mt-24 inline-flex w-full flex-col items-center gap-2 text-center font-nanum;

  a {
    @apply block text-4xl;

    &:hover {
      @apply text-primary;
    }
  }

  img {
    @apply block h-6 w-auto rotate-180;
  }
}
</style>
