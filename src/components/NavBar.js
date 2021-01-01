import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar() {
  const [menuOpen, toggleMenuState] = useState(false);
  
  const toggleMenu = () => toggleMenuState(!menuOpen);

  return (
    <div id="navbar-container">
        <nav id="nav-bar">
            <NavLink to='/home' className="nav-link" activeClassName="cur-link">Home</NavLink>
            <NavLink to='/resume' className="nav-link" activeClassName="cur-link">Resume</NavLink>
            <NavLink to='/projects' className="nav-link" activeClassName="cur-link">Projects</NavLink>
            <NavLink to='/activities' className="nav-link" activeClassName="cur-link">Activities</NavLink>
            <NavLink to='/blog' className="nav-link" activeClassName="cur-link">Blog</NavLink>
            <NavLink to='/contact' className="nav-link" activeClassName="cur-link">Contact</NavLink>
        </nav>
        <div id="mobile-nav-dropdown">
            <div id="dropdown-icon-container"><FontAwesomeIcon id="dropdown-icon" icon={faBars} onClick={toggleMenu} /></div>
            {
              menuOpen && 
              <div id="dropdown-nav-container">
                <ul id="dropdown-nav">
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/home' className="nav-link" activeClassName="cur-link">Home</NavLink></li>
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/resume' className="nav-link" activeClassName="cur-link">Resume</NavLink></li>
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/projects' className="nav-link" activeClassName="cur-link">Projects</NavLink></li>
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/activities' className="nav-link" activeClassName="cur-link">Activities</NavLink></li>
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/blog' className="nav-link" activeClassName="cur-link">Blog</NavLink></li>
                  <li onClick={toggleMenu} className="nav-item"><NavLink to='/contact' className="nav-link" activeClassName="cur-link">Contact</NavLink></li>
                </ul> 
              </div>
            }
        </div>
    </div>
  );
}

export default NavBar;
