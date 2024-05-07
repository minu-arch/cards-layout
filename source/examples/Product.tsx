import { HeartIcon, HelpCircleIcon, RulerIcon } from "lucide-react"
import { ShieldIcon, ShoppingBagIcon } from "lucide-react"
import { Box, Container, Divider, Grid, HStack, Stack } from "styled-system/jsx"
import { Badge, Button, Card, Heading, Icon, Text } from "~/ui"
import { NumberInput, RatingGroup, RadioButtonGroup } from "~/ui"

export const SizePicker = () => {
	const sizes = [
		{ size: "38" },
		{ size: "39", disabled: true },
		{ size: "40" },
		{ size: "41" },
		{ size: "42", disabled: true },
		{ size: "43" },
		{ size: "44" },
	]
	return (
		<Stack gap="3">
			<Stack gap="1.5">
				<Text size="sm" fontWeight="medium">
					Size
				</Text>
				<RadioButtonGroup.Root>
					{sizes.map(option => (
						<RadioButtonGroup.Item
							key={option.size}
							value={option.size}
							disabled={Boolean(option.disabled)}
							px="0"
						>
							<RadioButtonGroup.ItemControl />
							<RadioButtonGroup.ItemText>{option.size}</RadioButtonGroup.ItemText>
						</RadioButtonGroup.Item>
					))}
				</RadioButtonGroup.Root>
			</Stack>
			<HStack gap="2" color="fg.muted">
				<Icon size="sm" color="fg.muted">
					<RulerIcon />
				</Icon>
				<Text size="sm" textDecoration="underline">
					View size guide
				</Text>
			</HStack>
		</Stack>
	)
}

export default () => (
	<Container maxW="md" py="6">
		<Card.Root boxShadow="xs">
			<Card.Header>
				<Stack gap="4">
					<Stack gap="3" alignItems="start">
						<Badge variant="solid" size="md">
							New in stock
						</Badge>
						<Heading as="h1" size="2xl" fontWeight="semibold">
							New Balance 574
						</Heading>
					</Stack>
					<HStack justifyContent="space-between" width="full">
						<Text size="xl" fontWeight="medium">
							$79.99
						</Text>
						<HStack gap="1.5">
							<RatingGroup count={5} defaultValue={4} readOnly size="sm" />
							<Text size="xs" textDecoration="underline">
								12 Reviews
							</Text>
						</HStack>
					</HStack>
					<Text color="fg.muted">
						With a sleek design and a captivating essence, this is a modern Classic made
						for every occasion.
					</Text>
				</Stack>
			</Card.Header>
			<Card.Body gap="4">
				<Divider />
				<SizePicker />
				<Grid columns={2} gap="4">
					<NumberInput min={1} max={5} defaultValue="1">
						Quantity
					</NumberInput>
					<Button variant="outline" alignSelf="end">
						<HeartIcon /> Favourite
					</Button>
				</Grid>
				<Button>Add to Cart</Button>
				<Box bg="bg.subtle" p="4" borderRadius="l2">
					<Stack gap="4" color="fg.muted" fontWeight="medium">
						<HStack gap="2">
							<Icon size="sm">
								<ShoppingBagIcon />
							</Icon>
							<Text size="sm">Free shipping and returns</Text>
						</HStack>
						<HStack gap="2">
							<Icon size="sm">
								<ShieldIcon />
							</Icon>
							<Text size="sm">2 year extended warranty</Text>
						</HStack>
						<HStack gap="2">
							<Icon size="sm">
								<HelpCircleIcon />
							</Icon>
							<Text size="sm">We're here for you 24/7</Text>
						</HStack>
					</Stack>
				</Box>
			</Card.Body>
		</Card.Root>
	</Container>
)
