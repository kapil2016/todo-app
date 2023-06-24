import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar-reducer";
import editbarReducer from "./editbar-reducer";
import todoReducer from "./todos-reducer";

const store = configureStore({
    reducer:{sidebar:sidebarReducer , editbar:editbarReducer , todos: todoReducer}
})

export default store ;