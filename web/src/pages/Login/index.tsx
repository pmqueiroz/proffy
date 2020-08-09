import React, { FormEvent, useState } from 'react';
import { useAuth } from '../../contexts/auth';

import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';

import './style.css';
import { Link } from 'react-router-dom';

function Login() {
    const { signed, signIn, handleToggleRemember } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(signed);

    function handleSignIn(e: FormEvent){
        e.preventDefault();
        signIn(email, password);
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
                                        value={email} 
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} 
                                        />
                                    <Input 
                                        name="password" 
                                        placeholder="password"
                                        type="password"
                                        value={password} 
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }} 
                                        />
                                </div>
                                <footer>
                                    <div>
                                        <input onChange={handleToggleRemember} type="checkbox" name="remember"/>
                                        <label htmlFor="remember">Remember</label>
                                    </div>
                                    <Link to='/signup' className="signup-button">
                                       <label>Forgot my password</label>
                                    </Link>
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