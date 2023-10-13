import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    emailData: [],
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
        addEmails: (state, action) => {
            state.emailData = [];
            state.emailData.push(action.payload);
        },
    }
});

export const { addUser, removeUser, addEmails } = mailBoxSlice.actions;

export default mailBoxSlice.reducer;