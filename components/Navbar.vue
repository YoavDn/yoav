<script setup lang='ts'>

</script>


<template>
    <div class="navbar">
        <div class="container">
            <div class="logo">Y.M</div>
            <div class="links flex items-center">
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
                <div class="svg-links flex">
                    <li>
                        <a
                            href="https://github.com/YoavDn"
                            target="_blank"
                            class="svg-link"
                        >
                            <img
                                src="~/assets/imgs/github.svg"
                                alt="github-svg"
                            />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/yoav-mendelson/"
                            target="_blank"
                            class="svg-link"
                        >
                            <img
                                src="~/assets/imgs/linkedin.svg"
                                alt="linkedin-svg"
                            />
                        </a>
                    </li>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang='scss'>
.navbar {
    @apply fixed top-0 left-0 w-full h-16;
    @apply z-50;

    @apply bg-opacity-50 backdrop-blur-md;

    .container {
        @apply w-full h-full max-w-screen-xl m-auto;
        @apply flex justify-between items-center px-5;
    }

    .logo {
        font-family: "Nanum Brush Script";
        @apply text-xl text-black bg-lime-400 p-1;
    }

    .links {
        li {
            cursor: pointer;
            @apply text-lime-300 px-4 py-2 rounded-md;

            &:hover {
                @apply bg-opacity-25 bg-lime-300;
            }
        }
    }

    .nav-links {
        @apply sm:flex gap-4 px-2 hidden;

        .nav-link {
            transition: all ease 0.2s;
            font-weight: 600;
        }
    }

    .svg-links {
        .svg-link {
            @apply fill-lime-300 h-6 w-6;
        }
    }
}
</style>