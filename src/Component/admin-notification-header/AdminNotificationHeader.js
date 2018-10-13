import React, { Component } from 'react';
import { Icon, Badge, Popover } from 'antd';
import './AdminNotificationHeader.css'

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);


class AdminNotificationHeader extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <span className='antd-pro-components-notice-icon-index-noticeButton'>
                <Popover
                    placement="topRight"
                    title={text}
                    content={content}
                    trigger="click"
                    className='antd-pro-damnx-popover-notification'
                >
                    <Badge
                        count={99}
                        overflowCount={10}
                        className='ant-damnx-badge'
                    >
                        <Icon className='outlined-noticeButton-header' type="bell" theme="outlined" />
                    </Badge>
                </Popover>
            </span>
        );
    }
}

export default AdminNotificationHeader;