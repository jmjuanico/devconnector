import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos: getGithubReposAction, repos }) => {
  useEffect(() => {
    getGithubReposAction(username);
  }, [getGithubReposAction, username]);
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">Github Repos</h2>
      { !_.isEmpty(repos) ? (
        repos.map((repo) => (
          <div className="repo bg-white p-1 my-1">
            <h4><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h4>
            <p>{repo.description}</p>
            <div>
              {' '}
              <ul>
                <li className="badge badge-primary">
                  Stars:
                  {repo.stargazers_count}
                </li>
                <li className="badge badge-dark">
                  Watchers:
                  {repo.watchers_count}
                </li>
                <li className="badge badge-light">
                  Forks:
                  {repo.forks_count}
                </li>
              </ul>
            </div>

          </div>
        ))
      ) : <Spinner /> }
    </div>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
