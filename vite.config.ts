import { defineConfig, type UserConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react-swc"

export default defineConfig(async () => {
	const config: UserConfig = {
		plugins: [tsconfigPaths(), react()],
		server: {
			host: "0.0.0.0",
		},
	}

	// TODO: remove fix after storybook fixes compatibility with vite v5
	if (process.env._?.includes("storybook"))
		config.assetsInclude = ["/sb-preview/runtime.js"]

	return config
})
