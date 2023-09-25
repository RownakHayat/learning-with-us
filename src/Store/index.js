import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";

const store = configureStore({
    reducer:{
        user: authReducer
    }
})
export default store;