<script >
import Navbar from "~~/components/Navbar.vue";
import Footer from "~~/components/Footer.vue";

export default {
	head: {
		title: "Yoav Mendelson | Web Developer ",
	},
};
</script>
<template>
	<Navbar />
	<slot />
	<Footer />
</template>