import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
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
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger trigger-layout-admin"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div className='antd-pro-components-global-header-index-right'>

                </div>
            </Header>
        );
    }
}

export default HeaderAdmin;