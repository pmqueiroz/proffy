import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css';

function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Awesome! You want to give lessons"
            description="The first step is fill this inscription form"/>
        
        
            <main>
                <fieldset>
                    <legend>Your info</legend>

                    <Input name="name" label="Complete Name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                </fieldset>

                <fieldset>
                    <legend>About your lesson</legend>
                    
                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Hour cost for your class" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Warning"/>
                        Warning! <br />
                        Fill all the fields
                    </p>
                    <button type="button">
                        Sign Up
                    </button>
                </footer>
            </main>
        </div>

    )
}

export default TeacherForm;