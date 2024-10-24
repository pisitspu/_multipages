import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [beforenum, setBeforeNum] = useState('');
  const [afternum, setAfterNum] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const updateDisplay = (value) => {
    document.getElementById('display').value = value;
  };

  const calClick = (number) => {
    if (operator === '') {
      if (beforenum.length < 9) {
        setBeforeNum(beforenum + number);
        updateDisplay(beforenum + number);
      }
    } else {
      if (afternum.length < 9) {
        setAfterNum(afternum + number);
        updateDisplay(afternum + number);
      }
    }
  };

  const handleOperator = (op) => {
    if (beforenum !== '') {
      setOperator(op);
    }
  };

  const AclearClick = () => {
    setBeforeNum('');
    setAfterNum('');
    setOperator('');
    setResult('');
    updateDisplay('');
  };

  const calculate = () => {
    let res;
    const num1 = parseFloat(beforenum);
    const num2 = parseFloat(afternum || beforenum);

    switch (operator) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        res = 'Error';
    }

    setResult(res);
    setAfterNum(res.toString());
    setBeforeNum('');
    updateDisplay(res);
  };

  const sliceClick = () => {
    if (operator === '') {
      setBeforeNum(beforenum.slice(0, -1));
      updateDisplay(beforenum.slice(0, -1));
    } else {
      setAfterNum(afternum.slice(0, -1));
      updateDisplay(afternum.slice(0, -1));
    }
  };

  return (
    <div className="cal-container">
      <div className="display-container">
        <input className="display" type="text" disabled value={result || beforenum || ''} />
      </div>
      <div className="keypad button">
        <button className="btns " onClick={AclearClick}>AC</button>
        <button className="btns " onClick={sliceClick}>⌫</button>
        <button className="btns " onClick={() => calClick('%')}>%</button>
        <button className="btns " onClick={() => handleOperator('+')}>+</button>
        <button className="btns " onClick={() => calClick(1)}>1</button>
        <button className="btns " onClick={() => calClick(2)}>2</button>
        <button className="btns " onClick={() => calClick(3)}>3</button>
        <button className="btns " onClick={() => handleOperator('-')}>-</button>
        <button className="btns " onClick={() => calClick(4)}>4</button>
        <button className="btns " onClick={() => calClick(5)}>5</button>
        <button className="btns " onClick={() => calClick(6)}>6</button>
        <button className="btns " onClick={() => handleOperator('*')}>x</button>
        <button className="btns " onClick={() => calClick(7)}>7</button>
        <button className="btns " onClick={() => calClick(8)}>8</button>
        <button className="btns " onClick={() => calClick(9)}>9</button>
        <button className="btns " onClick={() => handleOperator('/')}>÷</button>
        <button className="btns " onClick={() => calClick(0)}>0</button>
        <button className="btns " onClick={() => calClick('.')}>.</button>
        <button className="btns " onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
