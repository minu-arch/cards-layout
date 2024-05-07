import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import * as Card from "~/ui/card"
import { XIcon } from "lucide-react"
import { IconButton } from "~/ui/icon-button"
import { Text } from "~/ui/text"
import { Input } from "~/ui/input"
import { Button } from "~/ui/button"

const CardSeven = () => {
	return (
		<Card.Root
			width={{ base: "md", "@sm": "xl", "@md": "2xl" }}
			h="250"
			borderRadius="9"
			bg="sky.2"
			flexDir="row"
		>
			<Box w="2/4" h="100%" display={{ base: "none", "@sm": "block" }}>
				<img
					src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/people-at-office.png"
					alt="random"
					style={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</Box>
			<Stack w="100%">
				<HStack justifyContent="space-between" p="1">
					<div />
					<IconButton variant="ghost" size="sm">
						<XIcon />
					</IconButton>
				</HStack>
				<Stack pr="6" pl="6" marginTop="-4">
					<Text size="md" fontWeight="bold">
						Join our Newsletter
					</Text>
					<Text
						as="p"
						size={{ base: "xs", "@md": "md" }}
						fontWeight="normal"
						color="neutral.10"
						marginTop="0"
					>
						Get started with our monthly newsletter for helpful tips on how to run your
						business smoothly.
					</Text>
					<HStack display="flex" flexDirection={{ base: "column", "@sm": "row" }}>
						<Stack position="relative" display="flex" width="100%">
							<Input
								id="email"
								placeholder="Your Email"
								style={{ paddingLeft: "35px", caretColor: "transparent" }}
								_focus={{ borderColor: "blue.10" }}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								fill="#404040"
								style={{
									position: "absolute",
									left: "5px",
									top: "50%",
									transform: "translateY(-50%)",
								}}
							>
								<path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
							</svg>
						</Stack>
						<Button
							bg="blue.10"
							size="md"
							w={{ base: "100%", "@sm": "150" }}
							_hover={{ bg: "blue.4" }}
						>
							Subscribe
						</Button>
					</HStack>
				</Stack>
			</Stack>
		</Card.Root>
	)
}

export default CardSeven
