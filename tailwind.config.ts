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
				background: "#FFF2D7",
				primary: {
					light: "#A67B5B",
					dark: "#6F4E37",
					white: "#FFFFFF",
					black: "#000000",
				},
				secondary: {
					orange: "#FED8B1",
					black: "#322C2B",
				},
				alert: {
					red: "#D24545",
					green: "#43766C",
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
