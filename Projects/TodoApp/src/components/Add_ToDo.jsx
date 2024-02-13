import { useState } from "react";

export default function AddToDo({ handleAddToDo }) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const handleOnInput = (event) => {
    setName(event.target.value);
  };
  const handleOnDate = (event) => {
    setDate(event.target.value);
  };

  const handleAdd = () => {
    handleAddToDo(name, date);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
            onChange={handleOnInput}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleOnDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
