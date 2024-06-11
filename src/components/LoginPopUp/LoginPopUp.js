import React,{useState} from 'react'
import "./LoginPopUp.css"
import { assets } from '../assets/assets'

function LoginPopUp({setlogin}) {
    const [currentstate, setcurrentstate] = useState("login")
  return (
    <div className='login-popup'>
    <form action="" className="login-popup-container">
       
            <div className="login-popup-title">
                  <h2>{currentstate}</h2>
                  <img  onClick={()=>setlogin(false)}src={assets.cross_icon} alt="cross-icon" />
                 
            </div>
            <div className="login-popup-inputs">
                {currentstate==="login"?<></>:<input type="text" placeholder='Enter your name' required />}
                <input type="email" placeholder='Enter your email' required />
                <input type="pass" placeholder='Enter your password' required />
            </div>
            <button >{currentstate==="sign up"? "create Accuount":"login"} </button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>by continuing , i agree to the terms of use & privacy and policy</p>
            </div>
            {currentstate ==="login"? <p>create a new account ? <span onClick={()=>setcurrentstate("sign up")}> click here</span></p>:           
            <p>Already have an account <span onClick={()=>setcurrentstate("login")}>login here</span></p>}

     </form>
    </div>
  )
}

export default LoginPopUp
