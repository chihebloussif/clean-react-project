import { publicRequest,loginRequest } from "../httpRequest";
import { registerPending,registerSuccess,registerError } from "./reducers/signupReducer";
import { loginPending,loginSuccess,loginError } from "./reducers/loginReducer";
import { otpPending,otpSuccess,otpError } from "./reducers/otpReducer";





export const register = async (dispatch,user) => {

    dispatch(registerPending());
try {
      const res = await publicRequest.post('/auth/register',user)
      dispatch(registerSuccess(res.data));
} catch (err) {
    dispatch(registerError());
}

}
export const login = async (dispatch,user) => {

    dispatch(loginPending());
try {
      const res = await publicRequest.post('/auth/login',user)
      dispatch(loginSuccess(res.data));
} catch (err) {
    dispatch(loginError());
}

}
export const otpCheck = async (dispatch,otp) => {

    dispatch(otpPending());
try {
      const res = await loginRequest.post('/auth/otpCheck',otp)
      dispatch(otpSuccess(res.data));
      localStorage.setItem('token',res.data.accessToken);
} catch (err) {
    dispatch(otpError());
}

}