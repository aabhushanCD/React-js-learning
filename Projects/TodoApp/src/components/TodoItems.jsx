import ToDo from "./ToDo_";
const TodoItems = ({ Items, handleDelete }) => {
  return (
    <>
      {Items.map((Name) => (
        <ToDo name={Name.name} date={Name.date} handleDelete={handleDelete}></ToDo>
      ))}
    </>
  );
};
export default TodoItems;
