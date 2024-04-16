import AppName from "./components/AppName";
import AddToDo from "./components/Add_ToDo";
import TodoItems from "./components/TodoItems";
import Welcome from "./components/welcome";
import "./App.css";

import TodoitemContextProvider from "./store/todo-List";
function App() {
  return (
    <div>
      <TodoitemContextProvider>
        <AppName />
        <AddToDo />
        <center className="Todo-container">
          <Welcome />
          <TodoItems />
        </center>
      </TodoitemContextProvider>
    </div>
  );
}

export default App;
