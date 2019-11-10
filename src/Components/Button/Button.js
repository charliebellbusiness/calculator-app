import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        let classes='Button';

        if (this.props.type!== '') {
            classes += ' Button-' + this.props.type;
        }

        return (
            <button className={classes} onClick={this.props.onButtonPress}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;