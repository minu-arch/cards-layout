import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"

const TitleSection = () => {
	return (
		<Stack alignItems="center" justifyContent="center">
			<Text
				as="h1"
				fontSize={{ base: "xl", "@md": "2xl", "@lg": "3xl" }}
				fontWeight="medium"
				color="green.4"
			>
				Works for you,
			</Text>
			<Text
				as="h1"
				fontSize={{ base: "xl", "@md": "2xl", "@lg": "3xl" }}
				fontWeight="medium"
				color="green.4"
				lineHeight="0"
			>
				not against.
			</Text>
			<Text
				mt="5"
				as="p"
				fontSize={{ base: "sm", "@md": "md", "@lg": "lg" }}
				wordBreak="break-word"
				whiteSpace="pre-wrap"
				maxW="sm"
				color="green.4"
				fontWeight="normal"
			>
				Investing plans that meet all your needs.
			</Text>
		</Stack>
	)
}

export default TitleSection
