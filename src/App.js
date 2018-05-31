import React, { Component } from 'react';
import blueLogo from './assets/blueLogo.svg';
import eventPhoto from './assets/event_test.jpg';
import uniLogo from './assets/uni_logo_trans.png';
import unionLogo from './assets/union_logo_trans.png';
import './css/App.css';

import Nav from './components/Navigation.js';
import Lorem from './components/Lorem.js';
import Footer from './components/Footer.js';
import Event from './components/Event.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';
import faMicrophoneAlt from '@fortawesome/fontawesome-free-solid/faMicrophoneAlt';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegramPlane';

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
                <h1>The global hub of the blockchain community</h1>
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
          <section className="App-next">
            <div className="row pt-40">
              <div className="col-lg-6 event">
                <h1>Last event</h1>
                <Event src={eventPhoto} title="St Andrews Blockchain Meetup"
                info="Come to our first ever local meetup in St Andrews"
                location="St Andrews Brew Co."
                time="18:00 - 21:00"
                date="21st May 2018"/>
              </div>
              <div className="col-lg-6 collabs">
                <h1>Partners</h1>
                <div className="row mt-10">
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                  <div className="col-xs-4 pt-20">
                    <img src={unionLogo} alt="" className="img-responsive center-block"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="App-map">
            <div className="row pt-40">
              <div className="col-lg-12">
                <h1>Blockolonies</h1>
              </div>
            </div>
            <div className="row pt-30">
              <div className="col-lg-4 pt-20">
                <h2>UK & Europe</h2>
                <p>
                  St Andrews<br/>
                  <FontAwesomeIcon icon={faTelegram}/>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </p>
                <p>
                  London<br/>
                  <FontAwesomeIcon icon={faTelegram}/>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </p>
              </div>
              <div className="col-lg-4 pt-20">
                <h2>North America</h2>
                <p>
                  New York<br/>
                  <FontAwesomeIcon icon={faTelegram}/>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </p>
              </div>
              <div className="col-lg-4 pt-20">
                <h2>Asia</h2>
                <p>
                  Delhi<br/>
                  <FontAwesomeIcon icon={faTelegram}/>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </p>
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
