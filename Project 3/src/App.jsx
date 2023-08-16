import { useCallback, useEffect, useState } from 'react'
import style from './App.module.css'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([]);
  
  useEffect(()=>{
      getTodos();
  }, []);


  async function getTodos(){
      try{
        let data = await fetch('http://localhost:3001/todos');
        data = await data.json(); 

        setTodoList(data);

      }catch(err){
        console.log(err.message)
      }

  }

  function handleTodos (data){
      setTodoList([...todoList, data]);

      setTodos(data);

  }

  async function handleStatus(uid){
    
     let updatedList = todoList.map((el) =>
        (el.uid === uid) ? {...el , status : !el.status} : el

     );

      setTodoList(updatedList);

      let data = await getTodoByid(uid);

      (data[0].status) ? data[0].status = false : data[0].status = true;

      updateTodoByid(data[0].id, data[0]);

  }

  async function handleRemoval(uid){

    let updatedList = todoList.filter((el) =>
      {
        if(el.uid !== uid){
          return el;
        }
      }
    
    );

    setTodoList(updatedList);

    let data = await getTodoByid(uid);

    deleteTodosByid(data[0].id);

  }

 async function getTodoByid(uid){

    try {
          let data = await fetch(`http://localhost:3001/todos?uid=${uid}`);
          data = await data.json();          
          return data;

        } catch (err) {
            console.log(err.message);
         }

  }

  function setTodos(data){
    
    fetch('http://localhost:3001/todos', {
      method : 'POST',
      body : JSON.stringify(data),
      headers : {
        "Content-Type" : "application/json"
      }
    });
  }


  function updateTodoByid(id, data){
    fetch(`http://localhost:3001/todos/${id}`, {
      method : 'PATCH',
      body : JSON.stringify(data),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then(() =>{
      console.log('update Done');
    })
  }

  function deleteTodosByid(id){
    fetch(`http://localhost:3001/todos/${id}`, {
      method : 'DELETE'
    }).then(() =>{
      console.log('Deleted');
    })
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
