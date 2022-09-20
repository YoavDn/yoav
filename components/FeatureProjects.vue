<script setup lang='ts'>
import ProjectCard from "./ProjectCard.vue";
import SoundWaveImgSrc from "~~/assets/imgs/soundwave.png";
import TypesterImgSrc from "~~/assets/imgs/typester.png";
import AppsusImgSrc from "~~/assets/imgs/appsus.png";
import ChooseYourFrameworkImgSrc from "~~/assets/imgs/cyf.png";
import MemeGenImgSrc from "~~/assets/imgs/meme-gen.png";

const projects = [
    {
        name: "SoundWave",
        description:
            "SoundWave is a music streaming platform inspired by Spotify. You can listen to your favorite music and create shared playlists for you and your friends to enjoy together in real-time.",
        img: SoundWaveImgSrc,
        url: "https://sound-wave-project.herokuapp.com/#/",
    },
    {
        name: "Typester",
        description:
            "Typester is a modern design typing test application inspired by Monkeytype.It features a variety of test modes, including a dark mode for the night owls, and also saves user typing tests history.",
        img: TypesterImgSrc,
        url: "https://typester-app.herokuapp.com/",
    },
    {
        name: "Choose your framework",
        description:
            "A cute little helper game I made for choosing a Javascript UI framework.",
        img: ChooseYourFrameworkImgSrc,
        url: "https://choose-your-framework.vercel.app/",
    },
    {
        name: "Appsus",
        description:
            "An app based on Google Keep, Gmail, and also contains a Book Library app, with the use of the Google Books API.",
        img: AppsusImgSrc,
        url: "https://appsus-afik-yoav.netlify.app/#/",
    },
    {
        name: "MemeGen",
        description:
            "A meme-maker app where you can make your meme, download, share, and save it.",
        img: MemeGenImgSrc,
        url: "https://meme-generator-ac.netlify.app/",
    },
    {
        name: "More...",
        description: "Check out more Projects on GitHub",
        img: "",
        url: "https://github.com/YoavDn",
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
    grid-template-columns: auto minmax(0, 1100px) auto;
}
.projects-container {
    grid-column: 2;
    // display: grid;
    // grid-template-columns: auto minmax(0, 1040px) auto;
    @apply grid  gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
    @apply m-auto px-4 py-6 mb-16;
    @apply w-full max-w-[ch85];
}
</style>