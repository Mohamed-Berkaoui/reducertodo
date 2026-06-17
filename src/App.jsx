
import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'


function reducer(state,action){
  /**
   * @todo complete reducer
   */
  if(action.type=="ADDTODO"){
    return
  }
  if(action.type=='UPDATETODO'){
    return
  }
  if(action.type=='REMOVETODO'){
    return
  }
  return state
}
function App() {
  const [todos,dispatchTodos]=useReducer(reducer,[{task:"gym",isDone:false}])

  return (
    <>
<AddTodo dispatchTodos={dispatchTodos}/>
<TodoList todos={todos} dispatchTodos={ dispatchTodos}/>
    </>
  )
}

export default App
