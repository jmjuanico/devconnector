import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
  const isAllowed = !loading && isAuthenticated;
  const redirectToLogin = (<Route {...rest} render={() => (<Redirect to="/login" />)} />);
  const renderComponent = (<Route {...rest} render={(props) => (<Component {...props} />)} />);
  return isAllowed ? renderComponent : redirectToLogin;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
