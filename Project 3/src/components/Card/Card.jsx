import './card.style.css';

function Card({todo, i, Ustatus, remove}){

    return(
        <div className='card'>
            <h3>{i}. {todo.title}</h3>

            <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>

            <div>
                <button onClick={() => {Ustatus(todo.id) }}>Update Status</button>
                <button onClick={() => {remove(todo.id) }}>Remove</button>
            </div>
        </div>
    )
}
export default Card;