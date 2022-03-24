import { configureStore,combineReducers } from "@reduxjs/toolkit";
import  signupReducer  from "./reducers/signupReducer";
import loginReducer from "./reducers/loginReducer";
import otpReducer from "./reducers/otpReducer";



const rootReducer = combineReducers({signup: signupReducer, login: loginReducer, otp:otpReducer})
   export  const store =  configureStore({
              reducer : rootReducer 
}) ;


