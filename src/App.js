import React, { Component } from 'react';
import { Route } from 'react-router';
import LoginForm from './components/LoginForm.js';
import VINDecoder from './components/VINDecoder.js';
import  Info  from './components/Info.js';
import  ExchangeRates  from './components/ExchangeRates.js';
import  Map  from './components/Map.js';

import './styles/App.css'
class App extends Component {
  static displayName = App.name;

  render () {
    return (
            <div>
                <Route exact path='/' component={LoginForm} />
                <Route exact path='/reactwebsite' component={LoginForm} />
                <Route exact path='/vin-decoder' component={VINDecoder} />
                <Route exact path='/exchange-rates' component={ExchangeRates}/>
                <Route exact path='/info' component={Info} />
                <Route exact path='/map' component={Map} />
            </div>
    );
  }
}
export default App;
