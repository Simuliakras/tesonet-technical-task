import React from "react";

const ListItem = ({ id, title, delHandler, doneHandler, done }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        done ? "bg-success" : ""
      }`}
    >
      {done && <del>{title}</del>}
      {!done && <>{title}</>}
          <div>
          <button
          className={`btn btn-sm ${done ? "btn-warning" : "btn-success"}`}
          onClick={() => doneHandler(id)}
        >
          Complete
        </button>
        <button
          className="btn btn-sm btn-danger mr-2"
          onClick={() => delHandler(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
