import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {
    email, password,
  } = formData;
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    props.login(formData);
  };

  return (
    <>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" />
        {' '}
        Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Sign Up</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
