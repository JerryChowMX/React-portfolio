import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  // Function to determine the class name based on the active state
  const getNavLinkClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={getNavLinkClass}>
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className={getNavLinkClass}>
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={getNavLinkClass}>
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className={getNavLinkClass}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
