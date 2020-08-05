import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './style.css'

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers">
                    <Input name="subject" label="Subject"/>
                    <Input name="week-day" label="Week Day"/>
                    <Input type="time" name="time" label="Hour"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;