import React, { createContext, useReducer } from "react";

export const TodoStore = createContext();

function reducer(state, action) {
  /**
   * @todo complete reducer
   */
  if (action.type == "ADDTODO") {
    return [...state, action.payload];
  }
  if (action.type == "UPDATETODO") {
    return state.map((todo) =>
      todo.task == action.payload.task
        ? { ...todo, isDone: !todo.isDone }
        : todo,
    );
  }
  if (action.type == "DELETETODO") {
    return state.filter((todo) => todo.task != action.payload.task);
  }

  return state;
}
export const addTodoAction = function (data) {
  return { type: "ADDTODO", payload: data };
};
export const updateTodoAction = function (data) {
  return { type: "UPDATETODO", payload: data };
};
export const deleteTodoAction = function (data) {
  return { type: "DELETETODO", payload: data };
};

function TodoContext({ children }) {
  const [todos, dispatchTodos] = useReducer(reducer, [
    { task: "gym", isDone: false },
  ]);
  return <TodoStore.Provider value={{todos,dispatchTodos}}>{children}</TodoStore.Provider>;
}

export default TodoContext;
