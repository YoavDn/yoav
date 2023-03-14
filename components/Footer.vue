<script setup lang='ts'>
import LinkSvg from '~~/assets/imgs/link.svg'
import ArrowSvg from '~/assets/imgs/down-arrow.svg'
</script>


<template>
    <div class="footer content" id="contact">
        <h2>Contact.</h2>
        <div class="links">
            <li>
                <a href="https://www.linkedin.com/in/yoav-mendelson/">
                    LinkedIn <img :src="LinkSvg" alt="" />
                </a>
            </li>
            <li>
                <a href="https://github.com/YoavDn">
                    Github <img :src="LinkSvg" alt="" />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/yoav_mendelson">
                    Twitter <img :src="LinkSvg" alt="" />
                </a>
            </li>
            <li>
                <a href="mailto:yoavdan.m@gmail.com">
                    Email <img :src="LinkSvg" alt="" />
                </a>
            </li>
        </div>
        <div class="back-to-top">
            <img :src="ArrowSvg" alt="arrow svg" />
            <a href="#"> Back to top </a>
        </div>

        <h3 class="text-base font-400 text-center mt-10">
            &copy;2023 Yoav Mendelson
        </h3>
    </div>
</template>


<style scoped lang='scss'>
.footer {
	h2 {
		@apply mb-20;
		text-align: center;
	}

	.links {
		@apply grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center;
		@apply w-full text-lg text-primary;

		li {
			@apply text-xl;

			&:hover {
				@apply underline-offset-4 decoration-wavy underline;
			}
		}

		img {
			@apply inline h-4;
		}
	}
}

.back-to-top {
	@apply font-nanum m-auto  text-center mt-24;

	a {
		@apply text-4xl;
		// margin: auto;
		// display: block;

		&:hover {
			@apply text-primary;
		}
	}

	img {
		@apply rotate-180 mx-auto;
	}
}
</style>