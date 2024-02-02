import AppName from "./components/AppName";
import AddToDo from "./components/Add_ToDo";
import ToDo from "./components/ToDo_";
import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const list = [
    {
      name: "Learning react",
      date: "2080/12/3",
    },
    {
      name: "hacking",
      date: "2080/02/4",
    },
    {
      name: "cracking",
      date: "2080/02/4",
    },
  ];
  return (
    <div>
      <AppName />
      <AddToDo />

      <center className="Todo-cointainer">
        <TodoItems Items={list}></TodoItems>
      </center>
    </div>
  );
}
export default App;
