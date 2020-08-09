import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useAuth } from './contexts/auth';
import Landing from './pages/Landing';
import LoginError from './pages/LogginError';
import TeacherList from './pages/TeacherList';
import Login from './pages/Login';
import TeacherForm from './pages/TeacherForm';
import SignUp from './pages/SignUp';

function Routes() {
    const { signed } = useAuth();

    if (signed) {
        return (
            <BrowserRouter>
                <Route path="/" exact component={Landing}/>
                <Route path="/study" component={TeacherList}/>
                <Route path="/give-classes" component={TeacherForm}/>
            </BrowserRouter>
        );
    } else{
        return (
            <BrowserRouter>
                <Route path="/" exact component={Login}/>
                <Route path="/study" component={LoginError}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/give-classes" component={LoginError}/>
            </BrowserRouter>
        );
    }
}

export default Routes;