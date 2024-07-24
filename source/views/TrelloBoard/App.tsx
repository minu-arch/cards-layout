import { styled } from "styled-system/jsx"
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import Main from "./Main/Main"

const App = () => {
	const whiteColor = "#fff"
	const Container = styled("div", {
		base: {
			display: "flex",
			flexDir: "column",
			alignItems: "flex-start",
			width: "100vw",
			height: "100vh",
			backgroundColor: whiteColor,
		},
	})

	return (
		<Container>
			<NavBar />
			<Header />
			<Main />
		</Container>
	)
}

export default App
