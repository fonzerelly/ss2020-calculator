import {render, fireEvent, getByText} from '@testing-library/react'
import React from 'react'
import Numkey from './'
import {CalculatorProvider, CalculatorContext} from '../calculator-context'
// import CalculatorModel from '../calculator-model'

jest.mock('../calculator-model')
const {appendDisplay, updateContext} = require('../calculator-model')

describe('numkey', () => {
    it('should render key 1', () => {
        const { getByText } = render(<Numkey label="1"/>)
        expect(getByText("1")).toBeDefined();
    })

    it('should render passed in key', () => {
        const { getByText } = render(<Numkey label="2"/>)
        expect(getByText("2")).toBeDefined();
    })

    it('should call appendDisplay', () => {

        const setter = jasmine.createSpy('setter')
        const context = [{display: "1"}, setter]
        const { container } = render(
            <CalculatorContext.Provider value={context}>
                <Numkey label="2"/>
            </CalculatorContext.Provider>
        )
        fireEvent(getByText(container, "2"), new MouseEvent(
            'click',
            {
                bubbles: true,
                cancelable: true
            }
        ))
        expect(updateContext).toHaveBeenCalledWith(context, appendDisplay, "2")
    })
})