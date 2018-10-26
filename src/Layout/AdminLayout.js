import React from 'react';
import { Layout, message, Spin } from 'antd';
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
            let initialValue = {
                '@primary-color': '#1890ff',
                '@secondary-color': '#0000ff',
                '@text-color': '#000000',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': '#fff',
                '@layout-header-background': '#001529',
            };
            let vars = {};
            let contentWidth = LocalStorage.get('contentWidth') ? LocalStorage.get('contentWidth') : 'fixed';
            let navigationMode = LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'siderMenu';
            let fixedHeader = LocalStorage.get('fixedHeader') ? LocalStorage.get('fixedHeader') : false;
            let fixedSidebar = LocalStorage.get('fixedSidebar') ? LocalStorage.get('fixedSidebar') : false;
            let style = LocalStorage.get('style') ? LocalStorage.get('style') : 'dark';
            try {
                vars = Object.assign({}, initialValue, JSON.parse(localStorage.getItem('app-theme')));
            } finally {
                this.state = {
                    vars,
                    initialValue,
                    collapsed: false,
                    visible: false,
                    navigationMode: navigationMode,
                    isMobile: false,
                    contentWidth: contentWidth,
                    fixedHeader: fixedHeader,
                    fixedSidebar: fixedSidebar,
                    style: style,
                    isLoading: false
                };
                window.less
                    .modifyVars(vars)
                    .then(() => { })
                    .catch(error => {
                        message.error(`Failed to update theme`);
                    });
            }

        }

        componentDidMount() {
            let { isMobile, contentWidth, navigationMode, fixedHeader, fixedSidebar, style } = this.state;
            if (isMobile || navigationMode === 'siderMenu') {
                contentWidth = 'fluid'
            }

            this.setState({
                contentWidth: contentWidth
            })

            LocalStorage.set('contentWidth', contentWidth);
            LocalStorage.set('fixedHeader', fixedHeader);
            LocalStorage.set('fixedSidebar', fixedSidebar);
            LocalStorage.set('style', style);

            this.enquireHandler = enquireScreen(mobile => {
                const { isMobile, navigationMode, contentWidth } = this.state;
                if (isMobile !== mobile || navigationMode === 'siderMenu') {
                    this.setState({
                        isMobile: mobile,
                        contentWidth: 'fluid'
                    });
                    LocalStorage.set('contentWidth', 'fluid');
                } else {
                    this.setState({
                        isMobile: false,
                        contentWidth: contentWidth
                    });
                    LocalStorage.set('contentWidth', contentWidth);
                }
            });
        }

        componentWillUnmount() {
            unenquireScreen(this.enquireHandler);
        }

        render() {
            let { collapsed, visible, navigationMode, isMobile, contentWidth, fixedHeader, fixedSidebar, style, vars, isLoading } = this.state;
            return (
                <Spin tip="Loading..." spinning={isLoading}>
                    <Layout>
                        {/* sider */}
                        <SiderAdmin
                            navigationMode={navigationMode}
                            collapsed={collapsed}
                            onClickToggle={this.onClickToggle}
                            isMobile={isMobile}
                            fixedSidebar={fixedSidebar}
                            {...this.props}
                        />
                        <Layout>
                            {/*header */}
                            <Header
                                navigationMode={navigationMode}
                                collapsed={collapsed}
                                onClickToggle={this.onClickToggle}
                                isMobile={isMobile}
                                contentWidth={contentWidth}
                                fixedHeader={fixedHeader}
                                {...this.props}
                            />
                            <Layout style={{ margin: '10px 10px 0px', padding: '0px' }}>
                                <Content
                                    className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}
                                    style={
                                        fixedHeader ? { background: '#fff', minHeight: 5000, marginTop: 64, width: '100%' } : { background: '#fff', minHeight: 5000, width: '100%' }
                                    }
                                >
                                    <Component
                                        {...this.props}
                                        isMobile={isMobile}
                                    />
                                </Content>
                            </Layout>
                            <Footer>
                                <Content className={contentWidth === 'fluid' ? 'ant-damnx-content-fluid' : 'ant-damnx-content-fixed'}>
                                    Footer
                            </Content>
                            </Footer>
                        </Layout>
                        <AdminSetting
                            isMobile={isMobile}
                            visible={visible}
                            showDrawer={this.showDrawer}
                            blockChecbox={navigationMode}
                            onClickBlockChecbox={this.onClickBlockChecbox}
                            onChange={this.onChange}
                            contentWidth={contentWidth}
                            fixedHeader={fixedHeader}
                            fixedSidebar={fixedSidebar}
                            onChangeStyle={this.onChangeStyle}
                            style={style}
                            onClick={this.onClick}
                            vars={vars}
                        />
                    </Layout>
                </Spin>
            )
        }

        onClick = (name, value) => {
            this.setState({
                ...this.state,
                [name]: value
            })
            this.modifyVarsChange(value);
        }

        onChangeStyle = (value, initialValue) => {
            this.setState({
                ...this.state,
                style: value,
                vars: initialValue
            })
            this.modifyVarsChange(initialValue);
            LocalStorage.set('style', value);
        }

        modifyVarsChange = (initialValue) => {
            this.setState({
                isLoading: true
            })
            window.less
                .modifyVars(initialValue)
                .then(() => {
                    this.setState({
                        isLoading: false
                    })
                    message.success(`Theme updated successfully`);
                    localStorage.setItem("app-theme", JSON.stringify(initialValue));
                })
                .catch(error => {
                    message.error(`Failed to update theme`);
                });
        };

        onChange = (name, value) => {
            LocalStorage.set(name, value);
            this.setState({
                ...this.state,
                [name]: value
            })
        }

        showDrawer = (visible) => {
            this.setState({
                visible
            })
        }

        onClickBlockChecbox = (value) => {
            LocalStorage.set('navigationMode', value);
            let contentWidth = 'fixed';
            if (value === 'siderMenu' || this.state.isMobile)
                contentWidth = 'fluid'

            this.setState({
                navigationMode: value,
                contentWidth: contentWidth
            })
            LocalStorage.set('contentWidth', contentWidth);
        }

        onClickToggle = (collapsed) => {
            this.setState({
                collapsed
            })
        }
    }
}

export default AdminLayout;