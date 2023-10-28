/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Poppins',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto'
				]
			}
		},

		plugins: []
	}
};

module.exports = config;
