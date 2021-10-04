import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/**
 * Nav
 * Navigation Bar for Jobly App.
 */

// TODO: ADD links for NavLinks
function Nav(props) {
  /* Function that shows navbar features for users that are not lgogged in */
  function showLoggedOutView() {
    return (
      <div>
        <ul className="navbar-nav me-auto">
          {/* TODO: Add links to sign up forms when forms completed */}
          <li className="nav-item">
            <NavLink className="nav-link" to="">
              Sign Up
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="">
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }

  function showLoggedInView() {
    return (
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to="" className="nav-link">Companies</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="" className="nav-link">Jobs</NavLink>
        </li>

        {/* TODO: Add Profile Link */}
        <li className="nav-item">
          <NavLink to="" className="nav-link">Profile</NavLink>
        </li>

        {/* TODO: Add Logout button */}
        {/* TODO: Add logout w/ template */}
        <li to="" className="nav-item">Logout as User</li>
      </ul>
    );
  }

  return (
    <nav className="Nav navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        {/* TODO: add a logged in view  */}
        {false ? showLoggedInView() : showLoggedOutView() }
      </div>
    </nav>
  );
}

export default Nav;