const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: '#002972',
				secondary: '#EDF0F5',
				yellow: '#F0A53B',
				green: '#39A94A',
				blue: '#06B7DB',
				dark: '#121212',
				line: '#ccd1db',
			},
			fontFamily: {
				urbanist: [`var(--font-urbanist)`, 'sans-serif'],
			},
		},
	},
	plugins: [nextui()],
};
export default config;
