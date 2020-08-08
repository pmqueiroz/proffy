import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import Login from './pages/Login';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;