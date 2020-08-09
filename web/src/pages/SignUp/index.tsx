import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css';

function TeacherForm(){
    const history = useHistory();

    const [token, setToken] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');


    function handleCreateAccount(e: FormEvent){
        e.preventDefault();

        api.post('accounts', {
            username,
            email,
            password,
            avatar,
            whatsapp,
            bio,
        }).then(() => {
            alert('All done!');
            history.push('/');
        }).catch(() =>{
            alert('Error');
        })
    }

    return (
        <div id="page-sign-up-form" className="container">
            <PageHeader title="Wow! You want to make part of our connections"
            description="First we need some of your information"/>
        <main>
                <form onSubmit={handleCreateAccount}>
                    <fieldset>
                        <legend>Your info</legend>
                        <Input 
                            name="name" 
                            label="Complete Name" 
                            value={username} 
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }} 
                        />

                        <Input 
                            name="email" 
                            label="Email" 
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} 
                        />

                        <Input 
                            name="Password" 
                            label="Password" 
                            type="password"
                            value={password} 
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                        />
                        
                    </fieldset>

                    <fieldset>
                        <legend>Profile</legend>
                        <Input 
                            name="avatar" 
                            label="Avatar" 
                            value={avatar} 
                            onChange={(e) => {
                                setAvatar(e.target.value)
                            }} 
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp" 
                            value={whatsapp} 
                            onChange={(e) => {
                                setWhatsapp(e.target.value)
                            }} 
                        />
                        <Textarea 
                            name="bio" 
                            label="Biography"
                            value={bio} 
                            onChange={(e) => {
                                setBio(e.target.value)
                            }} 
                        />
                        
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning"/>
                            Warning! <br />
                            Fill all the fields
                        </p>
                        <button type="submit">
                            Sign Up
                        </button>
                    </footer>
                </form>
            </main>
        </div>

    )
}

export default TeacherForm;