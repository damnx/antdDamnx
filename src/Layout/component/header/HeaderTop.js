import React, { Component } from 'react';
import { Layout } from 'antd';
import './HeaderTop.css';
import SubberMenu from '../menu';
import IconSider from '../header/component/IconSider';
import LogoNavMenu from './component/LogoNavMenu';
import AdminNotificationHeader from '../../../Component/admin-notification-header/AdminNotificationHeader';
import AdminHeaderIndexAccount from '../../../Component/admin-header-index-account/AdminHeaderIndexAccount';
import AdminHeaderIndexSearch from '../../../Component/admin-header-index-search/AdminHeaderIndexSearch';

const { Header, Content } = Layout;

class HeaderTop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { navigationMode, collapsed, isMobile, contentWidth, fixedHeader } = this.props;
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
                            } : isMobile ? {
                                padding: '0px 10px',
                            } : {
                                    padding: 0,
                                }
                }
                className={
                    isMobile && fixedHeader ? "ant-damnx-header-mobile ant-damnx-fixed-header" : fixedHeader ? " ant-damnx-fixed-header" : isMobile ? " ant-damnx-header-mobile" : ""
                }
                id="ant-damnx-header"
            >
                <Content className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}>
                    <div className={navigationMode === 'topMenu' ? "antd-damnx-components-top-nav-header-index-left" : 'antd-damnx-components-top-header-index-left'}>
                        {this.renderIconSiderLogoNavMenu(isMobile, navigationMode, collapsed)}
                        {this.renderSubberMenu(navigationMode, isMobile)}
                    </div>
                    <div className='antd-damnx-components-global-header-index-right'>
                        <AdminHeaderIndexSearch />
                        <AdminNotificationHeader />
                        <AdminHeaderIndexAccount />
                    </div>
                </Content>
            </Header >
        );
    }

    renderIconSiderLogoNavMenu = (isMobile, navigationMode, collapsed) => {
        if (isMobile) {
            return (
                <React.Fragment>
                    <LogoNavMenu
                        navigationMode={navigationMode}
                        isMobile={isMobile}
                    />
                    <IconSider
                        navigationMode={navigationMode}
                        collapsed={collapsed}
                        onClick={() => this.toggle(!collapsed)}
                        isMobile={isMobile}
                    />
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
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
            </React.Fragment>
        );

    }

    renderSubberMenu = (navigationMode, isMobile) => {
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