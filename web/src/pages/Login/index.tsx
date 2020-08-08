import React, { FormEvent } from 'react';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';

import './style.css';

function Login() {

    function handleCreateAccount(e: FormEvent){
        e.preventDefault();
        console.log('Created Account');
    }

    return (
        <div id="page-login">
            <div id="page-login-content">
                <div className="login-logo-container">
                    <div className="login-logo">
                        <img src={logoImg} alt="Proffy"/>
                        <h2>Your online study platform.</h2>
                    </div>
                    {/* <img 
                        src={backgroundImg} 
                        alt="Plataforma de estudos online." 
                        className="hero-image"
                    /> */}
                </div>
                <div className="login-form">
                        <fieldset>
                            <form onSubmit={handleCreateAccount}>
                                <header>
                                    <legend>Login</legend>
                                    <a href="#">Sign Up</a> 
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