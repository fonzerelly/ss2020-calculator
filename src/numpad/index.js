import React from 'react'
import Numkey from '../numkey'

function range(n) {
    return [...new Array(n)].map((_, index) => {
        return index;
    })
}

export default function Numpad () {
    const orderedKeys = range(10)
        .slice(1)
        .reverse()
        .concat(['.', '0', 'ce'])
    return (
        <div className="keypad__number">
            {orderedKeys.map((digit, index) => {
                return (
                    <Numkey label={digit}  key={index}/>
                )
            })}
        </div>
    )
}