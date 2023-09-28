import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  return (
    <footer className="flex-v">
      <nav>
        <ul className="flex-v">
          <li>
            <NavLink to="/">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/library">
              <i className="fa-solid fa-music"></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
