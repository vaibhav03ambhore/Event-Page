import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search events..."
      onChange={e => onChange(e.target.value)}
    />
    <span className="search-icon">&#128269;</span>
  </div>
);

export default SearchBar;
