import { Box, HStack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { styled } from "styled-system/jsx"

const LogoCenter = () => {
	return (
		<Box p="1" className="logo">
			<HStack gap="1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 50 50"
					width="35px"
					height="30px"
					fill="#fff"
				>
					{" "}
					<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M21,36c0,1.1-0.9,2-2,2h-7 c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2V36z M40,24c0,1.1-0.9,2-2,2h-7c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7 c1.1,0,2,0.9,2,2V24z" />
				</svg>
				<Text
					color="white"
					fontSize="xl"
					fontWeight="bold"
					fontFamily="Playwrite NZ"
					_hover={{ cursor: "pointer" }}
				>
					Trello
				</Text>
			</HStack>
		</Box>
	)
}

export default LogoCenter
