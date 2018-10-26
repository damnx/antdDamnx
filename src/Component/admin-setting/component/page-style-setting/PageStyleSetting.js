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
                </div>

            </div>
        );
    }

    onClick = (name, value) => {
        this.props.onClick(name, value)
    }

    onChange = (value) => {
        let initialValue = {
            '@primary-color': '#1890ff',
            '@secondary-color': '#0000ff',
            '@text-color': 'rgba(0, 0, 0, 0.65)',
            '@text-color-secondary': '#eb2f96',
            '@heading-color': '#fff',
        };

        if (value === 'light') {
            initialValue = {
                '@primary-color': '#1890ff',
                '@secondary-color': '#0000ff',
                '@text-color': 'rgba(0, 0, 0, 0.65)',
                '@text-color-secondary': '#eb2f96',
                '@heading-color': 'rgba(0, 0, 0, 0.65)',
            };
        }
        this.props.onChangeStyle(value, initialValue)
    }
}

export default PageStyleSetting;