import React, { Component } from 'react';

class LoginFormFooter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='user-login-login-form-footer'>
                <span>Don't have an account?</span>
                <a href='#'>Create an account</a>
                <a href='#'>Back to Home</a>
            </div>
        );
    }
}

export default LoginFormFooter;