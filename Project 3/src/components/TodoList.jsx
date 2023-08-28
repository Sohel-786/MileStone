import { useContext } from 'react';
import Card from './Card/Card';
import { TodoContext } from '../Contexts/TodoContexts';

function TodoList(){

    const { todoList } = useContext(TodoContext);

    return(
        <>
            {todoList && todoList.map((el, i) =>{
               return <Card key={el.uid} todo={el} i={i + 1}/>
            })}
        </>
    )
}

export default TodoList;