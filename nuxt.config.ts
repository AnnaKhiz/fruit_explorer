export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
	ssr: true,
	nitro: {
		preset: "static",
	},

	modules: ['@pinia/nuxt'],
	vite: {
		plugins: [
			require('vite-svg-loader')()
		]
	}
})
