import React from 'react';
import { Layout } from 'antd';
import './style.css';
import Header from './component/header/HeaderTop';
import SiderAdmin from './component/sider/SiderAdmin';
import AdminSetting from '../Component/admin-setting/AdminSetting';
import LocalStorage from '../utils/LocalStorage';
import { enquireScreen, unenquireScreen } from 'enquire-js';


const { Content, Footer } = Layout;

const AdminLayout = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
                visible: false,
                navigationMode: LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'siderMenu',
                isMobile: false,
            }
        }

        componentDidMount() {
            this.enquireHandler = enquireScreen(mobile => {
                const { isMobile } = this.state;
                if (isMobile !== mobile) {
                    this.setState({
                        isMobile: mobile,
                    });
                }
            });
        }

        componentWillUnmount() {
            unenquireScreen(this.enquireHandler);
        }

        render() {
            let { collapsed, visible, navigationMode, isMobile } = this.state;
            return (
                <Layout>
                    {/* sider */}
                    <SiderAdmin
                        navigationMode={navigationMode}
                        collapsed={collapsed}
                        onClickToggle={this.onClickToggle}
                        isMobile={isMobile}
                        {...this.props}
                    />
                    <Layout>
                        {/*header */}
                        <Header
                            navigationMode={navigationMode}
                            collapsed={collapsed}
                            onClickToggle={this.onClickToggle}
                            isMobile={isMobile}
                            {...this.props}
                        />
                        <Layout style={{ margin: '24px 24px 0px', padding: '0px' }}>
                            <Content style={{ background: '#fff', minHeight: 280 }}>
                                <Component
                                    {...this.props}
                                    isMobile={isMobile}
                                />
                            </Content>
                        </Layout>
                        <Footer>Footer</Footer>
                    </Layout>
                    <AdminSetting
                        isMobile={isMobile}
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