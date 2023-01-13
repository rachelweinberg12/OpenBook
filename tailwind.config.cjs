/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['poppins', 'sans-serif']
			},
			maxWidth: {
				xxs: '10rem'
			}
		}
	},
	plugins: []
};
