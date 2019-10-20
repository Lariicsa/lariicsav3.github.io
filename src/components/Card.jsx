import React from 'react'
import Skills from './Skills'

const Card = props => (
    <div className="cards animated">
        {props.data
            .reverse()
            .map((job, i) => (
                <div key={i} className="card">
                    <span>{i}</span>
                    <h2>{job.position}</h2>
                    <a href={job.jobUrl} target="_blank">{job.title}</a>
                    <p>{job.jobExtract}</p>
                    <div className="card-tags-box">
                        <Skills data={job.skils}></Skills>
                    </div>
                </div>
            ))}
    </div>
)

export default Card
