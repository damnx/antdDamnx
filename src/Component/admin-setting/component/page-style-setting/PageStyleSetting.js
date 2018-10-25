import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';
import './PageStyleSetting.css';
import CustomPageStyleSetting from './CustomPageStyleSetting'

class PageStyleSetting extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='admin-setting-page-style-setting'>
                <Row className='page-style-setting'>
                    <h3 className='antd-damnx-setting-drawer-index-content-page-style-setting'>Page style setting</h3>
                    <Col className="page-style-setting-iteam-title" span={12}>
                        Style
                    </Col>
                    <Col className="page-style-setting-iteam-action" span={12}>
                        <Radio.Group size='small' defaultValue='dark' onChange={(e) => this.onChange(e.target.value)}>
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
                    />
                </div>

            </div>
        );
    }

    onChange = (value) => {
        this.props.onChangeStyle(value)
    }
}

export default PageStyleSetting;