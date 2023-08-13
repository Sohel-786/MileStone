import Card from "./Card";

function TodoList({list}){

    return(
        <>
            {list.map((el) =>{
                <Card />
            })}
        </>
    )
}

export default TodoList;