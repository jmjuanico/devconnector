import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-dark">
    <h1>
      <Link to="index.html">
        <i className="fas fa-code" />
        DevConnector
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="!#">Developers</Link>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
