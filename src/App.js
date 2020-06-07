import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import './App.css'

//Reusables

import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Pages

import Home from '../src/pages/Home/Home';
import Metronome from '../src/components/Metronome/Metronome';
import Cheats from '../src/components/Cheats/Cheats';
import Sheets from '../src/components/Sheets/Sheets';

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
          <Route exact path='/cheat-sheets' render={props =>
          <Cheats />
          } />
          <Route exact path='/sheet-music' render={ props =>
          <Sheets />
          } />
        </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;