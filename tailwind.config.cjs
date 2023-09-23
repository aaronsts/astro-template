/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
		},
		extend: {
			colors: {
				black: '#1F1F1F',
				white: '#F6F6F6',
				primary: '#FFB452',
				accent: '#028090',
			},
			keyframes: {
				openclose: {
					'0%': {
						top: '0',
					},
					'5%': {
						top: '0',
					},

					'30%': {
						top: '0',
					},
					'33%': {
						top: '0',
					},
					'35%': {
						top: '0',
					},
					'38%': {
						top: '-3rem',
					},
					'48%': {
						top: '-3rem',
					},
					'62%': {
						top: '-3rem',
					},
					'66%': {
						top: '-3rem',
					},
					'71%': {
						top: '-6rem',
					},
					'86%': {
						top: '-6rem',
					},
					'95%': {
						top: '-6rem',
					},
					'98%': {
						top: '-6rem',
					},
					'100%': {
						top: '0',
					},
				},
			},
			animation: {
				openclose: 'openclose 5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
