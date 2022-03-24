import {createSlice} from '@reduxjs/toolkit';

const signupSlice = createSlice({
    name:"signup",
    initialState:{
        isLoading:false,
        user:null,
        isSaved:false,
        error:false,
    },
    reducers:{
        registerPending:(state)=>{
            state.isLoading = true ;
        },
        registerSuccess:(state,action)=>{
            state.isSaved = true ;
            state.user = action.payload;
            state.isLoading = false ;         
        },
        registerError:(state,{payload})=>{
            state.isSaved = false ;
            state.isLoading = false;
            state.error = payload ;
        },
    },
});

export  const {registerPending,registerSuccess,registerError} = signupSlice.actions;
export default signupSlice.reducer;