import React, { Component } from 'react';
import { Drawer, Icon, Divider, Spin } from 'antd';
import './AdminSetting.css';
import BlockChecbox from '../admin-setting/component/block-checbox';
import * as CONST from '../../config/constant';
import ContentWidth from '../admin-setting/component/content-width';
import Fixed from './component/fixed';
import PageStyleSetting from '../admin-setting/component/page-style-setting'


class AdminSetting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { visible, blockChecbox, isMobile, contentWidth, fixedHeader, fixedSidebar, style, vars } = this.props;
        return (
            <div>

                <Drawer
                    classNam='ant-damnx-drawer'
                    placement="right"
                    onClose={this.togglerContent}
                    visible={visible}
                    handler={
                        <div className='antd-damnx-components-setting-drawer-index-handle'>
                            <Icon
                                type={visible ? 'close' : 'setting'}
                                style={{
                                    color: '#fff',
                                    fontSize: 20,
                                }}
                            />
                        </div>
                    }
                    width={300}
                    style={{
                        zIndex: 999,
                    }}
                    onHandleClick={this.togglerContent}
                >

                    <div className='antd-damnx-components-setting-drawer-index-content'>
                        <PageStyleSetting
                            onChangeStyle={this.onChangeStyle}
                            style={style}
                            vars={vars}
                            onClick={this.onClick}
                            blockChecbox={blockChecbox}
                            isMobile={isMobile}
                        />
                        <Divider></Divider>
                        <BlockChecbox
                            blockChecbox={blockChecbox}
                            onClickBlockChecbox={this.onClickBlockChecbox}
                            data={CONST.NAVIGATION_MODE}
                            title='Navigation Mode'
                        />
                        <ContentWidth
                            isMobile={isMobile}
                            blockChecbox={blockChecbox}
                            onChange={this.onChange}
                            contentWidth={contentWidth}
                        />
                        <Fixed
                            fixedHeader={fixedHeader}
                            onChange={this.onChange}
                            disabled={false}
                            title='Fixed Header'
                            name='fixedHeader'
                        />

                        <Fixed
                            fixedHeader={fixedSidebar}
                            onChange={this.onChange}
                            disabled={blockChecbox === 'siderMenu' ? false : true}
                            title='Fixed Sidebar'
                            name='fixedSidebar'
                        />
                    </div>
                </Drawer>

            </div >
        );
    }

    onClick = (name, value) => {
        this.props.onClick(name, value)
    }

    onChangeStyle = (value, initialValue) => {
        this.props.onChangeStyle(value, initialValue)
    }

    onChange = (name, value) => {
        this.props.onChange(name, value);
    }

    onClickBlockChecbox = (value) => {
        this.props.onClickBlockChecbox(value)
    }

    togglerContent = () => {
        this.props.showDrawer(!this.props.visible)
    }
}

export default AdminSetting;