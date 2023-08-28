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
                                        total : Number,
                                        limit : Number,
                                        });



export function TodocontextProvider({children}){

    const [todoList, setTodoList] = useState([]);
    const [ demo , setDemo ] = useState(true);
    const [ page , setPage ] = useState(1);
    const [ total, setTotal ] = useState(0);
    const [ limit, setLimit ] = useState(0); 

    function handleTotal(){
        if(total%6 == 0){
            setLimit(0);
            console.log(total, limit)
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

          setTotal(data.headers['x-total-count']);
          handleTotal()
          setTodoList(data.data);
    
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
    

    return <TodoContext.Provider value={{todoList, getTodos, handleTodos, handleStatus,handleRemoval, getTodoByid, demo, page, handlePageDecrease, handlePageIncrease, total}}>{children}</TodoContext.Provider>
}