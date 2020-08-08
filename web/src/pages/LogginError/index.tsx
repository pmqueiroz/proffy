import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import ladingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './style.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-login-landing">
            <div id="page-login-landing-content" className="container">
                <div className="login-logo">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>You must be logged in.</h2>
                </div>

                <div className="login-buttons-container">
                    <Link to="/" className="study">
                        Login
                    </Link>
                </div>
                <span className="login-total-connections">
                    Total of {totalConnections} connections made  
                    <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;