import React from "react"
import { BarChart, Bar, ResponsiveContainer } from "recharts"
import { Box, HStack, Stack } from "styled-system/jsx"
import { Text } from "~/ui/text"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
import TitleSection from "./TitleSection"
import GroupTitle from "./GroupTitle"

const Main = () => {
	return (
		<>
			<Box mt="8" w="100%">
				<TitleSection />

				<Box
					className="box-investing"
					mt="5"
					gap="5"
					display="flex"
					flexDirection={{ base: "column", "@md": "row" }}
				>
					<LeftContent />
					<RightContent />
				</Box>

				<GroupTitle />
			</Box>
		</>
	)
}

export default Main
