import React from 'react';
import { Layout } from 'antd';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import SiderAdmin from './SiderAdmin';
import AdminSetting from '../Component/admin-setting'

const { Content } = Layout;

const AdminLayout = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
                visible: false,
                blockChecbox: [
                    {
                        'image': 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                        'title': 'Dark style',
                        'check': true
                    },
                    {
                        'image': 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                        'title': 'Light style',
                        'check': false
                    }
                ]
            };
        }

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }

        render() {
            let { collapsed, visible, blockChecbox } = this.state;
            return (
                <div>
                    <Layout>
                        <SiderAdmin
                            collapsed={collapsed}
                            onClickToggle={this.onClickToggle}
                        />
                        <Layout>
                            <HeaderAdmin
                                collapsed={collapsed}
                                onClickToggle={this.onClickToggle}
                            />
                            <Content
                                style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
                            >
                                <Component
                                    {...this.props}
                                />
                            </Content>
                            <FooterAdmin
                                {...this.props}
                            />
                        </Layout>
                    </Layout>
                    <AdminSetting
                        visible={visible}
                        showDrawer={this.showDrawer}
                        blockChecbox={blockChecbox}
                    />
                </div>
            )
        }

        showDrawer = (visible) => {
            this.setState({
                visible
            })
        }
    }
}

export default AdminLayout;