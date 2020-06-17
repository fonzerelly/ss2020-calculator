import React from 'react'
import { render } from '@testing-library/react';
import { createDefaultModel } from '../calculator-model'

import {CalculatorContext, CalculatorProvider} from '../calculator-context'
import Display from '.'

describe("Display", () => {
    it('should render a display', () => {
        const model = createDefaultModel();
        model.display = "42"
        const setModel = jasmine.createSpy('setModel')
        const tree = (
            <CalculatorContext.Provider value={[model, setModel]}>
                <Display/>
            </CalculatorContext.Provider>
        )
        const { getByText } = render(tree)
        expect(getByText("42")).toBeDefined()
    })
})