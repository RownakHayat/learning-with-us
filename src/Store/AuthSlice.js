import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



// export const loginUser = createAsyncThunk(
   
//     // '/auth/login',

   
//     async(userCredentials) =>{
//        const req = await axios.post(`http://localhost:3000/login`, userCredentials);
//        const res = await req.data.data;
//        localStorage.setItem('auth', JSON.stringify(res));
//        return res;
//     }
    
// );

export const authSlice = createSlice({
    name: "auth",

    initialState:{
        user: null,
        error: null
    },
    reducers:{
       login: (state, action) =>{
        state.user = action.payload;
       },
       logout: (state) =>{
        state.user = null;
       },

       // export default authSlice.reducer;
// builder
//        .addCase(loginUser.pending,(state)=>{
//              state.loading = true;
//            state.user = null;
//            state.error = null;
//        })
//        .addCase(loginUser.fulfilled,(state,action)=>{
//            state.loading = false;
//            state.user = action.payload;
//            state.error = null;
//        })
//        .addCase(loginUser.rejected,(state, action)=>{
//            state.loading = false;
//            state.user = null;
//            console.log(action.error.message);
//            if(action.error.message === "Request failed...."){
//                state.error = 'Invalid credentials';
//            }
//            else{
//                state.error = action.error.message;
//            }
//            state.error = null;
//        })
    }
});
export const {login, logout} = authSlice.actions;

export const selectUser = (state) => state.user.user;

export default authSlice.reducer;