import React, { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header';

const eventsData = [
  // Event data here...
  {
    id: 1,
    title: 'Event 1',
    date: 'August 25, 2023',
    location: 'Venue A',
    description: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'September 5, 2023',
    location: 'Venue B',
    description: ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Event 2',
    date: 'September 5, 2023',
    location: 'Venue B',
    description: ' consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    title: 'Event 2',
    date: 'September 5, 2023',
    location: 'Venue B',
    description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
];

const App = () => {

  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = searchTerm => {
    const filtered = eventsData.filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="app">
      
      <Header/>
      <div className="body-container">

        <div className="all-events">
          <h2>All Events</h2>
          <EventList events={filteredEvents} />
          <EventList events={filteredEvents} />
          <EventList events={filteredEvents} />
        </div>

        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <EventList events={filteredEvents} />
        </div>

        <div className="past-events">
          <h2>Past Events</h2>
          <EventList events={filteredEvents} />
        </div>

        <div className="live-events">
          <h2>Live Events</h2>
          <EventList events={filteredEvents} />
        </div>
        
      </div>

      
    </div>
  );
};

export default App;
