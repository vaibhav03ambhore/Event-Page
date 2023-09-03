import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

const Header = ({ scrollToSection }) => {
  const handleDropdownChange = selectedOption => {
    // Call the scrollToSection function with the selected option's value
    scrollToSection(selectedOption.value);
  };

  return (
    <div className="header-container">
      <div className="header">
        {/* Pass the handleDropdownChange function to the Dropdown component */}
        <Dropdown onChange={handleDropdownChange} />
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
