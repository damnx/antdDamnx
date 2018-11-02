import React, { Component } from 'react';
import loading from './swat.gif';
import LocalStorage from '../../utils/LocalStorage';

export default class LoadMasterData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
           
        };
        this.loading();
        this.checkLang();
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false,
              
            });
        }, 1950);
    }

    checkLang = () => {
        if (!LocalStorage.get("lang")) {
            LocalStorage.set("lang", "vi");
        }
    }

    render() {
        let Component = this.props.component;
        let {isLoading} = this.state;
        if (!isLoading) {
            return (
                <Component  {...this.props} />
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