import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar';
import Select from './Dropdown';

const Header=()=>{
    // const [filteredEvents, setFilteredEvents] = useState(eventsData);

    // const handleSearch = searchTerm => {
    //     const filtered = eventsData.filter(event =>
    //     event.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setFilteredEvents(filtered);
    // };

    return(
        <div className="header-container">

            <div className="header">
                <Select />
                <SearchBar />
            </div>
      
      </div>
    );
};

export default Header;