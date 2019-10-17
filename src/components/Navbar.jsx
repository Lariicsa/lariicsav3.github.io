import React from 'react'

const Navbar = ({ avatar, name }) => (
    <div className="header-wrapper">
        <div className="header">
            <div className="row md">
                <a href="/" className="header-pic"><img src={avatar} alt={name} /></a>
            </div>
            <ul className="menu">
                <li><a href="/" className="">{name}</a></li>
            </ul>
            <div className="header-mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <ul className="header-mobile-menu">

            <li><a href="/" className=""></a></li>

        </ul>
    </div>
)

export default Navbar