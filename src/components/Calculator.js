import React, { useState } from 'react';
import Button from './Button';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(result)); // Evaluate the expression (use with caution)
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div>
      <div className="display">{result || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '+', '-', '*', '/', '=', 'C'].map((btn) => (
          <Button key={btn} value={btn} onClick={() => handleClick(btn)} />
        ))}
        <Button value="Show Me" onClick={() => alert('Your Picture!')} />
      </div>
    </div>
  );
}

export default Calculator;
