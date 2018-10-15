import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import AdminNotificationHeader from '../Component/admin-notification-header';
import AdminHeaderIndexAccount from '../Component/admin-header-index-account';
import AdminHeaderIndexSearch from '../Component/admin-header-index-search';
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
                <div className='antd-pro-components-global-header-index-right'>
                    <AdminHeaderIndexSearch />
                    <AdminNotificationHeader />
                    <AdminHeaderIndexAccount />
                </div>
            </Header>
        );
    }
}

export default HeaderAdmin;