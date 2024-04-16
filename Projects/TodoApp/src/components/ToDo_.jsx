import { MdOutlineDelete } from "react-icons/md";
export default function ToDo({ Name, date, handleDelete }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{Name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(Name)}
          >
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
