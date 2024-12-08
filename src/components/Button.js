import React from 'react';
import './Button.css';

function Button({ value, onClick }) {
  return (
    <button className="calculator-button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
