import NavBar from "./components/navBar"
import Header from "./components/Header"
import Main from "./components/Main"
import Content from "./components/Content"
import { Stack, Box } from "styled-system/jsx"

const App = () => {
	const whiteColor = "#fff"
	return (
		<>
			<Stack
				className="container"
				bg="neutral.12"
				h="100%"
				p="2"
				style={{
					backgroundColor: whiteColor,
				}}
				width={{
					base: "md",
					"@sm": "xl",
					"@md": "3xl",
					"@lg": "4xl",
					"@xl": "5xl",
					"@xxl": "6xl",
				}}
				display="flex"
				justifyContent="center"
				position="relative"
			>
				<NavBar />
				<Header />
				<Main />
				<Content />
			</Stack>
		</>
	)
}

export default App
