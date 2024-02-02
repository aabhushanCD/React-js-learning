import ToDo from "./ToDo_";
const TodoItems = ({ Items }) => {
  return (
    <>
      {Items.map((Name) => (
        <ToDo name={Name.name} date={Name.date}></ToDo>
      ))}
    </>
  );
};
export default TodoItems;
