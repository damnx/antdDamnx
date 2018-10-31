import React, { Component } from 'react';
import './SelectLang.css';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);



class SelectLang extends Component {
    constructor(props) {
        super(props);

    }

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