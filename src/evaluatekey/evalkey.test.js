import {render, fireEvent, getByText} from '@testing-library/react'
import React from 'react'

import Evalkey from '.'
import { CalculatorContext } from '../calculator-context'

jest.mock('../calculator-model')
const {updateContext, evaluate} = require('../calculator-model')

describe('Submit', () => {
    it('should render =', () => {
        const {getByText} = render(<Evalkey/>)
        expect(getByText('=')).toBeDefined()
    })

    it('should call evaluate', () => {
        const model = {display: 10}
        const setter = jasmine.createSpy('setter')
        const context = [model, setter]
        const {container} = render(
            <CalculatorContext.Provider value={context}>
                <Evalkey/>
            </CalculatorContext.Provider>
        )
        fireEvent(
            getByText(container, '='), 
            new MouseEvent(
                'click', 
                {
                    bubbles: true,
                    cancelable: true       
                }
            )
        )
        expect(updateContext).toHaveBeenCalledWith(context, evaluate)
    })
})