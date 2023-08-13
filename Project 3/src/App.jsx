import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([]);

  function handleTodos(data){
      setTodoList([...todoList, data]);
  }

  return (
    <>
    <TodoInput  handleTodos={handleTodos} />
      <div>
          <TodoList list={todoList} />
      </div>
    </>
  )
}

export default App
