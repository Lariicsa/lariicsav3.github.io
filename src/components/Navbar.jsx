import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <div className="header-wrapper">
        <div className="header">
            <div className="row md">
                <NavLink to={'/'} className="header-pic"></NavLink>
            </div>
            <ul className="menu">
                <li><NavLink exact activeClassName="here" to={'/'}>Home</NavLink></li>
                <li><NavLink activeClassName="here" to={'/experience'}>Experience</NavLink></li>
            </ul>
            <div className="header-mobile-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <ul className="header-mobile-menu">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/experience'} activeClassName="here">Experience</NavLink></li>
        </ul>
    </div>
)

export default Navbar