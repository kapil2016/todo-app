import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    initialState: { visibilty: true,selction:'Todos' },
    name: 'sidebar',
    reducers: {
        setSidebarVisibility(state, action) {
            state.visibilty = action.payload;
        },
        setSidebarSelction(state, action){
            state.selction = action.payload ;
        }

    }
})

const sidebarReducer = sidebarSlice.reducer;
export const { setSidebarVisibility,setSidebarSelction } = sidebarSlice.actions
export default sidebarReducer;
