/** @type {import("prettier").Config} */
export default {
	printWidth: 200,
	useTabs: true,
	tabWidth: 2,
	trailingComma: 'es5',
	semi: false,
	singleQuote: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: ['**/*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
}
