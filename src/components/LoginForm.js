import React, { Component } from 'react';
import '../styles/LoginForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Alert from 'react-bootstrap/Alert';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '', showAllert: false, loggedIn: false }
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
    this.setShow = this.setShow.bind(this);
  }
  handleChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleClickLogin(e) {
    e.preventDefault();
    if (this.state.username == 'test' && this.state.password == 'test') {
      this.setState({ showAllert: false, loggedIn: true });
    }
    else
      this.setState({ showAllert: true, loggedIn: false });
  }
  setShow(e) {
    this.setState({ showAllert: e });
  }

  render() {
    return (
      <div className="login-container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Username" onChange={this.handleChangeUsername} />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i class="fa fa-lock"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Password" onChange={this.handleChangePassword} />
              </div>
              <button type="button" className="btn btn-secondary btn-block" onClick={this.handleClickLogin}>LOGIN</button>
              {
                this.state.showAllert ?
                  <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
                    <Alert.Heading>You got an error! Bad username or password.</Alert.Heading>
                    <p>
                      Please try again.
                  </p>
                  </Alert> : null}
              {
                this.state.loggedIn ?
                  <Redirect to="/logged-in" /> : null
              }
              <div className="message">
                <div><input type="checkbox" /> Remember ME</div>
                <div><a href="#">Forgot your password</a></div>
              </div>
            </form>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
