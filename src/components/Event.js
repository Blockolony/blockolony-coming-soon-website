import React, { Component } from 'react';
import '../css/Event.css';

import { Panel } from 'react-bootstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';

class Event extends Component {

  location() {
    if (!this.props.location) return;

    return(
      <p>
        <FontAwesomeIcon icon={faLocationArrow}/>
        {this.props.location}
      </p>
    );
  }

  time() {
    if (!this.props.time) return;

    return(
      <p>
        <FontAwesomeIcon icon={faClock}/>
        {this.props.time}
      </p>
    );
  }

  date() {

    if (!this.props.date) return;

    return(
      <p>
        <FontAwesomeIcon icon={faCalendar}/>
        {this.props.date}
      </p>
    );
  }

  render() {
    return(
      <Panel>
        <Panel.Heading>
          <img src={this.props.src} alt=""/>
        </Panel.Heading>
        <Panel.Body>
          <h2>{this.props.title}</h2>
          <p className="event-info">{this.props.info}</p>
          {this.location()}
          {this.time()}
          {this.date()}
        </Panel.Body>
      </Panel>
    )
  }
}

export default Event;
