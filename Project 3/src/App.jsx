import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'

function App() {

  const [todoList, setTodoList] = useState([]);

  function handleTodos(data){
      setTodoList([...todoList, data]);
  }

  return (
    <>
    <TodoInput  handleTodos={handleTodos} />
      <div>
          
      </div>
    </>
  )
}

export default App
