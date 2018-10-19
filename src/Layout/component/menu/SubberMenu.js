import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import nav from './_nav';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const getMenus = (nav, pathname) => {
    return nav.map((item) => {
        if (item.children) {
            return (
                <SubMenu
                    key={item.id}
                    title={
                        <span>
                            <Icon
                                type={item.icon}
                            />
                            <span>{item.name}</span>
                        </span>
                    }
                >
                    {getMenus(item.children, pathname)}
                </SubMenu>
            )
        } 
        return (
            <Menu.Item
                key={item.id}
            >
                <Link to={item.route}>
                    {item.icon && <Icon type="pie-chart" />}
                    <span>{item.name}</span>
                </Link>
            </Menu.Item>
        )
    })
}

class SubberMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { mode } = this.props;
        let pathname = this.props.location.pathname;
        return (
            <Menu
                theme="dark"
                mode={mode}
                style={{ lineHeight: '64px' }}
            >
                {getMenus(nav, pathname)}
            </Menu >
        );
    }


    getMenus = (menuTreeN, idActivate) => {


    }



    selectedKeys = (menuTreeN) => {

    }

}

export default SubberMenu;