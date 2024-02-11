import React from 'react';
import kongaLogo from "./img/KongaLogo.png";
import google from "./img/google.png";
import apple from "./img/apple.png";
import { Link } from 'react-router-dom';
import { useState } from'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://159.65.21.42:9000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                alert('User Login successfull!');
            } else {
                alert(`Error: ${response.statusText}`);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };
    return (
        <div>
            <div className="login-page">
                <div className="login-page-container">
                    <img src={kongaLogo} alt="img" className='login-page-img' />
                    <div className="form-container">
                        <header className='signup-h4'>
                            <h4>Login</h4>
                        </header>
                        <hr />
                        <div className="Login-content-container">
                            <div className="login-a-container">
                                <Link className='login-a-container-link'>
                                    <img src={google} alt="googlelink" className='google-img' />
                                    Login with Google
                                </Link>
                                <Link className='login-a-container-link'>
                                    <img src={apple} alt="applelink" className='apple-img' />
                                    Login with Apple
                                </Link>
                            </div>
                            <div className="hr-pseudo">
                                <span>OR</span>
                            </div>
                            <form className='login-form-container'>
                                <div className="login-form-input-container">
                                    <label> Email Address or Phone Number</label>
                                   <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email Address or Phone Number" required />
                                   
                                </div>
                                <div className="login-form-input-container">
                                    <label className='label'>Password
                                        <Link className='login-forgot-password'>Forgot Password?</Link>
                                    </label>
                                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" required />
                                  
                                </div>
                                <div className="login-form-btn-container">
                                    <button className="login-form-btn"  onClick={(e) => handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="login-form-signup-container">
                            <span>Don't have an Account?</span>
                            <Link to="/signup">
                                <button>Create an Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;