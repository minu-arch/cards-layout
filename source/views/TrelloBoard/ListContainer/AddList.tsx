import { ListTitle, ListItems, ListLi, UlList } from "../Main/StyledComponents"
import { Input } from "~/ui/input"
import ListContainer from "./ListContainer"

const AddList = () => {
	return (
		<ListContainer>
			<ListTitle>Task To Do</ListTitle>
			<UlList>
				<ListLi>
					<ListItems>Complete mock-up for client website</ListItems>
				</ListLi>
			</UlList>
			<ListItems pl="2">Add a Card . . .</ListItems>
		</ListContainer>
	)
}

export default AddList
