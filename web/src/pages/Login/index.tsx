import React, { FormEvent } from 'react';
import { useAuth } from '../../contexts/auth';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';

import './style.css';
import { Link } from 'react-router-dom';

function Login() {
    const { signed, signIn } = useAuth();

    console.log(signed);

    function handleSignIn(e: FormEvent){
        e.preventDefault();
        signIn();
    }

    return (
        <div id="page-login">
            <div id="page-login-content">
                <div className="login-logo-container">
                    <div className="login-logo">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Your online study platform.</h2>
                    </div>
                </div>
                <div className="login-form">
                        <fieldset>
                            <form onSubmit={handleSignIn}>
                                <header>
                                    <legend>Login</legend>
                                    <Link to='/signup' className="signup-button">
                                       <label>Sign Up</label>
                                    </Link>
                                </header>
                                <div className="input-container">
                                    <Input 
                                        name="email" 
                                        placeholder="example@youremail.com"
                                        />
                                    <Input 
                                        name="password" 
                                        placeholder="password"
                                        />
                                </div>
                                <footer>
                                    <div>
                                        <input type="checkbox" name="remember"/>
                                        <label htmlFor="remember">Remember</label>
                                    </div>
                                    <a href="#">Forgot my password</a>
                                </footer>
                                <button type="submit">Login</button>
                            </form>
                        </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Login;