import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ logout: logoutAction, auth: { isAuthenticated, loading } }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <a onClick={logoutAction} href="#!">
          <i className="fas fa-sign-out-alt" />
          {' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li href="#!">Developers</li>
      <li>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const isAllowed = !loading && isAuthenticated;

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="#!">
          <i className="fas fa-code" />
          DevConnector
        </Link>
      </h1>
      <>
        {isAllowed ? authLinks : guestLinks}
      </>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
