import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Developer Connector</h1>
        <p className="lead">Create a developer profile and share posts</p>
        <div className="buttons">
          <Link className="btn btn-primary" to="register">Sign Up</Link>
          <Link className="btn btn-light" to="login">Login</Link>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;
