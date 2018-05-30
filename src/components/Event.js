import React, { Component } from 'react';
import '../css/Event.css';

import { Panel } from 'react-bootstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faLocationArrow from '@fortawesome/fontawesome-free-solid/faLocationArrow';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendar';

class Event extends Component {
  render() {
    return(
      <Panel>
        <Panel.Heading>
          <img src={this.props.src} alt=""/>
        </Panel.Heading>
        <Panel.Body>
          <h2>{this.props.title}</h2>
          <p className="event-info">{this.props.info}</p>
          <p>
            <FontAwesomeIcon icon={faLocationArrow}/>
            {this.props.location}
          </p>
          <p>
            <FontAwesomeIcon icon={faClock}/>
            {this.props.time}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar}/>
            {this.props.date}
          </p>
        </Panel.Body>
      </Panel>
    )
  }
}

export default Event;
