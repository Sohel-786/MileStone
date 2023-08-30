import { useContext, useEffect } from 'react'
import style from './App.module.css'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList';
import { TodoContext } from './Contexts/TodoContexts';
import Pagination from './components/Pagination/Pagination';

function App() {
  
  const { getTodos, todoContextvalues } = useContext(TodoContext)

  
  useEffect(()=>{
    console.log('function ran useeffect')
    getTodos();
  }, [todoContextvalues.demo, todoContextvalues.page]);


  return (
    <>
      <TodoInput />
      <div className={style['todoList']}>
          <TodoList/>
      </div>

      <Pagination />
    </>
  )
}

export default App
