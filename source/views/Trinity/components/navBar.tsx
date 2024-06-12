import { Box, Circle, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import { useState } from "react"
import { useEffect } from "react"
import HamburgerMenu from "react-hamburger-menu"
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
			pl={{ base: "5", "@md": "3", "@lg": "5" }}
			pr={{ base: "5", "@md": "3", "@lg": "5" }}
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
						width="27"
						height="27"
						viewBox="0 0 27 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						id="svg-377777175_4222"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.10607 20.9826C7.10841 24.1139 10.0429 26.3808 13.5068 26.3808C16.9785 26.3808 19.9183 24.1037 20.9142 20.9615C24.0563 19.9656 26.3334 17.0258 26.3334 13.5541C26.3334 10.0902 24.0665 7.15575 20.9353 6.15342C19.9604 2.97637 17.0033 0.666504 13.5068 0.666504C10.018 0.666504 7.06635 2.96606 6.08481 6.13215C2.91871 7.11368 0.619141 10.0654 0.619141 13.5541C0.619141 17.0507 2.92901 20.0078 6.10607 20.9826ZM14.3045 14.3519C14.0436 14.3868 13.7773 14.4048 13.5068 14.4048C13.2148 14.4048 12.9277 14.3838 12.6469 14.3433C12.6128 14.0851 12.5952 13.8216 12.5952 13.5541C12.5952 13.2651 12.6157 12.9808 12.6554 12.7028C12.9335 12.6631 13.2177 12.6425 13.5068 12.6425C13.7743 12.6425 14.0377 12.6601 14.2959 12.6942C14.3364 12.975 14.3574 13.2621 14.3574 13.5541C14.3574 13.8246 14.3394 14.0909 14.3045 14.3519ZM13.7398 16.2013C13.6624 16.2036 13.5847 16.2048 13.5068 16.2048C13.408 16.2048 13.3097 16.2029 13.2118 16.1993C13.2928 16.3629 13.3811 16.5223 13.4763 16.677C13.5711 16.523 13.659 16.3642 13.7398 16.2013ZM14.6917 18.0967C15.1778 17.4233 15.5587 16.6689 15.8102 15.8576C16.6215 15.6061 17.3759 15.2252 18.0493 14.7391C18.9389 15.7815 19.4759 17.1339 19.4759 18.6117C19.4759 18.9007 19.4554 19.1849 19.4156 19.463C19.1376 19.5027 18.8533 19.5232 18.5643 19.5232C17.0865 19.5232 15.7341 18.9862 14.6917 18.0967ZM12.2609 18.0967C11.7705 17.4174 11.3872 16.6557 11.1358 15.8363C10.3501 15.5848 9.61888 15.2117 8.9642 14.7391C8.07466 15.7815 7.53764 17.1339 7.53764 18.6117C7.53764 18.9037 7.55861 19.1908 7.59912 19.4715C7.85733 19.5056 8.12074 19.5232 8.38827 19.5232C9.86606 19.5232 11.2184 18.9862 12.2609 18.0967ZM8.18634 21.3207C8.25344 21.3224 8.32075 21.3232 8.38827 21.3232C10.3343 21.3232 12.1132 20.6078 13.4763 19.4255C14.8394 20.6078 16.6183 21.3232 18.5643 21.3232C18.6526 21.3232 18.7405 21.3218 18.8281 21.3188C17.8412 23.2549 15.8288 24.5808 13.5068 24.5808C11.1854 24.5808 9.17357 23.2557 8.18634 21.3207ZM5.74314 18.9066C5.73948 18.8088 5.73764 18.7104 5.73764 18.6117C5.73764 16.6656 6.45312 14.8867 7.63537 13.5236C6.45312 12.1606 5.73764 10.3816 5.73764 8.43563C5.73764 8.35768 5.73879 8.28 5.74107 8.20261C3.7725 9.17826 2.41914 11.2081 2.41914 13.5541C2.41914 15.9009 3.77344 17.9314 5.74314 18.9066ZM7.59049 7.63784C7.55563 7.89881 7.53764 8.16512 7.53764 8.43563C7.53764 9.91342 8.07466 11.2658 8.9642 12.3082C9.62474 11.8314 10.3632 11.4558 11.1569 11.2042C11.4084 10.4106 11.784 9.67209 12.2609 9.01155C11.2184 8.12201 9.86606 7.58499 8.38827 7.58499C8.11776 7.58499 7.85146 7.60298 7.59049 7.63784ZM13.4763 10.4312C13.3932 10.5663 13.3153 10.705 13.243 10.8469C13.3305 10.844 13.4185 10.8425 13.5068 10.8425C13.5743 10.8425 13.6416 10.8434 13.7087 10.8451C13.6366 10.7038 13.559 10.5657 13.4763 10.4312ZM14.6917 9.01155C15.1643 9.66623 15.5375 10.3975 15.789 11.1831C16.6084 11.4346 17.3701 11.8178 18.0493 12.3082C18.9389 11.2658 19.4759 9.91342 19.4759 8.43563C19.4759 8.1681 19.4583 7.90468 19.4242 7.64646C19.1434 7.60595 18.8563 7.58499 18.5643 7.58499C17.0865 7.58499 15.7341 8.12201 14.6917 9.01155ZM16.1519 13.2591C16.3155 13.3402 16.475 13.4285 16.6297 13.5236C16.4756 13.6184 16.3169 13.7064 16.154 13.7871C16.1562 13.7097 16.1574 13.6321 16.1574 13.5541C16.1574 13.4553 16.1556 13.357 16.1519 13.2591ZM13.4763 7.68272C14.8394 6.50047 16.6183 5.78499 18.5643 5.78499C18.6631 5.78499 18.7614 5.78683 18.8593 5.79048C17.884 3.8208 15.8536 2.4665 13.5068 2.4665C11.1608 2.4665 9.13092 3.81985 8.15527 5.78841C8.23266 5.78613 8.31033 5.78499 8.38827 5.78499C10.3343 5.78499 12.1132 6.50047 13.4763 7.68272ZM10.7952 13.5541C10.7952 13.6216 10.796 13.6889 10.7978 13.7561C10.6564 13.684 10.5184 13.6064 10.3838 13.5236C10.519 13.4405 10.6576 13.3627 10.7996 13.2903C10.7967 13.3779 10.7952 13.4658 10.7952 13.5541ZM21.2759 8.43563C21.2759 8.36811 21.275 8.3008 21.2733 8.23369C23.2084 9.22092 24.5334 11.2328 24.5334 13.5541C24.5334 15.8762 23.2075 17.8886 21.2715 18.8755C21.2744 18.7879 21.2759 18.6999 21.2759 18.6117C21.2759 16.6656 20.5604 14.8867 19.3782 13.5236C20.5604 12.1606 21.2759 10.3816 21.2759 8.43563Z"
							fill="#1D3D14"
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
				className="nav-links"
				h="100%"
				w="100%"
				alignItems="flex-start"
				justifyContent="flex-start"
				pl="10"
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
