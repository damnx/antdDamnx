import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';
import './PageStyleSetting.css';
import CustomPageStyleSetting from './CustomPageStyleSetting'

class PageStyleSetting extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { style, vars } = this.props;

        return (
            <div className='admin-setting-page-style-setting'>
                <Row className='page-style-setting'>
                    <h3 className='antd-damnx-setting-drawer-index-content-page-style-setting'>Page style setting</h3>
                    <Col className="page-style-setting-iteam-title" span={12}>
                        Style
                    </Col>
                    <Col className="page-style-setting-iteam-action" span={12}>
                        <Radio.Group size='small' defaultValue={style} onChange={(e) => this.onChange(e.target.value)}>
                            <Radio.Button value="dark">Dark</Radio.Button>
                            <Radio.Button value="light">Light</Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
                <div>
                    <label
                        style={{
                            padding: '5px 0px'
                        }}
                    >
                        Customize
                    </label>
                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Primary Color'
                        name='@primary-color'
                    />
                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Text Color'
                        name='@text-color'
                    />
                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Heading Color'
                        name='@heading-color'
                    />

                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Layout Header Background'
                        name='@layout-header-background'
                    />

                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Layout Sider Background'
                        name='@layout-sider-background'
                    />

                    <CustomPageStyleSetting
                        onClick={this.onClick}
                        vars={vars}
                        title='Sider Color'
                        name='@secondary-color'
                    />

                </div>

            </div>
        );
    }

    onClick = (name, value) => {
        this.props.onClick(name, value)
    }

    onChange = (value) => {

        let { blockChecbox, vars, isMobile } = this.props;

        if (isMobile) {
            vars = {
                '@primary-color': '#1890ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': 'rgba(0, 0, 0, 0.65)',
                '@layout-header-background': '#fff',
                '@layout-sider-background': '#001529',
                '@secondary-color': '#fff',
            }
        }

        if (blockChecbox === 'siderMenu' && value === 'dark' && !isMobile ) {
            vars = {
                '@primary-color': '#1890ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': 'rgba(0, 0, 0, 0.65)',
                '@layout-header-background': '#fff',
                '@layout-sider-background': '#001529',
                '@secondary-color': '#fff',
            }
        }

        if (blockChecbox === 'topMenu' && value === 'dark' && !isMobile) {
            vars = {
                '@primary-color': '#1890ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': '#fff',
                '@layout-header-background': '#001529',
                '@layout-sider-background': '#001529',
                '@secondary-color': '#fff',
            }
        }

        if (value === 'light' && !isMobile) {
            vars = {
                '@primary-color': '#1890ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': 'rgba(0, 0, 0, 0.65)',
                '@layout-header-background': '#fff',
                '@layout-sider-background': '#fff',
                '@secondary-color': 'rgba(0, 0, 0, 0.65)',
            };
        }
        this.props.onChangeStyle(value, vars)
    }
}

export default PageStyleSetting;