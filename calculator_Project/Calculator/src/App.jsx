import "./App.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";
import Container from "./Components/Container";
import { useState } from "react";

function App() {
  let ArrayBtn = [
    "C",
    "X",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  const [calVal, sethandle] = useState("");
  const handle = (btn) => {
    if (btn === "C") {
      sethandle("");
    } else if (btn === "=") {
      let result = eval(calVal);
      sethandle(result);
    } else {
      const newDisplayValue = calVal + btn;
      sethandle(newDisplayValue);
    }
  };
  return (
    <Container>
      <Display displayValue={calVal}></Display>
      <hr></hr>
      <Buttons ArrayBtn={ArrayBtn} handleOnclick={handle}></Buttons>
    </Container>
  );
}

export default App;
