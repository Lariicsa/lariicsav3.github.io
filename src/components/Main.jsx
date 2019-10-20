import React from 'react'

const Main = ({ children }) => (
    <div className="wrapper top-fixed">
        <div className="inner-container">
            {children}
        </div>
    </div>
)

export default Main