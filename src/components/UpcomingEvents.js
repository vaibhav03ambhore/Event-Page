import React from "react";
import EventCard from "./EventCard";
import "../styles/EventList.css";

const UpcomingEvents = ({ events }) => {
  const upcomingEvents = events.filter(
    (event) => {
        const eventStartTime = new Date(event.date + ' ' + event.startTime);
        return eventStartTime > new Date();
    }
  );

  return (
    <div>
      <h2>Upcoming Events</h2>
      <div className="event-list">
        {upcomingEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;