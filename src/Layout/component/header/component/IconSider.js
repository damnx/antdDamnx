import React from 'react';
import { Icon } from 'antd';
import './IconSider.css';

const IconSider = (props) => {
    let { navigationMode, collapsed, onClick } = props
    if (navigationMode === 'siderMenu') {
        return (<div className='antd-damnx-components-header-index-header'>
            <Icon
                className="trigger antd-damnx-components-header-index-trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onClick}
            />
        </div>);
    }
    return null;
}

export default IconSider;