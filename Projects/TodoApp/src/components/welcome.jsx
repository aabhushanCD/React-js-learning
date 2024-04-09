import { Todolist } from "../store/todo-List";
import { useContext } from "react";
export default function Welcome() {
  const contextObj = useContext(Todolist);
  const Items = contextObj.Items;
  return Items.length === 0 && <h3>Welcome to set Your day</h3>;
}
