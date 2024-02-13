import ToDo from "./ToDo_";
const TodoItems = ({ Items, handleDelete }) => {
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
