import { XIcon } from "lucide-react"
import { IconButton } from "~/ui/icon-button"
import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { FormLabel } from "~/ui/form-label"
import { Input } from "~/ui/input"
import * as Card from "~/ui/card"
import { styled } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { Link } from "~/ui/link"

const CardThree = () => {
	const StyledButton = styled("button", {
		base: {
			color: "white",
			borderRadius: "5px",
			padding: "10px 20px",
			cursor: "pointer",
			bg: "blue.9",
			height: "40",
			"&:hover": {
				backgroundColor: "#2020ff",
			},
		},
		variants: {
			size: {
				sm: { fontSize: "12px" },
				md: { fontSize: "16px" },
				lg: { fontSize: "20px" },
			},
			variant: {
				primary: { backgroundColor: "#1d4ed8" },
				secondary: { backgroundColor: "lightblue" },
			},
		},
	})

	return (
		<Card.Root width="sm" borderRadius="9" bg="#1f2937">
			<Stack p="6">
				<HStack justifyContent="space-between">
					<Text size="xl" fontWeight="bold">
						Join the Flowbite community
					</Text>
					<IconButton variant="ghost" size="sm">
						<XIcon />
					</IconButton>
				</HStack>
				<Text size="md" fontWeight="normal" color="#9c9c98">
					Be the first to know about all the news and updates
				</Text>
				<Stack gap="1.5" width="4xs">
					<FormLabel htmlFor="name">Name</FormLabel>
					<Input
						id="name"
						placeholder="Your Name"
						className="form-control inputBorder"
					/>
				</Stack>
				<Stack gap="1.5" width="4xs">
					<FormLabel htmlFor="name">Email</FormLabel>
					<Input
						id="name"
						placeholder="Your Email"
						className="form-control inputBorder"
					/>
				</Stack>
				<div style={{ height: "15px" }} />
				<StyledButton variant="primary">Subscribe</StyledButton>
			</Stack>
		</Card.Root>
	)
}

export default CardThree
