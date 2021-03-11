import React, { Component } from 'react';
import { Route } from 'react-router';
import LoggedIn from './components/LoggedIn.js';
import  Login  from './components/Login.js';
import VINDecoder from './components/VINDecoder.js';

import './styles/App.css'

class App extends Component {
  static displayName = App.name;

  render () {
    return (
            <div className= "test">
                <Route exact path='/reactwebsite' component={Login} />
                <Route exact path='/vin-decoder' component={VINDecoder} />
                <Route exact path='/logged-in' component={LoggedIn} />
            </div>
    );
  }
}
export default App;
