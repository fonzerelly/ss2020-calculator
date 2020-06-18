import {render, fireEvent, getByText} from '@testing-library/react'
import React from 'react'
import Opkey from './'
import {CalculatorContext} from '../calculator-context'

jest.mock('../calculator-model')
const {cacheOperation, updateContext} = require('../calculator-model')

describe('OperatorKey', () => {
    it('should render + operator', () => {
        const { getByText } = render(<Opkey label="+" />)
        expect(getByText('+')).toBeDefined()
    })

    it('should render passed in operator', () => {
        const { getByText } = render(<Opkey label="-" />)
        expect(getByText('-')).toBeDefined()
    })

    it('should call cachOperation', () => {
        const setter = jasmine.createSpy('setter')
        const context = [{display: "1"}, setter]
        const { container } = render(
            <CalculatorContext.Provider value={context}>
                <Opkey label="*"/>
            </CalculatorContext.Provider>
        )
        fireEvent(getByText(container, "*"), new MouseEvent(
            'click',
            {
                bubbles: true,
                cancelable: true
            }
        ))
        expect(updateContext).toHaveBeenCalledWith(context, cacheOperation, "*")
    })
})