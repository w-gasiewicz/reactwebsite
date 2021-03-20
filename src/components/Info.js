import React, { Component } from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Info.css';

class Info extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <HamburgerMenu />
                <div className="login-container">
                    <div className="form-box-vin">
                        <div className="body-form">
                            <h2 className="text-header">Header</h2>
                            <ColoredLine color="white" height={5} />
                            <p className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const ColoredLine = ({ color, height }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height
        }}
    />
);
export default Info;
