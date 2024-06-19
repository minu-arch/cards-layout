import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import { customGreen } from "./customGreen"
import { css } from "styled-system/css"

const RightContent = () => {
	const $BoxChart1 = css({
		width: "10%",
		background: "neutral.11",
		height: "4",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "0s",
	})

	const $BoxChart2 = css({
		width: "10%",
		background: "neutral.11",
		height: "6",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "2s",
	})

	const $BoxChart3 = css({
		width: "10%",
		background: "neutral.11",
		height: "8",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "4s",
	})

	const $BoxChart4 = css({
		width: "10%",
		background: "neutral.11",
		height: "12",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "6s",
	})

	const $BoxChart5 = css({
		width: "10%",
		background: "neutral.11",
		height: "16",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "8s",
	})

	const $BoxChart6 = css({
		width: "10%",
		height: "20",
		borderRadius: "xs",
		opacity: "0",
		transformOrigin: "bottom",
		animation: "growAndReset 10s infinite",
		animationDelay: "10s",
	})

	const data = {
		type: "IRA Account",
		description: "Retirement Investing",
		summary:
			"Save and invest for your retirement years, ensuring a comfortable lifestyle when you stop working.",
	}
	return (
		<>
			<Box
				bg="sage.12"
				w="full"
				h="xs"
				p="3"
				borderRadius="2xl"
				className="retirement-box"
				position="relative"
			>
				<Stack mt="5" pl="2">
					<Box
						borderRadius="2xl"
						bg="sage.11"
						display="flex"
						alignItems="center"
						p="1"
						w="fit-content"
						pl="2"
						pr="2"
					>
						<Text
							as="h3"
							fontSize={{ base: "12", "@md": "13", "@lg": "15" }}
							color="green.4"
							fontWeight="medium"
						>
							{data.type}
						</Text>
					</Box>
					<Text as="h2" fontSize="md" color="green.4" fontWeight="medium">
						{data.description}
					</Text>
					<Text
						as="p"
						fontSize="sm"
						color="green.4"
						fontWeight="normal"
						wordBreak="break-word"
						whiteSpace="pre-wrap"
					>
						{data.summary}
					</Text>
					<Stack
						w="full"
						maxW="xs"
						position="absolute"
						transform="translate(-50%, -50%)"
						top="63%"
						left="50%"
					>
						<HStack
							w="full"
							h="100%"
							alignItems="flex-end"
							mt="5"
							justifyContent="space-between"
						>
							<div className={$BoxChart1}></div>
							<div className={$BoxChart2}></div>
							<div className={$BoxChart3}></div>
							<div className={$BoxChart4}></div>
							<div className={$BoxChart5}></div>
							<div className={$BoxChart6} style={{ background: customGreen }}></div>
						</HStack>
						<Box w="full" h="0.2" bg="neutral.11" mt="-1" />
					</Stack>
				</Stack>
			</Box>
		</>
	)
}

export default RightContent
