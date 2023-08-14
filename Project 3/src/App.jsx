import { useCallback, useState } from 'react'
import style from './App.module.css'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([]);

  function handleTodos (data){
      setTodoList([...todoList, data]);
  }

  function handleStatus(id){
    
     let updatedList = todoList.map((el) =>
        (el.id === id) ? {...el , status : !el.status} : el
        
     );

     setTodoList(updatedList);
  }

  function handleRemoval(id){

    let updatedList = todoList.filter((el) =>
      {
        if(el.id !== id){
          return el;
        }
      }
    
    );

    setTodoList(updatedList);
  }


  return (
    <>
      <TodoInput  handleTodos={handleTodos} />
      <div className={style['todoList']}>
          <TodoList list={todoList} fn1={handleStatus} fn2={handleRemoval} />
      </div>
    </>
  )
}

export default App
