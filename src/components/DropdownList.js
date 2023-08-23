import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import '../styles/DropdownList.css';

const DropdownList = ({ options, onSelect }) => {
    console.log('DropdownList - options:', options);
    const handleSelect = value => {
      onSelect(value);
    };
  
    return (
      <Dropdown className="dropdown-list" placeholder="Select an option" onChange={handleSelect}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Dropdown>
    );
  };
  
  export default DropdownList;