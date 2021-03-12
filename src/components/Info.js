import React, { Component } from 'react';
import { Menu } from './Menu';

class Info extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Menu items={['Log out', 'VIN decoder', 'Info']} focused = {2}/>
        );
    }
}

export default Info;
