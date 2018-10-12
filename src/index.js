import React from 'react'
import { render } from 'react-dom'
import {Router } from 'react-router-dom'
import App from './App/App';
import history from './utils/history';

render((
    <Router history={history}>
        <App />
    </Router>
    // <BrowserRouter  history={history}>
    //     <App />
    // </BrowserRouter>
), document.getElementById('root'));

