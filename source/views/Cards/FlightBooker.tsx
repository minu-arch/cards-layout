import React, { useState } from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
import { VStack } from "styled-system/jsx"
import { Text, Heading, Input, Button } from "~/ui"
import * as Card from "~/ui/card"
import { Select } from "~/ui/"

const FlightBooker = () => {
	const items = [
		{ label: "One-way flight", value: "One-way flight" },
		{ label: "Return flight", value: "Return flight" },
	]

	type FlightType = "One-way flight" | "Return flight"

	type DateType = "string"

	const [flightType, setFlightType] = useState<FlightType>("One-way flight")
	const [dateoneWay, setDateOneWay] = useState<DateType>()
	const [dateReturn, setDateReturn] = useState<DateType>()

	function isValidDate(date: string) {
		return date.match(/^\d{4}-\d{2}-\d{2}$/)
	}

	function handleDateOneWay(event: any) {
		setDateOneWay(event.target.value)
	}

	function handleDateReturn(event: any) {
		setDateReturn(event.target.value)
	}

	const handleSelect = (event: any) => {
		setFlightType(event.target.value)
	}

	return (
		<Card.Root w="sm" borderRadius="9" bg="sky.2" p="4">
			<VStack>
				<Select.Root
					positioning={{ sameWidth: true }}
					items={items}
					size="md"
					value={[flightType]}
					onValueChange={handleSelect}
				>
					<Select.Control>
						<Select.Trigger>
							<Select.ValueText placeholder="Select a Flight" />
							<ChevronsUpDownIcon />
						</Select.Trigger>
					</Select.Control>
					<Select.Positioner>
						<Select.Content>
							<Select.ItemGroup id="item-group">
								<Select.ItemGroupLabel htmlFor="item-group">
									Flight
								</Select.ItemGroupLabel>
								{items.map(item => (
									<Select.Item key={item.value} item={item}>
										<Select.ItemText>{item.label}</Select.ItemText>
										<Select.ItemIndicator>
											<CheckIcon />
										</Select.ItemIndicator>
									</Select.Item>
								))}
							</Select.ItemGroup>
						</Select.Content>
					</Select.Positioner>
				</Select.Root>
				<Input
					id="oneway"
					placeholder="Departure Date"
					name="dateoneWay"
					value={dateoneWay}
					onChange={handleDateOneWay}
				/>
				<Input
					id="return"
					placeholder="Return Date"
					name="dateReturn"
					value={dateReturn}
					onChange={handleDateReturn}
				/>
				<Button colorPalette="green" variant="outline" w="full">
					Book
				</Button>
			</VStack>
		</Card.Root>
	)
}

export default FlightBooker
