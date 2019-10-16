import React from 'react'

const Main = ({ children }) => (
    <div className="space">
        <div className="wrapper top-fixed">
            <div className="inner-container">
                {children}
            </div>
        </div>
    </div>
)

export default Main