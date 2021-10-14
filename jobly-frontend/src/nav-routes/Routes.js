import React, { useContext } from "react";
import Homepage from "../homepage/Homepage";
import Companies from "../company/Companies";
import CompanyDetail from "../company/CompanyDetail";
import Jobs from "../job/Jobs";
import EditProfileForm from "../forms/EditProfileForm";
import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";

/** Routes
 *  Routes for the app
 *
 * Props:
 *      - login : function for user to log in.
 *      - register : function for user to register.
 * State:
 *      No states
 *
 *  App -> Routes -> { Companies, 
 *                     Jobs, 
 *                     CompanyDetail, 
 *                     Profile, 
 *                     Login, 
 *                     SignUp,
 *                     Homepage
 *                   }
 */

function Routes(props) {
  const currentUser = useContext(UserContext);

  /* Function that gives access to routes for logged in users */
  function showLoggedInRoutes() {
    return (
      <div className="isLoggedIn">
        <Route exact path="/companies">
          <Companies />
        </Route>

        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>

        <Route exact path="/jobs">
          <Jobs />
        </Route>

        <Route exact path="/profile">
          <EditProfileForm update={props.update}/>
        </Route>
        
      </div>
    );
  }

  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/signup">
        <SignupForm register={props.register} />
      </Route>

      <Route exact path="/login">
        <LoginForm submit={props.login} />
      </Route>

      {!currentUser ? <Redirect to="/" /> : showLoggedInRoutes()}
    </Switch>
  );
}

export default Routes;
