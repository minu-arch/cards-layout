import { Box, HStack } from "styled-system/jsx"
import { Text, Heading } from "~/ui"
import { motion } from "framer-motion"

const LogoCenter = () => {
	const svgVariants = {
		hidden: { rotate: -180 },
		visible: { rotate: 0, transition: { duration: 1 } },
	}

	const MotionHeading = motion(Heading)

	return (
		<Box p="1" className="logo">
			<HStack gap="1">
				<motion.svg
					viewBox="0 0 50 50"
					width="35px"
					height="30px"
					fill="#fff"
					variants={svgVariants}
					initial="hidden"
					animate="visible"
				>
					{" "}
					<path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M21,36c0,1.1-0.9,2-2,2h-7 c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7c1.1,0,2,0.9,2,2V36z M40,24c0,1.1-0.9,2-2,2h-7c-1.1,0-2-0.9-2-2V12c0-1.1,0.9-2,2-2h7 c1.1,0,2,0.9,2,2V24z" />
				</motion.svg>

				<MotionHeading
					color="white"
					fontSize="xl"
					fontWeight="bold"
					fontFamily="Playwrite NZ"
					_hover={{ cursor: "pointer" }}
					transition={{ type: "spring", stiffness: 300 }}
					whileHover={{
						scale: 1.1,
						originX: 0,
					}}
				>
					Trello
				</MotionHeading>
			</HStack>
		</Box>
	)
}

export default LogoCenter
