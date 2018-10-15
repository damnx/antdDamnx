import React, { Component } from 'react';
import './BlockChecbox.css';
import { Tooltip, Icon } from 'antd';

class BlockChecbox extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                {this.renderBlockChecbox()}
            </div>
        );
    }

    renderBlockChecbox = () => {
        let blockChecbox = this.props.blockChecbox;
        let result = [];
        for (let i in blockChecbox) {
            result.push(
                <Tooltip key={i} placement="top" title={blockChecbox[i].title}>
                    <div className='antd-damnx-components-setting-drawer-index-item' onClick={() => this.onClick(i)}>
                        <img src={blockChecbox[i].image} />
                        <div
                            className='antd-damnx-components-setting-drawer-index-selectIcon'
                        >
                            <Icon type={blockChecbox[i].check ? 'check' : 'none'} />
                        </div>
                    </div>
                </Tooltip>
            )
        }

        return result;
    }

    onClick = (i) => {
        
    }
}

export default BlockChecbox;