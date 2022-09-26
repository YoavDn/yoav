<script >
import Navbar from "~~/components/Navbar.vue";
import Footer from "~~/components/Footer.vue";

export default {
	head: {
		title: "Yoav Mendelson | Web developer",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"A Web Developer and Designer based in Haifa, Israel, with an eye for great design (UI) and user experience (UX).",
			},
			{
				hid: "keywords",
				name: "keywords",
				content:
					"Yoav Mendelson, web dev, UX/UI, software developer, design".split(
						","
					),
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "../public/icon.png" },
		],
	},
};
</script>
<template>
	<Navbar />
	<slot />
	<Footer />
</template>