import type { AgnosticRouteObject } from "@remix-run/router"
import Home from "~/views/Home"
import Payment from "~/examples/Payment"
import Settings from "~/examples/Settings"
import Product from "~/examples/Product"
import Cards from "~/views/Cards"
import TicTacToe from "./views/TicTacToe/JsxTicTacToe"
import App from "./views/Trinity/App"

export default <AgnosticRouteObject[]>[
	// { path: "/", handle: Home, index: true },
	// { path: "/payment", handle: Payment },
	// { path: "/settings", handle: Settings },
	// { path: "/product", handle: Product },
	// { path: "/cards", handle: Cards },
	// { path: "/tictactoe", handle: TicTacToe },
	{ path: "/trinity", handle: App },
]
