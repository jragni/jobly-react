import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetail from "./CompanyDetail";
import ProfileDetails from "./ProfileDetails";

function Routes({ login, isLoggedIn, currentUser }) {
  // FOR DEV TESTING
  isLoggedIn = true;
  // END DEV TESTING

  // TODO: figure out how to reroute to home on 404
  // implement 404 for a route without a path
  return (
    <Switch className="Routes">
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm isLoggedIn={isLoggedIn} />
      </Route>
      <Route exact path="/">
        <HomePage isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>

      {isLoggedIn ? (
        <div className="loggedIn">
          <Route exact path="/profile">
            <ProfileDetails currentUser={currentUser} />
          </Route>

          <Route exact path="/companies/:company">
            <CompanyDetail isLoggedIn={isLoggedIn} />
          </Route>

          <Route exact path="/companies">
            <Companies isLoggedIn={isLoggedIn} />
          </Route>

          <Route exact path="/jobs">
            <Jobs />
          </Route>
        </div>
      ) : (
        ""
      )}
      <Route>
        <div>
          <h1> 404 FOR later</h1>
        </div>
      </Route>
    </Switch>
  );
}

export default Routes;
