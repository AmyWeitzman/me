import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
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
    </div>
  );
}

export default NavBar;
