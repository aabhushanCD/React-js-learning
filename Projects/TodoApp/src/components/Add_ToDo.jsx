import { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { Todolist } from "../store/todo-List";
export default function AddToDo() {
  const contextObj = useContext(Todolist);
  const handleAddToDo = contextObj.handleAddToDo;

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");
  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");
  // const handleOnInput = (event) => {
  //   setName(event.target.value);
  // };
  // const handleOnDate = (event) => {
  //   setDate(event.target.value);
  // };

  let handleAdd = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    handleAddToDo(todoName, todoDate);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    // handleAddToDo(name, date);
    // setName(""); // Clear name input field
    // setDate("");
  };
  return (
    <div className="container">
      <form className="row" onSubmit={handleAdd}>
        <div className="col-6">
          <input
            type="text"
            // value={name}
            placeholder="Enter ToDo here"
            ref={todoNameElement}
            // onChange={handleOnInput}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            // value={date}
            ref={todoDateElement}
            // onChange={handleOnDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success">
            <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
