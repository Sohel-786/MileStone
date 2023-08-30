import { createContext, useState } from "react"
import { TodosInstance } from "../AxiosInstance/TodosInstance";

export const TodoContext = createContext({
                                        getTodos: function(){},
                                        handleTodos: function(){},
                                        handleStatus: function(){},
                                        handleRemoval: function(){},
                                        getTodoByid: function(){},
                                        handlePageDecrease : ()=>{},
                                        handlePageIncrease : () =>{},
                                        todoContextvalues : {}
                                        });



export function TodocontextProvider({children}){

    const [ todoContextvalues, setTodoContextvalues ] = useState({
      todoList : [],
      demo : true,
      page : 1, 
      limit : 0,
    })

    function handlePageIncrease(){
      setTodoContextvalues({...todoContextvalues, page : todoContextvalues.page + 1});
    }
    
    function handlePageDecrease(){
      setTodoContextvalues({...todoContextvalues, page : todoContextvalues.page - 1});

    }

    async function getTodos(){
        try{
          let data = await TodosInstance.get('/', {
            params : {
              _page : todoContextvalues.page,
              _limit : 6
            }
          });

          console.log(data.headers['x-total-count'])

          setTodoContextvalues({...todoContextvalues, 
                                   todoList : data.data, 
                                   page : data.data.length === 0 ? todoContextvalues.page - 1 : todoContextvalues.page,
                                   limit : (data.headers['x-total-count']%6 === 0) ? 0 : 1
                              })
    
        }catch(err){
          console.log(err.message)
        }
    
    }

   async function handleTodos (data){
        
        await TodosInstance.post('/', data);
        setTodoContextvalues({...todoContextvalues, demo : !todoContextvalues.demo});
    
    }

    async function handleStatus(uid){
        
        let data = await getTodoByid(uid);
        
        (data[0].status) ? data[0].status = false : data[0].status = true;
        
        await TodosInstance.patch(`/${data[0].id}`, data[0])

        setTodoContextvalues({...todoContextvalues, demo : !todoContextvalues.demo});
     }

     async function handleRemoval(uid){
         
        let data = await getTodoByid(uid);
         
        await TodosInstance.delete(`/${data[0].id}`);
      
        setTodoContextvalues({...todoContextvalues, demo : !todoContextvalues.demo});
      
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
    

    return <TodoContext.Provider value={{ getTodos, handleTodos, handleStatus,handleRemoval, getTodoByid, handlePageDecrease, handlePageIncrease, todoContextvalues }}>{children}</TodoContext.Provider>
}