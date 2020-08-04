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
                    <span>Física</span>
                </div>
            </header>
            <p>
                Eu não sou uma pessoa muito boas com descrições mas
                <br/><br/>
                Provavelmente eu der aulas ai de fisica talvez
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;