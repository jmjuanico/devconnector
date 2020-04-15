import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => (
  <div className="dash-buttons">
    <Link className="btn btn-light" to="/edit-profile">
      <i className="fas fas-user-circle text-primary" />
      Edit Profile
    </Link>
    <Link className="btn btn-light" to="/add-experience">
      <i className="fas fas-user-circle text-primary" />
      Add Experience
    </Link>
    <Link className="btn btn-light" to="/add-education">
      <i className="fas fas-user-circle text-primary" />
      Add Education
    </Link>
  </div>
);

export default DashboardActions;
