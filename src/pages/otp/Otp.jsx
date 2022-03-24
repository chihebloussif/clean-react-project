import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { otpCheck } from '../../redux/apiCalls';
import './otp.css';




const Otp = () => {

    const [otp,setOtp] = useState('');
    const dispatch= useDispatch();
    
    const OtpCheck = (e)=> {
        e.preventDefault();
       otpCheck(dispatch,{otp});
    }

  return (
    <div>
         <div className='otp'>
    <div id="otp-box">
   <div className="left">
  <h1>Please enter the OTP sent to your mobile phone</h1>
  <input type="text" name="otp" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>

  <input type="submit" name="signup_submit" value="Verify" onClick={OtpCheck} />
</div>
</div>
  </div>
    </div>
  )
}

export default Otp