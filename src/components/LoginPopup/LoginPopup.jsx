import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Login"?<></>: <input type="text" placeholder='name' required />}
                <input type="text" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState ==="Login"?<p>Create a new Account? <span onClick={()=> setCurrentState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=> setCurrentState("Login")}>Login here</span></p>}
            
           
        </div>
    </div>
  ) 
}

export default LoginPopup