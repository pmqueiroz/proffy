import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/54639269?s=460&u=105433cc3bec327295b08511619ab716d7b87cf5&v=4" alt="Pedro Queiroz"/>
                <div>
                    <strong>Pedro Queiroz</strong>
                    <span>Physics</span>
                </div>
            </header>
            <p>
                The branch of science concerned with the nature and properties 
                of matter and energy. The subject matter of physics, distinguished 
                from that of chemistry and biology, includes mechanics, heat, 
                light and other radiation, sound, electricity, magnetism, and 
                the structure of atoms.
            </p>
            <footer>
                <p>
                    Price/Hour
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contact
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;