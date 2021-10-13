import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/**
 * Nav
 * Navigation Bar for Jobly App.
 */

function Nav(props) {

  const currentUser = useContext(UserContext);

  /* Function that shows navbar features for users that are not lgogged in */
  function showLoggedOutView() {
    return (
      <div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
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
          <NavLink to="/companies" className="nav-link">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/jobs" className="nav-link">
            Jobs
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>

        {/* TODO: Add Logout button */}
        {/* TODO: Add logout w/ template */}
        <li className="nav-item">
          <NavLink to="/logout" className="nav-link">
            Logout as {currentUser.username} 
          </NavLink>
        </li>
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
        {currentUser ? showLoggedInView() : showLoggedOutView()}
      </div>
    </nav>
  );
}

export default Nav;
