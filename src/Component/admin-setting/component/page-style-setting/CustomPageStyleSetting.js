import React, { Component } from 'react';
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'

class CustomPageStyleSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorPicker: false,
        }
    }

    render() {
        let { title, vars, name } = this.props;
        let { displayColorPicker } = this.state;
        let color = vars[name]

        const styles = reactCSS({
            'default': {
                color: {
                    width: '14px',
                    height: '14px',
                    borderRadius: '2px',
                    background: color,
                    float: 'left',
                    margin: '5px 5px 0px 0px',
                    border: '1px solid #cccccc'
                },
                swatch: {
                    padding: '5px 0px',
                    background: '#fff',
                    borderRadius: '1px',
                    display: 'inline-block',
                    cursor: 'pointer',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <div>
                <div style={styles.swatch} onClick={() => this.handleClick(displayColorPicker)}>
                    <div style={styles.color} />
                    <label>{title}</label>
                </div>
                {displayColorPicker ? <div style={styles.popover}>
                    <div style={styles.cover} onClick={this.handleClose} />
                    <SketchPicker color={color} onChangeComplete={this.handleChange} />
                </div> : null}
            </div>
        );
    }

    handleClick = (displayColorPicker) => {
        this.setState({ displayColorPicker: !displayColorPicker })
    }

    handleClose = () => {
        this.setState({
            displayColorPicker: false
        })
    }

    handleChange = (color) => {
        let { vars, name } = this.props;
        vars[name] = color.hex
        this.props.onClick('vars', vars)
    }
}

export default CustomPageStyleSetting;