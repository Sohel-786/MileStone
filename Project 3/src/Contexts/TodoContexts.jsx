import { createContext, useState } from "react"
import { setTodos, updateTodoByid, deleteTodosByid } from "../utils/Todo_CRUD/TodoCRUD"; 
import { TodosInstance } from "../AxiosInstance/TodosInstance";

export const TodoContext = createContext({
                                        todoList:[],
                                        getTodos: function(){},
                                        handleTodos: function(){},
                                        handleStatus: function(){},
                                        handleRemoval: function(){},
                                        getTodoByid: function(){},
                                        demo : true,
                                        page : Number,
                                        handlePageDecrease : ()=>{},
                                        handlePageIncrease : () =>{},
                                        limit : Number,
                                        });



export function TodocontextProvider({children}){

    const [todoList, setTodoList] = useState([]);
    const [ demo , setDemo ] = useState(true);
    const [ page , setPage ] = useState(1);
    const [ limit, setLimit ] = useState(0); 

    function handleTotal(total){
        if(total%6 === 0){
            setLimit(0);
            console.log(total, limit)
        }else{
          setLimit(1);
        }
    }

    function handlePageIncrease(){
      setPage(page + 1);
    }
    
    function handlePageDecrease(){
      setPage(page - 1);
    }

    async function getTodos(){
        try{
          let data = await TodosInstance.get('/', {
            params : {
              _page : page,
              _limit : 6
            }
          });

          handleTotal(data.headers['x-total-count'])
          setTodoList(data.data);
          if(data.data.length === 0){
            setPage( page - 1);
          }
    
        }catch(err){
          console.log(err.message)
        }
    
    }

    function handleTodos (data){
        
        setTodos(data);
        setTodoList([...todoList, data]);
        setDemo(!demo);
    
    }

    async function handleStatus(uid){
        
        let data = await getTodoByid(uid);
        
        (data[0].status) ? data[0].status = false : data[0].status = true;
        
        updateTodoByid(data[0].id, data[0]);

        let updatedList = todoList.map((el) =>
           (el.uid === uid) ? {...el , status : !el.status} : el
     
        );
       
        setTodoList(updatedList);

        setDemo(!demo);
     }

     async function handleRemoval(uid){
         
        let data = await getTodoByid(uid);
         
        deleteTodosByid(data[0].id);

        let updatedList = todoList.filter((el) =>
          {
            if(el.uid !== uid){
              return el;
            }
          }
        
        );
      
        setTodoList(updatedList);

        setDemo(!demo);
      
      }

     async function getTodoByid(uid){

        try {
              let {data} = await TodosInstance.get(``, {
                params : {
                    uid
                }
              });

              return data;
      
            } catch (err) {
                console.log(err.message);
             }
      
      }
    

    return <TodoContext.Provider value={{todoList, getTodos, handleTodos, handleStatus,handleRemoval, getTodoByid, demo, page, handlePageDecrease, handlePageIncrease, limit}}>{children}</TodoContext.Provider>
}