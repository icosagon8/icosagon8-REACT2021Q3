import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

export function Navbar(): JSX.Element {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li>
          <NavLink className="navbar__link" to="/" exact activeClassName="navbar__link--active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar__link" to="/about" exact strict activeClassName="navbar__link--active">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
