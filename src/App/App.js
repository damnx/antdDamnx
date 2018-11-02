import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../App';
import Login from '../User/login/Login';
import Register from '../User/register';

class App extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/damnx" component={Home} />
                <PrivateRoute exact path="/oke" component={Home} />
                <PrivateRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/login" component={Login} />
                <Route exact path='/register' component={Register} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;