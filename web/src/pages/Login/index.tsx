import React, { useState, useEffect } from 'react';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg';

import './style.css';

function Login() {

    return (
        <div id="page-login">
            <div id="page-login-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <img 
                        src={backgroundImg} 
                        alt="Plataforma de estudos online." 
                        className="hero-image"
                        />
                    <h2>Your online study platform.</h2>
                </div>

            </div>
        </div>
    )
}

export default Login;