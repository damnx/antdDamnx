import React, { Component } from 'react';
import WithLayout from '../../Layout/WithLayout';
import './Login.css';
import { Tabs, Row, Col } from 'antd';
import Credenciais from '../login/component/credenciais';
import Telefone from '../login/component/telefone';

const TabPane = Tabs.TabPane;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.loading();
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
            <div className='user-login'>
                <Row>
                    <Col className={visible ? 'div-show user-login-left' : 'div-hidden user-login-right'} xs={24} sm={24} md={14} lg={14} xl={18}>
                        <img className="user-login-left-logo" src="http://react-material.fusetheme.com/assets/images/logos/fuse.svg" alt="logo" />
                        <h3 className="user-login-left-logo-title" >Welcome to the Fingroup!</h3>
                        <p className='user-login-left-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis.</p>
                    </Col>
                    <Col className={visible ? 'div-show user-login-right' : 'div-hidden user-login-right'} xs={24} sm={24} md={10} lg={10} xl={6}>
                        <h6 className="user-login-right-title">LOGIN TO YOUR ACCOUNT</h6>
                        <Tabs
                            className='user-login-right-tabs'
                        >
                            <TabPane className='user-login-right-tabs-tabpane' tab="Credenciais" key="credenciais">
                                <Credenciais />
                            </TabPane>
                            <TabPane className='user-login-right-tabs-tabpane' tab="Telefone" key="relefone">
                                <Telefone />
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>

            </div >

        );
    }
}

export default WithLayout(Login);