import React ,{useState} from 'react';
import DropdownList from './DropdownList'; 

const ParentComponent = () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
    console.log('ParentComponent - options:', options);
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleSelect = value => {
      setSelectedOption(value);
    };
  console.log('parent component');
    return (
      <div>
        <h2>Parent Component</h2>
    
        <DropdownList options={options} onSelect={handleSelect} />
        <p>Selected Option: {selectedOption}</p>
      </div>
    );
  };
  
  export default ParentComponent;