import React, {useContext} from 'react'
import { updateContext, evaluate } from '../calculator-model'
import { CalculatorContext } from '../calculator-context'

export default function Evalkey () {
    const context = useContext(CalculatorContext)
    const updateDisplay = () => {
        updateContext(context, evaluate)
    }

    return (
        <div className="keypad__submit" onClick={updateDisplay}>
            <div  className="keypad__key--submit">
                <p className="keypad__key__value">=</p>
            </div>
        </div>
    )
}