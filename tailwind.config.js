/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", './node_modules/preline/preline.js'],
  darkMode: "class",
  theme: {
		container: {
			center: true,
			padding: "1.5rem",
		},
		extend: {
			colors: {
				primary: "#11113A",
				secondary: "#4AA2E9",
				"accent-1": "#D9BFFF",
				"accent-2": "#0F0F74",
			},
			fontFamily: {
				sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				"confetti-1": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(-400%,-200%,0) scale(1) rotate(360deg)", opacity: 1 },
					"75%": { transform: "translate3d(-400%,-200%,0) scale(1) rotate(360deg)", opacity: 1 },
					"90%": { transform: "translate3d(-400%,-200%,0) scale(0.5) rotate(180deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
				"confetti-2": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(300%,150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"75%": { transform: "translate3d(300%,150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"90%": { transform: "translate3d(300%,150%,0) scale(0.5) rotate(180deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
				"confetti-3": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(150%,-200%,0) scale(1) rotate(360deg)", opacity: 1 },
					"75%": { transform: "translate3d(150%,-200%,0) scale(1) rotate(360deg)", opacity: 1 },
					"90%": { transform: "translate3d(150%,-200%,0) scale(0.5) rotate(180deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
				"confetti-4": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(-320%,150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"75%": { transform: "translate3d(-320%,150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"90%": { transform: "translate3d(-320%,150%,0) scale(0.5) rotate(180deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
				"confetti-5": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(-100%,-150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"75%": { transform: "translate3d(-100%,-150%,0) scale(1) rotate(360deg)", opacity: 1 },
					"90%": { transform: "translate3d(-100%,-150%,0) scale(0.5) rotate(90deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
				"confetti-6": {
					"0%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 1 },
					"50%": { transform: "translate3d(-100%,200%,0) scale(1) rotate(180deg)", opacity: 1 },
					"75%": { transform: "translate3d(-100%,200%,0) scale(1) rotate(180deg)", opacity: 1 },
					"90%": { transform: "translate3d(-100%,200%,0) scale(0.5) rotate(90deg)", opacity: 0 },
					"100%": { transform: "translate3d(-50%,-50%,0) scale(0) rotate(0)", opacity: 0 },
				},
			},
			animation: {
				"confetti-1": "confetti-1 2s ease-in-out infinite",
				"confetti-2": "confetti-2 2s ease-in-out 0.1s infinite",
				"confetti-3": "confetti-3 2s ease-in-out infinite",
				"confetti-4": "confetti-4 2s ease-in-out 0.1s infinite",
				"confetti-5": "confetti-5 2s ease-in-out 0.1s infinite",
				"confetti-6": "confetti-6 2s ease-in-out infinite",
			},
		},
	},
  plugins: [
	import('preline/plugin'),
  ],
};
