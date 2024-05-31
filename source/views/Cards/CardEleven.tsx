import { useEffect, useState } from "react"
import { Progress } from "~/ui/progress"
import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import * as Card from "~/ui/card"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import { styled } from "styled-components"

const CardEleven = () => {
	const [value, setValue] = useState(0)
	useEffect(() => {
		const interval = setInterval(() => {
			setValue(value => (value >= 70 ? 70 : value + 1))
		}, Math.random() * 500)
		return () => clearInterval(interval)
	})

	return (
		<Card.Root
			p="6"
			bg="sky.1"
			gap="10"
			width={{
				base: "md",
				"@sm": "xl",
				"@md": "3xl",
				"@lg": "4xl",
				"@xl": "5xl",
				"@xxl": "6xl",
			}}
			display="flex"
		>
			<Stack gap="5" width="full" alignItems="center" textAlign="center">
				<Text as="h1" fontSize="3xl" fontWeight="bold" color="neutral.12">
					Fundraising events
				</Text>
				<Text fontSize="lg" color="neutral.10" width={{ base: "none", "@md": "xl" }}>
					Flowbite helps you connect with friends, family and communities of people who
					share your interests.
				</Text>
			</Stack>

			<HStack
				display="flex"
				flexDirection={{ base: "column", "@lg": "row" }}
				gap="10"
				justifyContent="center"
			>
				<Box bg="sky.2" p="6" borderRadius="md" maxWidth="md">
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png"
						alt="tree"
						style={{ borderRadius: "8px" }}
					/>
					<HStack marginTop="5" alignItems="center">
						<Text fontSize="lg" fontWeight="bold" color="neutral.12">
							$376,856{" "}
						</Text>
						<HStack display="flex" justifyContent="space-between" width="100%">
							<Text as="span" fontSize="sm" color="neutral.10" fontWeight="medium">
								of 400k goal
							</Text>
							<Text as="p" fontSize="xs" color="neutral.10">
								2,756 donors
							</Text>
						</HStack>
					</HStack>
					<Progress
						value={value}
						min={0}
						max={100}
						style={{ color: "transparent" }}
						marginTop="1"
					/>
					<Text as="h2" fontWeight="semibold">
						Thank you for supporting in planting trees work.
					</Text>
					<Text as="p" color="neutral.10" fontSize="md" marginTop="5">
						Our fundraisers are a creative bunch when it comes to taking on challenges,
						from beard shaves and bake sales to stand-up comedy and streaming marathons.
						There is something for everyone.
					</Text>
					<HStack gap="5" marginTop="5">
						<Button
							color="neutral.12"
							bg="blue.4"
							borderRadius="8"
							size="md"
							cursor="pointer"
							_hover={{ bg: "sky.7" }}
						>
							Donate Now
						</Button>
						<Button
							bg="sky.2"
							_hover={{ bg: "sky.3" }}
							borderColor="neutral.4"
							borderRadius="8"
							borderWidth="1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								width="24"
								viewBox="0 -960 960 960"
							>
								<path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
							</svg>
							Share This Fundraiser
						</Button>
					</HStack>
				</Box>
				<Box bg="sky.2" p="6" borderRadius="md" maxWidth="md">
					<img
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-2.png"
						alt="tree"
						style={{ borderRadius: "8px" }}
					/>
					<HStack justifyContent="center" marginTop="5" alignItems="center">
						<Text fontSize="lg" fontWeight="bold" color="neutral.12">
							$75,856{" "}
						</Text>
						<HStack width="100%" justifyContent="space-between">
							<Text as="span" fontSize="sm" color="neutral.10" fontWeight="medium">
								of 150k goal
							</Text>
							<Text as="p" fontSize="xs" color="neutral.10">
								956 donors
							</Text>
						</HStack>
					</HStack>
					<Progress
						value={50}
						min={0}
						max={100}
						style={{ color: "transparent" }}
						marginTop="1"
					/>
					<Text as="h2" fontWeight="semibold">
						Thank you for supporting our lifesaving work.
					</Text>
					<Text as="p" color="neutral.10" fontSize="md" marginTop="5">
						Our fundraisers are a creative bunch when it comes to taking on challenges,
						from beard shaves and bake sales to stand-up comedy and streaming marathons.
						There is something for everyone.
					</Text>
					<HStack gap="5" marginTop="5">
						<Button
							color="neutral.12"
							bg="blue.4"
							borderRadius="8"
							size="md"
							cursor="pointer"
							_hover={{ bg: "sky.7" }}
						>
							Donate Now
						</Button>
						<Button
							bg="sky.2"
							_hover={{ bg: "sky.3" }}
							borderColor="neutral.4"
							borderRadius="8"
							borderWidth="1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								width="24"
								viewBox="0 -960 960 960"
							>
								<path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" />
							</svg>
							Share This Fundraiser
						</Button>
					</HStack>
				</Box>
			</HStack>
		</Card.Root>
	)
}

export default CardEleven
