<script setup lang='ts'>

</script>


<template>
	<div class="navbar">
		<div class="container">
			<div class="logo">Y.M</div>
			<div class="nav-links">
				<li class="nav-link">
					<nuxt-link to="/about"> ABOUT </nuxt-link>
				</li>
				<li class="nav-link">
					<nuxt-link to="/projects"> PROJECTS </nuxt-link>
				</li>
				<li class="nav-link">
					<nuxt-link to="/about"> CONTACT </nuxt-link>
				</li>
			</div>
		</div>
	</div>
</template>


<style lang='scss'>
.navbar {
	@apply fixed top-0 left-0 w-full h-16;
	@apply z-50;

	.container {
		@apply w-full h-full max-w-screen-xl m-auto;
		@apply flex justify-between items-center px-5;
	}

	.logo {
		font-family: "Nanum Brush Script";
		@apply text-xl text-black bg-lime-400 p-1;
	}

	.nav-links {
		@apply sm:flex gap-4 px-2 hidden;

		.nav-link {
			@apply text-lime-300  px-4 py-2 rounded-md;
			transition: all ease 0.2s;
			font-weight: 600;

			&:hover {
				@apply bg-opacity-25 bg-lime-300;
			}
		}
	}
}
</style>