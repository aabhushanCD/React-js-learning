import "./App.css";
import CoffeeItems from "./Components/coffeItems";
import ErrorMessage from "./Components/ErrorMessage";
function App() {
  let items = [
    "Mocha not Now",
    "Americano",
    "Latte",
    "Espresso",
    "Affogato",
    "Falt White",
    "Aabhushan",
  ];
  return (
    <>
      <h1>Coffee Shop</h1>
      <ErrorMessage arg={items}></ErrorMessage>
      <CoffeeItems arg={items}></CoffeeItems>
    </>
  );
}

export default App;
