import React from 'react';
import './App.css';

import {CalculatorProvider} from './calculator-context'
import Display from './display'
import Numpad from './numpad'
import Opkey from './operatorkey'
import Evalkey from './evaluatekey'

function App() {
  return (
    <CalculatorProvider>
    <div className="app">
      <div className="calculator">
        <Display/>
        <div className="keypad">
          <Numpad/>
          <div className="keypad__operator">
            <Opkey label="/"/>
            <Opkey label="*"/>
            <Opkey label="+"/>
            <Opkey label="-"/>
          </div>
          <Evalkey/>
        </div>
      </div>
    </div>
    </CalculatorProvider>
  );
}

export default App;
