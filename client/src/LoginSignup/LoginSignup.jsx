import { useState } from 'react'
import './LoginSignup.css'
import "../asset/cover.jpg"
import name from "../asset/user.png"
import email from "../asset/email.png"
import password from "../asset/password.png"
const LoginSignup = () => {
    const[action,setAction]=useState("Sign up")
    return (
        <div>
        
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login" ? <div></div>:<div className='input'>
                    <img src={name} width={"50px"} alt="name" />
                    <input type="text" placeholder='Name'/>
                </div>}
                

                <div className='input'>
                    <img src={email}  width={"50px"} alt="" />
                    <input type="email"   placeholder='Email'/>
                </div>

                <div className='input'>
                    <img src={password}  width={"50px"} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className='submit-container'>
                <div className={action==="Login" ?"submit gray":"submit"} onClick={()=>(setAction("Sign up"))}>Sign Up</div>
                <div className={action==="Sign up" ?"submit gray":"submit"} onClick={()=>(setAction("Login"))}>Login</div>

            </div>


        </div>
        </div>
    )
}

export default LoginSignup