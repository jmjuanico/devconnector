import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';

function Dashboard({
  auth: { user }, profile: { profile, loading },
  getCurrentProfile: getCurrentProfileAction,
}) {
  // run once by adding empty array second param
  useEffect(() => {
    getCurrentProfileAction();
  }, [getCurrentProfileAction]);
  if (loading && profile === null) {
    return (<Spinner />);
  }
  const hasProfile = profile !== null;
  const createProfile = (
    <>
      <p>You have not setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
    </>
  );
  return (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead" />
      <i className="fas fa-user">
        {' '}
        Welcome
        {' '}
        {user && user.name}
      </i>
      {hasProfile ? DashboardActions() : createProfile}
    </>
  );
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
