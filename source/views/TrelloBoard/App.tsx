import { styled } from "styled-system/jsx"
import NavBar from "./Header/NavBar"

const App = () => {
	const whiteColor = "#fff"
	const Container = styled("div", {
		base: {
			display: "flex",
			alignItems: "center",
			width: "100vw",
			height: "100vh",
			backgroundColor: whiteColor,
		},
	})

	return (
		<Container>
			<NavBar />
		</Container>
	)
}

export default App
