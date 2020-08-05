import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
                    <Textarea name="bio" label="Biography"/>
                </fieldset>

                <fieldset>
                    <legend>About your lesson</legend>
                    
                    <Select 
                        name="subject" 
                        label="Subject" 
                        options={[
                            { value: 'Literature', label: 'Literature'},
                            { value: 'Speech', label: 'Speech'},
                            { value: 'Writing or Composition', label: 'Writing or Composition'},
                            { value: 'Algebra', label: 'Algebra'},
                            { value: 'Algebra 2', label: 'Algebra II'},
                            { value: 'Geometry', label: 'Geometry'},
                            { value: 'World History', label: 'World History'},
                            { value: 'Spanish', label: 'Spanish'},
                            { value: 'German', label: 'German'},
                            { value: 'French', label: 'French'},
                            { value: 'Chemistry', label: 'Chemistry'},
                            { value: 'Physics', label: 'Physics'},
                        ]}
                    />
                    <Input name="cost" label="Hour cost for your class" />
                </fieldset>

                <fieldset>
                    <legend>Available Times
                        <button type="button">
                            + New time
                        </button>
                    </legend>
                    <div className="schedule-item">
                        <Select 
                            name="weed_day" 
                            label="Week Day" 
                            options={[
                                { value: '0', label: 'Sunday'},
                                { value: '1', label: 'Monday'},
                                { value: '2', label: 'Tuesday'},
                                { value: '3', label: 'Wednesday'},
                                { value: '4', label: 'Thursday'},
                                { value: '5', label: 'Friday'},
                                { value: '6', label: 'Saturday'},
                            ]}
                        />
                        <Input name="from" label="From" type="time"/>
                        <Input name="to" label="to" type="time"/>
                    </div>
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