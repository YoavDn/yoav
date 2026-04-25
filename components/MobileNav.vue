<script setup lang="ts">
import XSvg from '~/assets/imgs/x.svg'

const emit = defineEmits<{
  navigate: []
}>()

const site = useSite()
</script>

<template>
  <div class="mobile-menu">
    <ul class="page-shell">
      <li>
        <NuxtLink to="/#about" @click="emit('navigate')">ABOUT</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" @click="emit('navigate')">WRITING</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#contact" @click="emit('navigate')">CONTACT</NuxtLink>
      </li>
      <li class="divider" aria-hidden="true"></li>
      <li class="x-svg">
        <NuxtLink
          :to="site.social.x"
          external
          target="_blank"
          rel="noreferrer"
          class="svg-link x-svg"
        >
          <img :src="XSvg" alt="X" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@reference "../assets/styles/tailwind-ref.css";
.mobile-menu {
  @apply mt-5;

  ul {
    @apply flex items-center gap-8 py-3 font-bold;

    .divider {
      @apply h-6 w-px rounded-md bg-primary/50;
    }

    li {
      @apply text-primary;

      &.x-svg {
        @apply ml-auto;
      }
    }
  }
}
</style>
