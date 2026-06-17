import React from "react";
import Todo from "./Todo";

function TodoList({ todos, dispatchTodos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
