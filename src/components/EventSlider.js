import React from "react";
import Slider from "react-slick";

import Event from './Event.js';

import eventPhoto from '../assets/event_test.jpg';

class EventSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <Event src={eventPhoto} title="St Andrews Blockchain Meetup #01"
          info="Come to our first ever local meetup in St Andrews"
          location="St Andrews Brew Co."
          time="18:00 - 21:00"
          date="21st May 2018"/>
        </div>
        <div>
          <Event src={eventPhoto} title="St Andrews Blockchain Meetup #02"
          info="Come to our second local meetup in St Andrews"
          location="St Andrews Brew Co."
          time="18:00 - 21:00"
          date="21st June 2018"/>
        </div>
        <div>
          <Event src={eventPhoto} title="St Andrews Blockchain Meetup #03"
          info="Come to our third local meetup in St Andrews"
          location="St Andrews Brew Co."
          time="18:00 - 21:00"
          date="21st July 2018"/>
        </div>
      </Slider>
    );
  }
}

export default EventSlider
