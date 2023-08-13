function Card({todo, i, Ustatus, remove}){

    return(
        <div>
            <h1>{i}. {todo.title}</h1>

            <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>

            <button onClick={() => {Ustatus(todo.id) }}>Update Status</button>
            <button onClick={() => {remove(todo.id) }}>Remove</button>
        </div>
    )
}
export default Card;