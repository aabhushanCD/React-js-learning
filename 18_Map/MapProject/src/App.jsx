import "./App.css";

function App() {
  let items = [
    "Mocha",
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
      {/* {items.length == 0 && <h3>Sorry! "there is currently nothing available."</h3>} */}
      {items.length == 0 ? (
        <h3>Sorry! "there is currently nothing available."</h3>
      ) : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
