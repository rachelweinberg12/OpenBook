/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['poppins', 'sans-serif'],
				poppins: ['poppins', 'sans-serif'],
				raleway: ['raleway', 'sans-serif'],
				limelight: ['limelight', 'sans-serif'],
				josefin: ['josefin sans', 'sans-serif'],
				bree: ['bree serif', 'serif']
			},
			maxWidth: {
				xxs: '10rem',
				xs: '22rem'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
