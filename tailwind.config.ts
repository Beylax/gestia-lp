import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary": "#1AB599",
				"highlight": "#EF2A82",
				"dark": "#172755"
			}
		},
	},
	plugins: [],
};
export default config;
