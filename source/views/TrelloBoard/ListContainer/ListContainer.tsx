import React from "react"
import { styled } from "styled-system/jsx"

const Wrapper = styled("div", {
	base: {
		display: "flex",
		flexDirection: "column",
		height: "min-content",
		maxHeight: "calc(100vh - 9.6rem)",
		width: "100%",
		maxWidth: "350px",
		borderRadius: "md",
		backgroundColor: "iris.11",
		padding: "1",
	},
})

const ListContainer = ({ children }: { children: React.ReactNode }) => {
	return <Wrapper>{children}</Wrapper>
}

export default ListContainer
