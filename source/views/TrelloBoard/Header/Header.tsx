import React from "react"
import { styled } from "styled-system/jsx"
import { HStack, Stack, VStack, Box, Flex } from "styled-system/jsx"
import { Text, Heading } from "~/ui"

const Header = () => {
	return (
		<HStack
			bg="blue.10"
			w="full"
			p="1"
			justifyContent="space-between"
			alignItems="center"
			fontFamily="poppins, sans-serif"
		>
			<HStack>
				<Box
					p="1"
					borderRadius="sm"
					_hover={{
						cursor: "pointer",
						bg: "blue.8",
					}}
				>
					<Heading as="h1" color="white" fontSize="normal" fontWeight="bold">
						Web Development
					</Heading>
				</Box>
				<Box
					p="1"
					borderRadius="sm"
					_hover={{
						cursor: "pointer",
						bg: "blue.8",
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#e8eaed"
					>
						<path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
					</svg>
				</Box>
				<Flex
					p="1"
					gap="1"
					borderRadius="sm"
					_hover={{
						cursor: "pointer",
						bg: "blue.8",
					}}
				>
					<Box>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#e8eaed"
						>
							<path d="M480-400ZM80-160v-400q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v400H80Zm240-200v40h-80v-40h-80v120h640v-120h-80v40h-80v-40H320ZM160-560v120h80v-40h80v40h320v-40h80v40h80v-120H160Zm200-80h240v-80H360v80Z" />
						</svg>
					</Box>
					<Heading as="h1" color="white" fontSize="normal" fontWeight="bold">
						Personal
					</Heading>
				</Flex>
			</HStack>
			<Box>
				<Flex
					p="1"
					gap="1"
					borderRadius="sm"
					alignItems="center"
					_hover={{
						cursor: "pointer",
						bg: "blue.8",
					}}
				>
					<Box>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							fill="#fff"
						>
							<path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
						</svg>
					</Box>
					<Heading as="h2" color="white" fontSize="sm" fontWeight="normal">
						Show menu
					</Heading>
				</Flex>
			</Box>
		</HStack>
	)
}

export default Header
