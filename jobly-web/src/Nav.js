import React from "react";
import { NavLink } from "react-router-dom";

function Nav({ isLoggedIn, currentUser, logout }) {
  function handleLogout() {
    logout();
  }

  //End DEV

  function renderNotLoggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2">
          <NavLink className="btn mr-sm-2" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item mr-2">
          <NavLink className="btn mr-sm-2" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </ul>
    );
  }

  function renderLoggedInNav() {
    return (
      <ul className="navbar-nav ml-auto inline">
        <li className="nav-item mr-auto">
          <NavLink className="btn mr-sm-2" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item mr-auto">
          <NavLink className="btn mr-sm-2" to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item mr-auto">
          <NavLink className="btn mr-sm-2" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item mr-auto">
          <NavLink className="btn mr-sm-2" onClick={handleLogout} to="/">
            Log out as {currentUser.username}
          </NavLink>
        </li>
      </ul>
    );
  }
  return (
    <nav className="Nav navbar navbar-light bg-light justify-content-between">
      <NavLink className="navbar-brand" to="/">
        Jobly
      </NavLink>
      {isLoggedIn ? renderLoggedInNav() : renderNotLoggedInNav()}
    </nav>
  );
}

export default Nav;
