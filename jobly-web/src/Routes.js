import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetail from "./CompanyDetail";
import ProfileDetails from "./ProfileDetails";
import currentUserContext from "./currentUserContext";

/** Routes
 * Props:
 *  -login   --- function to login username
 *  -currentUser --- currentUser information {username, fn, ln, email}
 * States: None
 * App -> Routes -> {
 *                    LoginForm,
 *                    SignupForm,
 *                    ProfileDetails,
 *                    CompanyDetail,
 *                    Companies,
 *                    Jobs,
 *                    HomePage,
 *                    NotFound
 *                  }
 */
function Routes({ login, signup }) {
  const currentUser = useContext(currentUserContext);
  return (
    <Switch className="Routes">
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>

      {currentUser ? (
        <div className="loggedIn">
          <Route exact path="/profile">
            <ProfileDetails currentUser={currentUser} />
          </Route>

          <Route exact path="/companies/:company">
            <CompanyDetail />
          </Route>

          <Route exact path="/companies">
            <Companies />
          </Route>

          <Route exact path="/jobs">
            <Jobs />
          </Route>
        </div>
      ) : undefined}
      <Route>
        <div>
          <h1> 404 FOR later</h1>
        </div>
      </Route>
    </Switch>
  );
}

//
export default Routes;
