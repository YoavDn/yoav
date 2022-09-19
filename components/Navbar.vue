<script setup lang='ts'>

</script>


<template>
	<div class="navbar">
		<div class="container">
			<div class="logo">Y.M</div>
		</div>
	</div>
</template>


<style lang='scss'>
.navbar {
	@apply fixed top-0 left-0 w-full h-16;
	@apply z-50;

	.container {
		@apply w-full h-full max-w-screen-xl m-auto;
		@apply flex items-center px-5;
	}

	.logo {
		font-family: "Nanum Brush Script";
		@apply text-xl text-black bg-lime-400 p-1;
	}
}
</style>