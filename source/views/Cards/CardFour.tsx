import { XIcon } from "lucide-react"
import { IconButton, type IconButtonProps } from "~/ui/icon-button"
import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { FormLabel } from "~/ui/form-label"
import { Input } from "~/ui/input"
import { Button } from "~/ui/button"
import * as Card from "~/ui/card"
import { styled } from "styled-system/jsx"
import { css } from "styled-system/css"
import { Text } from "~/ui/text"
import { Link } from "~/ui/link"
import * as RadioGroup from "~/ui/radio-group"

const CardFour = () => {
	const options = [
		{ id: "1", label: "New projects" },
		{ id: "2", label: "Existing project" },
		{ id: "3", label: "Ongoing assistance or consultation" },
		{ id: "4", label: "Non of the above" },
	]

	const radioOption = options.map(option => (
		<RadioGroup.Item key={option.id} value={option.id}>
			<RadioGroup.ItemControl _focus={{ bg: "#1d4ed8", borderColor: "#1d4ed8" }} />
			<RadioGroup.ItemText fontSize="15">{option.label}</RadioGroup.ItemText>
		</RadioGroup.Item>
	))
	return (
		<Card.Root width="sm" borderRadius="9" bg="#1f2937">
			<HStack justifyContent="space-between" p="1">
				<div style={{ height: "1px" }} />
				<IconButton variant="ghost" size="sm">
					<XIcon />
				</IconButton>
			</HStack>
			<Stack mt="-20px" pt="-5" pb="6" pr="6" pl="6">
				<Stack>
					<Text size="sm" fontWeight="medium">
						Before we get started, we’d like to ask a few questions to better understand
						your business needs
					</Text>
					<Text size="sm" fontWeight="medium" color="#9c9c98">
						What type of project?
					</Text>
					<RadioGroup.Root defaultValue="1">{radioOption}</RadioGroup.Root>
					<Button bg="blue.10" size="md" w="150" _hover={{ bg: "#2020ff" }}>
						Get Started
					</Button>
				</Stack>
			</Stack>
		</Card.Root>
	)
}

export default CardFour
