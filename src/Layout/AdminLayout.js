import React from 'react';
import { Layout } from 'antd';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import SiderAdmin from './SiderAdmin';

const { Content } = Layout;

const AdminLayout = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                collapsed: false,
            };
        }

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }

        render() {
            return (
                <div>
                    <Layout>
                        <SiderAdmin
                            collapsed={this.state.collapsed}
                            onClickToggle={this.onClickToggle}
                        />
                        <Layout>
                            <HeaderAdmin
                                collapsed={this.state.collapsed}
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
                </div>
            )
        }
    }
}

export default AdminLayout;