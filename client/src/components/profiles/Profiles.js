import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfiles } from '../../actions/profile';
import ProfileItem from './ProfileItem';

function Profiles({ getProfiles: getProfilesAction, profile: { profiles, loading } }) {
  useEffect(() => {
    getProfilesAction();
  }, [getProfilesAction]);

  const hasProfiles = profiles && profiles.length > 0;
  const listProfileItems = hasProfiles && profiles.map((profile) => (
    <ProfileItem key={profile._id} profile={profile} />
  ));
  const noProfile = (<h4>No profiles found...</h4>);

  return (
    <>
      { loading ? <Spinner /> : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead"><i className="fab fa-connectdevelop">Browse and connect with developers</i></p>
          <div className="profiles" />
          { hasProfiles ? listProfileItems : noProfile }
        </>
      )}
    </>
  );
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
