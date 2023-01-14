/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['poppins', 'sans-serif']
			},
			maxWidth: {
				xxs: '10rem',
				xs: '30rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
