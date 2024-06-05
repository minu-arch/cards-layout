import React from "react"
import { Box, HStack, Stack, Circle } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { customGreen } from "./customGreen"

const Content = () => {
	return (
		<Box w="100%" bg="neutral.12" color="GrayText">
			<Stack alignItems="center" justifyContent="space-between" gap="10" p="8">
				<HStack
					width="100%"
					maxW={{
						base: "sm",
						"@sm": "xl",
						"@md": "3xl",
						"@lg": "4xl",
						"@xl": "5xl",
						"@xxl": "6xl",
					}}
					alignItems="center"
					justifyContent="space-between"
					gap="5"
					flexDirection={{
						base: "column",
						"@xxl": "row",
					}}
				>
					<Box
						h="400px"
						w="100%"
						borderRadius="lg"
						pt="5"
						pb="0"
						pl="30"
						pr="30"
						style={{ backgroundColor: "#fff" }}
						position="relative"
					>
						<Stack
							bg="neutral.12"
							borderTopRadius="2xl"
							p="3"
							alignItems="flex-start"
							w={{
								base: "80%",
								"@sm": "70%",
								"@md": "50%",
							}}
							position="absolute"
							top="10%"
							left={{
								base: "-21%",
								"@xs": "-21%",
								"@sm": "-13%",
								"@md": "5%",
								"@lg": "5%",
							}}
							transform="translate(40%, 0%)"
						>
							<Text as="h1" color="neutral.9" fontWeight="medium">
								Brokerage Account
							</Text>
							<HStack>
								<Text as="h2" color="neutral.9" fontWeight="medium">
									$12,350.57
								</Text>
								<Box>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="14px"
										viewBox="0 -960 960 960"
										width="14px"
										fill="#22c55e"
									>
										<path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
									</svg>
								</Box>
								<Text color="green.10" fontSize="xs" fontWeight="medium">
									$201.28 (+12.3%)
								</Text>
							</HStack>
							<Stack>
								<HStack>
									<Box>
										<Circle borderColor="neutral.11" borderWidth="0.5" p="1">
											<svg
												width="15px"
												height="15px"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M6.5 22V15"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M6.5 5V2"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M17.5 22V19"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M17.5 9V2"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M9.5 7V13C9.5 14.1 9 15 7.5 15H5.5C4 15 3.5 14.1 3.5 13V7C3.5 5.9 4 5 5.5 5H7.5C9 5 9.5 5.9 9.5 7Z"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
												<path
													d="M20.5 11V17C20.5 18.1 20 19 18.5 19H16.5C15 19 14.5 18.1 14.5 17V11C14.5 9.9 15 9 16.5 9H18.5C20 9 20.5 9.9 20.5 11Z"
													stroke="#7b7b7b"
													stroke-width="1.5"
													stroke-miterlimit="10"
													stroke-linecap="round"
													stroke-linejoin="round"
												/>
											</svg>
										</Circle>
									</Box>
								</HStack>
							</Stack>
						</Stack>
					</Box>
					<Box>
						<Text as="h2" style={{ color: customGreen }}>
							Lorem ipsum dolor sit
						</Text>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
						</Text>
					</Box>
				</HStack>
				<HStack>
					<Box w="100%" bg="white.a1"></Box>
					<Box>
						<Text as="h2" w="100%" style={{ color: customGreen }}>
							Lorem ipsum dolor sit
						</Text>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
						</Text>
					</Box>
				</HStack>
				<HStack>
					<Box bg="white.a1" w="100%"></Box>
					<Box>
						<Text as="h2" style={{ color: customGreen }}>
							Lorem ipsum dolor sit
						</Text>
						<Text as="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
						</Text>
					</Box>
				</HStack>
			</Stack>
		</Box>
	)
}

export default Content
