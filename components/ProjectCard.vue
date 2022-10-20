<script setup lang="ts">
import ArrowUp from '~~/assets/imgs/arrow-up.svg'
import ArrowUpBlack from '~~/assets/imgs/arrow-up-black.svg'

const props = defineProps<{
	project: {
		name: string
		description: string
		img: string
		url: string
	}
}>()

const cardContentShown = ref<Boolean>(false)

function goToProject(url: string) {
	window.open(url)
}

function isLightBg(name: string) {
	return name === 'Appsus' || name === 'MemeGen' ? true : false
}

function showContent() {
	cardContentShown.value = !cardContentShown.value
}
</script>

<template>
	<article class="project-card" v-on:click="goToProject(props.project.url)">
		<div class="overlay"></div>
		<div v-if="cardContentShown" class="overlay overlay-mobile"></div>
		<div
			@click.stop="showContent"
			class="text"
			:class="{
				'translate-y-0': cardContentShown,
				'translate-y-full': !cardContentShown,
			}"
		>
			<h2
				:class="{
					'translate-y-0 ': cardContentShown,
					'translate-y-[-153%]': !cardContentShown,
					'bg-lime-400 bg-opacity-50':
						isLightBg(props.project.name) && !cardContentShown,
				}"
				class="flex gap-2 items-center"
				:style="isLightBg(props.project.name) ? { color: 'black' } : ''"
			>
				{{ props.project.name }}
				<span
					:class="{ 'rotate-180': cardContentShown }"
					v-if="props.project.name !== 'More...'"
				>
					<img
						v-if="isLightBg(props.project.name)"
						:src="ArrowUpBlack"
						alt="arrow"
					/>
					<img v-else :src="ArrowUp" alt="" />
				</span>
			</h2>
			<p
				:class="{
					'text-slate-100 font-bold': isLightBg(props.project.name),
				}"
			>
				{{ props.project.description }}
			</p>
		</div>
		<img
			v-if="props.project.img"
			:src="props.project.img"
			alt="project image"
		/>
	</article>
</template>

<style lang="scss">
.project-card {
	@apply relative aspect-square overflow-hidden cursor-pointer rounded-lg bg-lime-400 bg-opacity-20;
	@apply transition-all duration-500;

	.overlay {
		@apply absolute inset-0 bg-gray-900/0 z-0;
		@apply absolute inset-0 bg-black/20 coarse:bg-[color:rgb(4_23_78/20%)] backdrop-blur-lg coarse:backdrop-blur-sm;
		@apply opacity-0;
		@apply transition-opacity duration-500;
		&:hover {
			@apply opacity-100;
		}
		&.overlay-mobile {
			@apply opacity-100;
		}
	}

	.text {
		@apply absolute bottom-0 left-0 p-6 z-20;
		@apply whitespace-normal;
		@apply transition-transform duration-500;
		@apply md:translate-y-full;

		h2 {
			@apply text-lime-400 font-bold text-3xl py-1;
			@apply md:translate-y-[-153%];
			@apply transition duration-500;

			span {
				@apply md:hidden transition-transform duration-300;
				img {
					@apply w-8;
				}
			}
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
			@apply md:translate-y-0;
			h2 {
				// @apply translate-y-0;

				@apply md:translate-y-0 opacity-100;
			}
		}

		.overlay {
			@apply md:opacity-100;
		}
	}
}
</style>
