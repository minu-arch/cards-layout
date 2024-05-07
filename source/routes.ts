import type { AgnosticRouteObject } from "@remix-run/router"
import Home from "~/views/Home"
import Payment from "~/examples/Payment"
import Settings from "~/examples/Settings"
import Product from "~/examples/Product"
import Cards from "~/views/Cards"
import DashBoard from "./dashboard/DashBoard"
import Login from "./examples/Login"
import TicTacToe from "./views/TicTacToe/TicTacToe"

export default <AgnosticRouteObject[]>[
	{ id: "home", path: "/", handle: Home, index: true },
	{ id: "payment", path: "/payment", handle: Payment },
	{ id: "settings", path: "/settings", handle: Settings },
	{ id: "product", path: "/product", handle: Product },
	{ id: "cards", path: "/cards", handle: Cards },
	{ id: "dashboard", path: "/dashboard", handle: DashBoard },
	{ id: "login", path: "/login", handle: Login },
	{ id: "tictactoe", path: "/tictactoe", handle: TicTacToe },
]
