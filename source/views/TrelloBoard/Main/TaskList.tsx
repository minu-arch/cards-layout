import React, { useState } from "react"
import ListContainer from "../ListContainer/ListContainer"
import { ListTitle, ListItems, ListLi, UlList } from "./StyledComponents"
import { Input } from "~/ui/input"
import { motion } from "framer-motion"

interface TaskListProps {
	initialData: {
		title: string
		tasks: string[]
	}
}

const TaskList: React.FC<TaskListProps> = ({ initialData }) => {
	const [tasks, setTasks] = useState(initialData.tasks)
	const [isAdding, setIsAdding] = useState(false)
	const [newTask, setNewTask] = useState("")

	const handleAddClick = () => {
		setIsAdding(true)
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTask(e.target.value)
	}

	const handleAddTask = () => {
		if (newTask.trim()) {
			setTasks([...tasks, newTask])
			setNewTask("")
			setIsAdding(false)
		}
	}

	const titleVariants = {
		hidden: {
			opacity: 0,
			x: "100vw",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 120,
				delay: 0.2,
			},
		},
	}

	return (
		<ListContainer>
			<ListTitle pl="2" variants={titleVariants} initial="hidden" animate="visible">
				{initialData.title}
			</ListTitle>
			<UlList>
				{tasks.map((task, index) => (
					<ListLi
						whileHover={{ scale: 0.9 }}
						transition={{ type: "spring", stiffness: 120 }}
						key={index}
					>
						<ListItems>{task}</ListItems>
					</ListLi>
				))}
				{isAdding && (
					<ListLi>
						<Input
							border="none"
							_focus={{ border: "none" }}
							placeholder="Add a new card"
							fontFamily="poppins , sans-serif"
							value={newTask}
							onChange={handleInputChange}
							onKeyDown={e => {
								if (e.key === "Enter") {
									handleAddTask()
								} else if (e.key === "Escape") {
									setIsAdding(false)
									setNewTask("")
								}
							}}
							color="slate.1"
							size="xs"
						/>
					</ListLi>
				)}
			</UlList>
			{!isAdding && (
				<ListItems pl="2" onClick={handleAddClick}>
					Add a Card . . .
				</ListItems>
			)}
		</ListContainer>
	)
}

export default TaskList
