import ToDo from "./ToDo_";
import { Todolist } from "../store/todo-List";
import { useContext } from "react";

const TodoItems = () => {
  const contextObj = useContext(Todolist);
  const handleDelete = contextObj.handleDelete;
  const Items = contextObj.Items;

  return (
    <>
      {Items.map((Name, index = 0) => (
        <ToDo
          key={(index = index + 1)}
          name={Name.name}
          date={Name.date}
          handleDelete={handleDelete}
        ></ToDo>
      ))}
    </>
  );
};
export default TodoItems;
