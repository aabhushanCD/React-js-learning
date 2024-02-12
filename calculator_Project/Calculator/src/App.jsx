import "./App.css";
import Buttons from "./Components/Buttons";
function App() {
  return (
    <>
      <input placeholder="Enter here" className="Screen"></input>
      <div className="Butn">
        <Buttons Buttons={"/"}></Buttons>
        <Buttons Buttons={"*"}></Buttons>
        <Buttons Buttons={"-"}></Buttons>
        <Buttons Buttons={7}></Buttons>
        <Buttons Buttons={8}></Buttons>
        <Buttons Buttons={9}></Buttons>
        <Buttons Buttons={"+"}></Buttons>
        <Buttons Buttons={4}></Buttons>
        <Buttons Buttons={5}></Buttons>
        <Buttons Buttons={6}></Buttons>
        <Buttons Buttons={1}></Buttons>
        <Buttons Buttons={2}></Buttons>
        <Buttons Buttons={3}></Buttons>
        <Buttons Buttons={0}></Buttons>
        <Buttons Buttons={"."}></Buttons>
      </div>
    </>
  );
}

export default App;
