import { useState } from "react"
import { Switch } from "~/ui/switch"
import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import * as Card from "~/ui/card"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"

const CardTen = () => {
	return (
		<Card.Root
			p="6"
			bg="sky.2"
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
			<Box>
				<Stack>
					<Text as="h1" fontWeight="bold" fontSize="4xl">
						Designed for business teams like yours
					</Text>
					<Text as="p" color="neutral.10" fontWeight="medium">
						Here at Flowbite we focus on markets where technology, innovation, and{" "}
						<br />
						capital can unlock long-term value and drive economic growth.
					</Text>
					<HStack>
						<Text as="p" fontWeight="medium">
							Monthly
						</Text>
						<Switch defaultChecked></Switch>
						<Text as="p" color="neutral.10" fontWeight="medium">
							Yearly
						</Text>
					</HStack>
				</Stack>
			</Box>
			<HStack
				display="flex"
				flexDirection={{ base: "column", "@md": "row" }}
				justifyContent="space-between"
				alignItems="flex-start"
				gap="10"
			>
				<Box className="freelancer">
					<HStack>
						<Stack>
							<Text as="h2" color="neutral.10" fontWeight="semibold ">
								FREELANCER
							</Text>
							<Text as="h1" fontSize="4xl" fontWeight="bold">
								{" "}
								$49{" "}
								<Text as="span" fontSize="sm" color="neutral.10" fontWeight="medium">
									{" "}
									/monthly
								</Text>{" "}
							</Text>
							<Text as="p" fontSize="md" color="neutral.10" fontWeight="medium">
								Best option for personal use and for your next side projects.
							</Text>
							<HStack alignItems="center" marginTop="4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									All tools you need to manage payments
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									No setup, monthly, or hidden fees
								</Text>
							</HStack>
							<Button bg="blue.8" size="lg" marginTop="4" _hover={{ bg: "blue.10" }}>
								Get Started
							</Button>
						</Stack>
					</HStack>
				</Box>

				<Box className="company">
					<HStack>
						<Stack>
							<Text as="h2" color="neutral.10" fontWeight="semibold ">
								COMPANY
							</Text>
							<Text as="h1" fontSize="4xl" fontWeight="bold">
								{" "}
								$199{" "}
								<Text as="span" fontSize="sm" color="neutral.10" fontWeight="medium">
									{" "}
									/monthly
								</Text>{" "}
							</Text>
							<Text as="p" fontSize="md" color="neutral.10" fontWeight="medium">
								Best option for personal use and for your next side projects.
							</Text>
							<HStack alignItems="center" marginTop="4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									All tools you need to manage payments
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									No setup, monthly, or hidden fees
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Comprehensive security and rigorous
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Get hundreds of feature updates
								</Text>
							</HStack>
							<Button bg="blue.8" size="lg" marginTop="4" _hover={{ bg: "blue.10" }}>
								Get Started
							</Button>
						</Stack>
					</HStack>
				</Box>

				<Box className="enterprise">
					<HStack>
						<Stack>
							<Text as="h2" color="neutral.10" fontWeight="semibold ">
								ENTERPRISE
							</Text>
							<Text as="h1" fontSize="4xl" fontWeight="bold">
								{" "}
								$999{" "}
								<Text as="span" fontSize="sm" color="neutral.10" fontWeight="medium">
									{" "}
									/monthly
								</Text>{" "}
							</Text>
							<Text as="p" fontSize="md" color="neutral.10" fontWeight="medium">
								Best option for personal use and for your next side projects.
							</Text>
							<HStack alignItems="center" marginTop="4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									All tools you need to manage payments
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									No setup, monthly, or hidden fees
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Comprehensive security and rigorous
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Get hundreds of feature updates
								</Text>
							</HStack>

							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Payouts to your bank accounts
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Financial reconciliation
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									24×7chat and email support
								</Text>
							</HStack>
							<HStack alignItems="center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									width="24"
									viewBox="0 -960 960 960"
									fill="#65a30d"
								>
									<path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
								</svg>
								<Text as="p" color="neutral.10" fontWeight="medium">
									{" "}
									Robust developer platform
								</Text>
							</HStack>

							<Button bg="blue.8" size="lg" marginTop="4" _hover={{ bg: "blue.10" }}>
								Get Started
							</Button>
						</Stack>
					</HStack>
				</Box>
			</HStack>
		</Card.Root>
	)
}

export default CardTen
