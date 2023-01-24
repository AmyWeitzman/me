import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';
import NavBarLink from './NavBarLink';

function NavBar() {
  const [menuOpen, toggleMenuState] = useState(false);
  
  const toggleMenu = () => toggleMenuState(!menuOpen);

  return (
    <div id="navbar-container">
        <nav id="nav-bar">
            <NavBarLink linkTo={"About"} />
            <NavBarLink linkTo={"Resume"} />
            <NavBarLink linkTo={"Projects"} />
            <NavBarLink linkTo={"Activities"} />
            <NavBarLink linkTo={"Blog"} />
            <NavBarLink linkTo={"Contact"} />
        </nav>
        <div id="mobile-nav-dropdown">
            <div id="dropdown-icon-container"><FontAwesomeIcon id="dropdown-icon" icon={faBars} onClick={toggleMenu} /></div>
            {
              menuOpen && 
              <div id="dropdown-nav-container">
                <ul id="dropdown-nav">
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"About"} />
                  </li>
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"Resume"} />
                  </li>
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"Projects"} />
                  </li>
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"Activities"} />
                  </li>
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"Blog"} />
                  </li>
                  <li onClick={toggleMenu} className="nav-item">
                    <NavBarLink linkTo={"Contact"} />
                  </li>
                </ul> 
              </div>
            }
        </div>
    </div>
  );
}

export default NavBar;
