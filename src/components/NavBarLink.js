import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinks } from "../links";

function NavBarLink({ linkTo }) {
  const linkInfo = NavLinks[linkTo];

  return (
    <NavLink to={linkInfo["path"]} className="nav-link" activeClassName="cur-link">{linkInfo["name"]}</NavLink>
  );
}

export default NavBarLink;
