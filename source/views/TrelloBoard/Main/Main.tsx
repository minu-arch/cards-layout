import { NameGrid } from "./StyledComponents"
import TaskList from "./TaskList"
import NewTask from "./NewTask"
import { useState } from "react"

const Main = () => {
	const [taskLists, setTaskLists] = useState([
		{
			title: "Task To Do",
			tasks: [
				"Complete mock-up for client website",
				"Email mock-up to client for feedback",
				"Update personal website header background image",
				"Update personal website heading fonts",
				"Add google map to personal website",
				"Begin draft of CSS Grid article",
				"Read new CSS-Tricks articles",
				"Read new Smashing Magazine articles",
				"Read other bookmarked articles",
				"Look through portfolios to gather inspiration",
				"Create something cool for CodePen",
				"Skiing/Snowboarding Centre/Company",
				"Streaming Service for Movies/TV Shows",
				"Online Marketplace for Artisans",
				"Online Marketplace for Farmers",
			],
		},
		{
			title: "In Progress",
			tasks: [
				"Complete mock-up for client website",
				"Email mock-up to client for feedback",
				"Update personal website header background image",
				"Update personal website heading fonts",
				"Add google map to personal website",
				"Begin draft of CSS Grid article",
				"Read new CSS-Tricks articles",
				"Read new Smashing Magazine articles",
			],
		},
		{
			title: "Done",
			tasks: [
				"Complete mock-up for client website",
				"Email mock-up to client for feedback",
				"Update personal website header background image",
				"Update personal website heading fonts",
			],
		},
	])

	const addTaskList = (title: string) => {
		const newTaskList = {
			title: title,
			tasks: [],
		}
		setTaskLists([...taskLists, newTaskList])
	}

	return (
		<NameGrid>
			{taskLists.map((taskList, index) => (
				<TaskList key={index} initialData={taskList} />
			))}
			<NewTask onAdd={addTaskList} />
		</NameGrid>
	)
}

export default Main
