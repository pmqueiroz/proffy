import React, {useState, FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css';

function TeacherForm(){
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');


    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string){
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
            
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent){
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('All done!');
            history.push('/');
        }).catch(() =>{
            alert('Error');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Awesome! You want to give lessons"
            description="The first step is fill this inscription form"/>
        
        
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your info</legend>

                        <Input 
                            name="name" 
                            label="Complete Name" 
                            value={name} 
                            onChange={(e) => {
                                setName(e.target.value)
                            }} 
                        />
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

                    <fieldset>
                        <legend>About your lesson</legend>
                        
                        <Select 
                            name="subject" 
                            label="Subject" 
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }} 
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
                        <Input 
                        name="cost" 
                        label="Hour cost for your class" 
                        value={cost}
                        onChange={(e) => {
                            setCost(e.target.value)
                        }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Available Times
                            <button type="button" onClick={addNewScheduleItem}>
                                + New time
                            </button>
                        </legend>

                    {scheduleItems.map((scheduleItem, index) => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                            <Select 
                                name="weed_day" 
                                label="Week Day" 
                                value={scheduleItem.week_day}
                                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                            <Input 
                                name="from" 
                                label="From" 
                                type="time"
                                value={scheduleItem.from}
                                onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                            />
                            <Input 
                                name="to" 
                                label="to" 
                                type="time"
                                value={scheduleItem.to}
                                onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                            />
                        </div>
                        )
                    })}
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