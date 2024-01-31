import AppName from "./components/AppName";
import AddToDo from "./components/Add_ToDo";
import ToDo1 from "./components/ToDo_1";
import ToDo2 from "./components/ToDo_2";
import "./App.css";
function App() {
  return (
    <div>
      <AppName />
      <AddToDo />

      <center class="Todo-cointainer">
        <ToDo1 />
        <ToDo2 />
      </center>
    </div>
  );
}
export default App;
