import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { customGreen } from "./customGreen"

const RightContent = () => {
	return (
		<>
			<Box
				bg="sage.12"
				w="100%"
				h="xs"
				p="3"
				borderRadius="2xl"
				className="retirement-box"
				position="relative"
			>
				<Stack mt="5" pl="2">
					<Box
						borderRadius="2xl"
						bg="sage.11"
						display="flex"
						alignItems="center"
						p="1"
						w="fit-content"
						pl="2"
						pr="2"
					>
						<Text
							as="h3"
							fontSize={{ base: "12", "@md": "13", "@lg": "15" }}
							color="green.4"
							fontWeight="medium"
						>
							IRA Account
						</Text>
					</Box>
					<Text as="h2" fontSize="md" color="green.4" fontWeight="medium">
						Retirement Investing
					</Text>
					<Text
						as="p"
						fontSize="sm"
						color="green.4"
						fontWeight="normal"
						wordBreak="break-word"
						whiteSpace="pre-wrap"
					>
						Save and invest for your retirement years, ensuring a comfortable lifestyle
						when you stop working.
					</Text>
					<Stack
						w="100%"
						maxW="xs"
						position="absolute"
						transform="translate(-50%, -50%)"
						top="63%"
						left="50%"
					>
						<HStack
							w="100%"
							h="100%"
							alignItems="flex-end"
							mt="5"
							justifyContent="space-between"
						>
							<Box
								w="10%"
								bg="neutral.11"
								h="4"
								borderRadius="xs"
								transition="all"
							></Box>
							<Box
								w="10%"
								bg="neutral.11"
								h="6"
								borderRadius="xs"
								transition="height 0.5s"
							></Box>
							<Box w="10%" bg="neutral.11" h="8" borderRadius="xs"></Box>
							<Box w="10%" bg="neutral.11" h="12" borderRadius="xs"></Box>
							<Box w="10%" bg="neutral.11" h="16" borderRadius="xs"></Box>
							<Box
								w="10%"
								h="20"
								style={{ background: customGreen }}
								borderRadius="xs"
							></Box>
						</HStack>
						<Box w="100%" h="0.2" bg="neutral.11" mt="-1" />
					</Stack>
				</Stack>
			</Box>
		</>
	)
}

export default RightContent
