import React, { useState, useRef } from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/Add_ToDo";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/welcome";
import "./App.css";
import { Todolist } from "./store/todo-List";
function App() {
  const [list, setList] = useState([]);

  const handleAddToDo = (name, date) => {
    setList((currValue) => {
      const newItem = [...currValue, { name: name, date: date }];
      return newItem;
    });
  };

  const handleDelete = (name) => {
    const newList = list.filter((item) => item.name !== name);
    setList(newList);
  };
  return (
    <div>
      <Todolist.Provider
        value={{
          Items: list,
          handleAddToDo: handleAddToDo,
          handleDelete: handleDelete,
        }}
      >
        <AppName />
        <AddToDo />
        <center className="Todo-container">
          <Welcome />
          <TodoItems />
        </center>
      </Todolist.Provider>
    </div>
  );
}

export default App;
