import React, { Component } from 'react';
import './SelectLang.css';
import { Menu, Dropdown, Icon } from 'antd';
import LocalStorage from '../../utils/LocalStorage';

const defaultSelectedKeys = LocalStorage.get("lang") ? LocalStorage.get("lang") : 'vi';

const onClick = function ({ key }) {
    // message.info(`Click on item ${key}`);
    LocalStorage.set('lang', key);
    window.location.reload();
};



const menu = (
    <Menu
        onClick={onClick}
        defaultSelectedKeys={[defaultSelectedKeys]}
    >
        <Menu.Item
            key='vi'
        >
            <span>Việt Nam</span>
        </Menu.Item>
        <Menu.Item
            key='en'
        >
            <span>English</span>
        </Menu.Item>
    </Menu>
);



class SelectLang extends Component {
    render() {
        return (
            <Dropdown overlay={menu} placement="bottomRight">
                <div className='select-lang-admin-header-index-search'>
                    <Icon type="global" className='select-lang-admin-header-index-search-icon' />
                </div>
            </Dropdown>
        );
    }
}


export default SelectLang;