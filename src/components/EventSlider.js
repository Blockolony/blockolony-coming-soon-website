import React from "react";
import Slider from "react-slick";

import Event from './Event.js';

import eventPhotoFirst from '../assets/event_first.jpg';
import eventPhotoSecond from '../assets/event_second.jpg';
import eventPhotoFade from '../assets/event_test_fade.jpg';

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
          <Event src={eventPhotoFirst} title="St Andrews Blockchain Meetup #01"
          info="Come to our first ever local meetup in St Andrews."
          location="St Andrews Brew Co."
          time="18:00 - 21:00"
          date="21st May 2018"/>
        </div>
        <div>
          <Event src={eventPhotoSecond} title="St Andrews Blockchain Meetup #02"
          info="Come to our second local meetup in St Andrews."
          location="St Andrews Brew Co."
          time="18:00 - 21:00"
          date="21st June 2018"/>
        </div>
        <div>
          <Event src={eventPhotoFade} title="See More"
          info="Read more on the About page, or see all
          our upcoming events on the Events page."/>
        </div>
      </Slider>
    );
  }
}

export default EventSlider
