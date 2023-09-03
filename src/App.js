import React, { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header';

const eventsData = [
  
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

  return (
    <div className="app">
      <Header />
      <div className="body-container">
        {/* Category components */}
        {['All Events', 'Upcoming Events', 'Past Events', 'Live Events'].map(category => (
          <div key={category} className={`${category.toLowerCase().replace(' ', '-')}-events`}>
            <h2>{category}</h2>
            <EventList events={filteredEvents} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;