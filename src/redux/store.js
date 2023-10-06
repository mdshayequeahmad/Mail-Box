import { configureStore } from "@reduxjs/toolkit";
import mailBoxReducer from "./mailBoxSlice";

const store = configureStore({
    reducer: {
        mailBox: mailBoxReducer,
    }
});

export default store;