import React, { FC } from 'react';

interface ButtonProps {
  label: string;
  handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, handleClick }) => {
  return <button onClick={handleClick}>{label}</button>;
};

export default Button;
