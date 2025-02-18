export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	css: [

	],

	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},

	modules: ['@pinia/nuxt'],
	vite: {
		plugins: [
			require('vite-svg-loader')()
		]
	}
})
