import React, { Component } from 'react';
import './ContentWidth.css';
import { Button, Radio } from 'antd';

class ContentWidth extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { isMobile, blockChecbox, contentWidth } = this.props;
        if (isMobile || blockChecbox === 'siderMenu') {
            return (
                <div className='admin-setting-content-width'>
                    <div className='admin-setting-content-width-iteam-content'>
                        <span>Content Width</span>
                    </div>
                    <div className='admin-setting-content-width-item-action'>
                        <Radio.Group size='small' value={contentWidth} onChange={this.onChange}>
                            <Radio.Button size='small' disabled value="fixed">Fixed</Radio.Button>
                            <Radio.Button size='small' value="fluid">Fluid</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
            );
        }

        return (
            <div className='admin-setting-content-width'>
                <div className='admin-setting-content-width-iteam-content'>
                    <span>Content Width</span>
                </div>
                <div className='admin-setting-content-width-item-action'>
                    <Radio.Group size='small' value={contentWidth} onChange={this.onChange}>
                        <Radio.Button size='small' value="fixed">Fixed</Radio.Button>
                        <Radio.Button size='small' value="fluid">Fluid</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
        );
    }


    onChange = (e) => {
        this.props.onChange('contentWidth', e.target.value)
    }
}


export default ContentWidth;