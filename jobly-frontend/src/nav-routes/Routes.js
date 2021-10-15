import React  from "react";
import Homepage from "../homepage/Homepage";
import Companies from "../company/Companies";
import CompanyDetail from "../company/CompanyDetail";
import Jobs from "../job/Jobs";
import EditProfileForm from "../forms/EditProfileForm";
import SignupForm from "../forms/SignupForm";
import LoginForm from "../forms/LoginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute"

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

  return (

    <Switch>

      <Route exact path="/signup">
        <SignupForm register={props.register} />
      </Route>

      <Route exact path="/login">
        <LoginForm submit={props.login} />
      </Route>

      <PrivateRoute exact path="/companies">
        <Companies />
      </PrivateRoute>

      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetail />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>

      <PrivateRoute exact path="/profile">
        <EditProfileForm update={props.update}/>
      </PrivateRoute>

      <Route to="/" >
        <Homepage />
      </Route>

      <Redirect to="/"/>

    </Switch>
  );
}

export default Routes;
