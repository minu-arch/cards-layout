import { defineConfig } from "@pandacss/dev"
import * as park from "@park-ui/panda-preset"
import { createPreset } from "@park-ui/panda-preset"
import { Lightbulb } from "lucide-react"

export default defineConfig({
	jsxFramework: "react",
	outdir: ".local/panda",
	clean: true,

	preflight: true,
	presets: [
		"@pandacss/preset-base",

		park.createPreset({
			grayColor: "sand",
			accentColor: "grass",
			additionalColors: [
				"amber",
				"ruby",
				"blue",
				"green",
				"purple",
				"sky",
				"red",
				"neutral",
				"slate",
				"sand",
				"sage",
				"mauve",
				"indigo",
				"cyan",
				"orange",
				"violet",
				"yellow",
				"pink",
				"teal",
				"lime",
				"emerald",
				"jade",
				"grass",
				"mint",
				"olive",
				"tomato",
				"white",
			],
			borderRadius: "sm",
		}),
	],

	staticCss: {
		recipes: "*",
	},

	theme: {
		breakpoints: {
			"@xs": "420px",
			"@sm": "640px",
			"@md": "768px",
			"@lg": "1024px",
			"@xl": "1280px",
			"@xxl": "1440px",
			"@wide": "2560px",
		},
	},

	studio: {
		outdir: ".local/panda",
	},

	include: ["./source/**/*.{ts,tsx}"],
	exclude: [],
})
