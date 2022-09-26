import { title } from "process";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     head: {
    title: 'Yoav Mendelson | Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
			{ rel: "icon", type: "image/x-icon", href: "/icon.png" },
		],
  },

     css: [
        '@/assets/styles/global.scss',
    ],
    modules: ['@nuxtjs/tailwindcss'],

    tailwindcss: {
        cssPath: '@/assets/styles/global.scss',
        configPath: '@/tailwind.config.js',
        //  config: {
    //   plugins: [tailwindTypography]
    // }
    },
   
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js')
        }
    }
})

