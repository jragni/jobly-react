import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import currentUserContext from "../context/currentUserContext";

function HomePage() {
  const currentUser = useContext(currentUserContext);
  console.log("Made it to homepage");
  return (
    <div className="HomePage">
      <h1> Jobly </h1>
      <p> All the jobs in one, convenient place.</p>
      {currentUser ? (
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
