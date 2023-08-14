import { useState } from "react";
import { nanoid } from 'nanoid';
import style from './input.module.css';

function TodoInput({handleTodos}){

    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    function handleTodo(){
        let data = { title : text, status : false, remove : false, id : nanoid()};
        handleTodos(data);
        setText('')
    }

    return(
        <div className={style['InputContainer']}>
            <div className={style["inputBox"]}>
                <input value={text} onChange={handleChange} type="text" placeholder="Enter Todo"/>
                <button onClick={handleTodo}>Add</button>
            </div>
        </div>
    )
}

export default TodoInput;