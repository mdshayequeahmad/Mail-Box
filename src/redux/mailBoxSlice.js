import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: null,
    inboxEmail: [],
    sentEmail: [],
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
            state.inboxEmail = [];
            state.inboxEmail.push(action.payload);
        },
        addSentEmails: (state, action) => {
            state.sentEmail = [];
            state.sentEmail.push(action.payload);
        },
    }
});

export const { addUser, removeUser, addInboxEmails, addSentEmails } = mailBoxSlice.actions;

export default mailBoxSlice.reducer;