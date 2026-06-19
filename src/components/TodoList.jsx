import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoStore } from "../TodoContext";

function TodoList() {
  const {todos}=useContext(TodoStore)
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
