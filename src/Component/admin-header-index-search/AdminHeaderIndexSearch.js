import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import './AdminHeaderIndexSearch.css';

class AdminHeaderIndexSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.textInput = React.createRef();
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.current.focus();
      }

    render() {
        let show = this.state.show;
        return (
            <div className='antd-damnx-components-header-search-index-headerSearch'>
                <Icon onClick={this.onClick} type="search" theme="outlined" />
                <div className={show ? 'antd-damnx-components-header-search-index-input ant-damnx-select-auto-complete show-search-input' : 'antd-damnx-components-header-search-index-input ant-damnx-select-auto-complete hidden-search-input'}>
                    <Input
                        style={{ width: '100%' }}
                        placeholder="Basic usage"
                        ref={this.textInput}
                        onBlur={this.onBlur}
                        className='input-ant-damnx-header-search'
                    />
                   
                </div>
            </div>
        );
    }

    onClick = () => {
        this.setState({
            show: true
        })
        this.textInput.current.focus();
    }

    onBlur=()=>{
        this.setState({
            show: false
        })
    }
}

export default AdminHeaderIndexSearch;