import { Box, Stack } from "styled-system/jsx"
import DashBoard from "./DashBoard"
import TransAction from "./TransAction"
import Notification from "./Notification"

const Content = () => {
	return (
		<Box w="full" bg="neutral.12">
			<Stack alignItems="center" justifyContent="space-between" gap="10" p="8">
				<TransAction />

				<DashBoard />

				<Notification />
			</Stack>
		</Box>
	)
}

export default Content
