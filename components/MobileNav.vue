<script setup lang="ts"></script>

<template>
  <div class="mobile-menu">
    <ul class="flex gap-8 px-5">
      <li>
        <a href="#about">ABOUT</a>
      </li>
      <li>
        <a href="#projects">PROJECTS</a>
      </li>
      <li>
        <a href="#contact">CONTACT</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.mobile-menu {
  @apply bg-opacity-50 backdrop-blur-md mt-5;

  ul {
    @apply font-bold;

    li {
      @apply text-primary;
    }
  }
}
</style>
