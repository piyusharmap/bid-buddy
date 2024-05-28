import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			borderWidth: {
				"1": "1px",
			},
			colors: {
				background: "#F5EFE6",
				primary: {
					dark: "#1A4D2E",
					light: "#4F6F52",
					black: "#000000",
					white: "#FFFFFF",
				},
				secondary: {
					dark: "#DD761C",
					light: "#FEB941",
				},
				alert: {
					red: "#EE4E4E",
				},
			},
		},
		fontFamily: {
			jost: ["var(--font-jost)"],
			josefin_Sans: ["var(--font-josefin_Sans)"],
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
