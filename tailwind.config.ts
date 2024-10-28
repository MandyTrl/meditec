import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#1b4f72",
				secondary: "#ebf5fb",
				tertiary: "#051f30",
				fushia: "#EF62FF",
			},
		},
	},
	plugins: [],
}
export default config
