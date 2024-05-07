import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import * as Card from "~/ui/card"
import * as RadioButtonGroup from "~/ui/radio-button-group"

const TicTacToe = () => {
	const options = [
		{ value: "1" },
		{ value: "2" },
		{ value: "3" },
		{ value: "4" },
		{ value: "5" },
		{ value: "6" },
	]

	return (
		<RadioButtonGroup.Root
			display="grid"
			gridTemplateColumns="repeat(3, 1fr)"
			maxW="md"
			width="1"
			gap="1"
		>
			{options.map((option, id) => (
				<RadioButtonGroup.Item key={id} value={option.value} px="0">
					<RadioButtonGroup.ItemControl />
					<RadioButtonGroup.ItemText>{option.value}</RadioButtonGroup.ItemText>
				</RadioButtonGroup.Item>
			))}
		</RadioButtonGroup.Root>
	)
}

export default TicTacToe
