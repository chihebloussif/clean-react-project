import {createSlice} from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name:"login",
    initialState:{
        isLoading:false,
        otpOK:false,
        isAuth:false,
        error:false,
    },
    reducers:{
        loginPending:(state)=>{
            state.isLoading = true ;
        },
        loginSuccess:(state,action)=>{
            state.user = action.payload;
            state.isLoading = false ;
            state.otpOK = true ;        
        },
        loginError:(state)=>{
            state.otpOK = false ;
            state.isLoading = false;
            state.error = true ;
        },
    },
});

export  const {loginPending,loginSuccess,loginError} = loginSlice.actions;
export default loginSlice.reducer;