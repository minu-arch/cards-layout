import React from "react"
import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"

const LeftContent = () => {
	return (
		<>
			<Box
				bg="sage.12"
				w="full"
				h="xs"
				p="3"
				borderRadius="2xl"
				className="general-box"
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
							Brokerage Account
						</Text>
					</Box>
					<Text as="h2" fontSize="md" color="green.4" fontWeight="medium">
						General Investing
					</Text>
					<Text
						as="p"
						fontSize="sm"
						color="green.4"
						fontWeight="normal"
						wordBreak="break-word"
						whiteSpace="pre-wrap"
					>
						We offer investment options from stocks to real estate, allowing you to grow
						your wealth efficiently.
					</Text>
				</Stack>
				<Box
					bg="#fff"
					borderRadius="2xl"
					p="2"
					w="4/5"
					position="absolute"
					mt="10"
					top="50%"
					left="50%"
					transform="translate(-50%, -50%)"
					zIndex="3"
					boxShadow="sm"
				>
					<HStack alignItems="center" justifyContent="space-between">
						<Box>
							<Text
								color="neutral.7"
								fontSize={{ base: "xs", "@md": "sm", "@lg": "sm" }}
								fontWeight="semibold"
							>
								General Investing Account
							</Text>
							<Text
								color="neutral.9"
								fontSize={{ base: "2xs", "@md": "xs", "@lg": "sm" }}
								fontWeight="normal"
							>
								USD Account (...3872)
							</Text>
						</Box>
						<Box w="fit-content">
							<HStack
								bg="green.6"
								borderRadius="xl"
								alignItems="center"
								justifyContent="center"
								textAlign="center"
							>
								<Text
									fontSize={{ base: "2xs", "@lg": "xs" }}
									fontWeight="semibold"
									p="1"
								>
									Deposit Successful
								</Text>
							</HStack>
						</Box>
					</HStack>
				</Box>
				<Box
					bg="#fff"
					borderRadius="2xl"
					p="2"
					w="70%"
					position="absolute"
					top={{ base: "73%", "@md": "75%", "@xxl": "74%" }}
					left="50%"
					transform="translate(-50%, -50%)"
					zIndex="1"
					boxShadow="sm"
				></Box>
				<Box
					bg="#fff"
					borderRadius="2xl"
					p="2"
					w="75%"
					position="absolute"
					top={{ base: "70%", "@md": "72%", "@lg": "72%" }}
					left="50%"
					transform="translate(-50%, -50%)"
					zIndex="2"
					boxShadow="sm"
				></Box>
			</Box>
		</>
	)
}

export default LeftContent
