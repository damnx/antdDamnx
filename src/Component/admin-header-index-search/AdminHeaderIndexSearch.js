import React, { Component } from 'react';
import { Icon } from 'antd';
import './AdminHeaderIndexSearch.css';

class AdminHeaderIndexSearch extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='antd-damnx-components-header-search-index-headerSearch'>
                <Icon type="search" theme="outlined" />
            </div>
        );

        
    }
}

export default AdminHeaderIndexSearch;