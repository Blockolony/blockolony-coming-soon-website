import React, { Component } from 'react';
import '../css/Footer.css';
import whiteLogo from '../assets/whiteLogo.svg';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegramPlane';

class Footer extends Component {
  render() {
    return(
      <footer>
        <div className="row">
          <div className="col-sm-4 pt-40">
            <a href="https://www.facebook.com/blockolony" className="vertical">
              Events
            </a>
            <a href="https://instagram.com/blockolony" className="vertical">
              About
            </a>
            <a href="https://t.me/blockolony" className="vertical">
              Contact
            </a>
          </div>
          <div className="col-sm-4">
            <img src={whiteLogo}/>
            <h1>Blockolony</h1>
            <p>is a registered company in the UK</p>
          </div>
          <div className="col-sm-4 pt-30">
            <a href="https://www.facebook.com/blockolony">
              <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://instagram.com/blockolony">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="https://t.me/blockolony">
              <FontAwesomeIcon icon={faTelegram}/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
