export default function ToDo({ name, date, handleDelete }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDelete(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
