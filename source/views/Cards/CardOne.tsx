import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { styled } from "styled-system/jsx"
import { css } from "styled-system/css"

// this is how you would write CSS in Panda
const $container = css({
	// don't use shorthand properties in definitions, only in React components
	padding: "4",
	border: "3px solid",
	borderColor: "gray.8",
	boxShadow: "3px 3px 0px var(--colors-gray-8)",
	rounded: "lg",

	// this is how you write media queries, predefined responsive breakpoints
	// @sm=640px, @md=768px, @lg=1024px, @xl=1280px, @xxl=1536px
	"@sm": {
		padding: "6",
	},
})

// This is how you would create a styled component with base CSS styles
const Handle = styled("p", {
	base: { color: "gray.8" },
})

const Name = styled("h2", {
	base: { fontWeight: "bold" },
	variants: {
		// here we define a set of styles that can be applied to the component
		// <Name size="small"> will apply fontSize: "sm"
		size: {
			small: { fontSize: "sm" },
			large: { fontSize: "x-large" },
		},
	},
})

export function CardOne() {
	return (
		<div className={$container}>
			<Stack gap="6">
				<HStack gap="4">
					<Circle size="16" overflow="hidden">
						<img src="https://source.unsplash.com/random/120x120" alt="random" />
					</Circle>

					<Box>
						{/* size="large" <- this is the variant defined in Name */}
						{/* color="gray.10" <- this is how you overwrite CSS properties */}
						<Name size="large" color="gray.10">
							John Doe
						</Name>

						{/* mt="1" <- this is a shortcut for marginTop="1" */}
						<Handle mt="1">@johndoe</Handle>
					</Box>
				</HStack>
				<Box color="gray.12">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, justo
					vel aliquet lacinia, nunc nunc lacinia nunc, nec lacinia nunc nunc nec nunc.
					Sed euismod, nunc a lacinia aliquet, nunc nunc lacinia nunc, nec lacinia nunc
					nunc nec nunc. Sed euismod, nunc a lacinia aliquet, nunc nunc lacinia nunc,
					nec lacinia nunc nunc nec nunc.
				</Box>
			</Stack>
		</div>
	)
}

export default CardOne
