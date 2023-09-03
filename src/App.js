import React, {useRef} from 'react';
import './App.css';
import Header from './components/Header';
import AllEvents from './components/AllEvents';
import PastEvents from './components/PastEvents';
import UpcomingEvents from './components/UpcomingEvents';
import LiveEvents from './components/LiveEvents';

const eventsData = [
  
  {
    id: 1,
    name: 'Event 1',
    date: '2023-08-10',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 1',
  },
  
  {
    id: 2,
    name: 'Event 2',
    date: '2023-09-15',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 2',
  }
  ,
  {
    id: 3,
    name: 'Event 3',
    date: '2023-09-03',
    location: 'Venue XYZ',
    startTime: '12:00 AM',
    endTime: '01:00 PM',
    description: 'Description for Event 3',
  }
  ,
  {
    id: 4,
    name: 'Event 4',
    date: '2023-09-20',
    location: 'Venue XYZ',
    startTime: '08:00 AM',
    endTime: '12:00 PM',
    description: 'Description for Event 4',
  }
  
];

const App = () => {
 
  
  const allEventsRef = useRef(null);
  const pastEventsRef = useRef(null);
  const upcomingEventsRef = useRef(null);
  const liveEventsRef = useRef(null);
  

  // Function to get the appropriate ref based on the selected option
  // Function to get the appropriate ref based on the selected option
const scrollToSection = (section) => {
  let targetRef = null;
  let headerHeight = 0;

  // Calculate the header height
  const header = document.querySelector('.header-container');
  if (header) {
    headerHeight = header.getBoundingClientRect().height;
  }

  switch (section) {
    case "all":
      targetRef = allEventsRef;
      break;
    case "past":
      targetRef = pastEventsRef;
      break;
    case "upcoming":
      targetRef = upcomingEventsRef;
      break;
    case "live":
      targetRef = liveEventsRef;
      break;
    default:
      break;
  }

  if (targetRef && targetRef.current) {
    // Calculate the target scroll position
    const targetPosition = targetRef.current.offsetTop - headerHeight;

    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};


  return (
    <div className="app">
      <Header
        scrollToSection={scrollToSection}
      />
      <div className="body-container">
          {/* Event sections with refs */}
        <div ref={allEventsRef}>
          <AllEvents events={eventsData} />
        </div>
        <div ref={pastEventsRef}>
          <PastEvents events={eventsData} />
        </div>
        <div ref={upcomingEventsRef}>
          <UpcomingEvents events={eventsData} />
        </div>
        <div ref={liveEventsRef}>
          <LiveEvents events={eventsData} />
        </div>
      </div>
    </div>
  );
};

export default App;