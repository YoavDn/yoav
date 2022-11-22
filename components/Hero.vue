<script setup lang="ts">
import DoodleLineSvg1 from '~~/assets/imgs/doodle-line1.svg'
import DoodleLineSvg2 from '~~/assets/imgs/doodle-line2.svg'
import DoodleLineSvg3 from '~~/assets/imgs/doodle-line3.svg'
import DoodleLineSvg4 from '~~/assets/imgs/doodle-line4.svg'
import DoodleLineSvg5 from '~~/assets/imgs/doodle-line5.svg'
import GithubSvg from '~~/assets/imgs/github.svg'
import LinkedinSvg from '~~/assets/imgs/linkedin.svg'
import CanvasParty from '@canvas-party/vue'

const showTvLinks = ref<Boolean>(false)
const mounted = ref(false)
const canvasPartyOptions = {
	colors: ['#A3E635', '#A3E635'],
	count: 80,
}

onMounted(() => {
	mounted.value = true
})
</script>

<template>
	<canvas-party
		v-if="mounted"
		class="canvas-party"
		:type="'confetti'"
		:options="canvasPartyOptions"
	/>
	<div class="hero">
		<div class="hero-title">
			<h2>
				Hello, I'm
				<span class="text-primary bold"> Yoav </span>
				<br />
				web developer.
			</h2>
		</div>
		<div
			class="hero-svg"
			@mouseover="() => (showTvLinks = true)"
			@mouseleave="() => (showTvLinks = false)"
		>
			<img
				class="hero-img"
				src="~~/assets/imgs/hero-img.png"
				alt="hero-img"
			/>
			<img
				v-if="!showTvLinks"
				class="hero-img-tv"
				src="~~/assets/imgs/tv-noise.gif"
				alt="tv-noise-bg"
			/>
			<ul v-if="showTvLinks" class="tv-links">
				<li>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/yoav-mendelson/"
					>
						<img :src="LinkedinSvg" alt="gitHub Svg" />
					</a>
				</li>
				<li>
					<a target="_blank" href="https://github.com/YoavDn">
						<img :src="GithubSvg" alt="linkedIn Svg" />
					</a>
				</li>
				<li>
					<a target="_blank" href="mailto:yoavdan.m@gmail.com"> @ </a>
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
		<h2><a href="#about">Scrool </a></h2>
		<img
			class="m-auto"
			src="~~/assets/imgs/down-arrow.svg"
			alt="down-arrow"
		/>
	</div>
</template>

<style lang="scss">
// @import '../assets/styles/main.scss';

.scroll-btn {
	cursor: pointer;
	@apply absolute bottom-4 w-32 left-1/2 text-4xl -translate-x-1/2;

	h2 {
		@apply font-nanum text-center;

		&:hover {
			@apply text-primary;
		}
		// font-family: "Nanum Brush Script";;
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
			transform: translateY(0px);
			animation-delay: 0.05s;
		}
	}
}

.hero {
	@apply mx-auto px-4 py-6 gap-5;
	@apply w-full max-w-[85ch];
	@apply w-full flex flex-col justify-center items-center;
	@apply h-screen md:flex-row md:justify-between;
}

.hero-title {
	@apply py-0 mx-auto w-full;
	@apply text-xl max-w-full;

	h2 {
		font-family: 'Nanum Brush Script';
		@apply text-center;
		@apply text-[4.3rem] leading-none sm:text-5xl md:text-7xl lg:text-8xl mb-5;
	}
}

.hero-svg {
	@apply z-30 relative;

	.hero-img {
		@apply md:w-[550px] w-[290px];
	}

	.hero-img-tv {
		@apply w-[100px] h-20 top-[27%] left-[10%];
		@apply absolute md:h-20 md:w-[114px] md:top-[27%] md:right-[48%] rotate-2;
	}

	.tv-links {
		@apply border-[.3px] border-white bg-black;
		@apply text-base   font-700;
		@apply w-[100px] h-20 top-[27%] left-[10%];
		@apply absolute md:h-20 md:w-[114px] md:top-[27%] md:right-[48%] rotate-2;

		li {
			@apply mx-3 text-primary text-end;
			cursor: pointer;

			img {
				@apply w-4 inline text-end;
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
.canvas-party {
	position: absolute;
	width: 100%;
	height: 100vh;
}
</style>
