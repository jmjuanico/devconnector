import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from '../../actions/profile';

function Dashboard({ auth, profile, getCurrentProfile: getCurrentProfileAction }) {
  // run once by adding empty array second param
  useEffect(() => {
    getCurrentProfileAction();
  }, []);
  return (
    <div>Dashboard yow</div>
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
