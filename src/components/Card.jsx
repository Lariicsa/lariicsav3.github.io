import React from 'react'

const Card = ( props ) => (
    <div className="cards animated">
        {props.data.map((item, index) => (
            <div key={index} className="card">
                <span>fecha</span>
                <h2>{item.position}</h2>
                <a href="/link" target="_blank">Link</a>
                <p>Abstract</p>
                <div className="card-tags-box">
                    {/* {children} */}
                </div>
            </div>
        ))}
    </div>
)

export default Card
