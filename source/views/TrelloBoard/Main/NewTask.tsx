import { Stack } from "styled-system/jsx"
import { Input } from "~/ui/input"
import { styled } from "styled-system/jsx"
import React, { useState } from "react"

interface NewTaskProps {
	onAdd: (title: string) => void // Callback pentru adăugarea unui nou TaskList
}

const NewTask: React.FC<NewTaskProps> = ({ onAdd }) => {
	const [addList, setAddList] = useState("")

	const handleAddList = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAddList(e.target.value)
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && addList.trim()) {
			onAdd(addList)
			setAddList("") // Reset input field
		}
	}

	return (
		<Stack gap="1.5" width="2xs">
			<Input
				bg="blue.9"
				border="none"
				color="slate.1"
				fontFamily="poppins, sans-serif"
				onChange={handleAddList}
				onKeyDown={handleKeyDown}
				fontSize="sm"
				value={addList}
				_placeholder={{
					color: "slate.3",
					fontFamily: "poppins, sans-serif",
					fontSize: "sm",
					fontWeight: "normal",
				}}
				_focus={{
					border: "none",
					outline: "none",
					boxShadow: "none",
				}}
				placeholder="Add a list ..."
			/>
		</Stack>
	)
}

export default NewTask
