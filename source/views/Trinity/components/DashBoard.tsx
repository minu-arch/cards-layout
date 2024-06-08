import { Box, Circle, HStack, Stack, Container } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import { Progress } from "~/ui/progress"
import new253 from "./image/new253.jpg"

const DashBoard = () => {
	return (
		<>
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
					h="350px"
					w="100%"
					maxW={{
						base: "md",
						"@sm": "xl",
						"@md": "3xl",
						"@lg": "4xl",
						"@xl": "5xl",
						"@xxl": "6xl",
					}}
					borderRadius="lg"
					pt="5"
					pb="0"
					pl="30"
					pr="30"
					style={{ backgroundColor: "#fff" }}
					position="relative"
				>
					<Box
						className="box-image"
						w="100%"
						h="100%"
						zIndex="1"
						top="0"
						bottom="0"
						left="0"
						right="0"
						margin="auto"
						position="absolute"
						borderRadius="lg"
						style={{
							backgroundImage: `url(${new253})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
					<Box
						bg="neutral.10"
						p="2"
						borderRadius="2xl"
						w={{
							base: "80%",
							"@sm": "70%",
							"@md": "30%",
							"@lg": "40%",
						}}
						h="80%"
						position="absolute"
						top="0"
						bottom="0"
						left={{
							base: "0",
							"@lg": "60%",
						}}
						right="0"
						margin="auto"
						zIndex="2"
					>
						<Box bg="neutral.12" borderRadius="md" p="3" h="100%">
							<Stack>
								<Text as="h1" color="neutral.9" fontWeight="medium" fontSize="xs">
									Summary
								</Text>
								<HStack justifyContent="space-between">
									<Text as="h2" color="neutral.9" fontWeight="medium" fontSize="2xs">
										Total Value
									</Text>
									<Text as="h2" color="neutral.9" fontWeight="medium" fontSize="2xs">
										$24,235.67
									</Text>
								</HStack>
								<Progress
									value={30}
									color="green.12"
									style={{ color: "transparent" }}
								/>
								<HStack mt="-5">
									<Circle bg="sky.8" w="2" h="2" />
									<HStack justifyContent="space-between" w="100%">
										<Text as="p" color="neutral.9" fontSize="2xs">
											Cash{" "}
										</Text>
										<Text as="p" color="neutral.9" fontSize="2xs">
											30%
										</Text>
									</HStack>
								</HStack>

								<HStack>
									<Circle bg="green.11" w="2" h="2" />
									<HStack justifyContent="space-between" w="100%">
										<Text as="p" color="neutral.9" fontSize="2xs">
											Investments{" "}
										</Text>
										<Text as="p" color="neutral.9" fontSize="2xs">
											70%
										</Text>
									</HStack>
								</HStack>

								<HStack>
									<Circle bg="violet.9" w="2" h="2" />
									<HStack justifyContent="space-between" w="100%">
										<Text as="p" color="neutral.9" fontSize="2xs">
											Debt{" "}
										</Text>
										<Text as="p" color="neutral.9" fontSize="2xs">
											0%
										</Text>
									</HStack>
								</HStack>
								<Box bg="neutral.11" h="0.1"></Box>
								<HStack justifyContent="space-between">
									<Text as="h2" color="neutral.9" fontWeight="medium" fontSize="2xs">
										Day Change
									</Text>
									<Text as="h2" color="green.11" fontWeight="medium" fontSize="2xs">
										+$135.50 (0.50%)
									</Text>
								</HStack>
								<Button
									bg="transparent"
									borderColor="neutral.11"
									borderWidth="0.1"
									color="neutral.9"
									fontSize="2xs"
									fontWeight="medium"
									p="0"
								>
									View Statements
								</Button>
							</Stack>
						</Box>
					</Box>
				</Box>
				<Box>
					<Text as="h2" color="grass.7" fontWeight="medium" fontSize="lg">
						Customizable Dashboard
					</Text>
					<Text as="p" color="grass.7">
						Trinity's platform offers a customizable dashboard that allows users to
						personalize their experience based on their preferences and priorities.
						Users can rearrange widgets, add or remove modules, and tailor the dashboard
						layout to suit their individual needs.
					</Text>
				</Box>
			</HStack>
		</>
	)
}

export default DashBoard
