import { Box, HStack, Stack } from "styled-system/jsx"
import { Button } from "~/ui"
import { Text } from "~/ui/text"
import dashboardImage from "./image/XPrT2Jx3bssjbbpvl2Q4LXWYGU.webp"

const InvestmentCallToAction = () => {
	return (
		<HStack flexDir={{ base: "column", "@lg": "row" }} w="100%" h="100%">
			<Box
				w="100%"
				h={{ base: "100%", "@xl": "lg" }}
				bg="neutral.12"
				borderRadius="2xl"
			>
				<Stack w="100%" h="100%" p="5" justifyContent="space-between" gap="32">
					<Box>
						<Text
							as="h2"
							fontSize={{ base: "xl", "@md": "2xl", "@lg": "3xl", "@xxl": "3xl" }}
							color="grass.7"
							wordBreak="break-word"
							whiteSpace="pre-wrap"
							fontWeight="medium"
							lineHeight="1.5"
						>
							Start investing with Trinity Financial Today
						</Text>
					</Box>
					<Stack w="auto">
						<Button
							bg="neutral.12"
							borderWidth="1"
							borderRadius="10"
							borderColor="neutral.11"
							color="grass.8"
							size="sm"
							borderBottomWidth="4"
							p="0.2"
							w={{ base: "36", "@md": "40" }}
						>
							Purchase Template
						</Button>
						<Text
							as="p"
							fontSize={{ base: "md", "@md": "lg", "@lg": "xl", "@xxl": "xl" }}
							color="grass.8"
							wordBreak="break-word"
							whiteSpace="pre-wrap"
							fontWeight="normal"
						>
							We offer a variety of flexible services that cater to all types of needs
							and wants.
						</Text>
					</Stack>
				</Stack>
			</Box>
			<Box
				w="100%"
				h={{ base: "100%", "@xl": "lg" }}
				bg="grass.6"
				borderRadius="2xl"
				p={{ base: "5", "@lg": "20" }}
			>
				<img
					src={dashboardImage}
					alt=""
					style={{
						width: "100%",
						height: "100%",
						objectFit: "contain",
					}}
				/>
			</Box>
		</HStack>
	)
}

export default InvestmentCallToAction
