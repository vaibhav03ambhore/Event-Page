import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => (
  <div className="event-card-container">

    <div className="event-card">
        <img src={process.env.PUBLIC_URL + '/images/event-image.jpg'} alt="Event" />
        <hr />
        <h3>{event.name}</h3>
        <p>Date: {event.date}</p>
        <p>Location: {event.location}</p>
        <p>Start Time: {event.startTime}</p>
        <p>End Time: {event.endTime}</p>
    </div>
        {/* <p>Description: {event.description}</p> */}
        {/* <button>Resister</button> */}
    <div className="register-block">
      <p className="register-link">
        <a href="#">Register Here</a>
      </p>
    </div>
      
      
  </div>
);

export default EventCard;
