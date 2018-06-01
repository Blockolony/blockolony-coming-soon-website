import React, { Component } from 'react';
import './css/App.css';

import Nav from './components/Navigation.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
