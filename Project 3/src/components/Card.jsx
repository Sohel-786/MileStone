function Card({todo, i, handleStatus, handleRemoval}){
    return(
        <div>
            <h1>{i}. {todo.title}</h1>

            <p>Status: {todo.status ? 'Completed' : 'Pending'}</p>

            <button onClick={handleStatus}>Update Status</button>
            <button onClick={handleRemoval}>Remove</button>
        </div>
    )
}

export default Card;