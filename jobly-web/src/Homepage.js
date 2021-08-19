import React from "react";
import { NavLink } from "react-router-dom";

function HomePage({ currentUser, isLoggedIn }) {
  console.log("Made it to homepage");
  return (
    <div className="HomePage">
      <h1> Jobly </h1>
      <p> All the jobs in one, convenient place.</p>
      {isLoggedIn ? (
        <h2> Welcome Back, {currentUser.firstName} </h2>
      ) : (
        <div>
          <NavLink className="btn btn-primary" to="/login">
            Log In
          </NavLink>
          <NavLink className="btn btn-primary" to="/signup">
            Sign Up
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default HomePage;
