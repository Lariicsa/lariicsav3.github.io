import React from 'react'

const Card = ({children}) => (
    <div className="card">
        <span>fecha</span>
        <h2>position</h2>
        <a href="/link" target="_blank">Link</a>
        <p>
            Abstract
    </p>
        <div className="card-tags-box">
            {children}
        </div>
    </div>

)

export default Card