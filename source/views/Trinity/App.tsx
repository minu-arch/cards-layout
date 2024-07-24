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
import { styled } from "styled-system/jsx"

const App = () => {
	const whiteColor = "#fff"

	const Container = styled("div", {
		base: {
			position: "relative",
			width: "100%",
			height: "100%",
			display: "flex",
			alignItems: "center",
			flexDirection: "column",
			backgroundColor: whiteColor,
		},
	})
	return (
		<Container>
			<Stack
				className="container"
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
		</Container>
	)
}

export default App
