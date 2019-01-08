import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Welcome from './Welcome/Welcome';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/welcome' component={Welcome}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;