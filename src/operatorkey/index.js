import React, {useContext} from 'react'
import { CalculatorContext } from '../calculator-context'
import { updateContext, cacheOperation } from '../calculator-model'

export default function Opkey ({label}) {
    const context = useContext(CalculatorContext)
    const updateDisplay = () => {
        updateContext(context, cacheOperation, label)
    }
    return (
        <div className="keypad__key--operator" onClick={updateDisplay}>
            <p className="keypad__key__value">{label}</p>
        </div>
    )
}