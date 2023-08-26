import React, { FC } from 'react';

interface InputProps {
  placeholder: string;
  handleChange: (value: string) => void;
}

const Input: FC<InputProps> = ({ placeholder, handleChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event.target.value);
  };

  return <input type="text" placeholder={placeholder} onChange={handleInputChange} />;
};

export default Input;
