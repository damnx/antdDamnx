import React, { Component } from 'react';
import { Tabs, Spin } from 'antd';
import './ContentPopoverAdminHeader.css';
import ContentPopoverTabpaneAdminHeader from '../content-popover-tabpane-admin-header'


const TabPane = Tabs.TabPane;

class TitlePopoverAdminHeader extends Component {

    render() {
        let { data, isLoading } = this.props;
        return (
            <Spin spinning={isLoading} >
                <Tabs className='tabs-title-popover-admin-header' defaultActiveKey='1' onChange={this.callback}>
                    <TabPane tab="Notification (5)" key="1">
                        <ContentPopoverTabpaneAdminHeader
                            isLoading={isLoading}
                            data={data['1']}
                            activeKey='1'
                            onClear={this.onClear}
                        />
                    </TabPane>
                    <TabPane tab="Message (3)" key="2">
                        <ContentPopoverTabpaneAdminHeader
                            isLoading={isLoading}
                            data={data['2']}
                            activeKey='2'
                            onClear={this.onClear}
                        />
                    </TabPane>
                    <TabPane tab="Event (4)" key="3">
                        3
                </TabPane>
                </Tabs>
            </Spin>
        );
    }

    onClear = (activeKey) => {
        this.props.onClear(activeKey);
    }

    callback = (key) => {
        // this.props.callback('activeKey', key)
    }
}

export default TitlePopoverAdminHeader;