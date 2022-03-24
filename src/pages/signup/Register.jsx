import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { register } from '../../redux/apiCalls';

import './register.css';


const Register = () => {


  const {error,isLoading} = useSelector((state)=>state.signup);
  const [data, setData] = useState({username:'', phone:'',email:'',password:''});
  const dispatch = useDispatch();


  const Signup = (e)=> {
    e.preventDefault();
    register(dispatch,data);
}

  return (
    
     <div className='register'>
      <div id="login-box">
  <div className="left">
    <h1>Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
    <input type="text" name="email" placeholder="E-mail" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}/>
    <input type="password" name="password" placeholder="Password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
    <input type="text" name="phone" placeholder="Phone Number" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}/>
    <input type="submit" name="signup_submit" disabled={isLoading} value="Sign me up" onClick={Signup} />
    {error && <p>Oops something went wrong ...</p>}
  
  </div>
  <div className="right">
    <span className="loginwith" >Sign in with<br />social network</span>
    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google+</button>
  </div>
  <div className="or">OR</div>
  </div>
    </div>
    
  )
}

export default Register