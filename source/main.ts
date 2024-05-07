import { createBrowserHistory, createRouter } from "@remix-run/router"
import { createRoot } from "react-dom/client"
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
		router.state.matches.map(({ route }) =>
			route.children?.length ? route.children : route.handle?.()
		)
	)
}

Promise.resolve(main()).catch(error => {
	console.error("Application error:", error)
})
