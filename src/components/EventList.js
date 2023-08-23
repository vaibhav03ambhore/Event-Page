import React from 'react';
import EventCard from './EventCard';
import '../styles/EventList.css';
const EventList = ({ events }) => (
  <div className="event-list">
    {events.map(event => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

export default EventList;
