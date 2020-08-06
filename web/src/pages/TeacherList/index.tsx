import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './style.css'


function TeacherList(){
    const [teachers, setTeachers] =useState([]);

    const[subject, setSubject] = useState('');
    const[week_day, setWeek_day] = useState('');
    const[time, setTime] = useState('');

    async function searchTeachers(e: FormEvent){
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select 
                        name="subject" 
                        label="Subject" 
                        value={subject}
                        onChange={e => {
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
                    <Select 
                        name="weed_day" 
                        label="Week Day" 
                        value={week_day}
                        onChange={e => {
                            setWeek_day(e.target.value)
                        }}
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
                        type="time" 
                        name="time" 
                        label="Hour"
                        value={time}
                        onChange={e => {
                            setTime(e.target.value)
                        }}
                    />

                    <button type="submit">
                        Search
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;