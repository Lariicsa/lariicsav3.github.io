import React, { useState } from 'react'

const Hello = () => {
    const [active, setActive] = useState(true)
    
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <>
            <button onClick={handleClick}>Hide</button>
            {active &&
            <h1>Hello Lara</h1>

            }
        </>
    )
}


export default Hello