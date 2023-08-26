import React, { FC } from 'react';

interface SelectProps {
  options: string[];
  handleChange: (selectedOption: string) => void;
}

const Select: FC<SelectProps> = ({ options, handleChange }) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(event.target.value);
  };

  return (
    <select onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
