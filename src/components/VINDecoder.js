import React, { Component } from 'react';
import '../styles/VINDecoder.css';
import Alert from 'react-bootstrap/Alert';
import vinDecoder from 'vin-decode';
import { Menu } from './Menu';
import '../styles/Menu.css';

class VINDecoder extends Component {
    constructor(props) {
        super(props)
        this.state = { vin: '', showAllert: false }
        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleClicDecode = this.handleClicDecode.bind(this);
        this.setShow = this.setShow.bind(this);
    }
    handleChangeVin(e) {
        this.setState({ vin: e.target.value });
        console.log(e.target.value);
    }
    handleClicDecode(e) {
        e.preventDefault();
        if (vinDecoder(this.state.vin)) {
            console.log(vinDecoder(this.state.vin).split());
            console.log(vinDecoder(this.state.vin).decode());
        }
        else
            this.setState({ showAllert: true });
    }
    setShow(e) {
        this.setState({ showAllert: e });
    }

    render() {
        return (
            <div>
                <Menu items={['Log out', 'VIN decoder', 'Info']} focused = {1}/>
                <div className="login-container">
                    <div className="form-box">
                        <div className="body-form">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-code"></i></span>
                                    </div>
                                    <input type="text" className="form-control-vin" placeholder="VIN number" maxLength={17} onChange={this.handleChangeVin} />
                                </div>
                                <button type="button" className="btn btn-secondary btn-block" onClick={this.handleClicDecode}>DECODE</button>
                            </form>
                            {this.state.showAllert ?
                                <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
                                    <Alert.Heading>You got an error! Bad VIN number.</Alert.Heading>
                                    <p>
                                        Please try again.
                                </p>
                                </Alert> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VINDecoder;
