import "./App.css";
import CoffeeItems from "./Components/coffeItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import CoffeeInput from "./Components/Cofee-input";
import { useState } from "react";
function App() {
  let [items, setitems] = useState([
    "Mocha not Now",
    "Americano",
    "Latte",
    "Espresso",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCoffeeItem = event.target.value;
      let newItems = [...items, newCoffeeItem];
      setitems(newItems);
    }
  };
  return (
    <>
      <Container>
        <h1 className="Cofee-heading">Coffee Shop</h1>

        <ErrorMessage arg={items}></ErrorMessage>
        <CoffeeInput handleKeyDown={onKeyDown}></CoffeeInput>

        <CoffeeItems arg={items}></CoffeeItems>
      </Container>

      {/* <Container>
        <p>This is nothing available </p>
      </Container> */}
    </>
  );
}

export default App;
