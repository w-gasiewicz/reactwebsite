import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import '../styles/DataModal.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class DataModal extends Component {
    constructor(props) {
        super(props)
        this.state = { data: props.data, show: true }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }
    componentWillReceiveProps() {
            this.setState({ show: true });
    }
    render() {
        return (
            <div>
                {this.state.show ?
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Data readed from VIN</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <tr>
                                <td><b>Country:</b></td>
                                <td>{this.state.data.country}</td>
                            </tr>
                            <tr>
                                <td><b>Manufacturer:</b></td>
                                <td>{this.state.data.manufacturer}</td>
                            </tr>
                            <tr>
                                <td><b>Year:</b></td>
                                <td>{this.state.data.year}</td>
                            </tr>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    : null}
            </div>
        );
    }
}

export default DataModal;
