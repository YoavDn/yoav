<script setup lang="ts">
import DoodleLineSvg1 from '~~/assets/imgs/doodle-line1.svg'
import DoodleLineSvg2 from '~~/assets/imgs/doodle-line2.svg'
import DoodleLineSvg3 from '~~/assets/imgs/doodle-line3.svg'
import DoodleLineSvg4 from '~~/assets/imgs/doodle-line4.svg'
import DoodleLineSvg5 from '~~/assets/imgs/doodle-line5.svg'
import GithubSvg from '~~/assets/imgs/github.svg'
import HeroImg from '~~/assets/imgs/hero-img.png'
import LinkedinSvg from '~~/assets/imgs/linkedin.svg'
import DownArrowSvg from '~~/assets/imgs/down-arrow.svg'
import TvNoiseGif from '~~/assets/imgs/tv-noise.gif'

const showTvLinks = ref(false)
const site = useSite()
</script>

<template>
  <section class="hero-section">
    <LazyHeroConfetti />

    <div class="hero">
      <div class="hero-title">
        <h1>
          Hello, I'm
          <span class="text-primary bold">Yoav</span>
          <br />
          <span class="text-7xl">Software Developer</span>
        </h1>
      </div>

      <div
        class="hero-svg"
        @mouseover="showTvLinks = true"
        @mouseleave="showTvLinks = false"
      >
        <img class="hero-img" :src="HeroImg" alt="Illustrated portrait of Yoav" />
        <img v-if="!showTvLinks" class="hero-img-tv" :src="TvNoiseGif" alt="" />
        <ul v-else class="tv-links">
          <li>
            <NuxtLink
              :to="site.social.linkedin"
              external
              target="_blank"
              rel="noreferrer"
            >
              <img :src="LinkedinSvg" alt="LinkedIn" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="site.social.github"
              external
              target="_blank"
              rel="noreferrer"
            >
              <img :src="GithubSvg" alt="GitHub" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`mailto:${site.email}`" external aria-label="Email Yoav">
              @
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="scroll-btn flex-col items-center justify-center">
      <div class="doodles flex justify-between">
        <img class="doodle-line line-5" :src="DoodleLineSvg5" alt="" />
        <img class="doodle-line line-4" :src="DoodleLineSvg4" alt="" />
        <img class="doodle-line line-3" :src="DoodleLineSvg3" alt="" />
        <img class="doodle-line line-2" :src="DoodleLineSvg2" alt="" />
        <img class="doodle-line line-1" :src="DoodleLineSvg1" alt="" />
      </div>
      <h2><NuxtLink to="/#about">Scroll</NuxtLink></h2>
      <img class="scroll-arrow" :src="DownArrowSvg" alt="Scroll down" />
    </div>
  </section>
</template>

<style lang="scss">
@reference "../assets/styles/tailwind-ref.css";

.hero-section {
  @apply relative;
}

.scroll-btn {
  cursor: pointer;
  @apply absolute bottom-4 w-32 left-1/2 text-4xl -translate-x-1/2;

  h2 {
    @apply font-nanum text-center;

    &:hover {
      @apply text-primary;
    }
  }

  .doodles {
    .doodle-line {
      @apply animate-bounce;
    }

    .line-1 {
      animation-delay: 0.2s;
    }

    .line-2 {
      transform: translateY(-10px);
      animation-delay: 0.1s;
    }

    .line-3 {
      transform: translateY(-15px);
      animation-delay: 1s;
    }

    .line-4 {
      transform: translateY(-10px);
      animation-delay: 0.1s;
    }

    .line-5 {
      animation-delay: 0.05s;
    }
  }

  .scroll-arrow {
    @apply block mx-auto;
  }
}

.hero {
  @apply mx-auto flex h-screen w-full max-w-[85ch] flex-col items-center justify-center gap-5 px-4 py-6 md:flex-row md:justify-between;
}

.hero-title {
  @apply z-10 mx-auto flex w-full max-w-full flex-col gap-4 py-0 text-xl;

  h1 {
    font-family: 'Nanum Brush Script';
    @apply mb-5 text-center text-[4.3rem] leading-none sm:text-5xl md:text-7xl lg:text-8xl;
  }
}

.hero-svg {
  @apply relative z-30;

  .hero-img {
    @apply w-[290px] md:w-[550px];
  }

  .hero-img-tv {
    @apply absolute left-[10%] top-[27%] h-20 w-[100px] rotate-2 md:right-[48%] md:h-20 md:w-[114px];
  }

  .tv-links {
    @apply absolute left-[10%] top-[27%] h-20 w-[100px] rotate-2 border-[0.3px] border-white bg-black text-base font-bold md:right-[48%] md:h-20 md:w-[114px];

    li {
      @apply mx-3 text-end text-primary;
      cursor: pointer;

      img {
        @apply inline w-4 text-end;
      }
    }
  }
}

@keyframes grow {
	0% {
		scale: 1;
	}

	100% {
		scale: 1.01;
	}
}

@keyframes doodle {
	0% {
		transform: rotate(0);
		scale: 1;
	}

	100% {
		transform: rotate(43deg);
		scale: 1.01;
	}
}
</style>
