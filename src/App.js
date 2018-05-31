import React, { Component } from 'react';
import logo from './ezing_logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.css';
import LandingPage from './components/landingpage/landingpage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Ezing</h1>*/}
        {/*</header>*/}
        {/*<p className="App-intro">*/}
          {/*We the best*/}
        {/*</p>*/}
          <LandingPage/>
      </div>
    );
  }
}

export default App;
