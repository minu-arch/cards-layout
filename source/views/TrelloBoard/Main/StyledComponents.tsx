import { styled } from "styled-system/jsx"
import { motion } from "framer-motion"

export const ListTitle = motion(styled("h2", {
	base: {
		color: "lime.10",
		fontSize: "normal",
		fontWeight: "bold",
		fontFamily: "poppins , sans-serif",
		cursor: "default",
	},
}))

export const ListLi = motion(styled("div", {
	base: {
		wordWrap: "break-word",
		cursor: "pointer",
		bg: "cyan.10",
		p: "1",
		borderColor: "border.outline",
		borderRadius: "sm",
		shadow: "sm",
		width: "full",
		
	},
	
}))

export const ListItems = motion(styled("p", {
	base: {
		color: "slate.1",
		cursor: "pointer",
		fontSize: "sm",
		fontWeight: "normal",
		fontFamily: "poppins , sans-serif",
		padding: "2",
		"&:hover": {
			color: "lime.10",
		},
	},
}))

export const UlList = styled("div", {
	base: {
		display: "grid",
		gridRowGap: "2",
		padding: "1",
		width: "100%",
		overflowY: "auto",
		/* scrollbar */
		"&::-webkit-scrollbar": {
			width: "8px",
			height: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "lime.10",
			borderRadius: "4px",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "blue.8",
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "cyan.10",
		},
	},
})

export const NameGrid = styled("div", {
	base: {
		display: "grid",
		gridAutoColumns: "20rem",
		gridAutoFlow: "column",
		gridColumnGap: "1",
		height: "100vh",
		padding: "5px",
		backgroundColor: "blue.10",
		overflowY: "auto",
		width: "100%",
		"&::-webkit-scrollbar": {
			width: "8px",
			height: "8px",
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "lime.10",
			borderRadius: "4px",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			backgroundColor: "blue.8",
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "iris.11",
		},
	},
})
