import React, {createContext, useState} from 'react'
import {createDefaultModel} from '../calculator-model'

export const CalculatorContext = createContext()

export function CalculatorProvider (props) {
    const [model, setModel] = useState(createDefaultModel())

    return (
        <CalculatorContext.Provider value={[model, setModel]}>
            {props.children}
        </CalculatorContext.Provider>
    )
}
