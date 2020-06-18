import React from 'react'

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
                <div className="keypad__key--number" key={index}>
                    <p className="keypad__key__value">{digit}</p>
                </div>
                )
            })}
        </div>
    )
}