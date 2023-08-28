import { useContext, useState } from "react";
import { TodoContext } from "../../Contexts/TodoContexts";
import './pagination.css'

function Pagination(){

    const { handlePageDecrease, handlePageIncrease, page, todoList, limit } = useContext(TodoContext);

    return(
    
        <footer>
            <button disabled={ page === 1 ? true : false } className="button-78" onClick={handlePageDecrease}>Prev</button>
            <button disabled={ limit === 0 ? true : todoList.length < 6 ? true : false } className="button-78" onClick={handlePageIncrease}>Next</button>
        </footer>
        
    )
}

export default Pagination;