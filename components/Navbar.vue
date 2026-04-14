<script setup lang="ts">
import GithubSvg from '~/assets/imgs/github.svg'
import LinkedinSvg from '~/assets/imgs/linkedin.svg'

const isMenuOpen = ref(false)
const site = useSite()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="page-shell nav-container">
      <NuxtLink class="logo" to="/#top" @click="closeMenu">Y.M</NuxtLink>

      <div class="links flex items-center">
        <ul class="nav-links">
          <li class="nav-link">
            <NuxtLink to="/#about" @click="closeMenu">ABOUT</NuxtLink>
          </li>
          <li class="nav-link">
            <NuxtLink to="/#contact" @click="closeMenu">CONTACT</NuxtLink>
          </li>
          <li class="menu-link">
            <button
              type="button"
              class="underline-offset-4"
              :class="{ underline: isMenuOpen }"
              @click="toggleMenu"
            >
              MENU &bull;
            </button>
          </li>
        </ul>

        <ul class="svg-links flex">
          <li>
            <NuxtLink
              :to="site.social.github"
              external
              target="_blank"
              rel="noreferrer"
              class="svg-link"
            >
              <img :src="GithubSvg" alt="GitHub" />
            </NuxtLink>
          </li>
          <li class="linkedin-svg">
            <NuxtLink
              :to="site.social.linkedin"
              external
              target="_blank"
              rel="noreferrer"
              class="svg-link linkedin-svg"
            >
              <img :src="LinkedinSvg" alt="LinkedIn" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <Transition name="fade">
      <MobileNav v-if="isMenuOpen" @navigate="closeMenu" />
    </Transition>
  </header>
</template>

<style>
@reference "../assets/styles/tailwind-ref.css";

.navbar {
  @apply fixed top-0 left-0 z-50 flex w-full flex-col gap-[30px] bg-black/50 py-4 backdrop-blur-md;

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

  .nav-container {
    @apply flex h-full w-full items-center justify-between;
  }

  .logo {
    @apply bg-lime-400 p-1 font-nanum text-xl text-black;
  }

  .links {
    @apply gap-2;

    li {
      @apply rounded-md px-4 py-2 text-primary;

      &:hover {
        @apply bg-lime-300/25;
      }
    }

    button {
      @apply cursor-pointer;
    }
  }

  .nav-links {
    @apply gap-4 px-2 sm:flex;

    .nav-link {
      @apply hidden font-semibold transition-colors duration-300 sm:flex;
    }

    .menu-link {
      @apply sm:hidden;
    }
  }

  .svg-links {
    @apply gap-2;

    li {
      @apply bg-lime-300/10 transition-colors;

      &.linkedin-svg {
        @apply hidden sm:flex;
      }
    }

    .svg-link {
      @apply h-6 w-6 fill-lime-300;
    }
  }
}
</style>
