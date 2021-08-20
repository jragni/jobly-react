import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetail from "./CompanyDetail";
import ProfileDetails from "./ProfileDetails";

/** Routes
 * Props:
 *  -login   --- function to login username
 *  -isLoggedIn --- Boolean to determine if usdeer is logged in on client side
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
function Routes({ login, isLoggedIn, signup, currentUser }) {
  // Switch out line 43 after dev testing done
  return (
    <Switch className="Routes">
      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>
      <Route exact path="/">
        <HomePage isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>

      {true ? (
        <div className="loggedIn">
          <Route exact path="/profile">
            <ProfileDetails currentUser={currentUser} />
          </Route>

          <Route exact path="/companies/:company">
            <CompanyDetail isLoggedIn={isLoggedIn} />
          </Route>

          <Route exact path="/companies">
            <Companies />
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

//
export default Routes;
