import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { css } from "@emotion/react" // Import the css function from the correct module
import * as Card from "~/ui/card"
import { Bold } from "lucide-react"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import { useState } from "react"
import { useEffect } from "react"
import HamburgerMenu from "react-hamburger-menu"
import { keyframes } from "@emotion/react"
import { customGreen } from "./customGreen"

const navBar = () => {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}

	const [animate, setAnimate] = useState(false)
	useEffect(() => {
		if (open) {
			setAnimate(true)
		} else {
			setTimeout(() => setAnimate(false), 500)
		}
	}, [open])

	const whiteColor = "#fff"

	return (
		<HStack
			style={{ backgroundColor: whiteColor }}
			bg="neutral.12"
			w="100%"
			p={{ base: "2", "@md": "3", "@lg": "5" }}
			mt={{ base: "0", "@md": "3", "@lg": "5" }}
			// justifyContent="space-between"
		>
			<HStack
				w="100%"
				justifyContent="space-between"
				alignItems="center"
				// pl={{ base: "0", "@md": "0", "@lg": "10" }}
			>
				<Box>
					<svg
						width="34px"
						height="34px"
						viewBox="0 0 1024 1024"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
							fill="#050D42"
						/>
						<path
							d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
							fill="#050D42"
						/>
						<path
							d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
							fill="#050D42"
						/>
						<path
							d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
							fill="#2F4BFF"
						/>
					</svg>
				</Box>
				{/* {open && ( */}
				<HStack
					justifyContent="space-between"
					display={{ base: "none", "@md": "flex" }}
				>
					<HStack gap="10">
						<Text as="p" size="md" fontWeight="normal" style={{ color: customGreen }}>
							Investment
						</Text>
						<Text as="p" size="md" fontWeight="normal" style={{ color: customGreen }}>
							Features
						</Text>
						<Text as="p" size="md" fontWeight="normal" style={{ color: customGreen }}>
							FAQ
						</Text>
					</HStack>
				</HStack>
				<Box display={{ base: "none", "@md": "flex" }}>
					<Text as="p" size="md" fontWeight="normal" style={{ color: customGreen }}>
						Log In
					</Text>
				</Box>
			</HStack>

			<Stack
				// paddingLeft="5"
				className="nav-links"
				h="100%"
				w="100%"
				alignItems="flex-start"
				justifyContent="flex-start"
				pl="5"
				// mt="-20"
				display={{ base: open ? "flex" : "none", "@md": "none" }}
				style={{
					backgroundColor: whiteColor,
					position: "absolute",
					top: "1%",
					left: "55%",
					transform: animate ? `translate(-55%, 2%)` : `translate(-54%, -100%)`,
					transition: "all 0.8s ease-in-out",
					opacity: open ? 1 : 0,
					visibility: open ? "visible" : "hidden",
				}}
			>
				<Text
					as="p"
					size="md"
					fontWeight="normal"
					paddingLeft="2"
					transition="all 0.7s ease"
					w="xs"
					color="grass.8"
					_hover={{
						bg: "mint.12",
						borderRadius: "15",
						paddingLeft: "2",
						w: "xs",
					}}
				>
					Investment
				</Text>
				<Text
					as="p"
					size="md"
					fontWeight="normal"
					color="grass.8"
					paddingLeft="2"
					transition="all 0.7s ease"
					w="xs"
					_hover={{
						bg: "mint.12",
						borderRadius: "15",
						paddingLeft: "2",
						w: "xs",
					}}
				>
					Features
				</Text>
				<Text
					as="p"
					size="md"
					fontWeight="normal"
					color="grass.8"
					paddingLeft="2"
					transition="all 0.7s ease"
					w="xs"
					_hover={{
						bg: "mint.12",
						borderRadius: "15",
						paddingLeft: "2",
						w: "xs",
					}}
				>
					FAQ
				</Text>
				<Text
					as="p"
					size="md"
					fontWeight="normal"
					color="grass.8"
					paddingLeft="2"
					transition="all 0.7s ease"
					w="xs"
					_hover={{
						bg: "mint.12",
						borderRadius: "15",
						w: "xs",
						paddingLeft: "2",
					}}
				>
					Log In
				</Text>
				<Button
					bg="neutral.12"
					borderWidth="1"
					borderRadius="10"
					borderColor="neutral.11"
					color="grass.8"
					size="md"
					borderBottomWidth="4"
					p="0"
					w="100%"
					maxW="10rem"
				>
					Purchase Template
				</Button>
			</Stack>
			{/* )} */}

			<Box display={{ base: "block", md: "none" }}>
				<HamburgerMenu
					isOpen={open}
					menuClicked={handleClick}
					width={18}
					height={15}
					strokeWidth={1}
					rotate={0}
					color="black"
					borderRadius={0}
					animationDuration={0.5}
				/>
			</Box>
		</HStack>
	)
}

export default navBar
