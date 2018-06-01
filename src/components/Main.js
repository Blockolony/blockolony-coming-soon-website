import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './Home.js';
import Events from './Events.js';
import Resources from './Resources.js';
import About from './About.js';
import Contact from './Contact.js';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/resources' component={Resources}/>
          <Route path='/events' component={Events}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
