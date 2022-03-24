import {createSlice} from '@reduxjs/toolkit';

const otpSlice = createSlice({
    name:"otp",
    initialState:{
        isLoading:false,
        otpVerified:false,
        isAuth:false,
        error:false,
    },
    reducers:{
        otpPending:(state)=>{
            state.isLoading = true ;
        },
        otpSuccess:(state,action)=>{
            state.user = action.payload;
            state.isLoading = false ;
            state.otpOK = true ; 
            state.otpVerified = true;     
        },
        otpError:(state)=>{
            state.otpOK = false ;
            state.isLoading = false;
            state.error = true ;
        },
    },
});

export  const {otpPending,otpSuccess,otpError} = otpSlice.actions;
export default otpSlice.reducer;