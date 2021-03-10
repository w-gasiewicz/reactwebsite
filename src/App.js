import React, { Component } from 'react';
import { Route } from 'react-router';
import  Login  from './components/Login.js';
import VINDecoder from './components/VINDecoder.js';

import './styles/App.css'

class App extends Component {
  static displayName = App.name;

  render () {
    return (
            <div className= "test">
                <Route exact path='/' component={Login} />
                <Route path='/vin-decoder' component={VINDecoder} />
            </div>
    );
  }
}
export default App;
