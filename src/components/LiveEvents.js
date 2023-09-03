import React from "react";
import EventCard from "./EventCard";
import "../styles/EventList.css";

const LiveEvents = ({ events }) => {
  // Calculate the current time
  const currentTime = new Date();

  // Filter events that are live
  const liveEvents = events.filter(event => {
    const eventStartTime = new Date(event.date + ' ' + event.startTime);
    const eventEndTime = new Date(event.date + ' ' + event.endTime);

    return eventStartTime <= currentTime && eventEndTime >= currentTime;
  });

  return (
    <div>
      <h2>Live Events</h2>
      <div className="event-list">
        {liveEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;