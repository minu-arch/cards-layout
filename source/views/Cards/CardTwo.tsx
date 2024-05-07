import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { Button } from "~/ui/button"
import * as Card from "~/ui/card"
import { styled } from "styled-system/jsx"
import { css } from "styled-system/css"
import { Text } from "~/ui/text"
import { Link } from "~/ui/link"

const $wrapper = css({
	bg: "#1f2937",
	color: "white",
	p: 6,
	borderRadius: 9,
	maxWidth: 556,
})

const Name = styled("h1", {
	base: { fontWeight: "bold", color: "white" },
	variants: {
		size: {
			small: { fontSize: "xs" },
			medium: { fontSize: "md" },
			xlarge: { fontSize: "xl" },
		},
	},
})

const SubTitle = styled("h2", {
	base: { fontWeight: "200", color: "white" },
	variants: {
		size: {
			small: { fontSize: "xs" },
			medium: { fontSize: "md" },
			xlarge: { fontSize: "4xl" },
		},
	},
})

const CardTwo = () => {
	return (
		<div className={$wrapper}>
			<Stack gap="6" w="100%">
				<Stack gap="6">
					<Name size="xlarge">Privacy Info</Name>
					<SubTitle w="100%">
						The backup created with this export functionnality may contain some
						sensitive data. We suggest you to save this archive in a securised location.
					</SubTitle>
				</Stack>

				<HStack gap="4" w="100%">
					<Link
						href="https://exemple.com"
						fontSize={"mdxs"}
						fontWeight="bold"
						color="#646cffaa"
					>
						Learn more about privacy
					</Link>
					<Card.Footer gap="5">
						<HStack gap="4">
							<Button className="mr-2" variant="outline">
								Cancel
							</Button>
							<Button bg="blue.9">Confirm </Button>
						</HStack>
					</Card.Footer>
				</HStack>
			</Stack>
		</div>
	)
}

export default CardTwo
