import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import VINDecoder from './VINDecoder.js';

export class Menu extends Component {
    static displayName = Menu.name;
    state = { focused: 0 }
    clicked(index) {
        this.setState({ focused: index });
    }

    render() {
        var self = this;
        var tos = ['/', '/vin-decoder', '/info', '/login'];
        return (
            <div>
                <ul>
                    {this.props.items.map(function (m, index) {
                        var style = '';
                        if (self.state.focused == index) {
                            style = 'active';
                        }
                        
                        return (
                            <Link style={{ textDecoration: 'none', color: 'black' }} tag={Link} exact to={tos[index]}>
                                <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li></Link>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
