import React, {useContext, useState} from "react";
import UserContext from "../context/UserContext";
import { NavLink } from "react-router-dom";
import "./Nav.css";

/**  Nav
 * Navigation Bar for Jobly App. When user is logged in, the user can access
 * the Companies, Jobs, and Profile routes via links on the navigation bar.
 * If the user is not logged in, the user will only see the Log In and Sign Up
 * options.
 * 
 *  Props:
 *  - logout : function that logs user out 
 * 
 *  State: 
 *        No states
 */

function Nav({logout}) {

  const {currentUser} = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  /* Function that shows navbar features for users that are not lgogged in */
  function showLoggedOutView() {
    return (
      <div>
        <ul className="navbar-nav mx-2 me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Sign Up
            </NavLink>
          </li>

          <li className="nav-item ">
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
      <ul className="navbar-nav me-auto mx-2">
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

        <li className="nav-item">
          <NavLink onClick={logout} to="/logout" className="nav-link">
            Logout as {currentUser.username} 
          </NavLink>
        </li>
      </ul>
    );
  }

  /* Function that expands and closes the navbar */
  function expandNavbar() {
    isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true);
  }

  return (
    <nav className="Nav navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <button
          className="navbar-toggler bg-inactive"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={expandNavbar}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className={isCollapsed ? "collapse navbar-collapse" : ""} >

        {currentUser ? showLoggedInView() : showLoggedOutView()}
      </div>
    </nav>
  );
}

export default Nav;
