import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from "../links";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavBar.css";

function NavBarLink({ linkTo, icon }) {
  const linkInfo = NavLinks[linkTo];

  return (
    <NavLink to={linkInfo["path"]} className={({ isActive }) => isActive ? "cur-link" : "nav-link"}>
      <FontAwesomeIcon className="nav-icon" icon={icon} /> {linkInfo["name"]}
    </NavLink>
  );
}

export default NavBarLink;
