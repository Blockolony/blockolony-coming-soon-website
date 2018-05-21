import React, { Component } from 'react';
import whiteLogo from './assets/whiteLogo.svg';
import blueLogo from './assets/blueLogo.svg';
import './css/App.css';
import Switch from './components/Switch.js';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup';
import faSlack from '@fortawesome/fontawesome-free-brands/faSlack';
import faMail from '@fortawesome/fontawesome-free-solid/faEnvelope';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }

    this.toggleMode = this.toggleMode.bind(this);
  }

  toggleMode() {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {

    let mainClass = this.state.toggle ? 'white-background' : 'blue-background';
    document.body.classList.remove('white-background');
    document.body.classList.remove('blue-background');
    document.body.classList.add(mainClass);
    let textClass = this.state.toggle ? 'blue-text' : 'white-text';
    let navClass = 'list-inline';
    let logoSrc = this.state.toggle ? blueLogo : whiteLogo;

    return (
      <div className="container blockolony-app">
        <Switch handleChange={this.toggleMode} checked={this.state.toggle}/>
        <div id="blockolony-main" className={mainClass}>
          <img src={logoSrc} className="blockolony-logo" alt="logo"></img>
          <h1 id="blockolony-title" className={textClass}>Blockolony</h1>
          <ul id="blockolony-nav" className={navClass}>
            <li className="list-inline-item"><a className={textClass} href="https://www.facebook.com/blockolony/"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li className="list-inline-item"><a className={textClass} href="https://instagram.com/blockolony/"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className="list-inline-item"><a className={textClass} href="https://www.meetup.com/members/253224515/"><FontAwesomeIcon icon={faMeetup}/></a></li>
            <li className="list-inline-item"><a className={textClass} href="https://blockolony.slack.com/"><FontAwesomeIcon icon={faSlack}/></a></li>
            <li className="list-inline-item"><span className={textClass}>&#8729;</span></li>
            <li className="list-inline-item"><a className={textClass} href="mailto:info@blockolony.com"><FontAwesomeIcon icon={faMail}/></a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
