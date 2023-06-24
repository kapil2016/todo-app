import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    initialState: { visibility: false, todo: { id: '', title: '', description: '' } },
    name: 'editbar',
    reducers: {
        setEditbarVisibility(state, action) {
            state.visibility = action.payload.visibility;
            if (action.payload.todo) {
                state.todo = action.payload.todo
            };
        },
    }
})

export const { setEditbarVisibility } = editSlice.actions;
const editbarReducer = editSlice.reducer;
export default editbarReducer;