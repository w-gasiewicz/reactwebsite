import React, { Component } from 'react';
import VINDecoder from './VINDecoder.js'
class LoggedIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <VINDecoder/>
        );
    }
}

export default LoggedIn;
