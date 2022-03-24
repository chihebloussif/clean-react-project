import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';






const Login = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
const dispatch = useDispatch();


const Login = (e)=> {
    e.preventDefault();
    login(dispatch,{username,password});
    ;
}

  return (
    <div className='login'>
    <div id="login-box">
<div className="left">
  <h1>Log In to your account</h1>
  <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername( e.target.value)}/>
  <input type="text" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  <input type="submit" name="signup_submit" value="Sign me in" onClick={Login} />
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

export default Login