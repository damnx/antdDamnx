import React from 'react';
import { Layout, message } from 'antd';
import './style.css';
import Header from './component/header/HeaderTop';
import SiderAdmin from './component/sider/SiderAdmin';
import AdminSetting from '../Component/admin-setting/AdminSetting';
import LocalStorage from '../utils/LocalStorage';
import { enquireScreen, unenquireScreen } from 'enquire-js';


const { Content, Footer } = Layout;

const AdminLayout = (Component,type) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            let contentWidth = LocalStorage.get('contentWidth') ? LocalStorage.get('contentWidth') : 'fixed';
            let navigationMode = LocalStorage.get('navigationMode') ? LocalStorage.get('navigationMode') : 'siderMenu';
            let fixedHeader = LocalStorage.get('fixedHeader') ? LocalStorage.get('fixedHeader') : false;
            let fixedSidebar = LocalStorage.get('fixedSidebar') ? LocalStorage.get('fixedSidebar') : false;
            let style = LocalStorage.get('style') ? LocalStorage.get('style') : 'dark';
            this.state = {
                vars: {},
                initialValue: {},
                collapsed: false,
                visible: false,
                navigationMode: navigationMode,
                isMobile: false,
                contentWidth: contentWidth,
                fixedHeader: fixedHeader,
                fixedSidebar: fixedSidebar,
                style: style,
            };
        }

        componentWillMount() {
            
            let { isMobile, contentWidth, navigationMode, fixedHeader, fixedSidebar, style } = this.state;
            if (isMobile || navigationMode === 'siderMenu') {
                contentWidth = 'fluid'
            }

            LocalStorage.set('contentWidth', contentWidth);
            LocalStorage.set('fixedHeader', fixedHeader);
            LocalStorage.set('fixedSidebar', fixedSidebar);
            LocalStorage.set('style', style);

            let initialValue = {
                '@primary-color': '#1890ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                // '@text-color-secondary': '#eb2f96',
                '@heading-color': 'rgba(0, 0, 0, 0.65)',
                '@layout-header-background': '#fff',
                '@layout-sider-background': '#001529',
                '@secondary-color': '#fff',
                '@body-bg':'#001529',
            };
            let vars = LocalStorage.get('app-theme') ? LocalStorage.get('app-theme') : initialValue;
            this.setState({
                ...this.setState,
                vars,
                initialValue,
                contentWidth: contentWidth,
            }, () => {
                this.modifyVarsChange(vars);
            })

        }

        componentDidMount() {
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
            let { collapsed, visible, navigationMode, isMobile, contentWidth, fixedHeader, fixedSidebar, style, vars } = this.state;
            return (
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
                        <Layout className='layout-content'>
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

            )
        }

        onClick = (name, value) => {
            this.setState({
                ...this.state,
                [name]: value,

            }, () => {
                this.modifyVarsChange(value);
            })

        }

        onChangeStyle = (value, vars) => {
            this.setState({
                ...this.state,
                style: value,
                vars: vars,
            }, () => {
                this.modifyVarsChange(vars);
                LocalStorage.set('style', value);
            })
        }

        modifyVarsChange = (vars) => {
            window.less
                .modifyVars(vars)
                .then(() => {
                    // message.success(`Theme updated successfully`);
                    localStorage.setItem("app-theme", JSON.stringify(vars));
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
            let { vars, style, isMobile } = this.state;
            if (isMobile) {
                // vars = {
                //     '@primary-color': '#1890ff',
                //     '@text-color': 'rgba(0, 0, 0, 0.65)',
                //     // '@text-color-secondary': '#eb2f96',
                //     '@heading-color': 'rgba(0, 0, 0, 0.65)',
                //     '@layout-header-background': '#fff',
                //     '@layout-sider-background': '#001529',
                //     '@secondary-color': '#fff',
                // }
            }

            if (value === 'siderMenu' && style === 'dark' && !isMobile) {
                // vars = {
                //     '@primary-color': '#1890ff',
                //     '@text-color': 'rgba(0, 0, 0, 0.65)',
                //     // '@text-color-secondary': '#eb2f96',
                //     '@heading-color': 'rgba(0, 0, 0, 0.65)',
                //     '@layout-header-background': '#fff',
                //     '@layout-sider-background': '#001529',
                //     '@secondary-color': '#fff',
                // }
            }

            if (value === 'topMenu' && style === 'dark' && !isMobile) {
                vars = {
                    '@primary-color': '#1890ff',
                    '@text-color': 'rgba(0, 0, 0, 0.65)',
                    // '@text-color-secondary': '#eb2f96',
                    '@heading-color': '#fff',
                    '@layout-header-background': '#001529',
                    '@layout-sider-background': '#001529',
                    '@secondary-color': '#fff',
                }
            }

            let contentWidth = 'fixed';
            if (value === 'siderMenu' || this.state.isMobile)
                contentWidth = 'fluid'

            this.setState({
                navigationMode: value,
                contentWidth: contentWidth,
                vars: vars
            },()=>{
                this.modifyVarsChange(vars)
            })
            LocalStorage.set('navigationMode', value);
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