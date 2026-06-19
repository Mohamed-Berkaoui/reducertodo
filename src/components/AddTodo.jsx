import React, { useContext } from "react";
import { addTodoAction } from "../TodoContext";
import { TodoStore } from "../TodoContext";

function AddTodo() {
  const { dispatchTodos }=useContext(TodoStore)
  return (
    <div className="add-todo">
      <h4>add new todo</h4>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()
        const newtodo={task:e.target.task.value,isDone:false}
        e.target.task.value=""
        dispatchTodos(addTodoAction(newtodo))
      }}>
        <input type="text" name="task" id="" />
        <button>add </button>
      </form>
    </div>
  );
}

export default AddTodo;
