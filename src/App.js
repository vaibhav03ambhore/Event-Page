import React, { useState,useRef,useEffect } from 'react';
import './App.css';
import EventList from './components/EventList';
import Header from './components/Header';
import ScrollToSection from './components/ScrollToSection';

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
  const [selectedOption, setSelectedOption] = useState('allEvents');
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [scrollToSection, setScrollToSection] = useState(false);

  const allEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const pastEventsRef = useRef(null);
  const liveEventsRef = useRef(null);

  useEffect(() => {
    if (scrollToSection) {
      const targetRef = getTargetRef(selectedOption);
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
        setScrollToSection(false);
      }
    }
  }, [scrollToSection, selectedOption]);

  const handleDropdownChange = (optionValue) => {
    setSelectedOption(optionValue);
    setScrollToSection(true);
  };

  // Function to get the appropriate ref based on the selected option
  const getTargetRef = (option) => {
    switch (option) {
      case 'allEvents':
        return allEventsRef;
      case 'upcomingEvents':
        return upcomingEventsRef;
      case 'pastEvents':
        return pastEventsRef;
      case 'liveEvents':
        return liveEventsRef;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Header
        onDropdownChange={handleDropdownChange}
        selectedOption={selectedOption}
      />
      <div className="body-container">
        {/* Category components */}
        {['All Events', 'Upcoming Events', 'Past Events', 'Live Events'].map(
          (category) => (
            <div
              key={category}
              className={`${category.toLowerCase().replace(' ', '-')}-events`}
              ref={(ref) => {
                // Assign the appropriate ref to each section
                if (category === 'All Events') allEventsRef.current = ref;
                else if (category === 'Upcoming Events') upcomingEventsRef.current = ref;
                else if (category === 'Past Events') pastEventsRef.current = ref;
                else if (category === 'Live Events') liveEventsRef.current = ref;
              }}
            >
              <h2>{category}</h2>
              <EventList events={filteredEvents} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;