import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouseChimney, faCode, faFootball } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import NavBarLink from './NavBarLink';
import { NavLinks } from "../links";
import MyLogo from '../images/amy_weitzman_logo_slim.png';

function NavBar() {
  const [menuOpen, toggleMenuState] = useState(false);
  
  const toggleMenu = () => toggleMenuState(!menuOpen);

  return (
    <div id="navbar-container">
        <NavLink to={NavLinks["About"]["path"]}>
          <img id="navbar-my-logo" src={MyLogo} alt="Logo representing Amy Weitzman: the initials A and W inside coding brackets" width="125px" />
        </NavLink>
        <p id="navbar-my-name">Amy Weitzman</p>
        <nav id="nav-bar">
            <NavBarLink linkTo={"About"} icon={faHouseChimney} />
            <NavBarLink linkTo={"Resume"} icon={faCode} />
            <NavBarLink linkTo={"Activities"} icon={faFootball} />
        </nav>
        <div id="mobile-nav-dropdown">
            <div id="dropdown-icon-container"><FontAwesomeIcon id="dropdown-icon" icon={faBars} onClick={toggleMenu} className='' /></div>
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
                    <NavBarLink linkTo={"Activities"} />
                  </li>
                </ul> 
              </div>
            }
        </div>
    </div>
  );
}

export default NavBar;
