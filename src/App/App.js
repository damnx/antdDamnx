import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../App';

class App extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/damnx" component={Home} />
                <PrivateRoute exact path="/oke" component={Home} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;