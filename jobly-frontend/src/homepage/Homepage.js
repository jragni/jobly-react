import React, {useContext} from "react";
import UserContext from "../context/UserContext";
import "./Homepage.css";
import { Link } from "react-router-dom";

/** Homepage
 * The landing page (root) of the application. User can log-in and sign up if
 * not authenticated. If authenticated, the user can view companies, jobs, their profile,
 * or logout.
 */
function Homepage() {

  const {currentUser} = useContext(UserContext);
  function showUserNotLoggedInView() {
    return (
      <div className="mx-auto d-flex justify-content-center">
        <Link className="btn btn-primary m-1 p-2" to="/signup">
          Sign Up
        </Link>
        <Link className="btn btn-danger m-1 p-2" to="/login">
          Log In
        </Link>
      </div>
    );
  }

  function showUserLoggedInView() {
    return (
      <div className="isLoggedIn">
        <h1>Welcome, {currentUser.firstName}</h1>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <main className="jumbotron mx-auto bg-secondary p-5 w-75">
        <h1>
          <strong>Jobly</strong>
        </h1>
        <h4 className="text-muted">All the jobs. One convenient place.</h4>
        { currentUser ? showUserLoggedInView() : showUserNotLoggedInView()}
      </main>
    </div>
  );
}

export default Homepage;
