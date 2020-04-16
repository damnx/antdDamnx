import React, { Component } from 'react';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import './AdminHeaderIndexAccount.css';

const menu = (
    <Menu>
        <Menu.Item> <Icon type="user" /> Account Center</Menu.Item>
        <Menu.Item> <Icon type="setting" /> Account Settings</Menu.Item>
        <Menu.Item> <Icon type="close-circle" /> Trigger Error</Menu.Item>
        <Menu.Item> <Icon type="poweroff" /> Logout</Menu.Item>
    </Menu>
);

class AdminHeaderIndexAccount extends Component {

    render() {
        return (
            <Dropdown 
            overlay={menu}
            placement="bottomLeft"
            >
                <div className='antd-damnx-header-index-account'>
                    <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                    <span className="antd-damnx-components-global-header-index-name">Fingroup</span>
                </div>
            </Dropdown>

        );
    }
}

export default AdminHeaderIndexAccount;