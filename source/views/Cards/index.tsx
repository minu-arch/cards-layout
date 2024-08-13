import { Container, Stack } from "styled-system/jsx"
import { Card, Heading, Link } from "~/ui"
import CardOne from "./CardOne"
import CardTwo from "./CardTwo"
import CardThree from "./CardThree"
import CardFour from "./CardFour"
import CardFive from "./CardFive"
import CardSix from "./CardSix"
import CardSeven from "./CardEight"
import CardEight from "./CardSeven"
import CardNine from "./CardNine"
import CardTen from "./CardTen"
import CardEleven from "./CardEleven"
import FlightBooker from "./FlightBooker"
export default () => (
	<Container w="md" py="6">
		<Heading as="h1" size="lg" textAlign="center">
			Cards
		</Heading>
		<Stack mt="5" mx="auto" alignItems="center">
			<FlightBooker />
			<CardOne />
			<CardTwo />
			<CardThree />
			<CardFour />
			<CardFive />
			<CardSix />
			<CardEight />
			<CardSeven />
			<CardNine />
			<CardTen />
			<CardEleven />
		</Stack>
	</Container>
)
