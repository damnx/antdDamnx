import React, { Component } from 'react';
import { Switch } from 'antd';
import './Fixed.css'

class Fixed extends Component {
    render() {
        let { fixedHeader, title, disabled } = this.props;

        return (
            <div className='admin-setting-fixed-header'>
                <div className='admin-setting-fixed-header-iteam-content'>
                    <span>{title}</span>
                </div>
                <div className='admin-setting-fixed-header-item-action'>
                    <Switch size="default"
                        disabled={disabled}
                        onChange={this.onChange}
                        defaultChecked={fixedHeader}
                    />
                </div>
            </div>
        );
    }

    onChange = (checked) => {
        let name = this.props.name
        this.props.onChange(name, checked);
    }
}

export default Fixed;