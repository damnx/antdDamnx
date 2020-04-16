import React, { Component } from 'react';
import AdminLayout from './Layout/AdminLayout';
import { Row } from 'antd';

const type = {
  a: 123
}

class App extends Component {

  render() {

    return (
      <Row>
      
      </Row>
    );
  }
}


export default AdminLayout(App, type);
