import { Box, Circle, HStack, Stack, Container } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import { Progress } from "~/ui/progress"

const Summary = () => (
	<Box
		h="350px"
		w="full"
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
		overflow="hidden"
	>
		<Box
			className="box-image"
			w="full"
			h="100%"
			zIndex="1"
			top="50"
			bottom="0"
			right={{
				base: "0",
				"@md": "13%",
				"@lg": "0",
			}}
			margin="auto"
			position="absolute"
		>
			<svg
				width="100%"
				height="50%"
				viewBox="0 0 593 170"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				id="svg1502488672_5536"
			>
				<path
					d="M83.8527 41.9263C83.8527 53.0459 79.4355 63.71 71.5728 71.5727C63.71 79.4355 53.0459 83.8527 41.9263 83.8527C30.8068 83.8527 20.1427 79.4355 12.2799 71.5728C4.41723 63.71 1.67901e-06 53.0459 0 41.9264L41.9263 41.9263H83.8527Z"
					fill="#719267"
				/>
				<path
					d="M168.705 41.9263C168.705 53.0459 164.288 63.71 156.425 71.5727C148.563 79.4355 137.898 83.8527 126.779 83.8527C115.659 83.8527 104.995 79.4355 97.1325 71.5728C89.2698 63.71 84.8525 53.0459 84.8525 41.9264L126.779 41.9263H168.705Z"
					fill="#719267"
				/>
				<path
					d="M253.558 41.9263C253.558 53.0459 249.141 63.71 241.278 71.5727C233.416 79.4355 222.751 83.8527 211.632 83.8527C200.512 83.8527 189.848 79.4355 181.986 71.5728C174.123 63.71 169.706 53.0459 169.706 41.9264L211.632 41.9263H253.558Z"
					fill="#719267"
				/>
				<path
					d="M338.411 41.9263C338.411 53.0459 333.994 63.71 326.131 71.5727C318.268 79.4355 307.604 83.8527 296.484 83.8527C285.365 83.8527 274.701 79.4355 266.838 71.5728C258.975 63.71 254.558 53.0459 254.558 41.9264L296.484 41.9263H338.411Z"
					fill="#719267"
				/>
				<path
					d="M423.263 41.9263C423.263 53.0459 418.846 63.71 410.983 71.5727C403.121 79.4355 392.457 83.8527 381.337 83.8527C370.217 83.8527 359.553 79.4355 351.691 71.5728C343.828 63.71 339.411 53.0459 339.411 41.9264L381.337 41.9263H423.263Z"
					fill="#719267"
				/>
				<path
					d="M508.116 41.9263C508.116 53.0459 503.699 63.71 495.836 71.5727C487.974 79.4355 477.31 83.8527 466.19 83.8527C455.07 83.8527 444.406 79.4355 436.544 71.5728C428.681 63.71 424.264 53.0459 424.264 41.9264L466.19 41.9263H508.116Z"
					fill="#719267"
				/>
				<path
					d="M592.969 41.9263C592.969 53.0459 588.552 63.71 580.689 71.5727C572.826 79.4355 562.162 83.8527 551.043 83.8527C539.923 83.8527 529.259 79.4355 521.396 71.5728C513.533 63.71 509.116 53.0459 509.116 41.9264L551.043 41.9263H592.969Z"
					fill="#719267"
				/>
				<path
					d="M83.8527 84.7789C83.8527 95.8984 79.4355 106.563 71.5728 114.425C63.71 122.288 53.0459 126.705 41.9263 126.705C30.8068 126.705 20.1427 122.288 12.2799 114.425C4.41723 106.563 1.67901e-06 95.8984 0 84.7789L41.9263 84.7789H83.8527Z"
					fill="#719267"
				/>
				<path
					d="M168.705 84.7789C168.705 95.8984 164.288 106.563 156.425 114.425C148.563 122.288 137.898 126.705 126.779 126.705C115.659 126.705 104.995 122.288 97.1325 114.425C89.2698 106.563 84.8525 95.8984 84.8525 84.7789L126.779 84.7789H168.705Z"
					fill="#719267"
				/>
				<path
					d="M253.558 84.7789C253.558 95.8984 249.141 106.563 241.278 114.425C233.416 122.288 222.751 126.705 211.632 126.705C200.512 126.705 189.848 122.288 181.986 114.425C174.123 106.563 169.706 95.8984 169.706 84.7789L211.632 84.7789H253.558Z"
					fill="#719267"
				/>
				<path
					d="M338.411 84.7789C338.411 95.8984 333.994 106.563 326.131 114.425C318.268 122.288 307.604 126.705 296.484 126.705C285.365 126.705 274.701 122.288 266.838 114.425C258.975 106.563 254.558 95.8984 254.558 84.7789L296.484 84.7789H338.411Z"
					fill="#719267"
				/>
				<path
					d="M423.263 84.7789C423.263 95.8984 418.846 106.563 410.983 114.425C403.121 122.288 392.457 126.705 381.337 126.705C370.217 126.705 359.553 122.288 351.691 114.425C343.828 106.563 339.411 95.8984 339.411 84.7789L381.337 84.7789H423.263Z"
					fill="#719267"
				/>
				<path
					d="M508.116 84.7789C508.116 95.8984 503.699 106.563 495.836 114.425C487.974 122.288 477.31 126.705 466.19 126.705C455.07 126.705 444.406 122.288 436.544 114.425C428.681 106.563 424.264 95.8984 424.264 84.7789L466.19 84.7789H508.116Z"
					fill="#719267"
				/>
				<path
					d="M592.969 84.7789C592.969 95.8984 588.552 106.563 580.689 114.425C572.826 122.288 562.162 126.705 551.043 126.705C539.923 126.705 529.259 122.288 521.396 114.425C513.533 106.563 509.116 95.8984 509.116 84.7789L551.043 84.7789H592.969Z"
					fill="#719267"
				/>
				<path
					d="M83.8527 127.631C83.8527 138.751 79.4355 149.415 71.5728 157.278C63.71 165.141 53.0459 169.558 41.9263 169.558C30.8068 169.558 20.1427 165.141 12.2799 157.278C4.41723 149.415 1.67901e-06 138.751 0 127.631L41.9263 127.631H83.8527Z"
					fill="#719267"
				/>
				<path
					d="M168.705 127.631C168.705 138.751 164.288 149.415 156.425 157.278C148.563 165.141 137.898 169.558 126.779 169.558C115.659 169.558 104.995 165.141 97.1325 157.278C89.2698 149.415 84.8525 138.751 84.8525 127.631L126.779 127.631H168.705Z"
					fill="#719267"
				/>
				<path
					d="M253.558 127.631C253.558 138.751 249.141 149.415 241.278 157.278C233.416 165.141 222.751 169.558 211.632 169.558C200.512 169.558 189.848 165.141 181.986 157.278C174.123 149.415 169.706 138.751 169.706 127.631L211.632 127.631H253.558Z"
					fill="#719267"
				/>
				<path
					d="M338.411 127.631C338.411 138.751 333.994 149.415 326.131 157.278C318.268 165.141 307.604 169.558 296.484 169.558C285.365 169.558 274.701 165.141 266.838 157.278C258.975 149.415 254.558 138.751 254.558 127.631L296.484 127.631H338.411Z"
					fill="#719267"
				/>
				<path
					d="M423.263 127.631C423.263 138.751 418.846 149.415 410.983 157.278C403.121 165.141 392.457 169.558 381.337 169.558C370.217 169.558 359.553 165.141 351.691 157.278C343.828 149.415 339.411 138.751 339.411 127.631L381.337 127.631H423.263Z"
					fill="#719267"
				/>
				<path
					d="M508.116 127.631C508.116 138.751 503.699 149.415 495.836 157.278C487.974 165.141 477.31 169.558 466.19 169.558C455.07 169.558 444.406 165.141 436.544 157.278C428.681 149.415 424.264 138.751 424.264 127.631L466.19 127.631H508.116Z"
					fill="#719267"
				/>
				<path
					d="M592.969 127.631C592.969 138.751 588.552 149.415 580.689 157.278C572.826 165.141 562.162 169.558 551.043 169.558C539.923 169.558 529.259 165.141 521.396 157.278C513.533 149.415 509.116 138.751 509.116 127.631L551.043 127.631H592.969Z"
					fill="#719267"
				/>
			</svg>
		</Box>
		<Box
			bg="neutral.10"
			p="2"
			borderRadius="2xl"
			w="md"
			h="md"
			position="absolute"
			top="36"
			bottom="0"
			right="0"
			margin="auto"
			left={{
				base: "15%",
				"@sm": "40%",
				"@md": "50%",
				"@lg": "50%",
				"@xl": "70%",
				"@xxl": "50%",
			}}
			zIndex="2"
		>
			<Stack>
				<HStack>
					<Box bg="neutral.12" borderRadius="md" p="3" h="2xs" w="full">
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
							<Progress value={30} color="green.12" style={{ color: "transparent" }} />
							<HStack mt="-5">
								<Circle bg="sky.8" w="2" h="2" />
								<HStack justifyContent="space-between" w="full">
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
								<HStack justifyContent="space-between" w="full">
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
								<HStack justifyContent="space-between" w="full">
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

					<Box bg="neutral.12" borderRadius="md" p="3" h="2xs" w="full"></Box>
				</HStack>

				<HStack>
					<Box bg="neutral.12" borderRadius="md" p="3" h="2xs" w="full"></Box>

					<Box bg="neutral.12" borderRadius="md" p="3" h="2xs" w="full"></Box>
				</HStack>
			</Stack>
		</Box>
	</Box>
)

const DashBoard = () => {
	return (
		<>
			<HStack
				w="full"
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
				<Summary />

				<Box w="full">
					<Text as="h2" color="grass.7" fontWeight="medium" fontSize="lg">
						Customizable Dashboard
					</Text>
					<Text as="p" color="grass.7" wordBreak="break-word" whiteSpace="pre-wrap">
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
