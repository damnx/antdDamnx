import React, { Component } from 'react';
import '../../User/stylesUser.css';
import { Tabs, Row, Col } from 'antd';
import './register.css';

const TabPane = Tabs.TabPane;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.loading()
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 200);
    }

    render() {
        let { visible } = this.state;
        return (
            <div className='user-content'>
            <Row>
                <Col className={visible ? 'div-show user-register-left' : 'div-hidden user-register-right'} xs={24} sm={24} md={14} lg={14} xl={18}>
                    <img className="user-register-left-logo" src="http://react-material.fusetheme.com/assets/images/logos/fuse.svg" alt="logo" />
                    <h3 className="user-register-left-logo-title" >Welcome to the Fingroup!</h3>
                    <p className='user-register-left-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis.</p>
                </Col>
                <Col className={visible ? 'div-show user-register-right' : 'div-hidden user-register-right'} xs={24} sm={24} md={10} lg={10} xl={6}>
                    <h6 className="user-register-right-title">CREATE AN ACCOUNT</h6>
                    <Tabs
                        className='user-register-right-tabs'
                    >
                        <TabPane className='user-register-right-tabs-tabpane' tab="Credenciais" key="credenciais">
                            123
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Register;