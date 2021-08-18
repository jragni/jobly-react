import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetail from "./CompanyDetail";
import ProfileDetails from "./ProfileDetails";

function Routes({ isLoggedIn, currentUser }) {
  return (
    <Switch className="Routes">
      <Route exact path="/login">
        <LoginForm isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>

      <Route exact path="/profile">
        <ProfileDetails isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>

      <Route exact path="/signup">
        <SignupForm isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/companies">
        <Companies isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/companies/:company">
        <CompanyDetail isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/jobs">
        <Jobs isLoggedIn={isLoggedIn} />
      </Route>

      <Route exact path="/">
        <HomePage isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>
    </Switch>
  );
}

export default Routes;
