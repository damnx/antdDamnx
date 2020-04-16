import React, { Component } from 'react';
import * as CONST from '../../../config/constant';
import AdminLayout from '../../../Layout/AdminLayout';


class Provincial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            pageSize: CONST.PAGESIZE
        }
    }


    render() {
        return (
            <div>
                <p>123213</p>
            </div>
        );
    }
}

export default AdminLayout(Provincial);