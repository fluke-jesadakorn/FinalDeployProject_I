import React, { Component } from 'react';
import axios from 'axios';

//css with styled component
export default class Control extends Component {
    constructor() {
        super()
        this.state = {
            sw1: false,
        }
        this.sendswitch = this.sendswitch.bind(this)
    }

    sendswitch = () => {
        const { sw1 } = this.state
        this.setState({sw1:!sw1})
        axios.post('api/button/', {
            command: sw1
        })
    }

    render() {

        return (
            <button onClick={() => { this.sendswitch() }}>switchbt</button>
        )
    }
}