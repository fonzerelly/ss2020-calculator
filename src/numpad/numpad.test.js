import React from 'react'
import { render } from '@testing-library/react'

import Numpad from '.'

describe('numpad', () => {

    it('should render numpad_container', () => {
        const { container } = render(<Numpad/>)
        expect(container.querySelector('.keypad__number')).not.toBeNull();
    });

    const numpadKeys = 
    [
        "9", "8", "7", 
        "6", "5", "4",  
        "3", "2", "1",  
        ".", "0", "ce"
    ]
    
    numpadKeys.forEach((digit) => {
        it(`should render digit "${digit}"`, () => {
            const { getByText } = render(<Numpad/>)
            expect(getByText(digit)).toBeDefined()
        })
    })
    it('should keep the right oder of the digits beginning with nine', () => {
        const { container } = render(<Numpad/>)
        const containerText = container.textContent
        const keyIndices = numpadKeys.map((key) => {
            return containerText.indexOf(key)
        })
        expect(keyIndices).toEqual([...keyIndices].sort((a, b) => a - b))        
    })
})