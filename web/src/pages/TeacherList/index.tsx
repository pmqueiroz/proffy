import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './style.css'

function TeacherList(){
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available proffys.">
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Subj ect" 
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