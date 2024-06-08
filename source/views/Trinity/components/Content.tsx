import React from "react"
import { Box, HStack, Stack, Circle } from "styled-system/jsx"
import { Progress } from "~/ui/progress"
import { Text } from "~/ui/text"
import { Button } from "~/ui/button"
import new253 from "./image/new253.jpg"
import DashBoard from "./DashBoard"
import TransAction from "./TransAction"
import Notification from "./Notification"

const Content = () => {
	return (
		<Box w="100%" bg="neutral.12" color="GrayText">
			<Stack alignItems="center" justifyContent="space-between" gap="10" p="8">
				<TransAction />

				<DashBoard />

				<Notification />
			</Stack>
		</Box>
	)
}

export default Content
