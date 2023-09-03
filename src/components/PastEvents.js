import React from "react";
import EventCard from "./EventCard";
import "../styles/EventList.css";

const PastEvents = ({ events }) => {
  const pastEvents = events.filter(
    
    (event) =>{
        const eventEndTime = new Date(event.date + ' ' + event.endTime);
        return eventEndTime <= new Date();
    } 
  );

  return (
    <div>
      <h2>Past Events</h2>
      <div className="event-list">
        {pastEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PastEvents;