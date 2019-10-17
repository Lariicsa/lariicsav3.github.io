import React from 'react'

const Navbar = () => (
    <div className="header-wrapper">
        <div className="header">
            <div className="row md">
                <a href="/" className="header-pic"></a>
            </div>
            <ul className="menu">
                <li><a href="/" className="">Navbar</a></li>
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