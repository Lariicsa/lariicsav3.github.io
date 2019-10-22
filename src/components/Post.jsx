import React from 'react'

function Post({bg,description, title}) {
    return (
        <div className="row post-box">
            <div className="post-preview">
                <div className="post-preview-img" style={{backgroundImage: `url(${bg})`}}>
                </div>
                <div className="post-preview-info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Post