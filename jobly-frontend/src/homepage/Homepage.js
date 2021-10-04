import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

/** Homepage
 * The landing page (root) of the application. User can log-in and sign up if
 * not authenticated. If authenticated, the user can view companies, jobs, their profile,
 * or logout.
 */

function Homepage() {
  function showUserNotLoggedInView() {
    return (
      <div className="btn-group">
        <Link className="btn btn-primary" to="/signup">
          Sign Up
        </Link>
        <Link className="btn btn-secondary" to="/login">
          Log In
        </Link>
      </div>
    );
  }

  function showUserLoggedInView() {
    return (
      <div className="isLoggedIn">
        <h1>Welcome, user</h1>
      </div>
    );
  }

  return (
    <div className="Homepage container">
      <main className="jumbotron start-50 top-50">
        <h1>
          <strong>Jobly</strong>
        </h1>
        <h4 className="text-muted">All the jobs. One convenient place.</h4>
        {/* TODO: Will add authentication layer after */}
        {true ? showUserNotLoggedInView() : showUserLoggedInView()}
      </main>
    </div>
  );
}

export default Homepage;
