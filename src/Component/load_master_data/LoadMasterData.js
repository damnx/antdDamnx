import React, { Component } from 'react';
import loading from './swat.gif';

export default class LoadMasterData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        };
        this.loading();
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1950);
    }

    render() {
        let Component = this.props.component;
        let isLoading = this.state.isLoading;
        if (!isLoading) {
            return (
                <Component {...this.props} />
            )
        }
        return (
            <div style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "#e1e1e1",
            }}>
                <img
                    style={{
                        minWidth: 320
                    }}
                    src={loading} alt={"Loading"} />
            </div>
        )

    }
}