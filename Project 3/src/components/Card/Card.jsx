import { useContext } from 'react'
import styles from './card.module.css'
import { TodoContext } from '../../Contexts/TodoContexts'

function Card({todo, i}){
    
    const { handleStatus, handleRemoval } = useContext(TodoContext);
    
    return(
        <div className={styles['card']}>
            <h3>{i}. {todo.title}</h3>

            <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>

            <div>
                <button onClick={() => {handleStatus(todo.uid) }}>Update Status</button>
                <button onClick={() => {handleRemoval(todo.uid) }}>Remove</button>
            </div>
        </div>
    )
}
export default Card;