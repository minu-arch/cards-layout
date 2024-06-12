import NavBar from "./components/navBar"
import Header from "./components/Header"
import Main from "./components/Main"
import Content from "./components/Content"
import Article from "./components/Article"
import ConnecttoBank from "./components/ConnecttoBank"
import Security from "./components/Security"
import FaqAccordion from "./components/FaqAccordion"
import InvestmentCallToAction from "./components/InvestmentCallToAction"
import Footer from "./components/Footer"
import { Stack, Box } from "styled-system/jsx"

const App = () => {
	const whiteColor = "#fff"
	return (
		<>
			<Stack
				className="container"
				// bg="neutral.12"
				h="100%"
				p="5"
				style={{
					backgroundColor: whiteColor,
				}}
				width={{
					base: "sm",
					"@sm": "xl",
					"@md": "3xl",
					"@lg": "4xl",
					"@xl": "5xl",
					"@xxl": "6xl",
				}}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				position="relative"
			>
				<NavBar />
				<Header />
				<Main />
			</Stack>
			<Content />
			<Stack
				className="box-content"
				// bg="neutral.12"
				h="100%"
				p="5"
				style={{
					backgroundColor: whiteColor,
				}}
				width={{
					base: "sm",
					"@sm": "xl",
					"@md": "3xl",
					"@lg": "4xl",
					"@xl": "5xl",
					"@xxl": "6xl",
				}}
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				position="relative"
			>
				<Article />

				<ConnecttoBank />

				<Security />

				<FaqAccordion />

				<InvestmentCallToAction />
			</Stack>
			<Footer />
		</>
	)
}

export default App
