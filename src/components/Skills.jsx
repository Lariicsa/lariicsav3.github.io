import React from 'react'

const Skills = props => (

    <>
    {props.data.map((skill, index) => (
         <span key={index} className="tag">{skill}</span>
    ))}
    </>
)

export default Skills
