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
        },
        sortTodos(state){
            state.todoList.sort((a,b)=>{
                const dateA = new Date(a.date) ;
                const dateB = new Date(b.date) ;
                return dateA-dateB ;
            })
        }
    }
})

export const {addNewTodo ,editTodos , deleteTodo,sortTodos} = todosSlice.actions;
const todoReducer = todosSlice.reducer ;
export default todoReducer ;