const { nextui } = require("@nextui-org/theme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|button|card|checkbox|chip|dropdown|image|input|link|modal|pagination|popover|select|spinner|table|user|ripple|menu|divider|listbox|scroll-shadow|spacer).js"
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
			backgroundImage: {
				bgLogin: `url('/assets/backgrounds/bgLogin.jpg')`,
				bgText: 'linear-gradient(232deg, #FE4446 14.05%, #0085FF 116.55%)',
				bgWork: 'linear-gradient(232deg, #000 14.05%, #0085FF 116.55%);',
			},
		},
	},
	plugins: [nextui()],
};
export default config;
