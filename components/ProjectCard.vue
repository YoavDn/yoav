<script setup lang='ts'>
// import { defineProps } from "vue";

const props = defineProps<{
	project: {
		name: string;
		description: string;
		img: string;
	};
}>();
</script>


<template>
	<article class="project-card">
		<div class="overlay"></div>
		<div class="text">
			<h2>{{ props.project.name }}</h2>
			<p>{{ props.project.description }}</p>
		</div>
		<img :src="props.project.img" alt="project image" />
	</article>
</template>


<style lang='scss'>
.project-card {
	@apply relative aspect-square overflow-hidden cursor-pointer rounded-lg;

	.overlay {
		@apply absolute inset-0 bg-gray-900/0 z-0;
		@apply absolute inset-0 bg-black/20 coarse:bg-[color:rgb(4_23_78/20%)] backdrop-blur-lg coarse:backdrop-blur-sm;
		@apply fine:opacity-0;
		@apply transition-opacity duration-300;
	}

	.text {
		@apply absolute bottom-0 left-0 p-6 z-20;
		@apply translate-y-full whitespace-normal;
		@apply motion-reduce:transition-transform duration-500;

		@apply fine:translate-y-full;

		h2 {
			@apply text-lime-400 font-bold text-3xl py-1;
			@apply fine:translate-y-[-150%];
			@apply transition duration-500;
		}

		p {
			transition-delay: 0.3s;
		}
	}

	img {
		@apply object-cover h-full w-full rounded-lg;
	}

	@at-root :global(.dom-loaded) .project-card .text {
		@apply transition-transform duration-500;
	}

	&:hover {
		@apply outline outline-2 outline-lime-50;

		.text {
			@apply translate-y-0;
			h2 {
				// @apply translate-y-0;

				@apply translate-y-0 opacity-100;
			}
		}

		.overlay {
			@apply opacity-100;
		}
	}
}
</style>