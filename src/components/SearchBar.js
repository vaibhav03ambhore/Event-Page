import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchQuery, onSearchInputChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search events..."
      value={searchQuery} //using searchQuery as value
      onChange={ (e) => onSearchInputChange(e.target.value)} // Call onSearchInputChange when input changes
    />
    <span className="search-icon">&#128269;</span>
  </div>
);

export default SearchBar;
