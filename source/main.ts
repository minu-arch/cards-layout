import { createBrowserHistory, createRouter } from "@remix-run/router"
import { createRoot } from "react-dom/client"
import { createElement } from "react"
import routes from "./routes"

function getContainer() {
	const container = document.getElementById("webapp")
	if (!container) throw Error(`Root element not found`)
	return container as HTMLDivElement
}

async function main() {
	const container = getContainer()
	const root = createRoot(container)
	const history = createBrowserHistory()
	const router = createRouter({ history, routes })

	router.initialize()

	root.render(
		router.state.matches.map(({ route }) => {
			if (route.children?.length) return route.children
			if (route.handle) return createElement(route.handle, { key: route.path })
			return createElement("div", { key: route.path }, "Unknown route") as any
		})
	)
}

Promise.resolve(main()).catch(error => {
	console.error("Application error:", error)
})
