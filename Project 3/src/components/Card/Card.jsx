import styles from './card.module.css'

function Card({todo, i, Ustatus, remove}){

    return(
        <div className={styles['card']}>
            <h3>{i}. {todo.title}</h3>

            <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>

            <div>
                <button onClick={() => {Ustatus(todo.uid) }}>Update Status</button>
                <button onClick={() => {remove(todo.uid) }}>Remove</button>
            </div>
        </div>
    )
}
export default Card;