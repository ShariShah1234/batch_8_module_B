import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Select from './components/Select';
import Table from './components/BATable';
import BATable from './components/BATable';

function App() {
  const handleInputChange = (value: string) => {
    console.log('Input value:', value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  const handleSelectChange = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  const tableData = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    // ... more data
  ];

  return (
    <div className="App">
      <Input placeholder="Enter something" handleChange={handleInputChange} />
      <Button label="Click me" handleClick={handleButtonClick} />
      <Select options={['Option 1', 'Option 2', 'Option 3']} handleChange={handleSelectChange} />
  
    </div>
  );
}

export default App;

