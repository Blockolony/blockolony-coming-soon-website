import React, { Component } from 'react';
import logo from './assets/logo.png';
import './css/App.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup';
import faMail from '@fortawesome/fontawesome-free-solid/faEnvelope';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.state.toggle) {
      return;
    }

    this.setState({
      toggle: true
    });

  }

  render() {

    var blockolonyMain = this.state.toggle ? 'blockolony-main-end' : 'blockolony-main-start';
    blockolonyMain += " blockolony-main";

    var blockolonyNav = this.state.toggle ? 'blockolony-nav-end' : 'blockolony-nav-start';
    blockolonyNav += " blockolony-nav list-inline";

    var blockolonyLogo = this.state.toggle ? 'blockolony-logo-end' : 'blockolony-logo-start';
    blockolonyLogo += " blockolony-logo";

    return (
      <div className="container blockolony-app">
        <div className={blockolonyMain}>
          <img src={logo} className={blockolonyLogo} alt="logo" onClick={this.handleClick} />
          <h1 className="blockolony-title">Blockolony</h1>
          <ul className={blockolonyNav}>
            <li className="list-inline-item"><a href="https://www.facebook.com/blockolony/"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li className="list-inline-item"><a href="https://instagram.com/blockolony"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className="list-inline-item"><a href="https://www.meetup.com/members/253224515/"><FontAwesomeIcon icon={faMeetup}/></a></li>
            <li className="list-inline-item">&#8729;</li>
            <li className="list-inline-item"><a href="mailto:blockolony@outlook.com"><FontAwesomeIcon icon={faMail}/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
