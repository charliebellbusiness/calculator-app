import React, { Component } from 'react';
import './Keypad.css';
import Button from '../Button/Button';
import KeypadRow from '../KeypadRow/KeypadRow';

class Keypad extends Component {
    render () {
        return (
            <div className='Keypad'>
            <KeypadRow>
                {/* row1 */}
                <Button type='operator' onButtonPress={this.props.onButtonPress}>(</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>)</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>%</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>C</Button>
            </KeypadRow>

            <KeypadRow>
                {/* row2 */}
                <Button type='primary' onButtonPress={this.props.onButtonPress}>1</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>2</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>3</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>*</Button>
            </KeypadRow>

            <KeypadRow>
                {/* row3 */}
                <Button type='primary' onButtonPress={this.props.onButtonPress}>4</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>5</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>6</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>/</Button>
            </KeypadRow>

            <KeypadRow>
                {/* row3 */}
                <Button type='primary' onButtonPress={this.props.onButtonPress}>7</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>8</Button>
                <Button type='primary' onButtonPress={this.props.onButtonPress}>9</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>-</Button>
            </KeypadRow>

            <KeypadRow>
                {/* row5 */}
                <Button type='primary' onButtonPress={this.props.onButtonPress}>0</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>.</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>=</Button>
                <Button type='operator' onButtonPress={this.props.onButtonPress}>+</Button>
            </KeypadRow>
            </div>
        );
    }
}

export default Keypad;