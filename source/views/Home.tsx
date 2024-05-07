import { Container, Stack } from "styled-system/jsx"
import { Heading, Link } from "~/ui"

export default () => (
	<Container maxW="md" py="6">
		<Heading as="h1" size="lg" textAlign="center">
			Playground
		</Heading>
		<Stack mt="5" mx="auto" alignItems="center">
			<Link href="/settings">Settings</Link>
			<Link href="/payment">Payment</Link>
			<Link href="/product">Product</Link>
			<Link href="/cards">Cards</Link>
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/login">Login</Link>
			<Link href="/tictactoe">TicTacToe</Link>
		</Stack>
	</Container>
)
