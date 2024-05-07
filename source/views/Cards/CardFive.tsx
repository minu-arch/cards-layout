import { XIcon } from "lucide-react"
import { IconButton } from "~/ui/icon-button"
import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { Button } from "~/ui/button"
import * as Card from "~/ui/card"
import { Text } from "~/ui/text"


function CardFive() {
	return (
		<Card.Root width="md" borderRadius="9" bg="sky.2">
			<Stack p="4">
				<HStack justifyContent="space-between">
					<Text size="md" fontWeight="bold">
						Helene Engels
					</Text>
					<IconButton variant="ghost" size="sm">
						<XIcon />
					</IconButton>
				</HStack>
				<Text size="sm" fontWeight="normal" color="neutral.10" marginTop="-4">
					Moderator
				</Text>
				<Text size="md" fontWeight="bold">
					Email
				</Text>
				<Text size="sm" fontWeight="normal" color="neutral.10" marginTop="-3">
					helene@company.com
				</Text>

				<Text size="md" fontWeight="bold">
					Biography
				</Text>
				<Text size="sm" fontWeight="normal" color="neutral.10" marginTop="-3">
					Hello, I'm Helene Engels, USA Designer, Creating things that stand out,
					Featured by Adobe, Figma, Webflow and others, Daily design tips & resources,
					Exploring Web3.
				</Text>
				<HStack justifyContent="space-between">
					<Button bg="blue.10" size="md" w="100" _hover={{ bg: "#1d4ed8" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
						>
							<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
						</svg>
						Edit
					</Button>
					<Button bg="red.7" size="md" w="110" _hover={{ bg: "#e02424" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							width="52px"
							height="52px"
						>
							<path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z" />
						</svg>
						Delete
					</Button>
				</HStack>
			</Stack>
		</Card.Root>
	)
}

export default CardFive
