import { useState } from 'react'
import './LoginSignup.css'
import "../asset/cover.jpg"
import name from "../asset/user.png"
import email from "../asset/email.png"
import password from "../asset/password.png"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginSignup = () => {
    const [action, setAction] = useState("Sign up")
    const [username, setUsername] = useState('');
    const [useremail, setEmail] = useState('');
    const [userpassword, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    // const history = useHistory();
    const [isSignUpSuccessful, setSignUpSuccessful] = useState(false);




    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() && location.pathname !== '/login') {
            console.log("Please enter your name")
            setErrorMessage('Please enter your name.');
            return;
        }

        if (!useremail.trim()) {
            setErrorMessage('Please enter your email.');
            return;
        }

        if (!userpassword.trim()) {
            setErrorMessage('Please enter your password.');
            return;
        }
        setErrorMessage('');
        const userData = {
            name: username,
            email: useremail,
            password: userpassword,
        };

        setEmail("");
        setUsername("");
        setPassword("");

        try {
            let response = "";
            if (location.pathname == "/login") {
                delete userData.name
                response = await axios.post('https://pic-morper.onrender.com/auth/login', userData);
            } else {
                response = await axios.post('https://pic-morper.onrender.com/auth/signup', userData);
            }
            if (response.status = 200) {
                setSignUpSuccessful(true);
                navigate('/success')
            }
            if (response.status == 404) {
                navigate(location.pathname)
            }




        } catch (error) {
            // Handle errors
            console.error('Error signing up:', error);
        }
    };






    return (
        // <form onSubmit={handleSubmit}>
        <div className='container-back'>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='header'>
                        <div className='text'>{action}</div>
                        <div className='underline'></div>
                    </div>

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <div className='inputs'>
                        {location.pathname === "/login" ? <div></div> : <div className='input'>
                            <img src={name} width={"50px"} alt="name" />
                            <input type="text" value={username} onChange={handleUsernameChange} placeholder='Name' />
                        </div>}


                        <div className='input'>
                            <img src={email} width={"50px"} alt="" />
                            <input type="email" value={useremail} onChange={handleEmailChange} placeholder='Email' />
                        </div>

                        <div className='input'>
                            <img src={password} width={"50px"} alt="" />
                            <input type="password" value={userpassword} onChange={handlePasswordChange} placeholder='Password' />
                        </div>
                    </div>
                    <div className='submit-container'>
                        <button type="submit" className='submit'>{location.pathname === "/login" ? "Login" : "Sign up"}</button>

                    </div>


                </div>
            </form>

        </div>

    )
}

export default LoginSignup