
/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'header':'#1B1B1B',
				'navigation':'#3E665F',
				'footer':'#D8D8D5',
				'nav-animation':'#363636',
				'main-decoration':'#DDD6BB',
				'ghost-form':'#fad7c1'
			},

			spacing:{
				
			},

			minWidth:{
				'secondary-nav':'35rem',
				'search-bar-size':'30rem',
				
				
			},

			maxWidth:{
				
			}
		},
	},
	plugins: [],
}
