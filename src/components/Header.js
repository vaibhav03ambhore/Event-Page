import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

const Header = ({ scrollToSection , searchQuery , onSearchInputChange}) => {
  const handleDropdownChange = selectedOption => {
    // Call the scrollToSection function with the selected option's value
    scrollToSection(selectedOption.value);
  };

  return (
    <div className="header-container">
      <div className="header">
        {/* Pass the handleDropdownChange function to the Dropdown component */}
        <Dropdown onChange={handleDropdownChange} />
        <SearchBar 
           searchQuery={searchQuery}
           onSearchInputChange={onSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
