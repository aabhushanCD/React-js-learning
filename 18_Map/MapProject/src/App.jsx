import "./App.css";
import CoffeeItems from "./Components/coffeItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
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
      <Container>
        <h1 className="Cofee-heading">Coffee Shop</h1>
        <ErrorMessage arg={items}></ErrorMessage>
        <CoffeeItems arg={items}></CoffeeItems>
      </Container>

      <Container>
        <p>This is nothing available </p>
      </Container>
    </>
  );
}

export default App;
