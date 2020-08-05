import React from 'react';

import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './style.css';

interface PageHeaderProps {
    title: string;
    description?: string;

}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="back"/>
                </Link>
                <img src={logoIcon} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;