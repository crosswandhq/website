import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import tseslint from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';

export default [
	eslintConfigPrettier,
	...tseslint.config(
		...tseslint.configs.recommended,
		...tseslint.configs.stylistic,
	),
	...eslintPluginSvelte.configs['flat/recommended'],
	{
		files: ['src/**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	},
];
