import axios from "axios";

export const TodosInstance = axios.create({
    baseURL : `http://localhost:3001/todos`
})