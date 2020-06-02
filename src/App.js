import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css'

//Reusables

import Navbar from '../src/components/Navbar/Navbar';

//Pages

import Home from '../src/pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className='app-outer-container'>
        <Navbar />

        <div className='app-inner-container'>
        <Switch>
          <Route exact path='/' render={props =>
          <Home />
          } />
        </Switch>
        </div>
      </div>
    )
  }
}

export default App;