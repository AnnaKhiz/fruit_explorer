import vue from 'eslint-plugin-vue';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import vueParser from 'vue-eslint-parser';

export default [
	{
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		plugins: {
			vue,
			'@typescript-eslint': typescript,
			prettier,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'vue/multi-word-component-names': 'off',
		},
		ignores: ['node_modules/', '.nuxt/', '.dist/'],
	},
	{
		files: ['**/*.d.ts'],
		languageOptions: {
			parser,
		},
		plugins: {
			'@typescript-eslint': typescript,
			prettier,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
		},
		ignores: ['node_modules/', '.nuxt/', '.dist/'],
	},
];
