import React, { useContext } from 'react'
import {CalculatorContext} from '../calculator-context'
import {getDisplay} from '../calculator-model'

export default function Display() {
    const [model,_] = useContext(CalculatorContext)
    return (
        <div className="display">
          <p className="display__value">{getDisplay(model)}</p>
        </div>
    )
}