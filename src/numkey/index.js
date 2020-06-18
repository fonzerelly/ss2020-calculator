import React, {useContext} from 'react'
import {CalculatorContext} from '../calculator-context'
import {appendDisplay, updateContext} from '../calculator-model'
export default function Numkey({label}) {
    const context = useContext(CalculatorContext)
    const updateDisplay = () => {
        updateContext(context, appendDisplay, label)
    }
    return ( 
        <div onClick={updateDisplay} className="keypad__key--number">
            <p className="keypad__key__value">{label}</p>
        </div>
    )
}