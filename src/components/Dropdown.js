import React, { useState } from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: '2px solid #3498db',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:hover': {
      border: '2px solid #2980b9',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#3498db' : 'white',
    color: state.isFocused ? 'white' : 'black',
    '&:hover': {
      backgroundColor: '#3498db',
      color: 'white',
    },
  }),
};



const Dropdown=()=> {

  const options = [
    { value: 'allEvents', label: 'All Events' },
    { value: 'upcomingEvents', label: 'Upcoming Events' },
    { value: 'liveEvents', label: 'Live Events' },
    { value: 'pastEvents', label: 'Past Events' }, 
  ];

  const [value, setValue] = useState('allEvents'); 

  return (
    <div className='drop-down'>
      <Select
        options={options}
        value={options.find(option => option.value === value)}
        onChange={(selectedOption) => setValue(selectedOption.value)}
        styles={customStyles}
      />
    </div>
  );
}

export default Dropdown;




