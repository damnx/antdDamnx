import React from 'react';
import LoadMasterData from '../Component/load_master_data/LoadMasterData';

class PrivateRoute extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <LoadMasterData component={this.props.component} {...this.props} />
    }
}

export default PrivateRoute;