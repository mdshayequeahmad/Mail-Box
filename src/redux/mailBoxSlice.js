import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
}

export const mailBoxSlice = createSlice({
    name: "mailBox",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
    }
});

export const { addUser, removeUser } = mailBoxSlice.actions;

export default mailBoxSlice.reducer;