import Card from './Card';

function TodoList({list, fn1, fn2}){

    return(
        <>
            {list.map((el, i) =>{
               return <Card key={el.id} todo={el} i={i + 1} Ustatus={fn1} remove={fn2}/>
            })}
        </>
    )
}

export default TodoList;