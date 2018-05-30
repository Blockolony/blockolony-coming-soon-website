import React, { Component } from 'react';
import blueLogo from './assets/blueLogo.svg';
import './css/App.css';

import Nav from './components/Navigation.js';
import Lorem from './components/Lorem.js';
import Footer from './components/Footer.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';
import faMicrophoneAlt from '@fortawesome/fontawesome-free-solid/faMicrophoneAlt';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="container">
          <section className="App-header">
            <div className="row mt-40">
              <div className="col-md-12">
                <img src={blueLogo} className="App-logo img-responsive center-block" alt="logo" />
              </div>
            </div>
            <div className="row">
              <h1 className="App-title">Blockolony</h1>
            </div>
          </section>
          <section className="App-about">
            <div className="row">
              <div className="col-md-12 pt-40">
                <h1>A global hub for the blockchain community</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 App-about-element mt-50">
                <FontAwesomeIcon icon={faHandshake} className="center-block"/>
                <h2>Networking</h2>
                <Lorem/>
              </div>
              <div className="col-md-4 App-about-element mt-50">
                <FontAwesomeIcon icon={faWrench} className="center-block"/>
                <h2>Workshops</h2>
                <Lorem/>
              </div>
              <div className="col-md-4 App-about-element mt-50">
                <FontAwesomeIcon icon={faMicrophoneAlt} className="center-block"/>
                <h2>Seminars</h2>
                <Lorem/>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
