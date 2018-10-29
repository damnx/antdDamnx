import React, { Component } from 'react';
import AdminLayout from './Layout/AdminLayout';
import { Row, Col } from 'antd';
import { SketchPicker, PhotoshopPicker } from 'react-color';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <SketchPicker />
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    );
  }
}


export default AdminLayout(App);
