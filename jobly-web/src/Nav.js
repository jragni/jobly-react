import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import currentUserContext from "./currentUserContext";

/** Nav
 *
 * Props:
 *  -logout
 *
 * State:
 *
 * App -> Nav
 */
function Nav({ logout }) {
  const currentUser = useContext(currentUserContext);
  console.log("current user in nav:", currentUser);
  function handleLogout() {
    logout();
  }

  /** restricts view to show login and signup */
  function renderNotLoggedInNav() {
    console.log("rendering not logged in");
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

  /** Shows view for logged in users. */
  function renderLoggedInNav() {
    console.log("rendering logged in");
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
      {currentUser ? renderLoggedInNav() : renderNotLoggedInNav()}
    </nav>
  );
}
export default Nav;
