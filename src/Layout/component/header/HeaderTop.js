import React, { Component } from 'react';
import { Layout } from 'antd';
import './HeaderTop.css';
import SubberMenu from '../menu';
import IconSider from '../header/component/IconSider';
import LogoNavMenu from './component/LogoNavMenu';

const { Header, Content } = Layout;

class HeaderTop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { navigationMode, collapsed, isMobile, contentWidth, fixedHeader, style } = this.props;
        return (
            <Header
                style={
                    fixedHeader && !collapsed && navigationMode === 'siderMenu' && !isMobile ?
                        {
                            padding: 0,
                            width: 'calc(100% - 256px)'
                        } : fixedHeader && collapsed && navigationMode === 'siderMenu' && !isMobile ?
                            {
                                padding: 0,
                                width: 'calc(100% - 80px)'
                            } : {
                                padding: 0,
                            }
                }
                className={
                    isMobile && fixedHeader ? "header ant-damnx-header-mobile ant-damnx-fixed-header" : fixedHeader ? "header ant-damnx-fixed-header" : isMobile ? "header ant-damnx-header-mobile" : "header"
                }
                id="ant-damnx-header"
            >
                <Content className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}>
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

                        {this.renderSubberMenu(navigationMode, isMobile, style)}

                    </div>
                </Content>
            </Header >
        );
    }

    renderSubberMenu = (navigationMode, isMobile, style) => {
        if (navigationMode === 'topMenu' && !isMobile) {
            return (
                <SubberMenu
                    mode='horizontal'
                    navigationMode={navigationMode}
                    style={style}
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