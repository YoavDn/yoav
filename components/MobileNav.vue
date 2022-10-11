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
      <div class="divider"></div>
      <li class="linkedin-svg">
        <a
          href="https://www.linkedin.com/in/yoav-mendelson/"
          target="_blank"
          class="svg-link linkedin-svg"
        >
          <img src="~/assets/imgs/linkedin.svg" alt="linkedin-svg" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.mobile-menu {
  @apply mt-5;

  ul {
    @apply font-bold py-3;
    .divider {
      width: 1px;
      height: auto;
      @apply bg-primary bg-opacity-50 rounded-md;
    }

    li {
      @apply text-primary;

      &.likedin-svg {
        background-color: red;
      }
    }
  }
}
</style>
