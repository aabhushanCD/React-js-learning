import React, { useState } from "react";
import AppName from "./components/AppName";
import AddToDo from "./components/Add_ToDo";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/welcome";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const handleAddToDo = (name, date) => {
    const newItem = { name: name, date: date };
    setList([...list, newItem]);
  };

  const handleDelete = (name) => {
    const newList = list.filter((item) => item.name !== name);
    setList(newList);
  };

  return (
    <div>
      <AppName />
      <AddToDo handleAddToDo={handleAddToDo} />
      <center className="Todo-container">
        {list.length === 0 && <Welcome />}
        <TodoItems Items={list} handleDelete={handleDelete} />
      </center>
    </div>
  );
}

export default App;
