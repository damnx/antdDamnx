import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import AdminNotificationHeader from '../Component/admin-notification-header'
import './HeaderAdmin.css';

const { Header } = Layout;

class HeaderAdmin extends Component {
    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.props.onClickToggle(!this.props.collapsed);
    }

    render() {
        return (
            <Header
                className='antd-pro-damnx-header'
            >
                <Icon
                    className="trigger trigger-layout-admin"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <AdminNotificationHeader />
            </Header>
        );
    }
}

export default HeaderAdmin;