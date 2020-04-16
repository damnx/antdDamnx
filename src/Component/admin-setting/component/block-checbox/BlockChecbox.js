import React, { Component } from 'react';
import './BlockChecbox.css';
import { Tooltip, Icon } from 'antd';

class BlockChecbox extends Component {

    render() {
        let { title } = this.props;
        return (
            <div className='navigation-mode'>
                <h3 className="antd-damnx-setting-drawer-index-content-page-style-setting">{title}</h3>
                {this.renderBlockChecbox()}
            </div>
        );
    }

    renderBlockChecbox = () => {
        let { blockChecbox, data } = this.props
        let result = [];
        for (let i in data) {
            result.push(
                <Tooltip key={i} placement="top" title={data[i].title}>
                    <div className='antd-damnx-components-setting-drawer-index-item' onClick={() => this.onClick(i)}>
                        <img alt="" src={data[i].image} />
                        <div
                            className='antd-damnx-components-setting-drawer-index-selectIcon'
                        >
                            <Icon type={data[i].name === blockChecbox ? 'check' : 'none'} />
                        </div>
                    </div>
                </Tooltip>
            )
        }

        return result;
    }

    onClick = (i) => {
        this.props.onClickBlockChecbox(i)
    }
}

export default BlockChecbox;