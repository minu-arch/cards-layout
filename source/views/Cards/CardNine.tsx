import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import * as Card from "~/ui/card"
import { Text } from "~/ui/text"
import { Link } from "~/ui/link"

const CardNine = () => {
	return (
		<Card.Root
			p="6"
			bg="sky.2"
			gap="10"
			width={{ base: "md", "@sm": "xl", "@md": "3xl", "@lg": "4xl" }}
			display="flex"
			flexDirection={{ base: "column", "@md": "row" }}
			shadow="md"
			borderRadius="xl"
		>
			<Box>
				<Stack>
					<Text as="p" size="lg" color="lime.9" fontWeight="bold" letterSpacing="1">
						Trusted Worldwide
					</Text>
					<Text as="h1" size="2xl" fontWeight="bold">
						Trusted by over 600 million <br /> users and 10,000 teams
					</Text>
					<Text as="p" size="md" color="neutral.10">
						Our rigorous security and compliance standards are at the heart of all we
						do. We work tirelessly to protect you and your customers.
					</Text>
					<Box
						bg="indigo.12"
						width="100%"
						borderWidth="1.5px"
						borderColor="neutral.4"
						borderRadius="8"
						marginTop="5"
					></Box>
					<Link
						href="#"
						color="lime.9"
						marginTop="5"
						letterSpacing="1"
						_hover={{ textDecoration: "none", color: "lime.7" }}
						maxWidth="fit-content"
					>
						Explore Legality Guide
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#65a30d"
							viewBox="0 -960 960 960"
						>
							<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
						</svg>
					</Link>
					<Link
						href="#"
						color="lime.9"
						letterSpacing="1"
						_hover={{ textDecoration: "none", color: "lime.7" }}
						maxWidth="fit-content"
					>
						Visit the Trust Center
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="#65a30d"
							viewBox="0 -960 960 960"
						>
							<path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
						</svg>
					</Link>
				</Stack>
			</Box>

			{/* aside */}

			<Box display="flex" flexDirection="column" gap={{ base: "2", "@md": "10" }}>
				<HStack
					display="flex"
					flexDirection={{ base: "column", "@md": "row" }}
					alignItems={{ base: "center", "@md": "flex-start" }}
					justifyContent={{ base: "center", "@md": "space-between" }}
				>
					<Box width="100%">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="48"
							height="48"
							fill="#65a30d"
						>
							<path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z" />
						</svg>
						<Text as="h1" size="xl" fontWeight="bold">
							99.99% uptime
						</Text>
						<Text as="p" size="md" color="neutral.10">
							For Flowbite, with zero maintenance downtime
						</Text>
					</Box>

					<Box width="100%">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="48"
							height="48"
							fill="#65a30d"
						>
							<path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z" />
						</svg>
						<Text as="h1" size="xl" fontWeight="bold">
							600M+ Users
						</Text>
						<Text as="p" size="md" color="neutral.10">
							Trusted by over 600 milion users around the world
						</Text>
					</Box>
				</HStack>

				<HStack
					flexDirection={{ base: "column", "@md": "row" }}
					alignItems={{ base: "center", "@md": "flex-start" }}
					justifyContent={{ base: "center", "@md": "space-between" }}
				>
					<Box width="100%">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="48"
							height="48"
							fill="#65a30d"
						>
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-7-.5-14.5T799-507q-5 29-27 48t-52 19h-80q-33 0-56.5-23.5T560-520v-40H400v-80q0-33 23.5-56.5T480-720h40q0-23 12.5-40.5T563-789q-20-5-40.5-8t-42.5-3q-134 0-227 93t-93 227h200q66 0 113 47t47 113v40H400v110q20 5 39.5 7.5T480-160Z" />
						</svg>
						<Text as="h1" size="xl" fontWeight="bold">
							100+ countries
						</Text>
						<Text as="p" size="md" color="neutral.10">
							Have used Flowbite to create functional websites
						</Text>
					</Box>

					<Box width="100%">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="48"
							height="48"
							fill="#65a30d"
						>
							<path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
						</svg>
						<Text as="h1" size="xl" fontWeight="bold">
							5+ Million
						</Text>
						<Text as="p" size="md" color="neutral.10">
							Transactions per day
						</Text>
					</Box>
				</HStack>
			</Box>
		</Card.Root>
	)
}

export default CardNine
