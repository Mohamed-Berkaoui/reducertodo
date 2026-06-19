import React, { useContext } from "react";
import { deleteTodoAction, updateTodoAction } from "../TodoContext";
import { TodoStore } from "../TodoContext";

function Todo({ todo }) {
  const { dispatchTodos } = useContext(TodoStore);
  return (
    <div className="todo-card">
      <div className="todo-card-info">
        <h4>{todo.task}</h4>
        <h6>{todo.isDone ? "done!" : "pending"}</h6>
      </div>
      <div className="todo-card-actions">
        <button onClick={() => dispatchTodos(updateTodoAction(todo))}>
          update
        </button>
        <button onClick={() => dispatchTodos(deleteTodoAction(todo))}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
