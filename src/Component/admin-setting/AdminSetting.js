import React, { Component } from 'react';
import { Drawer, Icon } from 'antd';
import './AdminSetting.css';
import BlockChecbox from '../admin-setting/component/block-checbox';
import * as CONST from '../../config/constant';


class AdminSetting extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let { visible, blockChecbox } = this.props;
        return (
            <div>
                <Drawer
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
                        <div className=''>
                            <h3 className="antd-damnx-setting-drawer-index-content-page-style-setting">Navigation Mode</h3>
                            <BlockChecbox
                                blockChecbox={blockChecbox}
                                onClickBlockChecbox={this.onClickBlockChecbox}
                                data={CONST.NAVIGATION_MODE}
                            />
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }

    onClickBlockChecbox = (value) => {
        this.props.onClickBlockChecbox(value)
    }

    togglerContent = () => {
        this.props.showDrawer(!this.props.visible)
    }
}

export default AdminSetting;