import { TodosInstance } from "../../AxiosInstance/TodosInstance";

export async function setTodos(data){

   await TodosInstance.post('/', data);
  
//   fetch('http://localhost:3001/todos', {
//     method : 'POST',
//     body : JSON.stringify(data),
//     headers : {
//       "Content-Type" : "application/json"
//     }
//   });
}


export async function updateTodoByid(id, data){

   await TodosInstance.patch(`/${id}`, data)

//   fetch(`http://localhost:3001/todos/${id}`, {
//     method : 'PATCH',
//     body : JSON.stringify(data),
//     headers : {
//       "Content-Type" : "application/json"
//     }
//   }).then(() =>{
//     console.log('update Done');
//   })
}

export async function deleteTodosByid(id){

   await TodosInstance.delete(`/${id}`);

//   fetch(`http://localhost:3001/todos/${id}`, {
//     method : 'DELETE'
//   }).then(() =>{
//     console.log('Deleted');
//   })
}