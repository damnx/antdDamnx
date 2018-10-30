import React, { Component } from 'react';
import { Icon, Badge, Popover } from 'antd';
import './AdminNotificationHeader.css'
import ContentPopoverAdminHeader from '../content-popover-admin-header';
import { notification } from '../../Api';

class AdminNotificationHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false
        }
    }

    componentWillMount() {
        // this.callApiNotification()
    }

    componentWillUnmount() {
        // this.setState({
        //     ...this.state,
        //     data: {}
        // })
    }

    render() {
        let { isLoading, data } = this.state;
        return (
            <span className='antd-pro-components-notice-icon-index-noticeButton'>
                <Popover
                    placement="topRight"
                    trigger="click"
                    overlayClassName='antd-pro-damnx-popover-notification'
                    content={
                        <ContentPopoverAdminHeader
                            data={data}
                            isLoading={isLoading}
                            onClear={this.onClear}

                        />
                    }
                >
                    <Badge
                        count={99}
                        overflowCount={0}
                        className='ant-damnx-badge'
                        onClick={this.onClick}
                    >
                        <Icon className='outlined-noticeButton-header' type="bell" theme="outlined" />
                    </Badge>
                </Popover>
            </span>
        );
    }

    onClick = () => {
        this.callApiNotification();
    }

    /**
     * clear thông báo 
     * input activeKey string
     * output xóa data tab
     */
    onClear = (activeKey) => {
        let data = this.state.data;
        delete data[activeKey];
        this.setState({
            ...this.state,
            data: data
        })
    }

    callApiNotification = () => {
        this.setState({
            isLoading: true,
        })

        notification().then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    data: {
                        '1': res.data,
                        '2': res.data
                    }
                })
            }
        });

    }
}

export default AdminNotificationHeader;