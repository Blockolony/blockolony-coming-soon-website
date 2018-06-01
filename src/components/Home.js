import React, { Component } from 'react';
import blueLogo from '../assets/blueLogo.svg';
import eventPhoto from '../assets/event_test.jpg';
import uniLogo from '../assets/uni_logo_trans.png';
import unionLogo from '../assets/union_logo_trans.png';
import '../css/App.css';

import Event from './Event.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHandshake from '@fortawesome/fontawesome-free-solid/faHandshake';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';
import faMicrophoneAlt from '@fortawesome/fontawesome-free-solid/faMicrophoneAlt';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegramPlane';

class Home extends Component {
  render() {
    return (
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
            <div className="col-md-12 pt-40 slogan">
              <h1>The global hub of the blockchain community</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 App-about-element mt-50">
              <FontAwesomeIcon icon={faHandshake} className="center-block"/>
              <h2>Networking</h2>
              <p>
                Meet industry professionals, investors, developers and
                enthusiasts at one of our local networking events near you.
              </p>
            </div>
            <div className="col-md-4 App-about-element mt-50">
              <FontAwesomeIcon icon={faWrench} className="center-block"/>
              <h2>Workshops</h2>
              <p>
                Develop your skills with our workshops and online resources
                taught by highly skilled experts within the blockchain space.
              </p>
            </div>
            <div className="col-md-4 App-about-element mt-50">
              <FontAwesomeIcon icon={faMicrophoneAlt} className="center-block"/>
              <h2>Seminars</h2>
              <p>
                Learn from the most knowledgable speakers in the world and
                connect with them through our seminars and lectures.
              </p>
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
                <div className="col-xs-6 pt-20">
                  <img src={unionLogo} alt="" className="img-responsive center-block"/>
                </div>
                <div className="col-xs-6 pt-20">
                  <img src={unionLogo} alt="" className="img-responsive center-block"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 pt-20">
                  <img src={unionLogo} alt="" className="img-responsive center-block"/>
                </div>
                <div className="col-xs-6 pt-20">
                  <img src={unionLogo} alt="" className="img-responsive center-block"/>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 pt-20">
                  <img src={unionLogo} alt="" className="img-responsive center-block"/>
                </div>
                <div className="col-xs-6 pt-20">
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
            <div className="col-sm-4 pt-20">
              <h2>UK & Europe</h2>
              <p>
                Aberdeen<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
              <p>
                Dundee<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
              <p>
                London<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
              <p>
                St Andrews<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
            </div>
            <div className="col-sm-4 pt-20">
              <h2>North America</h2>
              <p>
                New York<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
            </div>
            <div className="col-sm-4 pt-20">
              <h2>Asia</h2>
              <p>
                New Delhi<br/>
                <FontAwesomeIcon icon={faTelegram}/>
                <FontAwesomeIcon icon={faEnvelope}/>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
