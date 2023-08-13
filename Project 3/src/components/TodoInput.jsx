import { useState } from "react";

function TodoInput({handleTodos}){

    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    function handleTodo(){
        let data = { title : text, status : false, remove : false};
        handleTodos(data);
        setText('')
    }

    return(
            <div>
                <input value={text} onChange={handleChange} type="text" placeholder="Enter Todo"/>
                <button onClick={handleTodo}>Add</button>
            </div>
    )
}

export default TodoInput;