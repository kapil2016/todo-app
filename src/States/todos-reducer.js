import { createSlice } from "@reduxjs/toolkit";
const todos = localStorage.getItem('todosLists')
console.log(todos)
let todoList = []
if(todos){
     todoList = JSON.parse(todos)
}


const todosSlice = createSlice({
    initialState:{todoList:todoList},
    name:'todos',
    reducers:{
        addNewTodo(state , action){ 
           state.todoList.push(action.payload)
        },
        editTodos(state , action){
          const idx = state.todoList.findIndex(item => item.id === action.payload.id)
          state.todoList[idx] = action.payload ;
        },
        deleteTodo(state , action){
            const todos = state.todoList.filter(item=> item.id !== action.payload) ;
            state.todoList = todos ;
        }
    }
})

export const {addNewTodo ,editTodos , deleteTodo} = todosSlice.actions;
const todoReducer = todosSlice.reducer ;
export default todoReducer ;