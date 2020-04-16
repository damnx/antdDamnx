import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './ContentPopoverTabpaneAdminHeader.css'

class ContentPopoverTabpaneAdminHeader extends Component {
    render() {
        return (
            <div>
                {this.rennderList()}
                {this.renderClear()}
            </div>
        );
    }

    rennderList = () => {
        let { data } = this.props;
        if (data && data.length > 0) {
            return (
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            );
        }
        return (
            <div className="antd-damnx-components-notice-icon-notice-list-notFound">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg" alt="not found" />
                <div>You have viewed all notifications.</div>
            </div>
        );
    }

    renderClear = () => {
        let { data } = this.props;
        if (data && data.length > 0) {
            return (
                <a
                    className='antd-pro-components-notice-icon-notice-list-clear'
                    onClick={this.onClick}
                >
                    Clear Event
                </a>
            );
        }
    }

    onClick = () => {
        let activeKey = this.props.activeKey;
        this.props.onClear(activeKey);
    }
}


export default ContentPopoverTabpaneAdminHeader;