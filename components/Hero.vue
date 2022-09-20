<script setup lang='ts'>

</script>


<template>
	<!-- <div class="blur-bg">
		<div class="light"> </div>
	 </div> -->
	<div class="hero">
		<div class="hero-title">
			<h2>
				Hello, I'm
				<span class="text-primary bold text-lime-300"> Yoav </span>
				<br />
				web developer.
			</h2>
		</div>
		<div class="hero-svg">
			<img
				class="hero-img"
				src="~~/assets/imgs/hero-img.png"
				alt="hero-img"
			/>
			<img
				class="hero-img-tv"
				src="~~/assets/imgs/tv-noise.gif"
				alt="tv-noise-bg"
			/>
		</div>
	</div>

	<div class="scroll-btn flex-col items-center justify-center">
		<h2>Scrool</h2>
		<img
			class="m-auto"
			src="~~/assets/imgs/down-arrow.svg"
			alt="down-arrow"
		/>
	</div>
</template>


<style  lang='scss'>
// @import '../assets/styles/main.scss';
.scroll-btn {
	cursor: pointer;
	@apply absolute bottom-4 left-1/2 text-4xl -translate-x-1/2;
	h2 {
		font-family: "Nanum Brush Script";
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
		font-family: "Nanum Brush Script";

		@apply text-center;
		@apply text-[4.3rem] leading-none sm:text-5xl md:text-7xl lg:text-8xl mb-5;
	}
}

.hero-svg {
	@apply z-30 relative;

	.hero-img {
		@apply md:w-[550px] w-[290px];
		// transform: translateX(40%);
	}

	.hero-img-tv {
		@apply w-[100px] h-20 top-[27%] left-[10%];
		@apply absolute md:h-20 md:w-[114px] md:top-[27%] md:right-[48%] rotate-2;
	}
}

@keyframes grow {
	0% {
		scale: 1;
	}

	100% {
		scale: 1.1;
	}
}
</style>