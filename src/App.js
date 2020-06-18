import React from 'react';
import './App.css';

import {CalculatorProvider} from './calculator-context'
import Display from './display'
import Numpad from './numpad'

function App() {
  return (
    <CalculatorProvider>
    <div className="app">
      <div className="calculator">
        <Display/>
        <div className="keypad">
          <Numpad/>
          <div className="keypad__operator">
            <div className="keypad__key--operator">
              <p className="keypad__key__value">/</p>
            </div>
            <div className="keypad__key--operator">
              <p className="keypad__key__value">*</p>
            </div>
            <div className="keypad__key--operator">
              <p className="keypad__key__value">+</p>
            </div>
            <div className="keypad__key--operator">
              <p className="keypad__key__value">-</p>
            </div>
          </div>
          <div className="keypad__submit">
          <div className="keypad__key--submit">
              <p className="keypad__key__value">=</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </CalculatorProvider>
  );
}

export default App;
