import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          <p className="display__value">0</p>
        </div>
        <div className="keypad">
          <div className="keypad__number">
            <div className="keypad__key--number">
              <p className="keypad__key__value">9</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">8</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">7</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">6</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">5</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">4</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">3</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">2</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">1</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">.</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">0</p>
            </div>
            <div className="keypad__key--number">
              <p className="keypad__key__value">ce</p>
            </div>
          </div>
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
  );
}

export default App;
