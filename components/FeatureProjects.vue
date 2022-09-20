<script setup lang='ts'>
import ProjectCard from "./ProjectCard.vue";
import SoundWaveImgSrc from "~~/assets/imgs/soundwave.png";

const projects = [
	{
		name: "SoundWave",
		description:
			"das;flj dfa;lkj sd ;sdlf  ;dlfa  ;lsafja ei vlake bh., rg",
		img: SoundWaveImgSrc,
	},
	{
		name: "SoundWave",
		description: "blah blah",
		img: SoundWaveImgSrc,
	},
	{
		name: "SoundWave",
		description: "blah blah",
		img: SoundWaveImgSrc,
	},
	{
		name: "SoundWave",
		description: "blah blah",
		img: SoundWaveImgSrc,
	},
];
</script>


<template>
	<div class="title content">
		<h2>Projects.</h2>
	</div>
	<div class="projects-layout">
		<div class="projects-container">
			<ProjectCard v-for="project in projects" :project="project" />
		</div>
	</div>
</template>


<style lang='scss'>
.projects-layout {
	display: grid;
	grid-template-columns: auto minmax(0, 1140px) auto;
}
.projects-container {
	grid-column: 2;
	// display: grid;
	// grid-template-columns: auto minmax(0, 1040px) auto;
	@apply grid  gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
	@apply m-auto px-4 py-6;
	@apply w-full max-w-[ch85];
}
</style>