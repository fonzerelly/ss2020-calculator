import React, { useContext } from 'react'
import { CalculatorProvider, CalculatorContext } from "../calculator-context"
import { render } from '@testing-library/react';

describe('CalculatorProvider', () => {
    it('should render its children', () => {
        const tree = (
            <CalculatorProvider>
                <h1>TestValue</h1>
            </CalculatorProvider>
        )
        const { getByText } = render(tree);
        expect(getByText("TestValue")).toBeDefined();
    })
    it('should provide CalculatorContext data', () => {
        function DummyComponent () {
            const [model] = useContext(CalculatorContext)
            return <h1>{model.display}</h1> //default value of display is 0
        }
        const tree = (
            <CalculatorProvider>
                <DummyComponent/>
            </CalculatorProvider>
        )
        const { getByText } = render(tree);
        expect(getByText("0")).toBeDefined();      
    })
})