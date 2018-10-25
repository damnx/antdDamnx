import React, { Component } from 'react';
import { Row } from 'antd';

class CustomPageStyleSetting extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Row className='custom-page-style-setting'>
                    <span className='custom-page-style-setting-iteam-color'></span>
                    <span className='custom-page-style-setting-iteam-title'>123213</span>
                </Row>
            </div>
        );
    }
}

export default CustomPageStyleSetting;