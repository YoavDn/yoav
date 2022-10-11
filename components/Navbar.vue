<script setup lang="ts">
import MobileNav from './MobileNav.vue'
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="navbar">
    <div class="container">
      <div class="logo"><a href="#"> Y.M </a></div>
      <div class="links flex items-center">
        <div class="nav-links">
          <li class="nav-link">
            <!-- <nuxt-link to="/#about"> ABOUT </nuxt-link> -->
            <a href="#about"> ABOUT </a>
          </li>
          <li class="nav-link">
            <!-- <nuxt-link to="/#projects"> PROJECTS </nuxt-link> -->
            <a href="#projects"> PROJECTS </a>
          </li>
          <li class="nav-link">
            <!-- <nuxt-link to="/"> CONTACT </nuxt-link> -->
            <a href="#contact"> CONTACT </a>
          </li>
          <li
            @click="toggleMenu"
            class="menu-link underline-offset-4"
            :class="{ underline: isMenuOpen }"
          >
            MENU &bull;
          </li>
        </div>
        <div class="svg-links flex">
          <li>
            <a
              href="https://github.com/YoavDn"
              target="_blank"
              class="svg-link"
            >
              <img src="~/assets/imgs/github.svg" alt="github-svg" />
            </a>
          </li>

          <li class="linkedin-svg">
            <a
              href="https://www.linkedin.com/in/yoav-mendelson/"
              target="_blank"
              class="svg-link linkedin-svg"
            >
              <img src="~/assets/imgs/linkedin.svg" alt="linkedin-svg" />
            </a>
          </li>
        </div>
      </div>
    </div>
    <Transition name="fade">
      <MobileNav v-if="isMenuOpen" />
    </Transition>
  </div>
</template>

<style lang="scss">
.navbar {
  .fade-enter-active,
  .fade-leave-active {
    transform: translateY(0%);
    transition: all 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
  @apply fixed top-0 left-0 w-full py-4;
  @apply z-50;
  @apply flex-col;
  gap: 30px;
  @apply bg-opacity-50 backdrop-blur-md;

  .container {
    @apply w-full h-full max-w-screen-xl m-auto;
    @apply flex justify-between items-center px-5;
  }

  .logo {
    font-family: 'Nanum Brush Script';
    @apply text-xl text-black bg-lime-400 p-1;
  }

  .links {
    li {
      cursor: pointer;
      @apply text-primary px-4 py-2 rounded-md;

      &:hover {
        @apply bg-opacity-25 bg-lime-300;
      }
    }
  }

  .nav-links {
    @apply sm:flex gap-4 px-2;

    .nav-link {
      @apply sm:flex transition-colors duration-300 hidden;
      font-weight: 600;
    }
    .menu-link {
      @apply sm:hidden;
    }
  }

  .svg-links {
    @apply gap-2;
    li {
      @apply bg-opacity-10 bg-lime-300;
      @apply transition-colors;
    }
    .svg-link {
      @apply fill-lime-300 h-6 w-6;
    }
  }
}
</style>
