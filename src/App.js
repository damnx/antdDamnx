import React, { Component } from 'react';
import AdminLayout from './Layout/AdminLayout'

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        Text messaging
      </div>
    );
  }
}


export default AdminLayout(App);
