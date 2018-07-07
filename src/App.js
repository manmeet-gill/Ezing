import React, { Component } from 'react';
import logo from './ezing_logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.css';
import { Route, Router } from 'react-router'

import LandingPage from './components/landingpage/landingpage';
import HomePage from './components/homepage/homepage'
import Services from './components/services/services'
import Contact from './components/contact'
import About from './components/about'
class App extends Component {

    render() {
    return (
        <div>
            <HomePage/>
            {/*<Router>*/}
            {/*<Route>*/}
                {/*<Route exact path="/" component={HomePage}/>*/}
                {/*<Route path="/about" component={About}/>*/}
            {/*</Route>*/}
        {/*</Router>*/}
        </div>

    );
  }
}

export default App;
