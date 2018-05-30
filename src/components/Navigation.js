import React, { Component } from 'react';
import '../css/Nav.css';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import faTelegram from '@fortawesome/fontawesome-free-brands/faTelegramPlane';

class Navigation extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Blockolony</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#events">
              Events
            </NavItem>
            <NavItem eventKey={2} href="#about">
              About
            </NavItem>
            <NavItem eventKey={3} href="#contact">
              Contact
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://www.facebook.com/blockolony">
              <FontAwesomeIcon icon={faFacebook}/>
            </NavItem>
            <NavItem eventKey={2} href="https://instagram.com/blockolony">
              <FontAwesomeIcon icon={faInstagram}/>
            </NavItem>
            <NavItem eventKey={3} href="https://t.me/blockolony">
              <FontAwesomeIcon icon={faTelegram}/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
