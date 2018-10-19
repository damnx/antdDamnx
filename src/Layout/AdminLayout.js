import React from 'react';
import { Layout } from 'antd';
import './style.css';
import Header from './component/header';
import SiderAdmin from './component/sider';
import AdminSetting from '../Component/admin-setting';
import LocalStorage from '../utils/LocalStorage';


const { Content, Footer } = Layout;

const AdminLayout = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
                visible: false,
                navigationMode: LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'siderMenu'
            }
        }

        render() {
            let { collapsed, visible, navigationMode } = this.state;
            return (
                <Layout>
                    <SiderAdmin
                        navigationMode={navigationMode}
                        collapsed={collapsed}
                        {...this.props}
                    />
                    {/* sider */}
                    <Layout>
                        {/*header */}
                        <Header
                            navigationMode={navigationMode}
                            collapsed={collapsed}
                            onClickToggle={this.onClickToggle}
                            {...this.props}
                        />
                        <Layout style={{ margin: '24px 24px 0px', padding: '0px' }}>
                            <Content style={{ background: '#fff', minHeight: 280 }}>
                                <Component
                                    {...this.props}
                                />
                            </Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>
                    <AdminSetting
                        visible={visible}
                        showDrawer={this.showDrawer}
                        blockChecbox={navigationMode}
                        onClickBlockChecbox={this.onClickBlockChecbox}
                    />
                </Layout>
            )
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

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }
    }
}

export default AdminLayout;