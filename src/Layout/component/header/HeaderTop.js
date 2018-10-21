import React, { Component } from 'react';
import { Layout } from 'antd';
import './HeaderTop.css';
import SubberMenu from '../menu';
import IconSider from '../header/component/IconSider';
import LogoNavMenu from './component/LogoNavMenu';

const { Header } = Layout;

class HeaderTop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { navigationMode, collapsed, isMobile } = this.props;
        return (
            <Header style={{ background: '' }} className="header" id="ant-damnx-header">
                <div className={navigationMode === 'topMenu' ? "antd-damnx-components-top-nav-header-index-left" : 'antd-damnx-components-top-header-index-left'}>
                    <IconSider
                        navigationMode={navigationMode}
                        collapsed={collapsed}
                        onClick={() => this.toggle(!collapsed)}
                        isMobile={isMobile}
                    />
                    <LogoNavMenu
                        navigationMode={navigationMode}
                        isMobile={isMobile}
                    />

                    {this.renderSubberMenu(navigationMode, isMobile)}
                    
                </div>
            </Header >
        );
    }

    renderSubberMenu = (navigationMode,isMobile) => {
        if (navigationMode === 'topMenu' && !isMobile) {
            return (
                <SubberMenu
                    mode='horizontal'
                    navigationMode={navigationMode}
                    {...this.props}
                />
            );
        }

        return null;
    }

    toggle = (collapsed) => {
        this.props.onClickToggle(collapsed);
    }
}

export default HeaderTop;