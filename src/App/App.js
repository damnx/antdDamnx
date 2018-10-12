import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../App';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;