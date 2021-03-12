import React, { Component } from 'react';
import '../styles/LoginForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Alert from 'react-bootstrap/Alert';

class DataModal extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', showAllert: false, loggedIn: false }
    }

    render() {
        return (
            <Alert variant="danger" dismissible>
                <Alert.Heading>{this.props.Heading}</Alert.Heading>
                <p>{this.props.Text}</p>
            </Alert>
        );
    }
}

export default DataModal;
