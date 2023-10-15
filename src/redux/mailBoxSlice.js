import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    inboxEmail: null,
    sentEmail: null,
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
        addInboxEmails: (state, action) => {
            state.inboxEmail = action.payload;
        },
        addSentEmails: (state, action) => {
            state.sentEmail = action.payload;
        },
    }
});

export const { addUser, removeUser, addInboxEmails, addSentEmails } = mailBoxSlice.actions;

export default mailBoxSlice.reducer;