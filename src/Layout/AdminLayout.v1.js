import React from 'react';
import { Layout ,Menu} from 'antd';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import SiderAdmin from './SiderAdmin';
import AdminSetting from '../Component/admin-setting';
import LocalStorage from '../utils/LocalStorage';

// const { Content } = Layout;
const { Header, Content, Footer } = Layout;

const AdminLayout = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
                visible: false,
                navigationMode: LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'sideMenu'
            };
        }

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }

        render() {
            let { collapsed, visible, navigationMode } = this.state;
            return (
                <div>
                    {navigationMode === 'sideMenu' ? this.renderSideMenuLayou(collapsed, visible, navigationMode) : this.renderTopMenuLayou(collapsed, visible, navigationMode)}
                    {this.renderAdminSetting(visible, navigationMode)}
                </div>
            )
        }

        renderTopMenuLayou = (collapsed, visible, navigationMode) => {
            return (
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                    
                </Layout>
            );

        }

        renderSideMenuLayou = (collapsed, visible, navigationMode) => {
            return (<Layout>
                {this.renderSiderAdmin(collapsed)}
                <Layout>
                    {this.renderHeaderAdmin(collapsed)}
                    {this.renderContent()}
                    {this.renderFooterAdmin()}
                </Layout>
            </Layout>)
        }

        renderFooterAdmin = () => {
            return (
                <FooterAdmin
                    {...this.props}
                />
            );
        }

        renderContent = () => {
            return (
                <Content
                    style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
                >
                    <Component
                        {...this.props}
                    />
                </Content>
            );
        }

        renderSiderAdmin = (collapsed) => {
            return (
                <SiderAdmin
                    collapsed={collapsed}
                    onClickToggle={this.onClickToggle}
                />
            );
        }

        renderHeaderAdmin = (collapsed) => {
            return (
                <HeaderAdmin
                    collapsed={collapsed}
                    onClickToggle={this.onClickToggle}
                />
            );
        }

        renderAdminSetting = (visible, navigationMode) => {
            return (
                <AdminSetting
                    visible={visible}
                    showDrawer={this.showDrawer}
                    blockChecbox={navigationMode}
                    onClickBlockChecbox={this.onClickBlockChecbox}
                />
            );
        }

        showDrawer = (visible) => {
            this.setState({
                visible
            })
        }

        onClickBlockChecbox = (value) => {
            LocalStorage.set('navigationMode', value);
            this.setState({
                navigationMode: value
            })
        }
    }
}

export default AdminLayout;