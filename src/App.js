import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css'

//Reusables

import Navbar from '../src/components/Navbar/Navbar';
import Metronome from '../src/components/Metronome/Metronome';

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
          <Route exact path='/metronome' render={props =>
          <Metronome />
          } />
        </Switch>
        </div>
      </div>
    )
  }
}

export default App;