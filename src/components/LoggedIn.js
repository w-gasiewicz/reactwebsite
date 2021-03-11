import React, { Component } from 'react';
import { Menu } from './Menu';

class LoggedIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Menu items={['Home', 'VIN decoder', 'Info']} />
        );
    }
}

export default LoggedIn;
