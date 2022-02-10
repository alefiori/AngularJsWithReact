import React from "react";

export const Layout = ({ todos, markComplete, newItem }) => {
  return (
    <div className="react-part">
      <hr />
      <h1>React TO-DO</h1>
      <ul>
        {todos.map((todo, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                markComplete(todo.text);
              }}
              className={[
                "list-item",
                todo.done === true ? "done-true" : "done-false",
              ].join(" ")}
            >
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button
        id="click"
        onClick={() => {
          newItem("Alter triggered from React but Fired from AngularJS");
        }}
      >
        Click to make Angular Alert!!
      </button>
    </div>
  );
};
