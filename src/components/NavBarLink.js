import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from "../links";

function NavBarLink({ linkTo }) {
  const linkInfo = NavLinks[linkTo];

  return (
    <NavLink to={linkInfo["path"]} className={({ isActive }) => isActive ? "cur-link" : "nav-link"}>{linkInfo["name"]}</NavLink>
  );
}

export default NavBarLink;
